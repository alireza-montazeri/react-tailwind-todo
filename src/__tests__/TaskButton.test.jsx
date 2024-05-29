import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskButton from "../components/TaskButton";

test('renders the done icon when type is "done"', () => {
  const { getByText } = render(<TaskButton type="done" onClick={() => {}} />);
  expect(getByText("done")).toBeInTheDocument();
});

test('renders the close icon when type is not "done"', () => {
  const { getByText } = render(<TaskButton type="not-done" onClick={() => {}} />);
  expect(getByText("close")).toBeInTheDocument();
});

test("calls onClick when button is clicked", () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<TaskButton type="done" onClick={handleClick} />);

  const button = getByRole("button");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
