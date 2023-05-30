import axios from 'axios'
const rootUrl = process.env.REACT_APP_DOMAIN + "api/v1";
const adminApi = rootUrl + "/admin";
const catApi = rootUrl + "/category";
const payMApi = rootUrl + "/paymentMethods"
const productApi = rootUrl + "/product";
const orderApi = rootUrl + "/orders";

 

//admin
const fetchProcesser = async ({ method, url, data, token, isPrivate})=>{
  try {
    // await axios.post(adminApi + "/register", data);
    const jwtToken = token || sessionStorage.getItem("accessJWT");
   
    const headers = isPrivate
      ? {
          Authorization: jwtToken,
        }
      : null;

    const res = await axios({
      method,
      url,
      data,
      headers,
    });

    return res.data;
  } catch (error) {
    const message = error.message;

    if (error?.response?.data?.message === "jwt expired") {
      const { accessJWT } = await fetchNewAccessJWT();
      sessionStorage.setItem("accessJWT", accessJWT);
      return fetchProcesser({ method, url, data, isPrivate, token: accessJWT });
    }

    return {
      status: "error",
      message: error.message,
    };
  }



//   try{
  
//     const res = await axios({
//       method,
//       url, 
//       data,
//       headers: isPrivate 
     

      
//     });
// return res.data;
// }catch(error){
//     return{
//    status:error,
//    message: error.message,
//     }
// }
};

export const postNewAdmin = async (data) =>{
        const url = adminApi +"/register";
        const obj = {
          method: "post",
          url,
          data,
        }
    return fetchProcesser(obj);
    
}

export const postEmailVerification = async (data) => {
  
      const url = adminApi + "/verify";
      const obj={
        method: "post",
        url,
        data,
      }
      return fetchProcesser(obj);
   
    
  };


export const loginadmin = async (logindata)=>{
  const url = adminApi + "/login";
  const obj = {
    method: "post",
    url,
    data: logindata,
  };
  return fetchProcesser(obj);
};
/// fetchadminprofile
export const fetchadminprofile = async ()=>{
  const url = adminApi + "/user-profile";
  const obj = {
    method: "get",
    url,
   isPrivate: true,
  };
  return fetchProcesser(obj);
};

// Reset passwork

export const resetpassaxios = async (data) => {
  try {
    const res = await axios.post(adminApi + "/resetPassword", data);
    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchOtpRequest = async (data) => {
  const url = adminApi + "/request-otp";
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchProcesser(obj);
};

export const resetPassRequest = async (frmDt) => {
  const url = adminApi + "/reset-password";
  const obj = {
    method: "patch",
    url,
    data:" frmDt",
  };
  return fetchProcesser(obj);
};


//category

export const postCategory = async (data)=>{
  const url = catApi;
  const obj={
    method: "post",
    url,
    data,
    isPrivate:true,
  }
  return fetchProcesser(obj)
}
export const fetchCategory = async () => {
  const url = catApi;
  const obj = {
    method: "get",
    isPrivate:true,
    url,
  };
  return fetchProcesser(obj);
}
export const deleteCategory = async (_id) => {
  const url = catApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
    isPrivate:true,
  };
  return fetchProcesser(obj);
};
export const updateCategory = async (data) => {
  const url = catApi;
  const obj = {
    method: "put",
    url,
    data,
    isPrivate:true,
  };
  return fetchProcesser(obj);
};

// Payment Methods


export const postpaymentMethod= (data)=>{
  const url = payMApi
  const obj= {
  method:"post",
  url,
  data,
  isPrivate:true,


  }
  return fetchProcesser(obj);

 };

 export const fetchPaymentM = async () => {
  const url = payMApi;
  const obj = {
    method: "get",
    url,
    isPrivate:true,
  };
  return fetchProcesser(obj);
}

export const deleteaxiospaymentM = async (_id) => {
  const url = payMApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
    isPrivate:true,
  };
  return fetchProcesser(obj);
};

export const updateaxiospaymentM = async (data) => {
  const url = payMApi;
  const obj = {
    method: "put",
    url,
    data,
    isPrivate:true,
  };
  return fetchProcesser(obj);
};

export const fetchNewAccessJWT = async () => {
  const url = adminApi + "/new-accessjwt";
  const token = localStorage.getItem("refreshJWT");
  
  const obj = {
    method: "get",
    url,
    isPrivate: true,
    token,
  };
  return fetchProcesser(obj);
};

///====== Products API
export const fetchProduct = async (_id) => {
  const url = _id ? productApi + "/" + _id : productApi;
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const postProduct = async (data) => {
  const url = productApi;
  const obj = {
    method: "post",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const deleteproduct= async (data) => {
  const url = productApi;
  const obj = {
    method: "delete",
    url,
    data,
    isPrivate:true,
  };
  return fetchProcesser(obj);
};

export const updateproduct= async (data) => {
  const url = productApi;
  console.log(data)
  const obj = {
    method: "put",
    url,
    isPrivate:true,
    data
  };
  return fetchProcesser(obj);
};


//=== order API 
export const getOrder= async (data) => {
  const url = orderApi;
  const obj = {
    method: "get",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};



export const deleteorder = async (_id) => {
  const url = orderApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
    isPrivate:true,
  };
  return fetchProcesser(obj);
};
