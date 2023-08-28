import { ITodo } from "../types/ITodo";

export const modificateTodo = (
  todos: ITodo[],
  task: ITodo,
  id: number | null
): ITodo[] => {
  if (id) {
    return todos.map((todo) => (todo.id === id ? task : todo));
  }
  return [...todos, task];
};
