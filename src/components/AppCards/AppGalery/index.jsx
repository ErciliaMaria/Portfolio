import SiteGalery from "../../../assets/galery.png"

function AppGalery() {
    return (
        <div className="m-8">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-60 md:w-48" src={SiteGalery} alt="Site Galery" />
            <div className="flex flex-col justify-around p-4 leading-normal h-40">
                <h5 className=" text-2xl font-bold tracking-tight text-white text-center">Site Galery</h5>
                <p className=" font-normal text-white text-center">Html/Css</p>
                <p className=" font-normal text-white text-center">Jquery</p>            
                <a href="https://erci-jquery-photo-gallery.vercel.app/" className="text-white text-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-xl px-7 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ">See Site</a>
            </div>
        </div>
    )
}
export default AppGalery