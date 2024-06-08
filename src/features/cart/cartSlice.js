import { createSlice} from "@reduxjs/toolkit";
const initialState = []

  const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add: (state, action)=> {
         state.push(action.payload)
        },
        removeItems: (state, action)=> {
          return state.filter(item=> item.id !==action.payload )
        }
    }
})
export const {add, removeItems} = cartSlice.actions
export default cartSlice.reducer