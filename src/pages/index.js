import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MobileView from "../components/MobileView"
import SectionB from "../components/SectionB"
import { Helmet } from "react-helmet"
import client from "../../appsync"
import { navigate } from "gatsby"

const gql = require("graphql-tag")



const IndexPage = () => {

let appsyncFunc = client();

const createdUser = gql`
    mutation createUser(
            $email: String!
    $referralCode: String!
    $case: String!
    $device: String!
    $browserDetails: AWSJSON!
    $time: String!
        )
        {
      createUser(
        input: {
          email: $email
          referralCode: $referralCode
          case: $case
          device: $device
          browserDetails: $browserDetails
          time: $time
        }
      ) {
        id
      }
    }
  `

//   const createdVisitor = gql`
//     mutation createVisitor(
//       $referrer: String
//       $marketerId: String
//       $browserDetails: AWSJSON
//       $time: String
//     ) {
//       createVisitor(
//         input: {
//           referrer: $referrer
//           marketerId: $marketerId
//           browserDetails: $browserDetails
//           time: $time
//         }
//       ) {
//         id
//       }
//     }
//   `

const [caseID, setCaseID] = useState("")

const [userData, setUserData] = useState([])

const [browser, setBrowser] = useState("unable to define")

const [userTime, setUserTime] = useState("")

const [buttonText, setButtonText] = useState("Get Early Access")
const [marketerId, setMarketerId] = useState("")
const [referrerId, setreferrerId] = useState("")
const [email, setEmail] = useState("")
const [emailError, setEmailError] = useState(false)
const [refId, setRefId] = useState("")


useEffect(() => {
    const urlFromLocation = window.location.href

    const newURL = new URL(urlFromLocation)

    console.log(newURL.searchParams.has("marketerId"))

    let marketerIdFromLocation;
    
    let referrerIdFromLocation;

    if (newURL.searchParams.has("marketerId")) {
         marketerIdFromLocation = newURL.searchParams.get("marketerId").toString()
        console.log(marketerIdFromLocation);
        setMarketerId(marketerIdFromLocation)
      } 

      if (newURL.searchParams.has("referrer")) {
        referrerIdFromLocation = newURL.searchParams.get("referrerId").toString()
       console.log(referrerIdFromLocation);
       setreferrerId(referrerIdFromLocation)
     } 

    const currentTime = new Date().toString()

    const myStorage = window.localStorage
    const caseIDFromLocalStorage = myStorage.getItem("caseID")

    const dataFromLocalStorage = myStorage.getItem("dataFromLocalStorage")

    let ParsedBrowserWithQuotes

    if (!caseIDFromLocalStorage || !dataFromLocalStorage) {
      const caseIDValue = Math.floor(Math.random() * 2).toString()

      myStorage.setItem("caseID", caseIDValue)
      setCaseID(caseIDValue)

      var endpoint =
        "http://ip-api.com/json/?fields=status,message,continent,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,mobile,query"

      var xhr = new XMLHttpRequest()

      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(this.responseText)

          console.log("response", response)

          const userDetaisFromIpAPI = JSON.stringify(response);
          console.log("userDetaisFromIpAPI", userDetaisFromIpAPI)
          

        
          const parsedBrowserDetails = userDetaisFromIpAPI.replace(/"/g, '\\"');

          console.log("parsedBrowserDetails", parsedBrowserDetails);

          ParsedBrowserWithQuotes = '"' + parsedBrowserDetails +'"';


          setBrowser(ParsedBrowserWithQuotes);


          myStorage.setItem("dataFromLocalStorage", ParsedBrowserWithQuotes)

        // appsyncFunc
        // .hydrated()
        // .then(function(cl) {
        //   console.log(cl)

        // cl.mutate({
        //     mutation: createdVisitor,
        //     variables: {

        //         referrer: referrerId,
        //         marketerId: marketerIdFromLocation,
        //     browserDetails: ParsedBrowserWithQuotes,
        //     time: currentTime,
        //      },
        //       fetchPolicy: "no-cache",
        //     })
        //    .then(result => {

        //         console.log("result appsync", result)
        //       })
        //       .catch(err => {
        //         console.log(err)
        //       })
        //   })
        //   .catch(err => {
        //     console.log(err)
        //   })


          if (response.status !== "success") {
            console.log("query failed: " + response.message)
            return
          }

          
        }
      }

      xhr.open("GET", endpoint, true)
      xhr.send();

    } else {
      setCaseID(caseIDFromLocalStorage)
      setBrowser(dataFromLocalStorage)
    }
  }, [])


  const validateAndCheckOut = (device) => {
    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim

    let deviceVal = device;

    console.log(deviceVal)


    if (email !== "" && regex.test(email)) {
      setButtonText("Adding to waiting list...")

      
    const referralId = Math.random()
    .toString(36)
    .slice(-6)

  setRefId(referralId)


    const currentTime = new Date().toString()

    //   appsyncFunc
    //   .hydrated()
    //   .then(function(cl) {
    //     console.log(cl)

    //   cl.mutate({
    //       mutation: createdUser,
    //       variables: {
    //       email: email,
    //   referralCode: referralId,
    //       case: caseID,
    //       device: "bigscreen",
    //       browserDetails: browser,
    //       time: currentTime,
    //        },
    //         fetchPolicy: "no-cache",
    //       })
    //      .then(result => {

    //           console.log("result appsync", <resul></resul>t)

    //           setTimeout(() => {
    //             navigate("/th", {
    //               state: {
    //     refId: referralId,
    //                 device: "bigscreen",
    //               },
    //             })
    //           }, 400)
    //         })
    //         .catch(err => {
    //           console.log(err)
    //         })
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })

      console.log(browser)

      setTimeout(() => {
        navigate("/th", {
          state: {
            refId: referralId,
            device: device,
          },
        })
      }, 400)
    } else {
      console.log("invalid")
      setEmailError(true)
      setTimeout(() => {
        setEmailError(false)
      }, 2000)
    }
  }

  const toggleEmail = () =>{

        setEmailError(false)
  }

  function emailCollector (event){
    setEmail(event.target.value)
    console.log(email)
  }





    return(
  <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Swanky</title>
        </Helmet>
    <SEO title="Home" />
    <div class="lg:block md:block sm: hidden">
     <SectionB validateAndCheckOut={validateAndCheckOut} toggleEmail={toggleEmail} caseID={caseID} buttonText={buttonText} emailCollector={emailCollector} emailError={emailError} />
     </div>

     <div class="lg:hidden md:hidden sm: block ">
     <MobileView validateAndCheckOut={validateAndCheckOut} toggleEmail={toggleEmail} caseID={caseID} buttonText={buttonText} emailCollector={emailCollector} emailError={emailError}   />
     </div>
  </Layout>
)

    }

export default IndexPage
