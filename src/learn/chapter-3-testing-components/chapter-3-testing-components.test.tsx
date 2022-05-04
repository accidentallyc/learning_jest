import {Arithmeticizer} from "./Arithmeticizer";
import {act, render, screen, waitFor} from "@testing-library/react";

test("basic", async () => {
  render(<Arithmeticizer/>);

  // https://www.w3.org/TR/html-aria/#docconformance
  const plus = screen.getByRole("button", {name: "+"});
  const minus = screen.getByRole("button", {name: "-"});

  // need to wrap because test is asynchronous
  act(() => {
    plus.click();
  });
  expect(screen.getByRole("heading", {name: "1"})).toBeInTheDocument();
});
