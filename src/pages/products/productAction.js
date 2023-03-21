
import { setProducts } from "./productSlice";
import { toast } from "react-toastify";
import {  deleteproduct, fetchProduct, postProduct } from "../../helps/axios";

export const getProductAction = () => async (dispatch) => {
  const { status, products } = await fetchProduct();

  status === "success" && dispatch(setProducts(products));
};

export const postProductAction = (obj) => async (dispatch) => {
  const respPromise = postProduct(obj);

  toast.promise(respPromise, {
    pending: "Please wait....",
  });

  const { status, message } = await respPromise;

  toast[status](message);

  status === "success" && dispatch(getProductAction());
};


export const deleteproductAction = (_id) => async (dispatch) => {
  const resultPending = deleteproduct(_id)
  
  toast.promise(resultPending, {
    pending: "please wait ....",
  });

  const { status, message } = await resultPending;
  toast[status](message);
  

  status === "success" && dispatch(fetchProduct());
};