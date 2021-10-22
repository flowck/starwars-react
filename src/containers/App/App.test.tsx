import { App } from "./App";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/starwars/i);
  expect(linkElement).toBeInTheDocument();
});
