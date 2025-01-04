import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectGrid from "../../Components/ProjectGrid";
import { projects } from "../../Projects/projects";

describe("ProjectGrid", () => {
  it("renders all project cards", () => {
    render(<ProjectGrid />);

    // Verify each project from the projects data is rendered
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.summary)).toBeInTheDocument();
    });
  });

  it("opens modal when project card is clicked", () => {
    render(<ProjectGrid />);

    // Click the first project card
    const firstProjectCard = screen.getByText(projects[0].title).closest("div");
    fireEvent.click(firstProjectCard);

    // Verify modal content is displayed
    expect(screen.getByText(projects[0].description)).toBeInTheDocument();
  });

  it("closes modal when close button is clicked", () => {
    render(<ProjectGrid />);

    // Open modal
    const firstProjectCard = screen.getByText(projects[0].title).closest("div");
    fireEvent.click(firstProjectCard);

    // Close modal
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    // Verify modal content is not displayed
    expect(screen.queryByText(projects[0].description)).not.toBeInTheDocument();
  });

  // it("has correct grid layout class", () => {
  //   render(<ProjectGrid />);
  //   expect(screen.getByRole("div", { class: "project-grid" })).toBeInTheDocument();
  // });
});
