import { createSlice } from "@reduxjs/toolkit";

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState: {
    name: "",
    email: "",
    phone: "",
  },
  reducers: {
    setPersonalInfo: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});

export const { setPersonalInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;