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
    <div className="flex  ">
      <div  >
      <ul className="pt-6 lg:pr-[5rem] md:pr-[1rem]">
      {data.map((data) =>
          <li className=" xl:pb-[0.60rem] md:pb-1 whitespace-nowrap flex "><a href="#"><span className="block w-[10rem] pt-1 ">{data.name}</span></a><span className={ `font-bold text-[1.3rem]    ${data.id == "yes" ? "text-bold" : "hidden"}`}>{'>'}</span></li>
        )} 
        </ul>
      </div>
      <span className="border-r-1 border-[#B6B6B6] md:h-[90%] lg:h-[96%] "></span>
    </div>
  )
}

export default Routes