import { Copyright } from "lucide-react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";


const Footer = () => {
  return (
      <div className="  md:pr-[2rem] pt-[3rem] pb-5 w-[100%] max-sm:pl-[1rem] max-sm:pr-[1rem]  bg-black text-white">
          <div className="flex md:gap-5 max-sm:gap-12 flex-wrap items-start justify-around pb-12 pt-1">
              <One />
              <Two />
              <Three />
              <Four />
          </div>
          <h1 className="text-[#363738] text-center">
            <span className="flex items-center justify-center gap-1"> <Copyright size={18} /> Copyright Rimel 2022. All right reserved</span>
          </h1>
    </div>
  )
}

export default Footer