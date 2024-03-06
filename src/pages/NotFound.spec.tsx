import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { NotFound } from "./NotFound";

describe("Page: NotFound", () => {
  it("should render NotFound component with default message", () => {
    const wrapper = render(<NotFound />, { wrapper: MemoryRouter });

    expect(wrapper.getByText("Nenhum usuário encontrado")).toBeInTheDocument();
    expect(
      wrapper.getByText(
        "Verifique se a escrita está correta ou tente novamente",
      ),
    ).toBeInTheDocument();
  });
});
