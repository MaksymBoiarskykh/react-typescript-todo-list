export interface IOptionSelect {
  name: string;
  value: string;
}

interface ICompleted {
  default: string;
  options: IOptionSelect[];
}

export interface IParamsFiltering {
  [key: string]: any;
  completed: ICompleted;
}

export interface IFilterState {
  [key: string]: any;
  completed: string;
}
