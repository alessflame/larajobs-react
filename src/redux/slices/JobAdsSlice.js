import { createSlice } from "@reduxjs/toolkit";

export const jobAdsSlice = createSlice({
  name: "jobAds",
  initialState: {
    value: [],
    isLoad:false,
    status: true,
    error: false,
  },
  reducers: {
    addJobAds: (state, action) => {
      state.value = action.payload;
      state.isLoad=true;
    },
    emptyJobAds: (state) => {
      state.value = [];
      state.isLoad=false;
    },
  },
});

export const { addJobAds,emptyJobAds } = jobAdsSlice.actions;

export default jobAdsSlice.reducer;
