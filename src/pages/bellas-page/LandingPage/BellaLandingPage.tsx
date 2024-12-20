import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"


const BellaLandingPage = () => {
  return (
    <div>
      <div className=" my-2">
                <Navbar />
                <main  >
                    <Outlet />
                </main>
            </div>
    </div>
  )
}

export default BellaLandingPage