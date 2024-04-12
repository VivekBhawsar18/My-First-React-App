import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Home link in header", () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();
});
