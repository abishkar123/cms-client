import React, { useEffect, useState } from 'react'
import { AdminLoyout } from '../layout/AdminLoyout'
import { Button, Col, Container, Form, InputGroup, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchorder } from './OrderAction'
import { useParams } from 'react-router-dom'
import { setShowModal } from '../../system/SystemSlice'
import { CustomModal } from '../../components/custom-modal/CustomeModal'
import { Editordertable } from './Editordertable'

export const EditOrder = ({selectCat}) => {
const [paymentname, setpaymentname] = useState({})

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchorder())
  },[dispatch])
const {orders} = useSelector((state)=>state.order)
 console.log(orders)
const{_id}=useParams()
// const {_id, ...rest} = orders
const fillteredorder= orders.length? orders.find((item)=>item._id === _id):[]


const handleOnEdit = ()=>{
  setpaymentname();
  dispatch(setShowModal(true));

};

const onPaymentMNameChange = (e)=>{
  const { value} = e.target;

  setpaymentname({
    ...setpaymentname,
    name:value,
  });
};

  return (
    <AdminLoyout>
      <Container className='mt-3 '>
        <h3 className='checkoutfonttext'>Customer Order list page</h3>
        <hr/>
        <Row className="md-3 checkoutfonttext  ">
          
        
          <Col className='boxcheckout'>
          <h5>Customer Details</h5>
          <hr/>
          <InputGroup className='initial-scale=1'>Customer Name:  {fillteredorder.fname} {fillteredorder.lname}</InputGroup>
          <InputGroup >Email:  {fillteredorder.email}</InputGroup>
         
          <InputGroup >Phone Number: {fillteredorder.phonenumber}</InputGroup>
          </Col>
      
       
         <Col className='boxcheckout py-3'>
          <h5>Customer Address Details</h5>
          <hr/>
          <InputGroup>Address Line:  {fillteredorder.addressline} 
          {fillteredorder.lname}</InputGroup>
          <InputGroup>Town:  {fillteredorder.town}</InputGroup>
         
          <InputGroup >State: {fillteredorder.state}</InputGroup>
          <InputGroup>Posscode: {fillteredorder.posscode}</InputGroup>

          </Col>
        </Row>

      <Row className='mt-3 py-3'>
      <CustomModal show={false} title="Update category">

        <Editordertable selecteCat={selectCat} />
      </CustomModal>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Payment Details</th>
          <th>Number Of item</th>
          <th>Total Amount</th>
          <th>Payment Status </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{fillteredorder.paymentDetails?.paymentmethods}</td>
          <td>{fillteredorder.cart.length}</td>
          <td>{fillteredorder.paymentDetails?.totalAmount}</td>
          <td>
          
              {fillteredorder.paymentDetails?.paymentStatus}
    
            </td>

          <td><Button onClick={()=>handleOnEdit()} variant="warning">
                  <i className="fa-solid fa-pen-to-square" title='Edit Payment Details'></i>
                </Button></td>
        </tr>
       
      </tbody>
    </Table>
      </Row>

       


        {/* <Form className='mt-3 boxcheckout checkoutfonttext'>
          <h5>Payment Details</h5>
          <hr/>
          <InputGroup >Payment Method: {fillteredorder.paymentDetails?.paymentmethods}</InputGroup>
          <InputGroup >Payment Amount:$ {fillteredorder.paymentDetails?.totalAmount}</InputGroup>
          <InputGroup > Number of Item:{fillteredorder.cart.length}</InputGroup>
          <InputGroup as={Col} md="6" > Payment Status: 
                   <Form.Select size='sm' as="select"  
                  //  onChange={handleOnChange}
                    required name="paymentStatus">
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="unpaid">UnPaid</option>
                    </Form.Select>
          </InputGroup>
          
        </Form> */}


      </Container>

    </AdminLoyout>
    
  )
}
