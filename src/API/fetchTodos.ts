import axios from "axios";
import { ITodo } from "../types/ITodo";

const linkTodos = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async (limit: number = 5): Promise<ITodo[]> => {
  const response = await axios.get<ITodo[]>(linkTodos, {
    params: {
      _limit: limit,
    },
  });
  return response.data;
};
