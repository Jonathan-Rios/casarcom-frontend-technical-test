import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Repository } from "../components/Repository";
import { useEffect, useState } from "react";
import { IGitRepositoryResponse, IRepository } from "../types/repository";
import { api } from "../lib/axios";
import { useLoading } from "../hooks/useLoading";
import { useFavorite } from "../hooks/useFavorite";

export interface IGitProfile {
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
}

export function User() {
  const [searchParams] = useSearchParams();
  const gitUser = searchParams.get("u");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [gitProfile, setGitProfile] = useState<IGitProfile>();
  const { findInFavorites } = useFavorite();

  const { setIsLoading } = useLoading();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Verifica se o usuário rola até o final da página
      if (scrollTop + windowHeight >= scrollHeight - 1) {
        // Incrementa a página apenas se não estiver carregando e há mais itens para carregar
        if (repositories.length % itemsPerPage === 0) {
          setCurrentPage((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [repositories.length]);

  useEffect(() => {
    if (!gitUser) {
      return navigate(`/`);
    }

    async function loadProfile() {
      try {
        setIsLoading(true);
        const profileResponse = await api.get<IGitProfile>(`users/${gitUser}`);
        const profileData = profileResponse.data;

        if (!profileData) {
          return navigate(`/nao-encontrado?u=${gitUser}`);
        }

        setGitProfile({
          name: profileData.name || "Nome não informado",
          avatar_url: profileData.avatar_url,
          login: profileData.login,
          bio: profileData.bio || "Sem biografia",
        });
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        return navigate(`/nao-encontrado?u=${gitUser}`);
      }
    }

    loadProfile();
  }, []);

  useEffect(() => {
    async function loadRepositories() {
      try {
        setIsLoading(true);
        const repositoriesResponse = await api.get<IGitRepositoryResponse[]>(
          `users/${gitUser}/repos`,
          {
            params: {
              sort: "created",
              per_page: itemsPerPage,
              page: currentPage,
            },
          },
        );

        const repositoriesData = repositoriesResponse.data;

        const formattedRepositories = repositoriesData.map((repository) => {
          const isFavorite = findInFavorites(
            repository.owner.login,
            repository.name,
          );

          return {
            name: repository.name,
            description: repository.description || "Sem descrição",
            language: repository.language || "Não especificado",
            updatedAt: new Intl.DateTimeFormat("pt-BR", {
              timeZone: "UTC",
              dateStyle: "long",
            }).format(new Date(repository.updated_at)),
            owner: {
              login: repository.owner.login,
              avatarUrl: repository.owner.avatar_url,
            },
            isFavorite,
          };
        });

        setRepositories((prevRepositories) => [
          ...prevRepositories,
          ...formattedRepositories,
        ]);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    if (gitProfile) {
      loadRepositories();
    }
  }, [currentPage, gitProfile]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <div className="flex flex-col gap-12 p-6 pb-10 md:flex-row">
        <div className="flex h-min w-full flex-col items-center rounded border-[1px] border-borderAndLine px-6 py-10 md:w-[448px]">
          <img
            src={gitProfile?.avatar_url}
            alt="Foto do usuário do github"
            className="mb-6 h-[200px] w-[200px] rounded-full"
          />

          <h1 className="text-center text-h1 font-semibold text-greyNeutral">
            {gitProfile?.name}
          </h1>
          <p className="mb-6 text-md font-regular text-greyDark">
            {gitProfile?.login}
          </p>

          <p className="text-center text-md font-regular text-greyDark">
            {gitProfile?.bio}
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          <h1 className="text-h1 font-semibold text-primaryColor">
            Repositórios
          </h1>

          {repositories.length ? (
            repositories.map((repository) => (
              <Repository
                key={repository.name}
                repository={repository}
                isFavorite={repository.isFavorite}
              />
            ))
          ) : (
            <div className="mt-10 flex flex-col items-center justify-center px-4 md:mt-32">
              <h1 className="mb-1 text-center text-h1 font-semibold text-greyDark md:mb-0">
                Nenhum repositório encontrado
              </h1>
              <h5 className="mb-12 text-center text-h5 text-greyDark">
                Talvez o usuário não possua repositórios ou estão como privados.
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}