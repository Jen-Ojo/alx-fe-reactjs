import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/Add todo/i);
  expect(inputElement).toBeInTheDocument();
});

test("adds a todo item", () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/Add todo/i);
  const buttonElement = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: "Test Todo" } });
  fireEvent.click(buttonElement);

  const todoItem = screen.getByText(/Test Todo/i);
  expect(todoItem).toBeInTheDocument();
});
