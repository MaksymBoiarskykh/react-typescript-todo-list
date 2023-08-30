import { useMemo } from "react";
import { ITodo } from "../types/ITodo";
import { IFilterState } from "../types/IFilter";

export const useFiltering = (todos: ITodo[], params: IFilterState): ITodo[] => {
  const sortedTodos = useMemo(() => {
    let result = [...todos];

    for (const key in params) {
      if (!params[key]) return result;
      result = result.filter(
        (todo) => todo.completed.toString() === params[key]
      );
    }

    return result;
  }, [todos, params]);

  return sortedTodos;
};

// export const usePosts = (posts, sort, query) => {
//   const sortedPosts = useSortedPosts(posts, sort);

//   const sortedAndSearchedPosts = useMemo(() => {
//     return sortedPosts.filter((post) =>
//       post.title.toLowerCase().includes(query.toLowerCase())
//     );
//   }, [query, sortedPosts]);

//   return sortedAndSearchedPosts;
// };
