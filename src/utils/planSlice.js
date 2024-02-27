import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    plan: "",
    tenure: ""
  },
  reducers: {
    setPlan: (state, action) => {
      state.plan = action.payload.plan;
      state.tenure = action.payload.tenure;
    },
  },
});

export const { setPlan } = planSlice.actions;
export default planSlice.reducer;
