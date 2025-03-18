import { useState, useEffect } from "react";
import two from "/assets/Home/two.png";
import arrow from "/assets/Components/arrow.png"

const images = [
  { path: two, id: 1, link:'#' },
  { path: two, id: 2, link:'#' },
  { path: two, id: 3 ,link:'#'},
  { path: two, id: 4 ,link:'#'},
];

const Slide = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:pt-12 md:pl-12 max-sm:pl-6 relative z-0 w-[80%] max-sm:w-[100%] max-sm:h-[15rem] ">
      <div className="max-h-[100%]">
        {images.map((image, i) => (
          <div key={image.id}  style={{ zIndex: image.id + 1 }} className={`transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}>
            <img src={image.path} className={`absolute inset-0 w-[100%] max-w-[100%] md:h-[88%] lg:h-[96%] max-sm:h-[100%] pt-7 md:pl-4 lg:pl-10 `} alt="" />
            <div className={`${`z-[${image.id + 1}] absolute `} text-white  lg:pl-[6%] md:pl-[1.2%] md:pt-[5rem] lg:pt-[11.5%] max-sm:pt-[30%] `}>
              <h1 className="w-[60%] font-bold lg:text-[2.6rem] md:text-[1.8rem] max-sm:text-[1.4rem]">Up to 10% off Voucher</h1>
            <a href={image.link} className="flex gap-x-3 pt-2" >
              <span className="border-b-1 border-white "> Shop now</span><img src={arrow} className=" w-[1.2rem] h-[1.5rem] pt-2 " alt="" />
            </a>
            </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
