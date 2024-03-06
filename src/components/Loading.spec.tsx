import { render } from "@testing-library/react";

import { Loading } from "./Loading";

describe("Loading", () => {
  it("should be able to render when asked", async () => {
    vi.mock("@/hooks/useLoading", () => ({
      useLoading: () => ({
        isLoading: true,
      }),
    }));

    const wrapper = render(<Loading />);

    const loading = wrapper.getByTestId("loading");

    expect(loading).toBeInTheDocument();
  });
});
