import { Header } from "../components/Header";

export interface FavoritesProps {}

export function Favorites() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />

      <div className="flex h-screen items-center justify-center">
        <h1 className="text-h1 text-greyDark">Favorites</h1>
      </div>
    </div>
  );
}
