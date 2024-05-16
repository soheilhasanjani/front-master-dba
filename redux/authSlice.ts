import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { isLogin: boolean } = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setIsLogin } = authSlice.actions;

export default authSlice.reducer;
