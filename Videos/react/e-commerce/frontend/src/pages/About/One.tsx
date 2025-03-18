import side from "/assets/About/side.png"

const One = () => {
  return (
      <div className="lg:pl-[4rem] md:pl-[3rem] pt-[3rem] max-sm:pl-[1rem] max-sm:pr-[1rem] pb-12">
          <div>
              <h1 className="flex gap-2 pb-12"><span className="text-[#B6B6B6]">Home</span> <span className="text-[#B6B6B6]">/</span> <span>About</span></h1>
              <div className="md:flex justify-around gap-[5rem]">
                  <div className="md:w-[45%] flex flex-col gap-8 lg:pt-[8rem] md:pt-[5rem] max-sm:text-center">
                      <h1 className="font-bold lg:text-[3rem] md:text-[2.2rem] max-sm:text-[2rem]">Our Story</h1>
                      <p className="lg:text-[1rem] md:text-[0.8rem]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                      <p className="lg:text-[1rem] md:text-[0.8rem]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                  </div>
                  <div>
                      <img src={side} className="h-[35rem] w-[100%] max-sm:hidden" alt="" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default One