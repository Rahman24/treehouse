import { createSlice } from "@reduxjs/toolkit";

const initialState = { logoModal: { open: false, data: null } };

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLogoModal: (state, action) => {
      state.logoModal = { open: true, data: action.payload };
    },
    closeLogoModal: (state) => {
      state.logoModal = { open: false, data: null };
    },
  },
});

// Action creators are generated for each case reducer function
export const { openLogoModal, closeLogoModal } = modalSlice.actions;

export default modalSlice.reducer;
