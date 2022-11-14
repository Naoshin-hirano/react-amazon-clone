import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UIProfileSlice } from "./ui/profile/slice";
import { UITopSlice } from "./ui/top/slice";

const appReducer = combineReducers({
    [UIProfileSlice.name]: UIProfileSlice.reducer,
    [UITopSlice.name]: UITopSlice.reducer,
});

const store = configureStore({
    reducer: appReducer,
});

const { dispatch } = store;
export type StateType = typeof store.getState;

export { store, dispatch };
