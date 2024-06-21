import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // every method will automatically revice latest state. And they will be called for you by redux.
      /* => Here we are allowed to mutate existing state BCZ redux toolkit internally uses another package which is "immer", 
        which will detect code like this and which will automatically clone the existing state, create a new state object, 
        keep all the state we are not editing, and override the state which we are editing in an immutable way*/
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
