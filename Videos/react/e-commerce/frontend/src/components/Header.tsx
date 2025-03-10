import { ReactNode } from "react";



type props  = {
    Small: string;
    Big: string;
  children?: ReactNode;
}

const Header  :  React.FC<props> =  ({Small,Big,children}) =>  {
  return (
    <div className="block ">
          <h1 className="md:pb-6 max-sm:pb-3  text-[#EF4444]"><span className="bg-[#EF4444]  pt-3 pb-2 pr-2 pl-2  rounded-[3.5px]">.</span> <span className="pl-2 font-bold">{ Small}</span></h1>
        <div className="flex max-sm:block md:gap-[5rem] max-sm:gap-[1rem]">
        <h1 className="text-[2.3rem] max-sm:text-[1.5rem] max-sm:pb-5 font-bold pt-5 whitespace-nowrap  ">{Big}</h1>
        {children}
        </div>
      </div>
  )
}

export default Header