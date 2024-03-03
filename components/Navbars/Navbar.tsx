import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { IoSearchSharp } from "react-icons/io5";

const Navbar = (props:any) => {
  return (
    <div className="w-full   border-b-2 border-gray-300">
    <nav className="flex h-[70px]  w-auto mx-[2%] items-center justify-between">
        <div>
          <img alt="logo" className="w-[120px]"src="/collablogo.png"/>
        </div>
        <div className="flex items-center">
          <Avatar className="mr-3 mt-1">
            <AvatarImage src="/3issa.png"/>
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <h1 className="text-s">{props.user}</h1>
            <h2 className="text-xs">{props.role}</h2>
          </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar