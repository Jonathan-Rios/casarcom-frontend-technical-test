import { Header } from "../components/Header";

import notFoundImage from "../assets/not-found.svg";
import { useSearchParams } from "react-router-dom";

export function NotFound() {
  const [searchParams] = useSearchParams();
  const notFoundText = searchParams.get("u");

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <div className="mt-16 flex flex-col items-center justify-center px-4 md:mt-32">
        <h1 className="mb-1 text-center text-h1 font-semibold text-primaryColor md:mb-0">
          "{notFoundText}"
        </h1>

        <h1 className="mb-1 text-center text-h1 font-semibold text-greyDark md:mb-0">
          Nenhum usuário encontrado
        </h1>
        <h5 className="mb-12 text-center text-h5 text-greyDark">
          Verifique se a escrita está correta ou tente novamente{" "}
        </h5>

        <img src={notFoundImage} alt="Imagem representando falha na busca" />
      </div>
    </div>
  );
}
