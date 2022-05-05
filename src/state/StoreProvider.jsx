import React, { createContext, useReducer } from "react";

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
      name: "Category by default",
      notes: [
        {
          id: "0",
          title: "Title by default",
          done: false,
          fkCategoryId: "0",
        },
      ],
    },
  ],
};

const Store = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider>{children}</Store.Provider>;
};

export default StoreProvider;
