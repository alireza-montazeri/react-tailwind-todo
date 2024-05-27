import React from "react";
import { render } from "@testing-library/react";
import TaskItem from "./TaskItem";

test("renders TaskItem component", () => {
  const task = { id: 1, text: "Test Task" };
  const { getByText } = render(<TaskItem task={task} />);
  expect(getByText("Test Task")).toBeInTheDocument();
});
