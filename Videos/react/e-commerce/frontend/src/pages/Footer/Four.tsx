import code from "/assets/Footer/code.png"
import handles from "/assets/Footer/handles.png"
const content = "font-light"

const Four = () => {
  return (
      <div>
           <div className="flex flex-col gap-4 max-sm:text-center">
              <h1 className="font-bold tracking-wide text-[1.3rem]">Download App</h1>
              <div className="flex flex-col gap-2">
                <h4 className={`${content} text-[0.8rem] text-gray-500`}>Save $3 with App New User Only</h4>
                <img src={code} alt="" />
              </div>
              <img src={handles} alt="" />
          </div>
    </div>
  )
}

export default Four