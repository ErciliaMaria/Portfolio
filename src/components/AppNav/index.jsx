import {Link} from "react-router-dom"
import { AiOutlineLeftSquare } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {HiMenuAlt1} from 'react-icons/hi';
import {useState} from 'react';

function AppNav(){
    const [toggle, setToggle] = useState(false);

function openMenu()
{
    setToggle(true);
}
function closeMenu()
{
    setToggle(false);
}
    return(
        <div className='bg-black'>
            <div className="flex flex-row md:flex-row justify-around items-center h-auto md:h-16 p-4 md:p-0 text-white">
                <h1 className="text-4xl flex items-center text-pink-700"> <AiOutlineLeftSquare /> DevFull </h1>

                    <Link to="/" className="hidden md:block bg-pink-700 px-5 py-2 hover:bg-pink-300 rounded-full">Home</Link>
                    <Link to="/about" className="hidden md:block bg-pink-700 px-5 py-2 hover:bg-pink-300 rounded-full">About Me</Link>
                    <Link to="/portfolio" className="hidden md:block bg-pink-700 px-5 py-2 hover:bg-pink-300 rounded-full">Projects</Link>

                <a href="#" className="hidden md:block bg-pink-700 px-5 py-2 hover:bg-pink-300 rounded-full">
                    Hire Me
                </a>

                <div className='sm:block lg:hidden'>
                    {toggle ? (
                        <IoCloseSharp onClick={closeMenu} size={30} className='text-white cursor-pointer'/>

                    ):(<HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer'/>
)}
                </div>
            </div>
            <div className='bg-black sm:block lg:hidden'>
                {toggle ? (
                    <div className='flex justify-between ml-10'>
                        <ul>
                            <li className='text-white text-xl px-10 cursor-pointer'>About me</li>
                            <li className='text-white text-xl px-10 cursor-pointer'>Projects</li>
                            <li className='text-white text-xl px-10 cursor-pointer'>Skills</li>
                        </ul>
                    </div>
                ):(
                    <div></div>
                )}
            </div>
        </div>
    )
}
export default AppNav;
