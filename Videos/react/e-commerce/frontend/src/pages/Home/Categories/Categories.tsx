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
import Header from "../../../components/Header";

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
    <div className="lg:pl-[4rem] md:pl-[3rem] pt-[3rem] max-sm:pl-[1rem] max-sm:pr-[1rem] pb-12 bg-white overflow-hidden ">
      <Header Small="Categories" Big="Browse By Category"></Header>
      <div className="w-[95%] overflow-hidden">
      <Move> 
          <div className="flex gap-8 min-w-max ">
          {categories.map(({ name, Icon , Category }) => (
            <div key={name} className="flex flex-col items-center w-[10rem] pt-5 pb-7 pl-3 pr-3 rounded-[0.3rem] text-center border-1 border-[#B6B6B6] group hover:bg-[#EF4444]">
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
