import { useEffect, useState } from "react";
import Stars from "../../../components/Stars";
import Timer from "../../../components/Timer";
import Move from "../../../components/Move";


interface User {
  name: string;
  price: number;
  discount_price: number;
  img: string;
  id: number;
  rating: number;
}

const Two = () => {
  const [data, setData] = useState<User[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/flash", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: User[] = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="xl:pl-[2rem] pr-[2rem] md:pl-[2rem] pt-[7rem] pb-12 ">
              <div className="block pb-8">
                <h1 className="pb-6 text-[#EF4444]"><span className="bg-[#EF4444]  pt-2 pb-2 pr-2 pl-2 rounded-[3.5px]">.</span> <span className="pl-2 font-bold">Today's</span></h1>
                <div className="flex gap-[5rem]">
                <h1 className="text-[2.3rem] font-bold pt-5  ">Flash Sales </h1>
                <Timer /> 
              </div>
              </div>
      <div className="pb-12">
              <Move >
              <ul className="flex gap-5 pb-10 min-w-max">
                {data.map((user) => (
                  <li key={user.id}> 
                    <div className="bg-[#F3F1F1] h-[14rem] w-[16rem] group">
                      <div className="pl-3 pr-9 pt-3 pb-6  ">
                      <h1 className="bg-[#EF4444] w-[3rem] text-white pl-2 pr-2 pt-1 pb-1 text-center text-[12px] rounded-[3.5px]"> - {Math.round(((user.price - user.discount_price) / user.price )* 100)}%</h1>
                      <img src={user.img} className="block absolute h-[9rem] w-[13rem] pl-9 " alt="" />
                    </div>
                      <span className="absolute pt-[7.8rem]"><button className="text-white bg-black  pl-5 pr-5 pt-2 pb-2 w-[16rem] text-center rounded-b-[3.5px] opacity-0 group-hover:opacity-100 ">Add To Cart</button></span>
                    </div>
                    <div className="pt-5 block ">
                      <h1 className="font-bold uppercase text-[0.9rem] pb-2">{user.name}</h1>
                      <h2><span className="pr-2 text-[#EF4444]"> ${user.price}</span> <span className="line-through text-[#858585]"> ${user.discount_price}</span></h2>
                      <span><Stars>{user.rating}</Stars>  <span className="pl-1">({user.id})</span></span>
                    </div>
                  </li>
                ))}
              </ul>
          </Move>
      </div>
      <div className="flex flex-col justify-center items-center  ">
          <div className="w-[14rem] h-[3rem] flex justify-center items-center  bg-[#EF4444] text-white text-center mx-auto rounded-[3.5px]">
            <h1><a href="#">View All Products</a></h1>
        </div>
        <span className="w-[95%] border-b-1 border-[#B6B6B6] pt-[5rem] "></span>
    </div>


   
    </div>
  );
};

export default Two;
