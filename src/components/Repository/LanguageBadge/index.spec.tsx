import { render } from "@testing-library/react";

import { LanguageBadge } from ".";

describe("Repository Language Badge", () => {
  it("should display the right badge color based on language", () => {
    const wrapper = render(<LanguageBadge language="TypeScript" />);

    const colorElement = wrapper.getByTestId("badge-color");

    const badgeColor = colorElement.style.backgroundColor;
    const typeScriptColor = "#3178c6";

    expect(badgeColor).toBe(typeScriptColor);
  });

  it("should display the default badge color when language is not found", () => {
    const wrapper = render(<LanguageBadge language="NotExist" />);

    const colorElement = wrapper.getByTestId("badge-color");

    const badgeColor = colorElement.style.backgroundColor;

    const defaultColor = "#cccccc";

    expect(badgeColor).toBe(defaultColor);
  });

  it("should display language text", () => {
    const wrapper = render(<LanguageBadge language="TypeScript" />);

    const languageText = wrapper.getByText("TypeScript");

    expect(languageText).toHaveTextContent("TypeScript");
  });
});
