import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import UserFeatures from "@/components/shared/UserFeatures";
import "@testing-library/jest-dom";

describe("UserFeatures Component", () => {
  it("should render the heading", () => {
    render(<UserFeatures heading="Saving Plan" text="Test text" image="" />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Saving Plan/i);
  });

  it("should render the text", () => {
    render(
      <UserFeatures
        heading="Test"
        text="AI-powered savings tailored to your goals."
        image=""
      />
    );
    const text = screen.getByText(
      /AI-powered savings tailored to your goals./i
    );
    expect(text).toBeInTheDocument();
  });

  it("should render an image when image prop is provided", () => {
    render(<UserFeatures heading="Test" text="Test text" image="image.jpg" />);
    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "image.jpg");
  });
});
