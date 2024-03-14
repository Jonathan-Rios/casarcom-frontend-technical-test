import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import * as useLoadingModule from "@/hooks/useLoading";

import { Loading } from "./Loading";

vi.mock("@/hooks/useLoading");

const makeSut = (isLoading: boolean) => {
  const mockUseLogin = vi.spyOn(useLoadingModule, "useLoading");

  const useLoadingMock = useLoadingModule.useLoading();

  mockUseLogin.mockReturnValue({
    ...useLoadingMock,
    isLoading: isLoading,
  });

  const sut = render(<Loading />, { wrapper: MemoryRouter });

  return {
    sut,
  };
};

describe("Loading", () => {
  it("should be able to render when asked", async () => {
    const { sut } = makeSut(true);

    const loading = sut.findByTestId("loading");

    sut.debug();

    waitFor(() => {
      expect(loading).toBeInTheDocument();
    });
  });

  it("should not be able to render when asked", async () => {
    const { sut } = makeSut(false);

    const loading = sut.queryByTestId("loading");

    expect(loading).not.toBeInTheDocument();
  });
});
