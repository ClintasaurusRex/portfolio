import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest's expect with React Testing Library matchers
expect.extend(matchers);

afterEach(() => {
  cleanup();
});
