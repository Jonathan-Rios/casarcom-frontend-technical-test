import React from "react";

import { LoadingContextProvider } from "./LoadingContext";
import { FavoriteContextProvider } from "./FavoriteContext";

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
