import Routes from "./Routes"
import Filter from "./Filter"



const Nav = () => {
  return (
    <div className="w-[100%] border-b-1 border-[#F3F3F3]">
      <div className="text-center bg-black text-white p-3 text-[1rem] max-sm:text-[0.5rem]  ">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span><a href="#" className="underline ml-3">Shop Now</a></span></p>
      </div>
      <div className="flex justify-between pt-4 md:pl-[7rem] md:pr-[7rem] max-sm:pl-[2rem] max-sm:pr-[2rem] pb-4">
        <h1 className="text-[1.3rem] font-bold  ">Exculsive</h1>
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