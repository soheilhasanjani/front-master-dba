import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { isDark: boolean } = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setIsDark: (state, action: PayloadAction<boolean | undefined>) => {
      //
      const finalState =
        action.payload === undefined ? !state.isDark : action.payload;
      //
      state.isDark = finalState;
      if (finalState) {
        document.querySelector("html")?.classList.add("dark");
      } else {
        document.querySelector("html")?.classList.remove("dark");
      }
    },
  },
});

export const { setIsDark } = themeSlice.actions;

export default themeSlice.reducer;
