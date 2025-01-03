import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectCard from "../../Components/ProjectCard";

describe("ProjectCard", () => {
  const mockProject = {
    id: 1,
    title: "T.L.D.R",
    summary: "A google chrome extension that summarizes articles.",
  };

  const mockOnClick = vi.fn();

  it("renders project title and summary", () => {
    render(<ProjectCard project={mockProject} onClick={mockOnClick} />);

    expect(screen.getByText("T.L.D.R")).toBeInTheDocument();
    expect(
      screen.getByText("A google chrome extension that summarizes articles.")
    ).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    render(<ProjectCard project={mockProject} onClick={mockOnClick} />);

    const card = screen.getByText("T.L.D.R").closest("div");
    fireEvent.click(card);

    expect(mockOnClick).toHaveBeenCalledWith(mockProject);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("has correct styling class", () => {
    render(<ProjectCard project={mockProject} onClick={mockOnClick} />);

    const card = screen.getByText("T.L.D.R").closest("div");
    expect(card).toHaveClass("project-card");
  });
});
