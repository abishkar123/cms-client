import React,{useEffect, useRef} from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { autoLogin, loginAction } from './authAction';
import {Spinner} from 'react-bootstrap'
import { useNavigate,Link, useLocation } from 'react-router-dom';


export const LoginPage = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passRef = useRef("");
  const {isLoading, user} = useSelector((state)=> state.user)
  const navigate = useNavigate();
  const location = useLocation();


  const origin = location?.state?.from?.pathname || "/dashboard";

  const handleOnSubmit = e =>{
    e.preventDefault();

    const formDt= {
       email: emailRef.current.value,
       password: passRef.current.value,
    }
   // call axios helper to call the api 
    if(!formDt.email || !formDt.password){
      return alert("please fill in the both the fields")
    }
    dispatch(loginAction(formDt))
  }

  useEffect(()=>{
    user?._id ? navigate(origin) : dispatch(autoLogin());
    // TODO: make router private and auto login
  },[user?._id, navigate, origin,dispatch])


  return (
    <div>
    <Header/>
    <div className="main login-page">
    <Form className='shoadow-lg rounded' onSubmit={handleOnSubmit} required>
      <h3 className='text-center'> Login Page</h3>
      <hr className='mb-5'/>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        ref={emailRef} 
        type="email"
         placeholder="Enter email"
        required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        ref={passRef}
        type="password"
         placeholder="Password"
        required />
      </Form.Group>
      
      <div className='d-grid'>
      <Button variant="primary" type="submit">
        {isLoading?
        <Spinner variant='warning' animation='border '/>: "submit"}
       
      </Button>
      <hr/>
     <span>Can't access your account? </span>
      <Link to="/resetpassword" className='nav-link bg-bolder' >Forget Password</Link>

      </div>
      
      

    </Form>
      
    </div> 
    <Footer/>
    </div>
  )
}
