import { useState, useEffect } from "react";

const Timer = () => {
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

  return (
    <div className="flex gap-8 ">
          <div className="flex flex-col">
                <span>Days</span>
                <span className="text-[2.3rem] font-bold">{timeLeft.days} <span className="text-[#EF4444] text-[2rem] pl-4">:</span></span>   
         </div>
          <div className="flex flex-col ">
                <span>Hours</span>
                <span className="text-[2.3rem] font-bold">{timeLeft.hours} <span className="text-[#EF4444] text-[2rem] pl-4 ">:</span></span>
        </div>
          <div className="flex flex-col ">
                <span>Minutes</span>
                <span className="text-[2.3rem] font-bold">{timeLeft.minutes} <span className="text-[#EF4444] text-[2rem] pl-4">:</span></span>
        </div>
          <div className="flex flex-col ">
                <span>Seconds</span>
                <span className="text-[2.3rem] font-bold">{timeLeft.seconds} </span>
         </div>
    </div>
  );
};

export default Timer;
