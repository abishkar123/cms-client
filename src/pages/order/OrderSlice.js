import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    order: {},
}
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
      setOrders: (state, { payload = [] }) => {
       
        state.order = payload;
      },
    },
  });

const { reducer, actions }= orderSlice;
export const {setOrders} = actions;
export default reducer;