import {Link} from "react-router-dom"
import { AiOutlineLeftSquare } from "react-icons/ai";

function AppNav(){
    return(
        <div className="bg-black flex flex-col md:flex-row justify-around items-center h-auto md:h-16 p-4 md:p-0 text-white">
            <h1 className="text-2xl flex items-center"> <AiOutlineLeftSquare /> Ercilia Carvalho</h1>

            <div className="hidden md:block">
                <Link to="/" className="bg-pink-700 px-5 py-2 hover:bg-pink-300 rounded-full">Home</Link>
                <Link to="/about" className="bg-pink-700 px-5 py-2 hover:bg-pink-300 rounded-full">About Me</Link>
                <Link to="/portfolio" className="bg-pink-700 px-5 py-2 hover:bg-pink-300 rounded-full">Portfolio</Link>
                <Link to="/skills" className="bg-pink-700 px-5 py-2 hover:bg-pink-300 rounded-full">Skills</Link>
            </div>

            <a href="#" className="bg-pink-700 px-5 py-2 hover:bg-pink-300 rounded-full">
                Hire Me
            </a>
        </div>
    )
}
export default AppNav;
