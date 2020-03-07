import React, { useEffect, useState } from "react";
import ThanksBlock from "../components/ThankYouBlock";
import Rewards from "../components/Rewards";
import { navigate, replace } from "gatsby";
import { Helmet } from "react-helmet"



const ThanksPage = ({ location }) => {


  const [refId, setRefId] = useState("")
  const [url, setUrl] = useState("http://looks.surge.sh/")
  let shareUrl = "http://looks.surge.sh/"


  const counterTime = 1200;
  const timerCount = 5;

  const [displayRewards, setDisplayRewards] = useState(true)
  const [device, setDevice] = useState("")

  
  const clickToSwitch = ( ) =>{
    setDisplayRewards(false);
}


  useEffect(() => {
    
    const device = location.state.device;

    const { state } = location
    shareUrl = "http://looks.surge.sh/" + state.refId
    setRefId(state.refId)
    setUrl("http://looks.surge.sh?" + state.refId);
    let timeOutCount =  (counterTime * 10) ;
    let timeOut;


if ( device === "mobile" ){

    setDevice("mobile")

    timeOut = setTimeout(()=>{

        setDisplayRewards(false);
    }, timeOutCount)

}

return ()=>{
    clearTimeout(timeOut);
}


  },[])




  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
          <title>Thank You!</title>
        </Helmet>
      {displayRewards ? (
        <ThanksBlock refId={refId} device={device} count={timerCount} counterTime={counterTime} clickToSwitch={clickToSwitch} />
      ) : (
        <Rewards refURL={url} />
      )}
    </div>
  )
}

export default ThanksPage
