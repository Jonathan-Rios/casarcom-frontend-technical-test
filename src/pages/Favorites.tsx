import { Header } from "../components/Header";
import { Repository } from "../components/Repository";
import { useFavorite } from "../hooks/useFavorite";

export function Favorites() {
  const { favoriteRepositories } = useFavorite();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <div className="flex justify-center gap-12 p-6">
        <div className="flex w-[896px] flex-col gap-4">
          <h1 className="mb-2 text-center text-h1 font-semibold text-primaryColor">
            Meus favoritos
          </h1>

          {favoriteRepositories.length ? (
            favoriteRepositories.map((repository) => (
              <Repository
                key={repository.name}
                repository={repository}
                isFavorite={repository.isFavorite}
                avatarEnabled
              />
            ))
          ) : (
            <div className="mt-10 flex flex-col items-center justify-center px-4 md:mt-32">
              <h1 className="mb-1 text-center text-h1 font-semibold text-greyDark md:mb-0">
                Nenhum repositório encontrado
              </h1>
              <h5 className="mb-12 text-center text-h5 text-greyDark">
                Para visualizar deve adicionar algum repositório como favorito.
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
