import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import * as router from "react-router";
import { MemoryRouter } from "react-router-dom";

import { Repository } from ".";

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

const saveOnLocalStore = vi.fn();
const removeFromLocalStore = vi.fn();

vi.mock("@/hooks/useFavorite", () => ({
  useFavorite: () => ({
    saveOnLocalStore,
    removeFromLocalStore,
  }),
}));

describe("Repository", () => {
  it("should be render repository details correctly", () => {
    const wrapper = render(<Repository repository={mockRepository} />, {
      wrapper: MemoryRouter,
    });

    expect(wrapper.getByText("test-repo")).toBeInTheDocument();
    expect(wrapper.getByText("test-repo")).toBeInTheDocument();
    expect(wrapper.getByText("Test Repository")).toBeInTheDocument();
    expect(wrapper.getByText("TypeScript")).toBeInTheDocument();
    expect(
      wrapper.getByText("Atualizado em 2 de setembro de 2014"),
    ).toBeInTheDocument();
  });

  it("should be able to navigate searching by avatar login", async () => {
    const navigate = vi.fn();
    vi.spyOn(router, "useNavigate").mockImplementation(() => navigate);

    const wrapper = render(
      <Repository repository={mockRepository} avatarEnabled={true} />,
      { wrapper: MemoryRouter },
    );

    const user = userEvent.setup();
    await user.click(wrapper.getByTestId("avatar-image-link"));

    expect(navigate).toHaveBeenCalledWith(
      `/usuario/${mockRepository.owner.login}`,
    );
  });

  it("should be able to add a repository from favorites", async () => {
    const wrapper = render(<Repository repository={mockRepository} />, {
      wrapper: MemoryRouter,
    });

    const user = userEvent.setup();

    await user.click(wrapper.getByTestId("add-favorite"));

    expect(saveOnLocalStore).toHaveBeenCalledWith({
      ...mockRepository,
      isFavorite: true,
    });
  });

  it("should be able to remove a repository from favorites", async () => {
    const mockFavoriteRepository = {
      ...mockRepository,
      isFavorite: true,
    };
    const wrapper = render(<Repository repository={mockFavoriteRepository} />, {
      wrapper: MemoryRouter,
    });

    const user = userEvent.setup();
    await user.click(wrapper.getByTestId("remove-favorite"));

    expect(removeFromLocalStore).toHaveBeenCalledWith(
      mockRepository.owner.login,
      mockRepository.name,
    );
  });
});
