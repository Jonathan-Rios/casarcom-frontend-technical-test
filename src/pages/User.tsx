import { Header } from "../components/Header";
import { Repository } from "../components/Repository";

export interface UserProps {}

export function User() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header handleSearch={() => {}} />

      <div className="flex h-screen gap-12 p-6">
        <div className="flex h-[440px] w-[448px] flex-col items-center rounded border-[1px] border-borderAndLine p-10">
          <img
            src="https://avatars.githubusercontent.com/Jonathan-Rios"
            alt="Foto do usuário do github"
            className="mb-6 h-[200px] w-[200px] rounded-full"
          />

          <h1 className="text-center text-h1 font-semibold text-greyNeutral">
            Jonathan Rios Sousa
          </h1>
          <p className="font-regular mb-6 text-md text-greyDark">@jonathan</p>

          <p className="font-regular text-center text-md text-greyDark">
            Trabalha com segurança cibernética, experiencia em empresas
            multinacionais.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          <h1 className="text-h1 font-semibold text-primaryColor">
            Repositórios
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
            description="Aplicativo de visualização de Pokémon utilizando o PokeAPI.co - Construído em React Native (Expo)"
            mainTech="Typescript"
            updatedAt="Updated on 17 Apr 2021"
            isFavorite
          />
        </div>
      </div>
    </div>
  );
}
