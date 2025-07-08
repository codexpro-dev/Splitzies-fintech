import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="w-full bg-black h-full flex align-top justify-start p-0 m-0">
      <div>
        <Navbar />
      </div>
      <div className="w-full">
        <Dashboard />
      </div>
    </div>
  )
}

export default App
