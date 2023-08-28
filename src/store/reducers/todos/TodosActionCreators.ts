import { ITodo } from "../../../types/ITodo";
import { AppDispatch } from "../../store";
import axios from "axios";
import { todosSlice } from "./todosReducer";

const link = "https://jsonplaceholder.typicode.com/todos";

export const TodosActionCreators = {
  fetchTodos: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(todosSlice.actions.todosFetching());
      const response = await axios.get<ITodo[]>(link, {
        params: { _limit: 7 },
      });
      dispatch(todosSlice.actions.todosFetchingSuccess(response.data));
    } catch (e) {
      let errorMessage = "Failed to do something exceptional";
      if (e instanceof Error) {
        errorMessage = e.message;
      }

      dispatch(todosSlice.actions.todosFetchingError(errorMessage));
    }
  },

  updateTodos: (value: ITodo[]) => todosSlice.actions.todosUpdating(value),
  selectTodo: (value: number | null) =>
    todosSlice.actions.updateSelectTodo(value),
};
