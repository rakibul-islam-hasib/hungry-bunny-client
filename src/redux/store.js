import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import utilsSlice from "./slices/utilsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    utils: utilsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;