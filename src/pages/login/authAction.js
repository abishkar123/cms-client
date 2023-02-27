import { toast } from "react-toastify"
import { loginadmin } from "../../helps/axios"
import { requestPending, requestSuccess } from "./authSlice"

export const loginAction = (formdata)=> async (dispatch)=>{
   try{
    dispatch(requestPending())

    //call axios-helper /api
 const pendingResp =  loginadmin(formdata)
toast.promise( pendingResp, { pending: "Please wait...."})
const{status,message,user} =  await pendingResp;

toast[status](message);
status === "success"
? dispatch(requestSuccess(user))
: dispatch(requestSuccess({})); 
}catch(error){
    return{
        status: "error",
        message: error.message,
    }
}
}
