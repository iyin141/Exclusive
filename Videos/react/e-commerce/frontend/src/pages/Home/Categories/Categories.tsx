import {
  Shirt,
  MonitorSmartphone,
  Home,
  Pill,
  Dumbbell,
  Baby,
  ShoppingBasket,
  HeartPulse,
} from "lucide-react";
import Move from "../../../components/Move";

const categories = [
  { name: "Men's Fashion", Icon: Shirt, Category:"yes" },
  { name: "Electronics", Icon: MonitorSmartphone, Category:"yes" },
  { name: "Home & Lifestyle", Icon: Home ,Category:"yes"},
  { name: "Medicine", Icon: Pill,Category:"yes" },
  { name: "Sports ", Icon: Dumbbell ,Category:"yes" },
  { name: "Baby & Toys", Icon: Baby ,Category:"yes" },
  { name: "Groceries & Pets", Icon: ShoppingBasket ,Category:"yes" },
  { name: "Health & Beauty", Icon: HeartPulse ,Category:"yes" },
];

export default function CategoryIcons() {
  return (
    <div className="lg:pl-[4rem] md:pl-[3rem] pt-[3rem] pb-12 bg-white">
      <div className="block ">
                <h1 className="pb-6 text-[#EF4444]"><span className="bg-[#EF4444]  pt-2 pb-2 pr-2 pl-2 rounded-[3.5px]">.</span> <span className="pl-2 font-bold">Today's</span></h1>
                <div className="flex gap-[5rem]">
                <h1 className="text-[2.3rem] font-bold pt-5  ">Flash Sales </h1>
        </div>
      </div>
      <div className="w-[95%] overflow-hidden">
      <Move> 
          <div className="flex gap-8 min-w-max ">
          {categories.map(({ name, Icon , Category }) => (
            <div key={name} className="flex flex-col items-center w-[10rem] pt-5 pb-7 pl-3 pr-3 rounded-[0.3rem] text-center border-1 group hover:bg-[#EF4444]">
              <div className="w-16 h-16 flex items-center justify-center rounded-full pb-3 ">
                <Icon size={32} color="black"  />
              </div>
              <p className="text-sm mt-2 group-hover:text-white font-bold">{name}</p>
              <p className="text-sm mt-2 group-hover:text-white">{Category}</p>
            </div>
          ))}
          </div>
        </Move>
      </div>
      <span className="w-[95%] border-b-1 border-[#B6B6B6] pt-[7rem] block "></span>
    </div>
  );
}
