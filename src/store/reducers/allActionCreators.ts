import { TodosActionCreators } from "./todos/TodosActionCreators";
import { changefilterParam } from "./filter/filterReducer";

// собираем все action creators для передачи его в кастомный хук useAction
export const allActionCreators = {
  ...TodosActionCreators,
  changefilterParam,
};
