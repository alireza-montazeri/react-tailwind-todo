import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskButton from "./TaskButton";

test("renders TaskButton component", () => {
  const { getByText } = render(<TaskButton label="Click Me" onClick={jest.fn()} />);
  expect(getByText("Click Me")).toBeInTheDocument();
});

test("calls onClick when button is clicked", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<TaskButton label="Click Me" onClick={handleClick} />);

  const button = getByText("Click Me");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
