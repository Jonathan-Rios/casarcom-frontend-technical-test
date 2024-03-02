import { FaHeart, FaRegHeart } from "react-icons/fa6";

export interface RepositoryProps {
  title: string;
  description: string;
  mainTech: string;
  updatedAt: string;
  isFavorite: boolean;
}

export function Repository({
  title,
  description,
  mainTech,
  updatedAt,
  isFavorite,
}: RepositoryProps) {
  return (
    <div className="relative flex w-full flex-col rounded border-[1px] border-borderAndLine p-3 md:p-4">
      <h2 className="mb-[6px] text-h2 font-semibold text-greyNeutral">
        {title}
      </h2>

      {isFavorite ? (
        <button className="group absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-primaryColor transition hover:border-primaryColorDark md:right-4 md:top-4 md:h-10 md:w-10">
          <FaHeart
            className="fill-primaryColor group-hover:fill-primaryColorDark"
            size={18}
          />
        </button>
      ) : (
        <button className="group absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border-[1px]  border-whiteBackgroundMatte bg-whiteBackgroundMatte transition hover:border-greyNeutral md:right-4 md:top-4 md:h-10 md:w-10">
          <FaRegHeart
            className="fill-placeholder group-hover:fill-greyNeutral"
            size={18}
          />
        </button>
      )}

      <p className="font-regular mb-4 text-md text-placeholder md:w-[564px]">
        {description}
      </p>

      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <span className="block h-4 min-h-4 w-4 min-w-4 rounded-full bg-blue-500" />
          <p className="font-regular text-sm text-greyNeutral">{mainTech}</p>
        </div>

        <p className="font-regular text-sm text-greyNeutral">{updatedAt}</p>
      </div>
    </div>
  );
}
