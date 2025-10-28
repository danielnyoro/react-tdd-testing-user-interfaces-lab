import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom for custom matchers
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with appropriate alt text", () => {
  render(<App />);

  // Update the search pattern to match the actual alt text
  const image = screen.getByAltText(/portrait of john doe/i);

  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);

  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    exact: false,
    level: 2,
  });

  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {
  render(<App />);

  const biography = screen.getByText(/lorem ipsum/i);

  expect(biography).toBeInTheDocument();
});

test("displays a link to GitHub profile", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("github.com")
  );
});

test("displays a link to LinkedIn profile", () => {
  render(<App />);

  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("linkedin.com")
  );
});
