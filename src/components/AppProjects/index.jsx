
import SiteGalery from "../../assets/galery.png"
import SiteMotors from "../../assets/motors.png"

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
      <div className="bg-black flex flex-col justify-around sm:flex-row p-8 mb-8 ">
        <AppList />
        <AppBuffet />
        <AppRegister />
      </div>
      <div className="bg-black flex flex-col justify-around sm:flex-row p-8 mb-8 ">
        <AppCake />
        <AppCruise />
        <AppGalery />
      </div>
      <div className="bg-black flex flex-col justify-around sm:flex-row p-8 mb-8 ">
        <AppMotors />
        <AppPortfolio />
      </div>
    </div>
  )
}
export default AppProjects
import './style.sass'