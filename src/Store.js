import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";
import catReducer from "./pages/category/CategorySlice";
import systemReducer from "./system/SystemSlice";
import paymentMReducer from "./pages/paymentmethods/PaymentMSlice";
import productReducer from "./pages/products/productSlice";
import orderReducer from "./pages/order/OrderSlice"
const store = configureStore({
  reducer: {
    user: authReducer,
    category: catReducer,
    system: systemReducer,
    payments: paymentMReducer,
    product: productReducer,
    order: orderReducer,
  },
});

export default store;