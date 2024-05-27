import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Container from "./Container";

test("renders Container component", () => {
  const { getByPlaceholderText, getByText } = render(<Container />);
  expect(getByPlaceholderText("Add a new task")).toBeInTheDocument();
  expect(getByText("Add Task")).toBeInTheDocument();
});

test("adds a new task to the list", () => {
  const { getByPlaceholderText, getByText, getByRole } = render(<Container />);

  const input = getByPlaceholderText("Add a new task");
  const button = getByText("Add Task");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(getByRole("listitem")).toHaveTextContent("New Task");
});
