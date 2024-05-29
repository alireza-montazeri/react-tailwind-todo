import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("renders the App component", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Add a task here...")).toBeInTheDocument();
    expect(screen.getByText("add")).toBeInTheDocument();
  });

  test("can add a task", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a task here...");
    const addButton = screen.getByText("add");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  test("can complete a task", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a task here...");
    const addButton = screen.getByText("add");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(addButton);

    const completeButton = screen.getByText("done");
    fireEvent.click(completeButton);

    expect(screen.getByText("done")).toBeInTheDocument();
    expect(screen.queryByText("close")).not.toBeInTheDocument();
  });

  test("can remove a task", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a task here...");
    const addButton = screen.getByText("add");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(addButton);

    const removeButton = screen.getByText("close");
    fireEvent.click(removeButton);

    expect(screen.queryByText("Test Task")).not.toBeInTheDocument();
  });
});
