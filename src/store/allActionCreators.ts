import { TodosActionCreators } from "./reducers/todos/TodosActionCreators";

// собираем все action creators для передачи его в кастомный хук useAction
export const allActionCreators = {
  ...TodosActionCreators,
};
