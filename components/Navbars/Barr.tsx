import { Button } from "@/components/ui/button"
import { GoPeople , GoArchive , GoChecklist } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";

const Barr =(props:any) => {
    const listItems = [
      {"title" :"Task Management","icons":GoChecklist},
      {"title": "Insights","icons":BsGraphUp} ,
      {"title":"Meeting reports","icons":CiFileOn} ,
      {"title":"Calendar","icons":IoCalendarClearOutline}   
    ];
  return (
    <div className="hidden md:flex flex-col h-screen min-w-[23%] max-w-[25%]  p-5 gap-9 border-r-2 border-gray-300">
        <div className="mt-4">
            <div className="flex items-center justify-between pr-1">
                  <div className="flex items-center">
                   <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                   <h1 className="md:text-base font-semibold lg:text-lg text-black"> {props.name} </h1>
                  </div>
                 <Button variant="secondary" className="p-0  bg-indigo-700 text-white h-6 w-6">+</Button>
            </div>
            <ul className="ml-3 mt-5 flex flex-col  gap-4">
            {listItems.map((item, index) => (
                <li className="list-none flex items-center"  key={index}>
                <item.icons className="mr-3"/>
                <h2 className="text-sm lg:text-base">{item.title}</h2>
                </li >
            ))}
            </ul>
        </div>
        <div>
              <div>
                <h1 className="md:text-base font-semibold lg:text-l text-black" >Others</h1>
              </div>
              <div className="ml-3 mt-4 flex flex-col  gap-3">
                <li className="list-none text-sm lg:text-base flex items-center"><GoArchive className="mr-2"/><h2>Archive</h2></li>
              </div>
        </div>
        <div>
              <div>
                <h1 className="md:text-base font-semibold lg:text-l text-black" >My Team</h1>
              </div>
              <div className="ml-3 mt-4 flex flex-col  gap-3">
               <li className="text-sm lg:text-base list-none  flex items-center"><GoPeople className="mr-2"/><h2>My workspace</h2></li>
               <li className="text-sm lg:text-base list-none flex items-center"><GoPeople className="mr-2"/><h2>My home</h2></li>
              </div>
        </div>
    </div>
  )
}

export default Barr