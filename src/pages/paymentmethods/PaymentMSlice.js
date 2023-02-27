import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    paymentMethods: {},
}
const paymentMethodsSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
      setPaymentMethods: (state, { payload = [] }) => {
        console.log(payload);
        state.paymentMethods = payload;
      },
    },
  });

const { reducer, actions }= paymentMethodsSlice;
export const {setPaymentMethods} = actions;
export default reducer;