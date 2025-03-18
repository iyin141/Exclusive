import Header from "../../../components/Header"
import Benefits from "../../../components/Benefits"
import One from "./One"
import Two from "./Two"


const Arive = () => {
  return (
      <div className="lg:pl-[4rem] md:pl-[3rem] lg:pr-[4rem] md:pr-[4rem] pt-[3rem] pb-12 max-sm:pl-[1rem] max-sm:pr-[1rem]  bg-white">
          <Header Big="New Arrival" Small="Featured"></Header>
          <div className="flex gap-8 w-[100%] max-sm:flex-wrap pt-12">
          <div className="md:w-[50%] max-sm:w-[100%]">
              <One />
          </div>
         <div className="md:w-[50%] max-sm:w-[100%]">
              <Two />
          </div>
          </div>
          <Benefits />
    </div>
  )
}

export default Arive