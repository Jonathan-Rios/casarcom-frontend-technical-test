import { Header } from "../components/Header";

export interface HomeProps {}

import searchingImage from "../assets/searching.svg";
import notFoundImage from "../assets/not-found.svg";

export function Home() {
  // const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const isNotFound = false;

  return (
    <div className="flex h-screen w-full flex-col">
      <Header handleSearch={() => {}} />

      {isNotFound ? (
        <div className="flex h-screen flex-col items-center justify-center px-4 ">
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
      ) : (
        <div className="flex h-screen flex-col items-center justify-center px-4 ">
          <h1 className="mb-1 text-center text-h1 font-semibold text-primaryColor md:mb-0">
            {/* "{searchText}" */}
            "ASDAHSIDUASHDIASUO"
          </h1>

          <h1 className="mb-1 text-center text-h1 font-semibold text-greyDark md:mb-0">
            Nenhum usuário encontrado
          </h1>
          <h5 className="mb-12 text-center text-h5 text-greyDark">
            Verifique se a escrita está correta ou tente novamente{" "}
          </h5>

          <img src={notFoundImage} alt="Imagem representando falha na busca" />
        </div>
      )}
    </div>
  );
}
