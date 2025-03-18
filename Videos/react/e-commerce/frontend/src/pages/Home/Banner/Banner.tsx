import Timer from "../../../components/Timer";
import two from "/assets/Home/Banner.png"; 
const button_style = "lg:w-[10rem] md:w-[8rem] lg:h-[3.2rem] md:h-[2.5rem]  max-sm:text-[0.7rem] max-sm:w-[4.5rem] max-sm:h-[1.9rem]  flex justify-center items-center bg-[#00FF66] text-white text-center mx-auto rounded-[3.5px]";
const Banner = () => {
  return (
      <div className="lg:pl-[4rem] md:pl-[3rem] lg:pr-[4rem] md:pr-[4rem] md:pt-[3rem] pb-12 max-sm:pl-[1rem] max-sm:pr-[1rem] bg-white">
      <div className="absolute md:pt-[21.5%] max-sm:pt-[7rem] pl-[4%] flex flex-col lg:gap-8 md:gap-5 max-sm:gap-3">
        <Timer check={1}></Timer>
        <button className={`${button_style}`} >Buy now</button>
      </div>
      <h1><img src={two} alt="" className="max-sm:w-[100vh] max-sm:h-[29vh]" /></h1>
    </div>
  )
}

export default Banner