import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProductTable } from '../../components/Custome-table/ProductTable'
import { AdminLoyout } from '../layout/AdminLoyout'


export const Products = () => {
  return (
    <div>
        <AdminLoyout>
            <div className='product py-3'>
                <h3>Product mgnt:</h3>
            </div>

            <div className='text-end'>
                <Link to="/product/new">
                <Button variant='outline-warning'>
                <i class="fa-solid fa-plus"></i>
                Add New Product

                </Button>
                </Link>
                <hr/>
                <ProductTable/>

            </div>
        </AdminLoyout>
        </div>
  )
}
