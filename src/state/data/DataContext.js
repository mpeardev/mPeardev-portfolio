import { createContext } from "react";

export const initialDataState = {
  data: [],
  setData: () => null,
};

const DataContext = createContext(initialDataState);
export default DataContext;
