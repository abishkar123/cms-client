import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    cats: [],
}
const catSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
      setCats: (state, { payload = [] }) => {
       if(!state.cats.length && !payload.length){
        return;
       }
        state.cats = payload;
      },
    },
  });

const { reducer, actions }= catSlice;
export const {setCats} = actions;
export default reducer;