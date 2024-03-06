import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import { isValidElement } from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { User } from "./User";

describe("Page: User", () => {
  it("should render user profile and repositories", async () => {
    const wrapper = renderWithRouter(<User />);

    wrapper.debug();

    expect(
      screen.getByText(
        "Talvez o usuário não possua repositórios ou estão como privados.",
      ),
    ).toBeInTheDocument();
  });
});

export function renderWithRouter(children, routes = []) {
  const options = isValidElement(children)
    ? { element: children, path: "/" }
    : children;

  const router = createMemoryRouter([{ ...options }, ...routes], {
    initialEntries: [options.path],
    initialIndex: 1,
  });

  return render(<RouterProvider router={router} />);
}
