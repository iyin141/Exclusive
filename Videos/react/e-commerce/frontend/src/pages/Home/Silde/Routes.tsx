const data = [
  { name: 'Womens Fashion ', path: 'n', element: 'n' , id:'yes' },
  { name: 'Mens Fashion ', path: 'n', element: 'n',id:'yes' },
  { name: 'Electronics', path: 'n', element: 'n',id:'no' },
  { name: 'Home & lifestyle', path: 'n', element: 'n',id:'no' },
  { name: 'Medicine', path: 'n', element: 'n',id:'no' },
  { name: 'Sports & Outdoors', path: 'n', element: 'n',id:'no' },
  { name: 'Babys & Toys', path: 'n', element: 'n',id:'no' },
  { name: 'Groceries & Pets', path: 'n', element: 'n',id:'no' },
  { name: 'Health & Beauty', path: 'n', element: 'n' ,id:'no'},
];


const Routes = () => {
  return (
    <div className="flex max-sm:items-center max-sm:justify-center max-sm:bg-[#EFEFEF] max-sm:pb-5  ">
      <div  >
      <ul className="pt-6 lg:pr-[5rem] md:pr-[1rem] max-sm:text-center ">
      {data.map((data) =>
          <li className=" xl:pb-[0.60rem] md:pb-1 md:whitespace-nowrap md:flex max-sm:pb-5  "><a href="#"><span className="block w-[10rem] pt-1 ">{data.name}</span></a><span className={ `font-bold text-[1.3rem]    ${data.id == "yes" ? "text-bold" : "hidden"} max-sm:hidden`}>{'>'}</span></li>
        )} 
        </ul>
      </div>
      <span className="border-r border-[#B6B6B6] h-full md:h-[18rem] lg:h-[22rem] max-sm:hidden"></span>

    </div>
  )
}

export default Routes