import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";
import catReducer from "./pages/category/CategorySlice";
import systemReducer from "./system/systemSlice";
import paymentMReducer from "./pages/paymentmethods/PaymentMSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    category: catReducer,
    system: systemReducer,
    payments: paymentMReducer,
  },
});

export default store;