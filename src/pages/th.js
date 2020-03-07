import React, { useEffect, useState } from "react";

import ThanksBlock from "../components/ThankYouBlock";
import Rewards from "../components/Rewards";
import Image from 'gatsby-image';
import { navigate } from "gatsby";


const ThanksPage = ({ location }) => {
  const [copySuccess, setCopySuccess] = useState("Copy")
  const [refId, setRefId] = useState("")
  const [url, setUrl] = useState("http://looks.surge.sh/")
  let shareUrl = "http://looks.surge.sh/"
  const [textChange, setTextChange] = useState(
    " Share the link with your friends and go ahead for every share!"
  )



  const counterTime = 1200;
  const timerCount = 5;

  const [displayRewards, setDisplayRewards] = useState(true)

  
  const clickToSwitch = ( ) =>{
    setDisplayRewards(false);
}


  useEffect(() => {
      
    const { state } = location
    shareUrl = "http://looks.surge.sh/" + state.refId
    setRefId(state.refId)
    setUrl("http://looks.surge.sh?" + state.refId);
    let timeOutCount =  (counterTime * 10) ;
    let timeOut;

const device = state.device;

if ( device === "mobile" ){

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
      {displayRewards ? (
        <ThanksBlock refId={refId} device={"mobile"} count={timerCount} counterTime={counterTime} clickToSwitch={clickToSwitch} />
      ) : (
        <Rewards refURL={url} />
      )}
    </div>
  )
}

export default ThanksPage
