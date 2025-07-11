import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Subscription from "./components/Subscription";
import Transactions from "./components/Transactions";
import Account from "./components/Account";
import Login from "./components/Login";
import MainLayouts from "./components/MainLayouts";
import Forgot from "./components/Forgot";
import Register from "./components/Register";


const App = () => {
  return (
    <Router>


       <Routes>
        {/* Login page (no layout) */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Register />} />

        {/* Routes with shared layout */}
        <Route element={<MainLayouts />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
