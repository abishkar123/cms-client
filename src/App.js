import { Button } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Browser,Route, Router,Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import { NewAccVerify } from './pages/verify/NewAccVerify';


function App() {
  return (
    <div className="App">
<Browser>
<Routes>
  <Route path='/' element={<LoginPage/>} />
  <Route path='/register' element={<RegisterPage/>} />
  <Route path='/verify' element={<NewAccVerify/>} />
</Routes>
  </Browser>


    </div>
  );
}

export default App;
