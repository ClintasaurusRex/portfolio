import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import React from "react";

vi.mock("../../hooks/typingEffect", () => ({
  default: () => "Clint Arneson-Hiles",
}));

describe("Home", () => {
  it("renders the title with typing effect", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const welcomeHeading = getByTestId("welcome-text");
    expect(welcomeHeading).toHaveTextContent("Clint Arneson-Hiles");
  });
  it("renders the lead text correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const leadText = getByText(/I'm Clint, a passionate new web developer/);
    expect(leadText).toBeInTheDocument();
  });

  it("renders navigation buttons with correct links", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const aboutButton = getByText("About Me");
    const projectsButton = getByText("View Projects");
    const contactButton = getByText("Contact");

    expect(aboutButton).toHaveAttribute("href", "/about");
    expect(projectsButton).toHaveAttribute("href", "/projects");
    expect(contactButton).toHaveAttribute("href", "/contact");
  });

  it("renders the profile image", () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const profileImage = getByAltText("Clint Arneson-Hiles");
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("src", "portImage.jpg");
  });
});
