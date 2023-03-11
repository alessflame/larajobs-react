import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
    status: true,
    error: false,
  },
  reducers: {
    setFilter: (state, action = "") => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
