import { fireEvent, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import * as router from "react-router";
import { MemoryRouter } from "react-router-dom";
import { toast } from "react-toastify";

import { Header } from "./Header";

describe("Header", () => {
  it("should be able to navigate to user page when search", async () => {
    const navigate = vi.fn();
    const userName = "testuser";
    vi.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    const wrapper = render(<Header />, { wrapper: MemoryRouter });

    const input = wrapper.getByTestId("search-input");

    const user = userEvent.setup();
    await user.type(input, userName);

    await user.click(wrapper.getByTestId("search-input-button"));
    expect(navigate).toHaveBeenCalledWith(`/usuario/${userName}`);
  });

  it("should be able to navigate to user page when search with enter key", async () => {
    const navigate = vi.fn();
    const userName = "testuser";

    vi.spyOn(router, "useNavigate").mockImplementation(() => navigate);

    const wrapper = render(<Header />, { wrapper: MemoryRouter });

    const input = wrapper.getByTestId("search-input");

    const user = userEvent.setup();
    await user.type(input, userName);

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });

    expect(navigate).toHaveBeenCalledWith(`/usuario/${userName}`);
  });

  it("should not be able to navigate without entering a user", async () => {
    const navigate = vi.fn();
    const error = vi.fn();

    vi.spyOn(toast, "error").mockImplementation(error);
    vi.spyOn(router, "useNavigate").mockImplementation(() => navigate);

    const wrapper = render(<Header />, { wrapper: MemoryRouter });

    const input = wrapper.getByTestId("search-input");

    const user = userEvent.setup();
    await user.click(wrapper.getByTestId("search-input-button"));

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });

    expect(navigate).not.toHaveBeenCalled();
    expect(error).toHaveBeenCalledWith("Informe um usuário", {
      position: "bottom-right",
    });
  });
});
