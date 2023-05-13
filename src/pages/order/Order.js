import React, { useEffect } from 'react'
import { AdminLoyout } from '../layout/AdminLoyout'

import { useDispatch, useSelector } from 'react-redux'
import { fetchorder } from './OrderAction'
export const Order = () => {
   const dispatch = useDispatch()

  
   useEffect(()=>{
    dispatch(fetchorder())

   },[dispatch])
    
   
  return (
    <div>
        <AdminLoyout>
    


        </AdminLoyout>
      
    </div>
  )
}
