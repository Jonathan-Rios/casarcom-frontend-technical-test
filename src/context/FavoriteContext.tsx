import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { IRepository } from "@/types/repository";

export interface FavoriteContextDataProps {
  favoriteRepositories: IRepository[];
  setFavoriteRepositories: React.Dispatch<SetStateAction<IRepository[]>>;
  saveOnLocalStore: (repository: IRepository) => void;
  removeFromLocalStore: (
    repositoryLogin: string,
    repositoryName: string,
  ) => void;
  findInFavorites: (repositoryLogin: string, repositoryName: string) => boolean;
}

export const FavoriteContext = createContext<FavoriteContextDataProps>(
  {} as FavoriteContextDataProps,
);

interface FavoriteContextProviderProps {
  children: React.ReactNode;
}

export function FavoriteContextProvider({
  children,
}: FavoriteContextProviderProps) {
  const [favoriteRepositories, setFavoriteRepositories] = useState<
    IRepository[]
  >([]);

  useEffect(() => {
    const existingData = getLocalStoreData();

    if (existingData) {
      setFavoriteRepositories(existingData);
    }
  }, []);

  function saveOnLocalStore(repository: IRepository) {
    const existingData = JSON.parse(
      localStorage.getItem("@casarcom-jonathanrios-repositories") || "[]",
    );

    const formattedData = [...(existingData || []), { ...repository }];

    localStorage.setItem(
      "@casarcom-jonathanrios-repositories",
      JSON.stringify(formattedData),
    );
    setFavoriteRepositories(formattedData);
  }

  function removeFromLocalStore(
    repositoryLogin: string,
    repositoryName: string,
  ) {
    const existingData = JSON.parse(
      localStorage.getItem("@casarcom-jonathanrios-repositories") || "[]",
    );

    const updatedData = existingData.filter(
      (repository: IRepository) =>
        !(
          repository.owner.login === repositoryLogin &&
          repository.name === repositoryName
        ),
    );

    localStorage.setItem(
      "@casarcom-jonathanrios-repositories",
      JSON.stringify(updatedData),
    );
    setFavoriteRepositories(updatedData);
  }

  function getLocalStoreData() {
    return JSON.parse(
      localStorage.getItem("@casarcom-jonathanrios-repositories") || "{}",
    );
  }

  function findInFavorites(repositoryLogin: string, repositoryName: string) {
    const found = favoriteRepositories.find(
      (repository: IRepository) =>
        repository.owner.login === repositoryLogin &&
        repository.name === repositoryName,
    );

    return !!found;
  }

  return (
    <FavoriteContext.Provider
      value={{
        favoriteRepositories,
        setFavoriteRepositories,
        saveOnLocalStore,
        removeFromLocalStore,
        findInFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
