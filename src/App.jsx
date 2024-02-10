import { Outlet } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
