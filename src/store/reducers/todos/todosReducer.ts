import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../../types/ITodo";

interface todoState {
  todos: ITodo[];
  isLoading: boolean;
  error: string;
  selectedTodo: number | null;
}

const initialState: todoState = {
  todos: [],
  isLoading: false,
  error: "",
  selectedTodo: null,
};

export const todosSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    todosFetching(state) {
      state.isLoading = true;
    },
    todosFetchingSuccess(state, action: PayloadAction<ITodo[]>) {
      state.isLoading = false;
      state.error = "";
      state.todos = action.payload;
    },
    todosFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    todosUpdating(state, action: PayloadAction<ITodo[]>) {
      state.todos = action.payload;
    },
    updateSelectTodo(state, action: PayloadAction<number | null>) {
      state.selectedTodo = action.payload;
    },
  },
});

export const todosReducer = todosSlice.reducer;
