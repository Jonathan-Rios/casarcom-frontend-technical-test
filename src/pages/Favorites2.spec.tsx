import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

import { Favorites } from "./Favorites";

describe("Page: Favorites - Aux", () => {
  it("should render a message when no found any favorite repositories", () => {
    vi.mock("@/hooks/useFavorite", () => {
      return {
        useFavorite() {
          return {
            favoriteRepositories: [],
          };
        },
      };
    });

    const wrapper = render(<Favorites />, { wrapper: MemoryRouter });

    expect(
      wrapper.getByText("Nenhum repositório encontrado"),
    ).toBeInTheDocument();
    expect(
      wrapper.getByText(
        "Para visualizar deve adicionar algum repositório como favorito.",
      ),
    ).toBeInTheDocument();
  });
});
