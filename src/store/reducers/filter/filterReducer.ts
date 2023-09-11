import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilterState, IOptionSelect } from "../../../types/IFilter";

const initialState: IFilterState = {
  completed: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changefilterParam(state, action: PayloadAction<IOptionSelect>) {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { changefilterParam } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
