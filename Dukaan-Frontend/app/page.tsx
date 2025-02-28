import SideBar from "./components/SideBar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Main from "./components/Main"
export default function Home(){
  return(
    <div>
      <div className = "grid grid-cols-10">
          <div className="col-span-2">
              <SideBar/>
          </div>

          <div className = "col-span-8 bg-white">
            <Navbar/>
            <Hero/>
            <Main/>
          </div>
      </div>
    </div>
  )
}