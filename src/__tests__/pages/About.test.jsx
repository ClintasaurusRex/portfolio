import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import About from "../../Pages/About";
import React from "react";

vi.mock("../../hooks/typingEffect", () => ({
  default: () => "About Me",
}));

describe("About", () => {
  it("renders the title with typing effect", () => {
    const { getByText } = render(<About />);
    const title = getByText("About Me");
    expect(title).toBeInTheDocument();
  });
  it("renders the correct number of paragraphs", () => {
    const { getAllByText } = render(<About />);
    const paragraphs = getAllByText(/^[^\n]+$/); // Matches all non-empty lines
    expect(paragraphs.length).toBe(5);
  });
  it("renders the correct content in each paragraph", () => {
    const { getByText } = render(<About />);
    const paragraphs = [
      "Hi, I'm Clint, a web developer and recent graduate of Lighthouse Labs' Web Development Bootcamp. My portfolio showcases projects that highlight my ability to create interactive, user-friendly, and responsive web applications using modern development practices.",
      "My journey into coding began as a hobby about a year ago, driven by my curiosity and desire to build digital solutions. As I explored more, my interest quickly evolved into a passion, leading me to officially pursue web development through intensive training at Lighthouse Labs. With every new concept and challenge, my enthusiasm for coding has only grown.",
      "What excites me most about web development is the endless potential for learning and innovation. In my previous roles, I often sought opportunities to grow, but coding offers something unique: a dynamic field that demands constant adaptation and exploration. This aspect fuels my creativity and determination to stay ahead in the ever-evolving tech landscape.",
      "I'm eager to contribute to innovative projects, collaborate with forward-thinking teams, and continue expanding my skills in a field that aligns with my passion for problem-solving and lifelong learning.",
    ];

    paragraphs.forEach((paragraph) => {
      expect(getByText(paragraph)).toBeInTheDocument();
    });
  });
});
