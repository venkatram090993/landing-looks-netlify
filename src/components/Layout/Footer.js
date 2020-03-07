import React, {useState, useEffect} from 'react'
import {Link} from 'gatsby';

const Footer = () =>{


    return(

        <div class=" flex lg:flex-row md:flex-row sm: flex-col sm: justify-center w-full h-auto bg-black md:justify-between lg:py-5">
            <div class="lg:w-3/12 lg:block md:w-1/12 flex bg-black h-full "></div>

            <div class="lg:w-6/12 h-full flex lg:flex-row md:flex-row text-gray-200 md:justify-between sm: flex-col sm: align-middle ">

            <div class="w-2/6 py-5 h-full w-full lg:text-left md:text-left xs: text-center md:px-5">
                <ul class="leading-loose sm: margin-auto">
                <li><b>Company</b></li>
                <Link to="/about"><li>About</li></Link>
                </ul>
            </div>

            <div class="w-3/6 py-5 h-full w-full lg:text-left md:text-left xs: text-center md:px-5 ">
            <ul class="leading-loose">
            <li><b>Legal</b></li>
               <Link to="/po"> <li>Cookies Policy</li></Link> 
               <Link to="/po"> <li>Intellectual Property Policy</li></Link> 
                <Link to="/po"><li>Privacy Policy</li></Link>
                <Link to="/po"><li>Terms & Condition</li></Link>
            </ul>
            </div>
            <div class="w-2/6 py-5 h-full w-full lg:text-left md:text-left xs: text-center md:px-5 ">
            <ul class="leading-loose">
            <li><b>Other Works</b></li>
                <li>React-Native-Lights</li>
                <li>Chameleon</li>
            </ul>
            </div>
            </div>
            <div class="lg:w-4/12 flex lg:justify-end  xs: justify-center bg-black">
                <div class="flex flex-col lg:justify-end text-gray-200 mr-10 mb-6 md:justify-start md:mt-6 xs: ml-6">
                    <p>&copy; 2020 Pipesort</p>

                </div>
            </div>

        </div>

    )
}

export default Footer