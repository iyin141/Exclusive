import Routes from "./Routes"
import Slide from "./Slide"
import { useState } from "react";
const span = "border-b-4 border-black border-solid w-[30px] pb-1 block";

const One = () => {

  const [display, setdisplay] = useState(true);
  
  function show() {
    setdisplay(true);
  }

  function close() {
    setdisplay(false);
  }

  return (
    <div>
       <style>
        {`
          @keyframes moveDown {
            0% { transform: translateY(0); }
            100% { transform: translateY(10px); }
          }
        `}
      </style>

      <div className="flex justify-around  xl:pl-[5rem] xl:pr-[6rem] md:pl-12 md:pr-12 max-sm:pl-[1rem] max-sm:pr-[1rem] max-sm:block">
        <div className="max-sm:pt-5 ">
          <div className="pl-[90%]">
          <button className=" md:hidden w-[30px] overflow-hidden " onClick={() => (display ? close() :show())}>
              <span className={`${span} `}></span>
              <span className={`${span}` }></span>
              <span className={`${span} `}></span>
          </button>
        </div>
          <div className={` ${display ? " max-sm:hidden" : "max-sm:animate-[moveDown_1s_ease-in-out_forwards]"}`}>
          <Routes />
          </div>
      </div>
      <Slide />
      </div>    
    </div>
  )
}

export default One