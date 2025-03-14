import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import UserFeatures from "@/components/shared/UserFeatures";
import "@testing-library/jest-dom";

describe("Features", () => {
  it("Should render UserFeatures when given props", () => {
    render(
      <UserFeatures
        heading="Saving Plan"
        text="AI-powered savings tailored to your goals. Track, optimize, and grow your finances effortlessly!"
        image=""
      />
    );

    const heading = screen.getByRole("heading");
    const text = screen.getByText(
      "AI-powered savings tailored to your goals. Track, optimize, and grow your finances effortlessly!"
    );
    const image = screen.getByRole("img");

    expect(heading).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(image).toBeInTheDocument();

    expect(heading).toHaveTextContent("Saving Plan");
  });
});
