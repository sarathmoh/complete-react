// import cartReducer from "./cartSlice";
import cartReducer from "./cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    cartInfo: cartReducer,
  },
});

export default appStore;
