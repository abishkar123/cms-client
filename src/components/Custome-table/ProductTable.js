import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproductAction, getProductAction } from '../../pages/products/productAction';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';


const itemsPerTable = 3;
export const ProductTable = () => {
  const [active ,setActive]= useState(1)
  const [showproduct, setShowproduct] = useState([]);
  
  const dispatch=useDispatch()
  const {products} = useSelector((state)=> state.product);

  const startItem = (active - 1) * itemsPerTable;
  const enditem =  startItem + itemsPerTable;
  
let items = [];
const numberOPPage = Math.ceil(showproduct.length / itemsPerTable);
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
  const tempArg = products.filter(({ name }) => {
   return name.toLowerCase().includes(value.toLowerCase());
 });

  setShowproduct(tempArg); 
 }

  useEffect(()=>{
    if(!showproduct.length){
      dispatch(getProductAction());
      setShowproduct(products)
    }
    
  }, [dispatch, products, showproduct])

  const handleOnDelete = (_id)=>{
    if(window.confirm("Are you sure you want to delete the prouct")){
      dispatch(deleteproductAction(_id))
    }
  }
 
  return (
    <div className="">
    <div className="mb-2">
      <select>
        <option value="">All</option>
        <option value="">Active</option>
        <option value="">Inactive</option>
      </select>
    </div>
    <div>{showproduct.length} Payment Method found !</div>
      <div className='d-flex align-items-centerss'>
        <label> Search:</label>{""}
        <Form.Control
        onChange={handleOnChange}
        placeholder="Search by name"/>
      </div>
    <Table striped bordered hover>
      <thead>
        <tr>
        <th>#</th>
            <th> Thumbnail</th>
            <th> Status</th>
            <th> Name</th>
            <th>Price</th>
            <th>Sales Price</th>
            <th>Qty</th>
            <th>Edit</th>
        </tr>
      </thead>
      <tbody>
      {products.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={"http://localhost:8000/" + item?.mainImage.substr(6)}
                  width="80px"
                  alt="photos"
                />
              </td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.salesPrice}</td>
              <td>{item.qty}</td>

              <td>
                <Link to={`/products/${item._id}`}>
                <Button variant="warning">
                  <i className="fa-solid fa-pen-to-square"></i> Edit
                </Button></Link>
                {""}
                <Button 
                onClick={() => handleOnDelete(item._id)}
                 variant="danger">
                <i class="fa-solid fa-trash"></i> Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
    <div>
    <Pagination size='lg'>{items}</Pagination>
    <br />
  </div>
    </div>

  )
}
