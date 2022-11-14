import { createSlice } from "@reduxjs/toolkit";
import { initialState, reducers } from "./service";

export const UITopSlice = createSlice({
    name: "ui/top",
    initialState,
    reducers,
});
