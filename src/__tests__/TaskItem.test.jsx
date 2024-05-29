import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "../components/TaskItem";

describe("TaskItem Component", () => {
  const task = { id: 1, task: "Test Task" };

  test("renders task text", () => {
    render(<TaskItem task={task} done={false} onComplete={() => {}} onRemove={() => {}} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  test("renders done icon when task is completed", () => {
    render(<TaskItem task={task} done={true} onComplete={() => {}} onRemove={() => {}} />);
    expect(screen.getByText("done")).toBeInTheDocument();
  });

  test("calls onComplete when complete button is clicked", () => {
    const handleComplete = jest.fn();
    render(<TaskItem task={task} done={false} onComplete={handleComplete} onRemove={() => {}} />);

    const completeButton = screen.getByText("done");
    fireEvent.click(completeButton);

    expect(handleComplete).toHaveBeenCalledTimes(1);
    expect(handleComplete).toHaveBeenCalledWith(task.id);
  });

  test("calls onRemove when remove button is clicked", () => {
    const handleRemove = jest.fn();
    render(<TaskItem task={task} done={false} onComplete={() => {}} onRemove={handleRemove} />);

    const removeButton = screen.getByText("close");
    fireEvent.click(removeButton);

    expect(handleRemove).toHaveBeenCalledTimes(1);
    expect(handleRemove).toHaveBeenCalledWith(task.id);
  });

  test("does not show buttons when task is completed", () => {
    render(<TaskItem task={task} done={true} onComplete={() => {}} onRemove={() => {}} />);
    expect(screen.queryByText("close")).not.toBeInTheDocument();
  });
});
