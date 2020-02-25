import React, {useEffect} from "react"
import "../css/layout.css"
import AOS from "aos"
import "aos/dist/aos.css"

import image1 from "../images/image-tr3.png"
import image2 from "../images/image-2-tr7.png"
import image3 from "../images/image-3-tr4.png"
import sendImg from "../images/plane.svg"
import logo from "../images/logo.png";

const MobileView = () =>{

    
    let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
      <div>
          <div class="flex rounded-lg bg-red-800 h-screen"></div>
      </div>
  )
}

export default MobileView