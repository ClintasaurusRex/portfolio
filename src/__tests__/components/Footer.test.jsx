import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../../Components/Footer";

vi.mock("../../hooks/typingEffect", () => ({
  default: () => "© 2024 Clint Arneson-Hiles. All rights reserved.",
}));

describe("Footer", () => {
  it("renders the component successfully", () => {
    const { container } = render(<Footer />);
    expect(container).toBeTruthy();
  });

  it("renders the copywrite text with typing effect", () => {
    render(<Footer />);
    const copywrite = screen.getByText("© 2024 Clint Arneson-Hiles. All rights reserved.");
    expect(copywrite).toBeDefined();
  });

  it("displays all social links", () => {
    render(<Footer />);
    // Add social link tests here
    const emailLink = screen.getByText("Email Me");
    expect(emailLink.closest("a")).toHaveAttribute("href", "mailto:clinthiles1992@gmail.com");

    const githubLink = screen.getByText("GitHub");
    expect(githubLink.closest("a")).toHaveAttribute("href", "https://github.com/ClintasaurusRex");

    const linkedinLink = screen.getByText("LinkedIn");
    expect(linkedinLink.closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/clint-arneson-hiles-042bb0321"
    );
    expect(linkedinLink.closest("a")).toHaveAttribute("target", "_blank");
  });
});
