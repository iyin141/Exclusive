import { ReactNode } from "react";



type props  = {
    Small: string;
    Big: string;
  children?: ReactNode;
}

const Header  :  React.FC<props> =  ({Small,Big,children}) =>  {
  return (
    <div className="block ">
          <h1 className="pb-6 text-[#EF4444]"><span className="bg-[#EF4444]  pt-3 pb-2 pr-2 pl-2  rounded-[3.5px]">.</span> <span className="pl-2 font-bold">{ Small}</span></h1>
        <div className="flex flex-wrap gap-[5rem]">
        <h1 className="text-[2.3rem] font-bold pt-5  ">{Big}</h1>
        {children}
        </div>
      </div>
  )
}

export default Header