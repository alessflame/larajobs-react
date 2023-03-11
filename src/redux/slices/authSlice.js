import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLogged: false,
    status: true,
    error: false,
  },
  reducers: {
    setIsLogged: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.isLogged = false;
    },
  },
});

export const { setIsLogged, setLogout } = authSlice.actions;

export default authSlice.reducer;
