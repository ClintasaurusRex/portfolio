import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../Components/NavBar";

describe("NavBar", () => {
  const renderNavBar = () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  };

  it("renders navigation links", () => {
    renderNavBar();
    const navigationElement = screen.getByRole("navigation");
    expect(navigationElement).toBeDefined();
  });

  it("contains all required navigation links", () => {
    renderNavBar();
    expect(screen.getByText(/home/i)).toBeDefined();
    expect(screen.getByText(/projects/i)).toBeDefined();
    expect(screen.getByText(/about/i)).toBeDefined();
    expect(screen.getByText(/contact/i)).toBeDefined();
  });

  it("links have correct href attributes", () => {
    renderNavBar();
    expect(screen.getByText(/home/i).closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText(/projects/i).closest("a")).toHaveAttribute("href", "/projects");
    expect(screen.getByText(/about/i).closest("a")).toHaveAttribute("href", "/about");
    expect(screen.getByText(/contact/i).closest("a")).toHaveAttribute("href", "/contact");
  });

  it("handles link clicks", () => {
    renderNavBar();
    const projectsLink = screen.getByText(/projects/i);
    fireEvent.click(projectsLink);
    expect(window.location.pathname).toBe("/projects");
  });
});
