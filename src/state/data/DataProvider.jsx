import { useState, useEffect } from "react";
import DataContext, { initialDataState } from "./DataContext";
import dataInfo from "/src/data/data.json";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialDataState.data);

  useEffect(() => {
    setData(dataInfo);
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
