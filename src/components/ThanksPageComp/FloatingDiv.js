import React from'react';
import wreathImg from "../../images/wreath.svg"
import { navigate } from "gatsby"
import clipboard from '../../images/paste.svg'
import "../../css/thanksDiv.css"





const FloatingDiv = (props) => (


        <div class="bg-gray-200 font-sans">
            <div
          class="lg:py-4 flex flex-col justify-center text-white rounded-lg lg:w-4/6 sm: w-11/12 sm: px-2 sm: py-1 sm: pt-10 m-auto thanks-div"
        >
    {props.children}

        </div>
          </div>
      


)

export default FloatingDiv