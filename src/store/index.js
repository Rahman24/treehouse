import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "store/slices/modal";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
