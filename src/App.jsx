import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import Subscription from "./components/Subscription"
import Transactions from "./components/Transactions"
import Account from './components/Account';

const App = () => {
  return (
    <Router>
      <div className="w-full bg-white h-full flex align-top justify-start p-0 m-0">
      <div>
        <Navbar />
      </div>
      <div className="w-full">
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/account" element={<Account />} />
          </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App
