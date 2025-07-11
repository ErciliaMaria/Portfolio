import AppPortfolio from "../AppCards/AppPortfolio"
import AppMotors from "../AppCards/AppMotors"
import AppGalery from "../AppCards/AppGalery"
import AppCruise from "../AppCards/AppCruise"
import AppCake from "../AppCards/AppCake"
import AppList from "../AppCards/AppList"
import AppBuffet from "../AppCards/AppBuffet"
import AppRegister from "../AppCards/AppRegister"

function AppProjects() {
  return (
    <div className='bg-pink-200'>
       <div className="text-white flex flex-col justify-center items-center pt-2 space-y-6">
                <h2 className="text-2xl text-black underline underline-offset-1 ">Projects </h2>
            </div>
       <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <AppList />
        <AppBuffet />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <AppRegister />
        <AppCake />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <AppCruise />
        <AppGalery />
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <AppMotors />
        <AppPortfolio />
      </div>
    </div>
  )
}
export default AppProjects