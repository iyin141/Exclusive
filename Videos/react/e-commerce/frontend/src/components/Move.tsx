import { ReactNode, useState } from "react";
import arrow from "/assets/arrow-left.png"
import arrowr from "/assets/arrow-right.png"
type Props = {
    children: ReactNode;
}
const Move :  React.FC<Props> =  ({children}) =>  {
    const [move, setmove] = useState(0);
    const left = () => {
        setmove( move == -70 ?  move + 70 : move - 1);
    }
    const right = () => {
        setmove(move == 5 ?  move - 5 : move + 1);
    }

    const button = "bg-[#F3F1F1] p-4  rounded-[50px]";   
  return (
      <div>

          <div className="flex gap-3 pb-5  justify-end">
              <button className={`${button}`} onClick={() => left()}><img src={arrow} className="w-[15px]" alt="" /></button>
              <button onClick={() => right()} className={`${button}`}><img src={arrowr} className="w-[15px]" alt="" /></button>
         </div>
          <div className=" transition-transform duration-300 ease-in-out" style={{ transform: `translateX(${move}rem)` }}>{children}</div>
    </div>
  )
}

export default Move