import { Button } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Browser,Route, Router,Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import { NewAccVerify } from './pages/verify/NewAccVerify';
import { ToastContainer } from 'react-toastify';
import { Dashboard } from './pages/dashboard/Dashboard';
import ResetPassword from './pages/reset password/ResetPassword';
import { Category } from './pages/category/Category';
import {PaymentMethods, paymentMethods} from './pages/paymentmethods/PaymentMethods'





function App() {
  return (
    <div className="App">
<Browser>
<Routes>
  {/* // public router  */}
  <Route path='/' element={<LoginPage/>} />
  <Route path='/verify' element={<NewAccVerify/>} />
  <Route path='/resetpassword' element={<ResetPassword/>} />
  
  {/* //Private router  */}
  <Route path='/register' element={<RegisterPage/>} />
  <Route path='/dashboard' element={<Dashboard/>} />
  <Route path='/category' element={<Category/>} />
  <Route path='/paymentMethods' element={<PaymentMethods/>} />


 

 


</Routes>
  </Browser>
<ToastContainer/>

    </div>
  );
}

export default App;
