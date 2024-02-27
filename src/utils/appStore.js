import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "./trackerSlice";
import personalInfoReducer from "./personalInfoSlice";
import planReducer from "./planSlice";
import billingCycleReducer from "./billingCycleSlice";
import addOnsReducer from "./addOnsSlice";

const appStore = configureStore({
  reducer: {
    tracker: trackerReducer,
    personalInfo: personalInfoReducer,
    plan: planReducer,
    billingCycle: billingCycleReducer,
    addOns: addOnsReducer,
  },
});

export default appStore;
