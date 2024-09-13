import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  code: string;
}


const initialState: any = {
  code: "Ind",
};

export const currencySlice = createSlice({
  name: "Currency",
  initialState,
  reducers: {
    setCurrencyCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
  },
});

export const { setCurrencyCode } = currencySlice.actions;

export default currencySlice.reducer;
