import { render } from "@testing-library/react";

import { Loading } from "./Loading";

describe("Loading", () => {
  it("should not be able to render when asked", async () => {
    vi.mock("@/hooks/useLoading", () => ({
      useLoading: () => ({
        isLoading: false,
      }),
    }));

    const wrapper = render(<Loading />);
    const loading = wrapper.queryByTestId("loading");

    expect(loading).not.toBeInTheDocument();
  });
});
