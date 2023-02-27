import React from 'react'
import AddNewCatFrm from '../../components/category-forms/AddNewCatFrm'
import { CategoryTable } from '../../components/category-forms/CategoryTable'
import { AdminLoyout } from '../layout/AdminLoyout'

export const Category = () => {
  return (
    <div>
        <AdminLoyout>
            <div className='mt-3'>
                <h3>Category Mangement
                </h3>
                <hr/>
            </div>

        <AddNewCatFrm/>
        <CategoryTable/>

        </AdminLoyout>
    </div>
  )
}
