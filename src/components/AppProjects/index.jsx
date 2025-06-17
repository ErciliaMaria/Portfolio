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
    <div>
      <div className="bg-black flex flex-col justify-around md:flex-row p-8 ">
        <AppList />
        <AppBuffet />
        <AppRegister />
      </div>
      <div className="bg-black flex flex-col justify-around md:flex-row lg:flex-row p-8 ">
        <AppCake />
        <AppCruise />
        <AppGalery />
      </div>
      <div className="bg-black flex flex-col justify-around md:flex-row lg:flex-row p-8 ">
        <AppMotors />
        <AppPortfolio />
      </div>
    </div>
  )
}
export default AppProjects