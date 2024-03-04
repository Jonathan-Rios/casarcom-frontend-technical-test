import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { LanguageBadge } from "./LanguageBadge";
import { useFavorite } from "../../hooks/useFavorite";
import { IRepository } from "../../types/repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface RepositoryProps {
  repository: IRepository;
  isFavorite: boolean;
  avatarEnabled?: boolean;
}

export function Repository({
  repository,
  isFavorite,
  avatarEnabled = false,
}: RepositoryProps) {
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>();
  const { name, description, language, updatedAt, owner } = repository;
  const { saveOnLocalStore, removeFromLocalStore } = useFavorite();
  const navigate = useNavigate();

  useEffect(() => {
    setFavoriteStatus(isFavorite);
  }, [isFavorite]);

  function handleRemoveFavorite() {
    removeFromLocalStore(owner.login, name);
    setFavoriteStatus((prev) => !prev);
  }

  function handleAddFavorite() {
    const repository = {
      name,
      description,
      language,
      updatedAt,
      owner: {
        login: owner.login,
        avatarUrl: owner.avatarUrl,
      },
      isFavorite: true,
    };

    setFavoriteStatus((prev) => !prev);
    saveOnLocalStore(repository);
  }

  async function handleAvatar(login: string) {
    navigate(`/usuario?u=${login}`);
  }

  return (
    <div className="relative flex w-full flex-col rounded border-[1px] border-borderAndLine p-3 md:p-4">
      <div className="flex gap-2">
        {avatarEnabled && (
          <img
            src={owner?.avatarUrl}
            alt="Foto do usuário do github"
            className="h-7 w-7 cursor-pointer rounded-full"
            onClick={() => handleAvatar(owner.login)}
          />
        )}

        <h2 className="mb-[6px] text-h2 font-semibold text-greyNeutral">
          {name}
        </h2>
      </div>

      {favoriteStatus ? (
        <button
          onClick={handleRemoveFavorite}
          className="group absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-primaryColor transition hover:border-primaryColorDark md:right-4 md:top-4 md:h-10 md:w-10"
        >
          <FaHeart
            className="fill-primaryColor group-hover:fill-primaryColorDark"
            size={18}
          />
        </button>
      ) : (
        <button
          onClick={handleAddFavorite}
          className="group absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border-[1px]  border-whiteBackgroundMatte bg-whiteBackgroundMatte transition hover:border-greyNeutral md:right-4 md:top-4 md:h-10 md:w-10"
        >
          <FaRegHeart
            className="fill-placeholder group-hover:fill-greyNeutral"
            size={18}
          />
        </button>
      )}

      <p className="mb-4 text-md font-regular text-placeholder md:w-[564px]">
        {description}
      </p>

      <div className="flex gap-6">
        <LanguageBadge language={language} />

        <p className="text-sm font-regular text-greyNeutral">
          Atualizado em {updatedAt}
        </p>
      </div>
    </div>
  );
}
