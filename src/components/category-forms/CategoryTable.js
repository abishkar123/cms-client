import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCat, fetchCats } from '../../pages/category/CategoryAction';
import { setShowModal } from '../../system/SystemSlice';
import { CustomModal } from '../custom-modal/CustomeModal';
import { EditCatFrm } from './EditCatFrn';


export const CategoryTable = () => {
 const dispatch = useDispatch();

 const {cats} = useSelector((state)=> state.category);
 const [selectCat, setSelectedCat] = useState({});

 useEffect(()=>{
  dispatch(fetchCats())
 }, [dispatch])

 const handleOnDelete = (_id) => {
  if (window.confirm("Are you sure you want to delete this category?")) {
    dispatch(deleteCat(_id));
  }
};
const handleOnEdit = (item) => {
  setSelectedCat(item);
  dispatch(setShowModal(true));
};

  return (
    <div className="mt-5">
      <div>{cats.length} categories found!</div>
      <CustomModal show={false} title="Update category">
        <EditCatFrm selecteCat={selectCat} />
      </CustomModal>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th> Name</th>
          <th>Slug</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      
      {cats?.length > 0 &&
            cats.map((item, i) => (
              <tr key={item?._id}>
                <td>{i + 1}</td>
                <td
                  className={`text-${
                    item.status === "active" ? "success" : "danger"
                  }`}
                >
                  {item.status}
                </td>
                <td>{item.name}</td>
                <td>{item.slug}</td>
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
  )
}
