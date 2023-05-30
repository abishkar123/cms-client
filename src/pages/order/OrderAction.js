import { toast } from "react-toastify";
import { deleteorder, getOrder } from "../../helps/axios"
import {setOrders} from "./OrderSlice"


export const fetchorder = () => async (dispatch)=>{
    const{ status, order} = await getOrder();
   
  

    status === "success" && dispatch(setOrders(order))
};


export const deleteorderAction = (_id) => async (dispatch) => {
    const resultPending = deleteorder(_id);
   
  
    toast.promise(resultPending, {
      pending: "please wait ....",
    });
  
    const { status, message } = await resultPending;
  
    toast[status](message);
  
    status === "success" && dispatch(fetchorder());
  };

