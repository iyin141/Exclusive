import { useState, useEffect } from "react";
const one = "flex flex-col bg-white pt-3 pl-1 pr-1 pb-2 lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] max-sm:h-[2.2rem] max-sm:w-[2.2rem]  rounded-[100%] text-center";
const header = "lg:text-[1.5rem] max-sm:text-[0.7rem] font-bold m-0 leading-none ";
type Props = {
  check:number
}

const Timer :  React.FC<Props> =  ({check}) =>{
  const targetDate = new Date("April 25, 2025 00:11:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      setTimeLeft({
        days: formatTime(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: formatTime(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ),
        minutes: formatTime(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ),
        seconds: formatTime(Math.floor((distance % (1000 * 60)) / 1000)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  function formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }

  const hide = check == 0 ? "block pb-1 max-sm:text-[0.8rem]" : "hidden";
  const hide_2 = check == 1 ? "block" : "hidden";
  const hide_3 = check == 0 ? "block pb-1" : "hidden";
  const hide_4 = check == 0 ? "max-sm:h-[4rem] max-sm:w-[4rem]  " : "";
  const span = "lg:text-[1.9rem] md:text-[1.4rem]  max-sm:text-[1.3rem] md:pt-5 max-sm:pt-6 text-[#EF4444]";
  const span_2 = "lg:text-[0.7rem] md:text-[0.5rem] max-sm:text-[0.3rem] max-sm:font-bold";
  return (
    <div className="flex gap-8 max-sm:gap-1 ">
      <div className={`${one} ${hide_4}`}>
            <span className={`${span_2} ${hide}`}>Days</span>
            <span className={header} >{timeLeft.days} </span>   
            <span className={ `${span_2} ${hide_2}`}>Days</span>
      </div>
      <span  className={`${span} ${hide_3}`}>:</span>
          <div className={`${one} ${hide_4}`}>
                <span className={`${span_2} ${hide}`}>Hours</span>
                <h1 className={header}>{timeLeft.hours} </h1>
                <span className={`${span_2} ${hide_2}`}>Hours</span>
      </div>
      <span  className={`${span} ${hide_3}`}>:</span>
          <div className={`${one} ${hide_4}`}>
                <span className={` ${span_2} ${hide}`}>Minutes</span>
                <span className={header}>{timeLeft.minutes} </span>
                <span className={`${span_2} ${hide_2}`}>Minutes</span>
      </div>
      <span  className={`${span} ${hide_3}`}>:</span>
          <div className={`${one} ${hide_4}`}>
                <span className={`${span_2} ${hide}`}>Seconds</span>
                <span className={header}>{timeLeft.seconds}  </span>
                <span className={`${span_2} ${hide_2}`}>Seconds</span>
         </div>
    </div>
  );
};

export default Timer;
