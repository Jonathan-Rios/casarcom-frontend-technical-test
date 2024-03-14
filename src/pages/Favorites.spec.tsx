import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

import * as useFavoriteModule from "@/hooks/useFavorite";

import { Favorites } from "./Favorites";

vi.mock("@/hooks/useFavorite");

const mockRepository = {
  name: "test-repo",
  description: "Test Repository",
  language: "TypeScript",
  updatedAt: "2 de setembro de 2014",
  isFavorite: false,
  owner: {
    login: "testuser",
    avatarUrl: "https://example.com/avatar.jpg",
  },
};

const makeSut = (withRepositories: boolean = true) => {
  const repositories = withRepositories ? [mockRepository] : [];

  const mockUseLogin = vi.spyOn(useFavoriteModule, "useFavorite");

  const useFavoriteMock = useFavoriteModule.useFavorite();

  mockUseLogin.mockReturnValue({
    ...useFavoriteMock,
    favoriteRepositories: repositories,
  });

  const sut = render(<Favorites />, { wrapper: MemoryRouter });

  return {
    sut,
  };
};

describe("Page: Favorites", () => {
  it("should render a message when found any favorite repositories", () => {
    const { sut } = makeSut(true);

    expect(sut.getByText("test-repo")).toBeInTheDocument();
    expect(sut.getByText("test-repo")).toBeInTheDocument();
    expect(sut.getByText("Test Repository")).toBeInTheDocument();
    expect(sut.getByText("TypeScript")).toBeInTheDocument();
    expect(
      sut.getByText("Atualizado em 2 de setembro de 2014"),
    ).toBeInTheDocument();
  });

  it("should render a message when no found any favorite repositories", () => {
    const { sut } = makeSut(false);

    expect(sut.getByText("Nenhum repositório encontrado")).toBeInTheDocument();
    expect(
      sut.getByText(
        "Para visualizar deve adicionar algum repositório como favorito.",
      ),
    ).toBeInTheDocument();
  });
});
