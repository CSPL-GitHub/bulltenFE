import { createSlice, PayloadAction } from "@reduxjs/toolkit";




const initialState: any = {
  code: {},
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
