import ps5 from "/assets/ps5.png"
const p = "font-light text-[0.8rem] w-[15rem] ";
const a ="block w-[100%] h-[100%]"
const One = () => {
  return (
    <div>
      <div className="absolute text-white flex flex-col gap-1 pl-[2%] lg:pt-[28%] md:pt-[25%] max-sm:pt-[55%]">
        <h1 className="font-bold lg:text-[2.3rem] md:text-[1.5rem]">PlayStation 5</h1>
        <p className={p}>Black and White version of the PS5 coming out on sale.</p>
        <a href="#" className={`pt-5  font-light border-b-1 w-[4.8rem]`}>Shop now</a>
      </div>
      <img src={ps5} className={a} alt="" />
    </div>
  )
}

export default One