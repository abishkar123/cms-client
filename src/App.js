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
import { PrivateRouter } from './components/Private-router/PrivateRouter';
import { Products } from './pages/products/Products';
import { NewProduct } from './pages/products/NewProduct';
import { EditProduct } from './pages/products/EditProduct';
import { Order } from './pages/order/Order';





function App() {
  return (
    <div className="App">
<Browser>
<Routes>
  {/* // public router  */}
  <Route path='/' element={<LoginPage/>} />
  <Route path='/verify' element={<NewAccVerify/>} />
  <Route path='/resetpassword' element={<ResetPassword/>} />
  <Route path='/register' element={<RegisterPage/> } />
  
  {/* //Private router  */}
  <Route path='/dashboard' element={
    <PrivateRouter><Dashboard/></PrivateRouter>
 
  } />
  <Route path='/category' element={
    <PrivateRouter><Category/></PrivateRouter>
  
  } />
  <Route path='/paymentMethods' element={
    <PrivateRouter><PaymentMethods/></PrivateRouter>
  
  } />

<Route path='/products' element={
    <PrivateRouter><Products/></PrivateRouter>
  
  } />


<Route path='/product/new' element={
    <PrivateRouter><NewProduct/></PrivateRouter>
  
  } />

<Route path='/products/:_id' element={
    <PrivateRouter><EditProduct/></PrivateRouter>
  
  } />


<Route path='/order' element={
    <PrivateRouter> <Order/></PrivateRouter>
  
  } />
 

 


</Routes>
  </Browser>
<ToastContainer/>

    </div>
  );
}

export default App;
