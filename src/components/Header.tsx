import { KeyboardEvent, useState } from "react";
import { FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Header() {
  const [searchText, setSearchText] = useState<string>("");

  const navigate = useNavigate();

  async function handleSearch() {
    if (!searchText.length) {
      toast.error("Informe um usuário", {
        position: "bottom-right",
      });

      return;
    }
    navigate(`/usuario/${searchText}`);
  }

  function handleButtonKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="flex min-h-20 w-full">
      <div className="flex w-full items-center border-b-[1px] border-borderAndLine px-3 md:px-6">
        <div className="relative flex h-10 items-center justify-between rounded-[4px] border-[1px] bg-whiteBackgroundLight transition focus-within:border-primaryColor hover:border-primaryColor md:w-[668px]">
          <input
            type="text"
            placeholder="Buscar usuário"
            data-testid="search-input"
            className="w-full rounded-md px-4 pr-11 text-md font-regular text-greyDark placeholder-placeholder outline-none"
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={handleButtonKeyDown}
          />
          <button
            type="button"
            onClick={handleSearch}
            data-testid="search-input-button"
            className="group absolute right-4"
          >
            <FaMagnifyingGlass
              className="fill-placeholder transition group-hover:fill-primaryColor"
              size={24}
            />
          </button>
        </div>
      </div>

      <Link
        to="/favoritos"
        className="flex flex-col-reverse items-center justify-center bg-primaryColor px-2 text-md font-medium text-whiteBackgroundLight transition hover:bg-primaryColorDark md:w-[145px] md:flex-row md:gap-2"
      >
        <FaRegHeart className="mb-[1px]" size={24} />
        Favoritos
      </Link>
    </div>
  );
}
