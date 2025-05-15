import ImageMain from "../../assets/gradient.png"
import FotoPerfil from "../../assets/foto-perfil.png"
import Arrow from "../../assets/arrow.png"
function AppAbout(){
    return(
        <div className="about h-166">
            <div className="img-foto static">
                
                <img className="h-auto max-w-lg rounded-lg absolute left-50 top-40" src={ImageMain} alt="gradient"/>
                <img className="h-auto max-w-lg  rounded-full absolute w-65 left-67 top-60" src={FotoPerfil}/>
                <img className="h-auto w-50 absolute left-97 top-25" src={Arrow}/>
            </div>

            <div className="static">
                <p className="text-[#fff] text-xl h-auto max-w-lg  rounded-full absolute left-120 top-35" >Hi, my name is 
                    <span className="underline hover:text-purple-600 text-2xl"> Ercilia Carvalho.</span></p>
                <p className="text-[#fff] text-xl h-auto max-w-lg  rounded-full absolute left-130 top-50" >
                    I am currently studying Analysis and Systems Development, focusing on improving my skills 
                    in both Frontend and Backend.</p>
            
                 <p className="text-[#fff] text-xl h-auto max-w-lg  rounded-full absolute left-150 top-80" >
                    Welcome to my <span className="underline hover:text-purple-600 text-4">Portfolio</span>.
                     This portfolio is being developed to participate in a selection project and also to 
                     showcase <span className="underline hover:text-purple-600">stacks and skills </span> 
                     as well as recent projects I have been working on. I hope you like it!</p>

                 <p className="text-[#fff] text-xl h-auto max-w-lg  rounded-full absolute left-170 top-120" >
                    Here I will talk a little about myself and my latest <span className="underline
                     hover:text-purple-600 text-4"> projects. </span></p>
            
                <p className="text-[#fff] text-ml h-auto max-w-lg  rounded-full absolute left-290 top-130" >
                    Ready?</p>
            </div>
        </div>
    )
}
export default AppAbout;
import './style.sass'