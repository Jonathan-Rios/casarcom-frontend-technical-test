import { FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6";

export interface HeaderProps {
  handleSearch: () => void;
}

export function Header({ handleSearch }: HeaderProps) {
  return (
    <div className="flex h-20 w-full">
      <div className="flex h-full w-full items-center border-b-[1px] border-borderAndLine px-3 md:px-6">
        <div className="relative flex h-10 items-center justify-between rounded-[4px] border-[1px] bg-whiteBackgroundLight transition focus-within:border-primaryColor hover:border-primaryColor md:w-[668px]">
          <input
            type="text"
            placeholder="Buscar usuário"
            className="font-regular h-full w-full rounded-md px-4 pr-11 text-md text-greyDark placeholder-placeholder outline-none"
          />
          <button className="group absolute right-4" onClick={handleSearch}>
            <FaMagnifyingGlass
              className="fill-placeholder transition group-hover:fill-primaryColor"
              size={24}
            />
          </button>
        </div>
      </div>

      <a
        href="favoritos"
        className="flex h-full flex-col-reverse items-center justify-center bg-primaryColor px-2 text-md font-medium text-whiteBackgroundLight transition hover:bg-primaryColorDark md:w-[145px] md:flex-row md:gap-2"
      >
        <FaRegHeart className="mb-[1px]" size={24} />
        Favoritos
      </a>
    </div>
  );
}
