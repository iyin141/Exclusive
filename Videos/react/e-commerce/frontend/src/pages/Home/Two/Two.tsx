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
    <div>
      <div className="block">
        <h1><span></span> Today's</h1>
        <h1>Flash sales</h1>
      </div>
      <ul className="flex justify-around xl:pl-[2rem] md:pl-[2rem] pt-[7rem] gap-5 pb-10 w-[170%]">
        {data.map((user) => (
          <li key={user.id}>
            <div className="bg-[#F3F1F1] pl-3 pr-6 pt-3 pb-6">
            <h1 className="bg-[#EF4444] w-[3rem] text-white pl-2 pr-2 pt-1 pb-1 text-center text-[12px] rounded-[3.5px]"> - {Math.round(((user.price - user.discount_price) / user.price )* 100)}%</h1>
            <img src={user.img} className="block h-[9rem] w-[13rem]  "  alt="" />
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
  );
};

export default Two;
