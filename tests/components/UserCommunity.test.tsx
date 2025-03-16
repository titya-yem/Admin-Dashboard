import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserCommunity from "@/components/UserCommunity";
import { userCommunityLists } from "@/constants/UserCommunity";

describe("UserCommunity", () => {
  it("should render the UserCommunity list correctly", () => {
    render(<UserCommunity userCommunityLists={userCommunityLists} />);

    userCommunityLists.forEach(({ heading, text, alt }) => {
      expect(screen.getByText(heading)).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });
});
