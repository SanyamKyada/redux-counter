import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  // These individual reducers here will be merged togather  into one main reducer
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
/*If we have single state slice, we can configure it direct instead of inside the object*/
//reducer: counter: counterSlice.reducer,

export default store;
