import React from "react";

import { FavoriteContextProvider } from "./FavoriteContext";
import { LoadingContextProvider } from "./LoadingContext";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <LoadingContextProvider>
      <FavoriteContextProvider>{children}</FavoriteContextProvider>
    </LoadingContextProvider>
  );
}
