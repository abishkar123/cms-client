
import { toast } from "react-toastify";
import { deleteaxiospaymentM, fetchCategory, fetchPaymentM, postpaymentMethod, updateaxiospaymentM } from "../../helps/axios";
import { setPaymentMethods} from "./PaymentMSlice";


export const fetchPays = () => async (dispatch) => {
    const { status, result} = await fetchPaymentM();
    status === "success" && dispatch(setPaymentMethods(result));
  };

 
export const postNewPaymentM= (data) =>async dispatch =>{
    const resultPending = postpaymentMethod(data);

    toast.promise(resultPending, {
        pending: "please wait...."
    })

    const { status, message} = await resultPending;
    console.log(status)
    toast[status](message);
    
    
  status === "success" && dispatch(fetchPays());
}


export const deletepaymentMAction = (_id) => async (dispatch) => {
  const resultPending = deleteaxiospaymentM(_id);
  

  toast.promise(resultPending, {
    pending: "please wait ....",
  });

  const { status, message } = await resultPending;
  toast[status](message);
  

  status === "success" && dispatch(fetchPays());
};

export const updatepaymentMAction = (data) => async (dispatch) => {
  const resultPending = updateaxiospaymentM(data);

  toast.promise(resultPending, {
    pending: "please wait ....",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchPays());
};