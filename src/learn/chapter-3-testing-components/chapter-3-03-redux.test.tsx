import {act, render, screen} from "@testing-library/react";
import {_Nexatron2000} from "./Nexatron2000";

test("basic", async () => {
  render(<_Nexatron2000 initial={"foo"} next={"bar"}/>);

  // https://www.w3.org/TR/html-aria/#docconformance
  const plus = screen.getByRole("button", {name: "N"});
  const minus = screen.getByRole("button", {name: "C"});

  // need to wrap because test is asynchronous
  act(() => {
    plus.click();
  });
  expect(screen.getByRole("heading", {name: "baz"})).toBeInTheDocument();
});
