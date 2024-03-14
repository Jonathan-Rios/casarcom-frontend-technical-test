import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, expect } from "vitest";

import { Favorites } from "./Favorites";

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

const makeSut = (isListEmpty: boolean) => {
  vi.mock("@/hooks/useFavorite", () => {
    return {
      useFavorite() {
        return { favoriteRepositories: isListEmpty ? [] : [mockRepository] };
      },
    };
  });

  const sut = render(<Favorites />, { wrapper: MemoryRouter });

  return {
    sut,
  };
};

describe("Page: Favorites", () => {
  it("should render a message when no found any favorite repositories", () => {
    const { sut } = makeSut(false);
    const wrapper = sut;

    expect(
      wrapper.getByText("Nenhum repositório encontrado"),
    ).toBeInTheDocument();
    expect(
      wrapper.getByText(
        "Para visualizar deve adicionar algum repositório como favorito.",
      ),
    ).toBeInTheDocument();
  });

  it("should render a message when found any favorite repositories", () => {
    const { sut } = makeSut(true);
    const wrapper = sut;

    expect(wrapper.getByText("test-repo")).toBeInTheDocument();
    expect(wrapper.getByText("test-repo")).toBeInTheDocument();
    expect(wrapper.getByText("Test Repository")).toBeInTheDocument();
    expect(wrapper.getByText("TypeScript")).toBeInTheDocument();
    expect(
      wrapper.getByText("Atualizado em 2 de setembro de 2014"),
    ).toBeInTheDocument();
  });
});
