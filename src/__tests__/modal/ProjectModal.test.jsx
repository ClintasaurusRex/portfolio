import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectModal from "../../Modal/ProjectModal";

describe("ProjectModal", () => {
  const mockProject = {
    id: 1,
    title: "T.L.D.R",
    description: "This extension summarizes and saves web articles for later reading.",
    challenges: "The biggest challenge was working with the chatGPT API",
    link: "https://chromewebstore.google.com/detail/tldr/fdoabojpkjopijhpfhapkddbafljjfff",
  };

  const mockOnClose = vi.fn();

  it("renders nothing when project is null", () => {
    render(<ProjectModal project={null} onClose={mockOnClose} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders project details when project is provided", () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />);

    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
    expect(screen.getByText(mockProject.challenges)).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("renders project link with correct attributes", () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />);

    const link = screen.getByText("View Project");
    expect(link).toHaveAttribute("href", mockProject.link);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
