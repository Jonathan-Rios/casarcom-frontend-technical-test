import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

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

describe("Page: Favorites", () => {
  it("should render a message when no found any favorite repositories", () => {
    vi.mock("@/hooks/useFavorite", () => {
      return {
        useFavorite() {
          return {
            favoriteRepositories: [mockRepository],
          };
        },
      };
    });

    const wrapper = render(<Favorites />, { wrapper: MemoryRouter });

    expect(wrapper.getByText("test-repo")).toBeInTheDocument();
    expect(wrapper.getByText("test-repo")).toBeInTheDocument();
    expect(wrapper.getByText("Test Repository")).toBeInTheDocument();
    expect(wrapper.getByText("TypeScript")).toBeInTheDocument();
    expect(
      wrapper.getByText("Atualizado em 2 de setembro de 2014"),
    ).toBeInTheDocument();
  });
});
