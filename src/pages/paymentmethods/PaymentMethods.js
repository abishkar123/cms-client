import React from 'react'
import { PaymentMethodsForm } from '../../components/paymentMethods-form/PaymentMethodsForm'
import { PaymentMTable } from '../../components/paymentMethods-form/PaymentMTable'
import { AdminLoyout } from '../layout/AdminLoyout'



export const PaymentMethods = () => {
  return (
    <div>
        <AdminLoyout>
        <div className='mt-3'>
                <h3>Payment Methods
                </h3>
                <hr/>
                
            </div>
            <PaymentMethodsForm/>
            <PaymentMTable/>
        </AdminLoyout>
        
    </div>
  )
}
