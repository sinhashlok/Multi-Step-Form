import { createSlice } from "@reduxjs/toolkit";

const addOnsSlice = createSlice({
  name: "addOns",
  initialState: {
    addOnId: {
      id1: true,
      id2: false,
      id3: false,
    },
  },
  reducers: {
    toggleItem: (state, action) => {
      state.addOnId = { ...state.addOnId, ...action.payload };
    }
  },
});

export const { toggleItem } = addOnsSlice.actions;
export default addOnsSlice.reducer;
