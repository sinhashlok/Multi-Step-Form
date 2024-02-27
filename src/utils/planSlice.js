import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    planId: 1,
  },
  reducers: {
    setPlanId: (state, action) => {
      state.planId = action.payload;
    },
  },
});

export const { setPlanId } = planSlice.actions;
export default planSlice.reducer;
