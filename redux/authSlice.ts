import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
  isLogin: boolean;
  isChecked: boolean;
}

const initialState: StateType = {
  isLogin: false,
  isChecked: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isChecked = true;
      state.isLogin = action.payload;
    },
  },
});

export const { setIsLogin } = authSlice.actions;

export default authSlice.reducer;
