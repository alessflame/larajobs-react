import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        open: false,
        value: { title: "", text: "" },
        status: true,
        error: false,
    },
    reducers: {
        isOpen: (state, action) => {
            state.open = true;
            state.value.title = action.payload.title;
            state.value.text = action.payload.text;
            state.value.button = null;
            state.value.callback = null;
        },
        isClose: (state) => {
            state.open = false;
            state.value.title = "";
            state.value.text = "";
        },
    },
});

// Action creators are generated for each case reducer function
export const { isOpen, isClose } = modalSlice.actions;

export default modalSlice.reducer;
