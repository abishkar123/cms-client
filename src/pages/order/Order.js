import React, { useEffect } from 'react'
import { AdminLoyout } from '../layout/AdminLoyout'

import { useDispatch} from 'react-redux'
import { fetchorder } from './OrderAction'
import { OrderTable } from './OrderTable'
export const Order = () => {
   const dispatch = useDispatch()

  
   useEffect(()=>{
        dispatch(fetchorder())
   },[dispatch])
    
   
  return (
    <div>
        <AdminLoyout>
        <h3 className='mt-3 p-3 text-center'>Order Table</h3>

        <OrderTable/>

        </AdminLoyout>
      
    </div>
  )
}
