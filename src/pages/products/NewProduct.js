import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomeSelect } from '../../components/custome-select/CustomeSelect';
import { CustomeInputField } from '../../components/CustomeInputField/CustomeInputField';
import { fetchCats } from '../category/CategoryAction';
import { AdminLoyout } from '../layout/AdminLoyout'
import { postProductAction } from './productAction';

const initialState = {
  status: "inactive",
};

export const NewProduct = () => {
    const [formdt, setFormdt]= useState(initialState)
    const dispatch = useDispatch();
    const [newImages, setNewImages] = useState([]);

    const {cats} = useSelector((state)=> state.category)

    useEffect(()=>{
      !cats.length && dispatch(fetchCats())
    },[cats.length, dispatch])

    const handleOnChange = e =>{
        const {name, value}= e.target;

        setFormdt({
            ...formdt,
            [name]:value,
        })
    };

    const handleOnSubmit = e =>{
        e.preventDefault();

      console.log(formdt)
       const formData = new FormData();
      for (let key in formdt){
        formData.append(key, formdt[key]);
      }
      newImages.length && [...newImages].map((item)=> formData.append("images", item))
       dispatch(postProductAction(formData));
    }

    const handlOnImageUplodad = (e) => {
      const { files } = e.target;
  
      setNewImages(files);
    };

    const inputes = [{
        name: "name",
        Label: "Name",
        type: "text",
        placeholder: "Jordan 1 Low OG",
        required: true,
      },
      {
        name: "sku",
        Label: "Sku",
        type: "text",
        placeholder: "JOR-1-LOW",
        required: true,
      },
      {
        name: "qty",
        Label: "Qty",
        type: "number",
        placeholder: "Qlt No",
        required: true,
      },
      {
        name: "price",
        Label:"Price",
        type: "number",
        placeholder: "$100",
        required: true,
      },
      {
        name: "salesPrice",
        Label: "Sales Price",
        type: "number",
        placeholder: "$800",
      },
      {
        name: "salesStartDate",
        Label: "Sales Start Date",
        type: "date",
      },
      {
        name: "salesEndDate",
        Label: "Sales End Date",
        type: "date",
      },
      {
        name: "description",
        Label: "Description",
        as: "textarea",
        rows: 5,
        placeholder: "write detail information abou the product",
        required: true,
      },
      {
        name: "images",
        Label: "Images",
        type: "file",
        multiple: true,
        required: true,
        accept: "image/*",
      },
    ];

  return ( 
<AdminLoyout>
  <Container className='py-2 mt-2 add-product-page'>
  <div className='py-3 fs-2'> New Products</div>
    <Link to="/products">{""}
      <Button variant='secondary'>&lt; Back</Button></Link>
    <hr/>
    <Form onSubmit={handleOnSubmit}>
        <Form.Group className='mb-3'>
            <Form.Check 
            name="status"
            type="switch"
            label="Status"
            >
            </Form.Check>
        </Form.Group>
        
        <CustomeSelect
        label="Category"
         args={cats} 
         func={handleOnChange}
          name="parentCat"/>

        {inputes.map((item, i) => (
            <CustomeInputField
              key={i}
              {...item}
              onChange={
                item.name === "images" ? handlOnImageUplodad : handleOnChange
              }
            />
          ))}
        <div className="d-grid">
            <Button type="submit" variant="danger">
              Add Product
            </Button>
          </div>


    </Form>
  </Container>
 
    
</AdminLoyout>

    
  )
}
