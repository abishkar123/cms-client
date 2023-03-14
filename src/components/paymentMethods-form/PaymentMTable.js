import Table from 'react-bootstrap/Table';
import { Button,Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deletepaymentMAction, fetchPays, updatepaymentMAction } from '../../pages/paymentmethods/paymentMAction';
import { setShowModal } from '../../system/SystemSlice';
import Pagination from 'react-bootstrap/Pagination';

const itemsPerTable = 4;

export const PaymentMTable =()=> {

 
  const dispatch = useDispatch();
  const [selectPaymentM, SetSelectPaymentM]=useState({})

  const [showPayments, setShowPayments] = useState([]);
  const {paymentMethods} = useSelector((state)=>state.payments);

  const [active ,setActive]= useState(1)

  useEffect(()=>{
  if(!showPayments.length){
    dispatch(fetchPays());
    setShowPayments(paymentMethods);
  }
 
  },[dispatch, paymentMethods, showPayments]);

  const handleOnEdit = (ite)=>{
    SetSelectPaymentM(ite);
    dispatch(setShowModal(true));
  
  };

  const startItem = (active - 1) * itemsPerTable;
  const enditem =  startItem + itemsPerTable;
  
let items = [];
const numberOPPage = Math.ceil(showPayments.length / itemsPerTable);
for (let number = 1; number <= numberOPPage; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}
    onClick={()=>handleonplagination(number)}>
     
      {number}
    </Pagination.Item>,
  );
}

const handleonplagination = num =>{
  setActive(num);
}

  const handleOnChange =(e)=>{
   const {value} = e.target;
   const tempArg = paymentMethods.filter(({ name }) => {
    return name.toLowerCase().includes(value.toLowerCase());
  });

   setShowPayments(tempArg); 
  }

  const handleOnDelete = (_id)=>{
    if(window.confirm("Are you sure you want to delete the payment Method")){
      dispatch(deletepaymentMAction(_id));
    }
  }

  const handleOnSwitch = (e)=>{
    const {checked, value} =e.target;
    const valArg = value.split("|");

    if(window.confirm("Are you sure you want to change the status?")){
      const obj={
        _id: valArg[0],
        name: valArg[1],
        description: valArg[2],
        status: checked ? "active": "inactive",
      
  
      };
      dispatch(updatepaymentMAction(obj));
    }
  };

  const onPaymentMNameChange = (e)=>{
    const { value} = e.target;

    SetSelectPaymentM({
      ...selectPaymentM,
      name:value,
    });
  };

  const handleOnSave = () =>{
    const {_id, name, status, description} = selectPaymentM;
    if(window.confirm("Are you sure you want to change the status?")){
      dispatch(updatepaymentMAction({_id, name, status, description}))
      SetSelectPaymentM({});
    }

  }


  return (
    <div className='mt-5'>
  
      <div className='d-flex justify-content-between mb-2'>
      <div>{showPayments.length} Payment Method found !</div>
      <div className='d-flex align-items-centerss'>
        <label> Search:</label>{""}
        <Form.Control
        onChange={handleOnChange}
        placeholder="Search by name"/>
      </div>
      </div>
    
    
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Payment Name</th>
          <th>Payment Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        { showPayments?. length > 0 &&
        showPayments.map((item, i)=> 
         i >= startItem && i < enditem && 
        (<tr key={item?._id}> 
            <td>{i+1}</td>
            <td>
              <Form.Check
              type='switch'
              checked={item.status === "active"}
              value={item._id + "|" + item.name  +
              "|"+ item.description} 
              onChange={handleOnSwitch}
              
              />
            </td>
          <td>
            {selectPaymentM._id === item._id? (
              <Form.Control 
              value={selectPaymentM.name} onChange={onPaymentMNameChange}/>
            ):( 
              item.name
            )}
          </td>
         
           <td>
            {item.description}
          
           </td>

           {selectPaymentM._id === item._id  ?(
          
            <td>
              <Button onClick={handleOnSave} variant="success">Saves</Button>{""}
              <Button onClick={()=> handleOnEdit({})} variant="info">Cancel</Button>

            </td>
           ):(
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

           )}

          </tr>
        ))}
        
      </tbody>
    </Table>
    <div>
    <Pagination size='lg'>{items}</Pagination>
    <br />

    
    
  </div>


    </div>
   
  );
}

