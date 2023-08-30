export interface IModal {
  [key: string]: boolean;
  filter: boolean;
  modificate: boolean;
}

export type ISetModal = (item: string) => void;
