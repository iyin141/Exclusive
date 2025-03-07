import Header from "../../../components/Header"
import { useEffect, useState } from "react";
import Stars from "../../../components/Stars";
interface User {
  name: string;
  price: number;
  discount_price: number;
  img: string;
  id: number;
  rating: number;
}
const button_style = "w-[10rem] h-[2.8rem] flex justify-center items-center bg-[#EF4444] text-white text-center mx-auto rounded-[3.5px]";

const Best = () => {

  const [data, setData] = useState<User[]>([]);
  const [disp, setdisp] = useState(0)

  function on() {
    setdisp(1);
  }
  function off() {
    setdisp(0);
  }
  
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/best", {
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
    <div className="lg:pl-[4rem] md:pl-[3rem] lg:pr-[4rem] md:pr-[4rem] pt-[3rem] pb-12 bg-white">
      <div className="flex justify-between pb-12">
        <Header Small="This month" Big="Best Selling Products"></Header>
        <div className="pt-[4.2rem]">
          <button className={`${button_style}`} onClick={()  => disp == 0 ? on() : off()}>View All</button>
        </div>
      </div>
      <div>
      <ul className="flex gap-5 pb-10 flex-wrap justify-center items-center">
                {data.map((user) => (
                  <li key={user.id} className={`pb-12 ${user.id > 4 ? (disp == 1 ? "block" : "hidden") : "block"}`}> 
                    <div className="bg-[#F3F1F1] h-[14rem] w-[16.5rem] group">
                      <div className="pl-3 pr-9 pt-3 pb-6  ">
                      <h1 className="bg-[#EF4444] w-[3rem] text-white pl-2 pr-2 pt-1 pb-1 text-center text-[12px] rounded-[3.5px]"> - {Math.round(((user.price - user.discount_price) / user.price )* 100)}%</h1>
                      <img src={user.img} className="block absolute h-[9rem] w-[13rem] pl-9 " alt="" />
                    </div>
                      <span className="absolute pt-[7.8rem]"><button className="text-white bg-black  pl-5 pr-5 pt-2 pb-2 w-[16.5rem] text-center rounded-b-[3.5px] opacity-0 group-hover:opacity-100 ">Add To Cart</button></span>
                    </div>
                    <div className="pt-5 block ">
                      <h1 className="font-bold uppercase text-[0.9rem] pb-2">{user.name}</h1>
                      <h2><span className="pr-2 text-[#EF4444]"> ${user.price}</span> <span className="line-through text-[#858585]"> ${user.discount_price}</span></h2>
                      <span><Stars>{user.rating}</Stars>  <span className="pl-1">({user.id})</span></span>
                    </div>
                  </li>
                ))}
              </ul>
      </div>
    </div>
  )
}

export default Best