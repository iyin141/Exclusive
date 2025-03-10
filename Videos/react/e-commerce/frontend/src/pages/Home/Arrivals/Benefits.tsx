import fast from "/assets/fast.png"
import customer from "/assets/customer.png"
import money from "/assets/money.png"


const data = [
  { img: fast, h1: "FREE AND FAST DELIVERY", p: "Free delivery for all orders over $140" },
  { img: customer, h1: "24/7 CUSTOMER SERVICE", p: "Friendly 24/7 customer support" },
  { img: money, h1: "MONEY BACK GUARANTEE", p: "We return money within 30 days" }
  
]

const Benefits = () => {
  return (
    <div className="pt-[8rem] md:pl-6 md:pr-10 ">
      <div className="flex flex-wrap w-[100%]  justify-around">
        {data.map((items) => 
          <div className="flex flex-col gap-5 items-center max-sm:pb-12 justify-center ">
            <img src={items.img} alt="" />
            <h1 className="font-bold ">{items.h1}</h1>
            <p className="text-center">{items.p}</p>
          </div>
      )}
      </div>
      
    </div>
  )
}

export default Benefits