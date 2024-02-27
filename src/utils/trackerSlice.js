import { createSlice } from "@reduxjs/toolkit";

const trackerSlice = createSlice({
  name: "tracker",
  initialState: {
    page: 1,
  },
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },
    changePage: (state) => {
      state.page = 2;
    },
  },
});

export const { nextPage, prevPage, changePage } = trackerSlice.actions;
export default trackerSlice.reducer;
