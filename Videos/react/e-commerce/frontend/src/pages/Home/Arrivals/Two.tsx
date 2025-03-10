import women from "/assets/women.png"
import speaker from "/assets/speaker.png"
import perfume from "/assets/perfume.png"

const p = "font-light text-[0.8rem] w-[15rem]  max-sm:w-[15rem]";
const a = "pt-5  font-light border-b-1 w-[4.8rem]"
const div ="absolute text-white flex flex-col gap-1 pl-[2%] lg:pt-[5%] md:pt-[3%] max-sm:pt-[10%]"
const Header ="font-bold lg:text-[2.3rem] md:text-[1.5rem]"

const p_2 = "font-light lg:text-[0.8rem] md:text-[0.5rem] max-sm:text-[0.8rem] w-[15rem]  max-sm:w-[8rem]";
const a_2 = "pt-3  font-light border-b-1 w-[4.8rem] max-sm:text-[0.8rem]"
const div_2 ="absolute text-white flex flex-col  pl-[2%] lg:pt-[8%] md:pt-[5%] max-sm:pt-[12%]"
const Header_2 ="font-bold lg:text-[1.8rem] md:text-[1rem] max-sm:text-[0.8]"


const Two = () => {
  return (
    <div className="100%">
      <div className="flex flex-col lg:gap-8 md:gap-7 max-sm:gap-5">
        <div className={div}>
          <h1 className={Header}>Women's Collection</h1>
          <p className={p}>Featured woman collections that give you another vibe.</p>
          <a href="#" className={a}>Shop now</a>
        </div>
        <div className="w-[100%]">
          <img src={women} alt="" />
        </div>

        <div className="flex md:gap-8 max-sm:gap-4">

          <div className="w-[50%]">
            
              <div className={div_2}>
                <h1 className={Header_2}>Speakers</h1>
                <p className={p_2}>Amazon wireless speakers</p>
                <a href="#" className={a_2}>Shop now</a>
            </div>
            <img src={speaker} alt="" />
          </div>

          <div className="w-[50%]">
          <div className={div_2}>
                <h1 className={Header_2}>Perfume</h1>
                <p className={p_2}>GUCCI INTENSE OUD EDP</p>
                <a href="#" className={a_2}>Shop now</a>
            </div>
            <img src={perfume} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Two