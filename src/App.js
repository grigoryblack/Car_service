import './App.css';
import MainPage from "./components/pages/MainPage";
import OrderPage from "./components/pages/OrderPage";
import AccountPage from "./components/pages/AccountPage";
import RegistrationManagerPage from "./components/pages/RegistrationManagerPage";
import LoginManagerPage from "./components/pages/LoginManagerPage";
import ManagerPage from "./components/pages/ManagerPage";

import {Routes, Route} from 'react-router-dom'
import './firebase-config'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/Order" element={<OrderPage/>}/>
      <Route path="/Account" element={<AccountPage/>}/>
      <Route path="/Manager" element={<ManagerPage/>}/>
      <Route path="/Registration" element={<RegistrationManagerPage/>}/>
      <Route path="/Login" element={<LoginManagerPage/>}/>
    </Routes>
    </>
  );
}

export default App;
