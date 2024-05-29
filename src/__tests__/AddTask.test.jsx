import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTask from "../components/AddTask";

test("renders AddTask component", () => {
  const { getByPlaceholderText, getByText } = render(<AddTask onAdd={jest.fn()} />);
  expect(getByPlaceholderText("Add a task here...")).toBeInTheDocument();
  expect(getByText("add")).toBeInTheDocument();
});

test("calls onAdd with the input value when form is submitted", () => {
  const handleAdd = jest.fn();
  const { getByPlaceholderText, getByText } = render(<AddTask onAdd={handleAdd} />);

  const input = getByPlaceholderText("Add a task here...");
  const button = getByText("add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(handleAdd).toHaveBeenCalledWith({ task: "New Task", done: false });
});
