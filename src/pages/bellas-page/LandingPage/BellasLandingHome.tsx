import BellasLandingHeader from "./BellasLandingHeader"
import Hours from "./Hours"
import Relax from "./Relax"
import Services from "./Services"


const BellasLandingHome = () => {
  return (
    <div className="bg-[#f5f1fd] ">
        <BellasLandingHeader />
        <Hours />
        <Services />
        <Relax />
    </div>
  )
}

export default BellasLandingHome