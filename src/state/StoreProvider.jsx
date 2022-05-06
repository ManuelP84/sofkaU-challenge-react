import React, { createContext, useReducer } from "react";
import reducer from "./Reducer"

const initialState = {
  category: {
    id: "",
    name: "",
    notes: [
      {
        id: "",
        title: "",
        done: false,
        fkCategoryId: "",
      },
    ],
  },
  listOfCategories: [
    {
      id: "0",
      name: "Category by default 0",
      notes: [
        {
          id: "0",
          title: "Title by default 0",
          done: false,
          fkCategoryId: "0",
        },
      ],
    },
    {
      id: "1",
      name: "Category by default 1",
      notes: [
        {
          id: "1",
          title: "Title by default 1",
          done: false,
          fkCategoryId: "1",
        },
        {
          id: "2",
          title: "Title by default 1",
          done: false,
          fkCategoryId: "1",
        },
      ],
    },
  ],
};

const Store = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>;
};

export default StoreProvider;

export {Store, initialState}