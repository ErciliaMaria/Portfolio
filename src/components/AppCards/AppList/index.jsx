import SiteList from "../../../assets/to-do-list.png"

function AppList() {
    return (
        <div class="m-8">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-60 md:w-48 md:rounded-none md:rounded-s-lg" src={SiteList} alt="Site List" />
                <div class="flex flex-col justify-around p-4 leading-normal h-40">
                    <h5 class=" text-2xl font-bold tracking-tight text-white text-center">Site List</h5>
                    <p class=" font-normal text-white text-center">Jquery</p>
                    <a href="https://erci-jquery-to-do-list.vercel.app/" class="text-white text-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-xl px-7 py-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ">See Site</a>
                </div>
        </div>
    )
}
export default AppList