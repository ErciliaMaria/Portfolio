import SiteRegister from "../../../assets/cadastro.png"

function AppRegister() {
    return (
        <div class="m-8">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-60 md:w-48" src={SiteRegister} alt="Site Register" />
            <div class="flex flex-col justify-around p-4 leading-normal h-40">
                <h5 class=" text-2xl font-bold tracking-tight text-white text-center">Site Register</h5>
                <p class=" font-normal text-white text-center">Bootstrap</p>            
                <a href="https://bootstrap-cadastro.vercel.app/" class="text-white text-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-xl px-7 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ">See Site</a>
            </div>
        </div>
    )
}
export default AppRegister