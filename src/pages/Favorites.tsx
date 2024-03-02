import { Header } from "../components/Header";
import { Repository } from "../components/Repository";

export interface FavoritesProps {}

export function Favorites() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header handleSearch={() => {}} />

      <div className="flex h-screen justify-center gap-12 p-6">
        <div className="flex w-[896px] flex-col gap-4">
          <h1 className="mb-2 text-center text-h1 font-semibold text-primaryColor">
            Meus favoritos
          </h1>

          <Repository
            title="Pokepicker"
            description="Aplicativo de visualização de Pokémon utilizando o PokeAPI.co - Construído em React Native (Expo)"
            mainTech="Typescript"
            updatedAt="Updated on 17 Apr 2021"
            isFavorite
          />

          <Repository
            title="Pokepicker"
            description="Essa é uma simples recriação da página inicial do YouTube utilizando ReactJS com Styled Components."
            mainTech="Typescript"
            updatedAt="Updated on 17 Apr 2021"
            isFavorite={false}
          />
        </div>
      </div>
    </div>
  );
}
