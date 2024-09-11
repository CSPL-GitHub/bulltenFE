"use client";

import React, { ReactNode } from "react";
import { persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const ReduxPersistStoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
};

export default ReduxPersistStoreProvider;
