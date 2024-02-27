import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "./trackerSlice";
import personalInfoReducer from "./personalInfoSlice";
import planReducer from "./planSlice";

const appStore = configureStore({
  reducer: {
    tracker: trackerReducer,
    personalInfo: personalInfoReducer,
    plan: planReducer,
  },
});

export default appStore;
