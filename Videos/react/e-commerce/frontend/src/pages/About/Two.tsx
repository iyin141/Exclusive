import bag from "/assets/About/bag.png"
const categories = [
    { name: "10.5k ", Icon: bag, Category:"Sallers active our site" },
    { name: "33K", Icon: bag, Category:"Mopnthly Produduct Sale" },
    { name: "45.5K", Icon: bag ,Category:"Customer active in our site"},
    { name: "25K", Icon: bag,Category:"Annual gross sale in our site" },
  ];

const Two = () => {
  return (
      <div className="lg:pl-[4rem] md:pl-[3rem] lg:pr-[4rem] md:pr-[4rem] pt-[3rem] max-sm:pl-[1rem] max-sm:pr-[1rem] md:pb-12">
           <div className="flex gap-8  flex-wrap  max-sm:items-center max-sm:justify-center md:items-center md:justify-center ">
          {categories.map(({ name, Icon , Category }) => (
            <div key={name} className="flex flex-col items-center gap-2 w-[16rem] h-[13rem] pt-5 pb-7  rounded-[0.3rem] text-center border-1 border-[#B6B6B6] group hover:bg-[#EF4444]">
              <div className=" flex items-center justify-center rounded-full pb-3 ">
                  <img src={Icon}  alt="" />
              </div>
              <p className="text-sm mt-2 group-hover:text-white font-bold text-[1.8rem] ">{name}</p>
              <p className="text-sm mt-2 group-hover:text-white text-[1rem]">{Category}</p>
            </div>
          ))}
          </div>
    </div>
  )
}

export default Two