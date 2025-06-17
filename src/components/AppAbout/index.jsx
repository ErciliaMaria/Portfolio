import FotoPerfil from "../../assets/foto-perfil.png"
function AppAbout(){
    return(
        <div className=" bg-black h-166 flex flex-col justify-center md:flex-row items-center gap-8 p-6">
            <div>
                <img className="w-88 h-88 md:w-94 md:h-94 rounded-full object-cover mask-r-from-10%" src={FotoPerfil}/>
            </div>

            <div className="text-white max-w-xl text-center md:text-lg space-y-6 container mx-auto">
                <p className="text-xl h-auto max-w-lg  rounded-full" >Hi, my name is 
                    <span className="underline hover:text-purple-600 text-2xl"> Ercilia Carvalho.</span></p>
                <p className="text-xl h-auto max-w-lg  rounded-full my-8" >
                    I am currently studying Analysis and Systems Development, focusing on improving my skills 
                    in both Frontend and Backend.</p>
            
                 <p className="text-xl h-auto max-w-lg  rounded-full" >
                    Welcome to my <span className="underline hover:text-purple-600 text-4">Portfolio</span>.
                     This portfolio is being developed to participate in a selection project and also to 
                     showcase <span className="underline hover:text-purple-600">stacks and skills </span> 
                     as well as recent projects I have been working on. I hope you like it!</p>

                 <p className="text-xl h-auto max-w-lg  rounded-full" >
                    Here I will talk a little about myself and my latest <span className="underline
                     hover:text-purple-600 text-4"> projects. </span></p>
            
                <p className="text-ml h-auto max-w-lg" >
                    Ready?</p>
            </div>
        </div>
    )
}
export default AppAbout;
