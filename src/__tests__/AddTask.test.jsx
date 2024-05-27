import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";

test("renders AddTask component", () => {
  const { getByPlaceholderText, getByText } = render(<AddTask onAdd={jest.fn()} />);
  expect(getByPlaceholderText("Add a new task")).toBeInTheDocument();
  expect(getByText("Add Task")).toBeInTheDocument();
});

test("calls onAdd with the input value when form is submitted", () => {
  const handleAdd = jest.fn();
  const { getByPlaceholderText, getByText } = render(<AddTask onAdd={handleAdd} />);

  const input = getByPlaceholderText("Add a new task");
  const button = getByText("Add Task");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(handleAdd).toHaveBeenCalledWith("New Task");
});
