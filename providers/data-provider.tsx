"use client";

import { createContext, useContext, useState } from "react";

type DataProviderProps = {
  page: number;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  setPage: (page: number) => void;
};

const initialState = {
  page: 1,
  pageSize: 10,
  setPageSize: () => {},
  setPage: () => {},
};

const DataProviderContext = createContext<DataProviderProps>(initialState);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <DataProviderContext.Provider
      value={{ page, pageSize, setPageSize, setPage }}
    >
      {children}
    </DataProviderContext.Provider>
  );
}

export const usePage = () => {
  const context = useContext(DataProviderContext);

  if (context === undefined)
    throw new Error("usePage must be used within a DataProvider");

  return context;
};
