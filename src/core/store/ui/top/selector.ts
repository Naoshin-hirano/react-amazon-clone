import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "core/store";
import { UITop } from "./type";

export const UITopSelector = createSelector(
    (state: ReturnType<StateType>) => state["ui/top"],
    (state: UITop) => state
);
