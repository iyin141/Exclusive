import cruise from "/assets/About/cruise.png"
import watson from "/assets/About/watson.png"
import smith from "/assets/About/smith.png"
import handle from "/assets/About/handle.png"
 
const data = [
  { path: cruise, role:"Founder and Chairman", name: "Tom cruise" },
  { path: watson, role:"Managing Director",  name: "Emma watson" },
  { path: smith, role:"Product Designer", name: "Will Smith" }
  
]

const Three = () => {
  return (
      <div className="lg:pl-[4rem] md:pl-[3rem] lg:pr-[4rem] md:pr-[4rem] pt-[3rem] max-sm:pl-[3rem] max-sm:pr-[3rem] pb-12">
      <div className="flex flex-wrap gap-12 max-sm:items-center max-sm:justify-center md:items-center md:justify-center ">
          {data.map((items) => (
            <div className="flex flex-col ">
              <img src={items.path} className="w-[21.5rem] pb-5" alt="" />
              <h1 className="text-[1.8rem] pb-2">{items.name}</h1>
              <h3 className="pb-2">{items.role}</h3>
              <img src={handle} className="w-[6rem]" alt="" />
            </div>
          ))}
      </div>
      </div>
  )
}

export default Three