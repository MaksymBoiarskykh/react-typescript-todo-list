import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./reducers/todos/todosReducer";
import { filterReducer } from "./reducers/filter/filterReducer";

const rootReducer = combineReducers({ todosReducer, filterReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
// типы для кастомных useDispatch, useSelector
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
