import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import FotoPerfil from "../../assets/foto-perfil.png"
import {Link} from "react-router-dom"

function AppAbout(){
    return(
        <div className=" bg-black h-166 flex flex-col justify-center md:flex-row items-center gap-8 p-6">
             <div className="text-white text-justify md:text-lg ">
                <p className="text-1xl mb-5 max-w-lg text-slate-400" >I´m </p>

                <h1><span className="text-4xl  hover:text-pink-700"> Ercilia </span></h1>
                
                <p className="text-xl max-w-lg  rounded-full my-8" >
                    Currently studying Information System, focusing on improving my skills 
                    in both Frontend and Backend.
                    Here I will talk a little about myself and my latest.</p>
            </div>
            <div>
                <img className="w-70 h-64 md:w-64 md:h-94 rounded-full object-cover mask-r-from-10% border-4 border-pink-700" src={FotoPerfil}/>
            </div>

            <div>
                <h2 className='text-white text-3xl mb-2 mt-4 font-bold'>About Me</h2>
                <p className=' text-white text-1xl max-w-lg mb-4'>
                    I highlight my ability to learn quickly, my organization and my passion for solving problems with clean code.
                </p>

                <Link to="/about" className="text-white bg-pink-700 px-5 py-2 hover:bg-pink-300 rounded-full mb-4">About Me</Link>

                <div className=' text-pink-700 flex space-x-4 cursor-pointer mt-4'>
                    <BsFacebook size={30} className=' border-pink-700 rounded-full cursor-pointer'/>
                    <BsTwitter size={30} className=' border-pink-700 rounded-full cursor-pointer'/>
                    <BsInstagram size={30} className=' border-pink-700 rounded-full cursor-pointer'/>
                    <BsLinkedin size={30} className=' border-pink-700 rounded-full cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}
export default AppAbout;
