import { FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6";

export interface HeaderProps {}

export function Header() {
  return (
    <div className="flex h-20 w-full">
      <div className="flex h-full w-full items-center border-b-[1px] border-borderAndLine px-6">
        <div className="relative flex h-10 items-center justify-between rounded-[4px] border-[1px] bg-whiteBackgroundLight transition focus-within:border-primaryColor hover:border-primaryColor lg:w-[668px]">
          <input
            type="text"
            placeholder="Buscar usuário"
            className="font-regular h-full w-full rounded-md px-4 pr-10 text-md text-greyDark placeholder-placeholder outline-none"
          />
          <FaMagnifyingGlass className="absolute right-4 fill-placeholder" />
        </div>
      </div>

      <a
        href="favoritos"
        className="flex h-full flex-col-reverse items-center justify-center gap-2 bg-primaryColor px-2 text-md font-medium text-whiteBackgroundLight transition hover:bg-primaryColorDark lg:w-[145px] lg:flex-row"
      >
        <FaRegHeart size={20} />
        Favoritos
      </a>
    </div>
  );
}
