"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const ReduxStoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxStoreProvider;