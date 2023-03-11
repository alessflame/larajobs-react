import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../slices/filterSlice";
import JobAdsSlice from "../slices/JobAdsSlice";
import modalSlice from "../slices/modalSlice";
import authSlice from "../slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        filter: filterSlice,
        jobAds: JobAdsSlice,
        modal: modalSlice,
    },
});
