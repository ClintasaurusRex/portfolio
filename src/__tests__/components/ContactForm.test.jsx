import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactForm from "../../Components/ContactForm";

// Mock the typing effect hook
vi.mock("../../hooks/typingEffect", () => ({
  default: () => "Let's Connect!",
}));

describe("ContactForm", () => {
  it("renders the title with typing effect", () => {
    render(<ContactForm />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("Let's Connect!");
  });

  it("displays all social links", () => {
    render(<ContactForm />);

    const emailLink = screen.getByText("Email");
    expect(emailLink.closest("a")).toHaveAttribute("href", "mailto:clinthiles1992@gmail.com");

    const githubLink = screen.getByText("GitHub");
    expect(githubLink.closest("a")).toHaveAttribute("href", "https://github.com/ClintasaurusRex");
    expect(githubLink.closest("a")).toHaveAttribute("target", "_blank");

    const linkedinLink = screen.getByText("LinkedIn");
    expect(linkedinLink.closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/clint-arneson-hiles-042bb0321"
    );
    expect(linkedinLink.closest("a")).toHaveAttribute("target", "_blank");
  });
});
