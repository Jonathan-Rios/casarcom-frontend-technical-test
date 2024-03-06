import searchingImage from "@/assets/searching.svg";
import { Header } from "@/components/Header";

export function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <div className="mt-20 flex flex-col items-center justify-center px-4 md:mt-40">
        <h1 className="mb-4 text-center text-h1 font-semibold text-greyDark md:mb-0">
          Procure pelo Nome ou Nome de Usuário
        </h1>
        <h5 className="mb-12 text-center text-h5 text-greyDark">
          Encontre os repositórios de algum usuário digitando no campo acima
        </h5>

        <img
          src={searchingImage}
          alt="Imagem de um usuário buscando por perfis"
        />
      </div>
    </div>
  );
}
