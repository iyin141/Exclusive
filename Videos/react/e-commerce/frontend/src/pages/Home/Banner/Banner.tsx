import Timer from "../../../components/Timer";
import two from "/assets/Banner.png";
const button_style = "w-[10rem] h-[3.2rem] flex justify-center items-center bg-[#00FF66] text-white text-center mx-auto rounded-[3.5px]";
const Banner = () => {
  return (
      <div className="lg:pl-[4rem] md:pl-[3rem] lg:pr-[4rem] md:pr-[4rem] pt-[3rem] pb-12 bg-white">
      <div className="absolute pt-[21.5%] pl-[4%] flex flex-col gap-12">
        <Timer check={1}></Timer>
        <button className={`${button_style}`} >Buy now</button>
      </div>
      <h1><img src={two} alt="" /></h1>
    </div>
  )
}

export default Banner