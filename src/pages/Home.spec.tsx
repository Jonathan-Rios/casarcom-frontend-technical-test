import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Home } from "./Home";

describe("Page: Home", () => {
  it("should render Home component with default message", () => {
    const wrapper = render(<Home />, { wrapper: MemoryRouter });

    expect(
      wrapper.getByText("Procure pelo Nome ou Nome de Usuário"),
    ).toBeInTheDocument();
    expect(
      wrapper.getByText(
        "Encontre os repositórios de algum usuário digitando no campo acima",
      ),
    ).toBeInTheDocument();
  });
});
