import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
const content ="font-light"

const One = () => {
  return (
      <div>
          <div className="flex flex-col gap-3 max-sm:text-center">
              <h1 className="font-bold tracking-wide text-[1.3rem]">Exclusive</h1>
              <h2 className={content}>Subscribe</h2>
              <h3 className={content}>Get 10% on Your First Order</h3>
              <div className="border-1 flex p-1 text-white">
                <input type="text" placeholder="Search for products" className="p-[0.1rem] pl-[0.5rem] w-[100%]    text-[0.8rem] " />
                <button onClick={ () => alert('Recieved')}><PaperAirplaneIcon className="w-6 h-6 text-gray-500" /></button>
             </div>
          </div>
    </div>
  )
}

export default One