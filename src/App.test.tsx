import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders empty input", () => {
  render(<App />);
  const input = screen.getByDisplayValue("");
  expect(input).toBeInTheDocument();
});
