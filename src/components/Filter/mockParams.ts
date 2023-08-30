import { IParamsFiltering } from "../../types/IFilter";

export const paramsFiltering: IParamsFiltering = {
  completed: {
    default: "all",
    options: [
      { name: "yes", value: "true" },
      { name: "no", value: "false" },
    ],
  },
};
