import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteorderAction, fetchorder } from './OrderAction';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export const OrderTable =()=> {

    const dispatch = useDispatch()
    const {orders} = useSelector((state)=>state.order)

    const { cart, payementDetails, ...rest} = orders
    
    // const {_id} = useParams()

    // const filterused = orders.length? orders.find((item)=>item._id === _id):[]
    // console.log(filterused)

    const handleOnDelete = (_id) => {
      if (window.confirm("Are you sure you want to delete this Order?")) {
        dispatch(deleteorderAction(_id));
      }
    };
   
    useEffect(()=>{
         dispatch(fetchorder())
    },[dispatch])
 

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>OrderId</th>
          <th>items</th>
          <th>Fname</th>
          <th>Lname</th>
          <th>Email</th>
          <th>Payment Status</th>
          <th>Payment Amount</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
{orders?.length > 0 && 
orders.map((item, i)=>(
 <tr key={item?._id}>
    <td>{i+1}</td>
    <td>{item.cart?.length}</td>
    <td>{item.fname}</td>
    <td>{item.lname}</td>
    <td>{item.email}</td>
    <td>{item.paymentDetails?.isPaid}</td>
    <td>${item.paymentDetails?.totalAmount}</td>
  

    <td> <Link to={`/order/${item._id}`}>
       <Button variant="warning"><i className="fa-solid fa-pen-to-square" title='View Order'></i></Button></Link> {" "}
       <Button onClick={()=>handleOnDelete(item?._id)}
       variant='danger'> <i class="fa-solid fa-trash"title='Delete Order' ></i> </Button>
             </td>
    
   





 </tr>
)
)}
      </tbody>
    </Table>
  );
}
