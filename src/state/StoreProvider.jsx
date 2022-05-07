import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = [
  {
    id: 100,
    name: "Category by default 0",
    notes: [
      {
        id: 101,
        title: "Title by default 0",
        done: false,
        fkCategoryId: 100,
      },      
    ],
  },
  {
    id: 200,
    name: "Category by default 1",
    notes: [
      {
        id: 201,
        title: "Title by default 1",
        done: true,
        fkCategoryId: 200,
      }
    ],
  },
];

const Store = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default StoreProvider;

export { Store, initialState };
