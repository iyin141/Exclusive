import Routes from "./Routes"
import Filter from "./Filter"
import { useNavigate } from "react-router-dom"


const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] border-b-1 border-[#B6B6B6]" id="top">
      <div className="text-center bg-black text-white p-3 text-[1rem] max-sm:text-[0.5rem]  ">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span><a href="#" className="underline ml-3">Shop Now</a></span></p>
      </div>
      <div className="flex justify-between pt-4 md:pl-[3rem] md:pr-[3rem] lg:pl-[5rem] lg:pr-[6rem] max-sm:pl-[1rem] max-sm:pr-[1rem] max-sm:block pb-4">
        <h1 className="text-[1.3rem] font-bold max-sm:text-center"><button onClick={() => navigate("/")}>Exclusive</button></h1>
        <div className="">
        <Routes />
        </div>
        <div>
         <Filter/>
        </div>
      </div>
    </div>
  )
}

export default Nav