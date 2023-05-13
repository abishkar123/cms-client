import { getOrder } from "../../helps/axios"
import { setOrders } from "./OrderSlice";

export const fetchorder = () => async (dispatch)=>{
    const{ status, order} = await getOrder();
    console.log(order)

    status === "sucess" && dispatch(setOrders(order));
};