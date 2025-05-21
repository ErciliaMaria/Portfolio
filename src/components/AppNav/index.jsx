import {Link} from "react-router"
function AppNav(){
    return(
        <div className="header flex flex-col md:flex-row justify-around items-center h-auto md:h-16 p-4 md:p-0 bg-gray-800 text-white">
            <h1 className="text-2xl">Ercilia Carvalho</h1>

            <div className="flex justify-between w-80">
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/about" className="mr-4">About Me</Link>
                <Link to="/portfolio" className="mr-4">Portfolio</Link>
                <Link to="/skills" className="mr-4">Skills</Link>
            </div>

            <button className="bg-white-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white-500 px-8 py-6 rounded text-white font-semibold">
                Hire Me
            </button>

        </div>
    )
}
export default AppNav;
import './style.sass'