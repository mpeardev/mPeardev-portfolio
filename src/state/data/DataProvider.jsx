import { useState, useEffect } from "react";
import DataContext, { initialDataState } from "./DataContext";
import { fetchData } from "../../../firebase-service";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialDataState.data);

  useEffect(() => {
    const fetchDataFromDB = async () => {
      const data = await fetchData("/");
      setData(data);
    };

    fetchDataFromDB();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
