import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import Projects from "../../Pages/Projects";
import React from "react";

// Set up mocks
vi.mock("../../hooks/typingEffect", () => ({
  default: () => "Projects",
}));

vi.mock("../../hooks/showProjects", () => ({
  default: () => true,
}));

describe("Projects", () => {
  it("renders the title with typing effect", () => {
    const { getByText } = render(<Projects />);
    const title = getByText("Projects");
    expect(title).toBeInTheDocument();
  });

  it("renders with the correct className", () => {
    const { getByText } = render(<Projects />);
    const title = getByText("Projects");
    expect(title).toHaveClass("project-text");
  });

  it("renders project cards when showProjects is true", () => {
    const { getByTestId } = render(<Projects />);
    const projectsContainer = getByTestId("projects-container");
    expect(projectsContainer).toBeInTheDocument();
  });

  it("applies fade-in animation class when projects are shown", () => {
    const { getByTestId } = render(<Projects />);
    const projectsContainer = getByTestId("projects-container");
    expect(projectsContainer).toHaveClass("fade-in");
  });
});
