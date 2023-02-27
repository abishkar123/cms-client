import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deletepaymentMAction, fetchPays } from '../../pages/paymentmethods/paymentMAction';
import { CustomModal } from '../custom-modal/CustomeModal';
import { EditPayForm } from './EditPayForm';
import { setShowModal } from '../../system/systemSlice';

export const PaymentMTable =()=> {
  const dispatch = useDispatch();
  const [selectPaymentM, SetSelectPaymentM]=useState({})
  const {paymentMethods} = useSelector((state)=>state.payments);

  useEffect(()=>{
    dispatch(fetchPays())
  },[dispatch]);

  const handleOnEdit = (ite)=>{
    SetSelectPaymentM(ite);
    dispatch(setShowModal(true));
  
  }
  const handleOnDelete = (_id)=>{
    if(window.confirm("Are you sure you want to delete the payment Method")){
      dispatch(deletepaymentMAction(_id));
    }
  }

  return (
    <div className='mt-5'>
      <div>{paymentMethods.length} Payment Method found !</div>
     <CustomModal show={false} title="update payment paymenet Methods">
  <EditPayForm selectPaymentM={selectPaymentM}/>
     </CustomModal>
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Payment Name</th>
          <th>Payment Description</th>
        </tr>
      </thead>
      <tbody>

        { paymentMethods?. length > 0 &&
        paymentMethods.map((item, i)=>(
          <tr key={item?._id}>
            <td>{i+1}</td>
           <td>{item.status}</td>
           <td>{item.name}</td>
           <td>{item.description}</td>

           <td>
                  <Button
                   onClick={() => handleOnEdit(item)}
                    variant="warning">
                    Edit
                  </Button>{" "}
                  <Button
                    onClick={() => handleOnDelete(item._id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  </td>

          </tr>
        ))}
        
      </tbody>
    </Table>
    </div>
   
  );
}

