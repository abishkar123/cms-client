import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { postNewPaymentM } from '../../pages/paymentmethods/paymentMAction';

export const PaymentMethodsForm = () => {
    const [paydata, setPaydate] = useState({});
   const dispatch = useDispatch();

    const handleOnChange = e=>{
        const{name,value}=e.target;

        setPaydate({
            ...paydata,
            [name]:value,
        })
    };

    const handleOnSubmit = (e)=>{
       e.preventDefault(); 
       dispatch(postNewPaymentM(paydata));

      
    }


  return (
    <div className=''>
    <Form onSubmit={handleOnSubmit} required>
      
<Row>
    <Col md="6">
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
        type="text"
        name='name'
         placeholder="Ether the Payment Name"
        required 
        onChange={handleOnChange}/>
      </Form.Group></Col>
    <Col md="6">
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
        type="text"
        name='description'
         placeholder="Enter Payment Description"
        required
        onChange={handleOnChange} />
      </Form.Group>
      </Col>
<Col>
<div className='d-grid'>
      <Button variant="primary" type="submit">
        ADD
       
      </Button>
  
    
      </div>
</Col>

</Row>

     

    </Form> 
    </div>
  )
}
