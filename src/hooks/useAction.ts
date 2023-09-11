import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/reducers/allActionCreators";

// кастомный хук для того чтобы каждый раз не обращаться к dispatch
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
