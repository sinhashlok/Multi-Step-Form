import { createSlice } from "@reduxjs/toolkit";

const billingCycleSlice = createSlice({
  name: "plan",
  initialState: {
    tenure: 1,
  },
  reducers: {
    setBillingCycle: (state) => {
      state.tenure = state.tenure === 1 ? 2 : 1;
    },
  },
});

export const { setBillingCycle } = billingCycleSlice.actions;
export default billingCycleSlice.reducer;
