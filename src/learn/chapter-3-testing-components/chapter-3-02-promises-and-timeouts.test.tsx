import {act, render, screen, waitFor} from "@testing-library/react";
import {Doublicator, DoublicatorPromiserator} from "./Doublicator";

describe("chapter-3-02-promises-and-timeouts.test", () => {

  test("timers", async () => {
    render(<Doublicator/>);

    // https://www.w3.org/TR/html-aria/#docconformance
    const double = screen.getByRole("button", {name: "*"});
    const reset = screen.getByRole("button", {name: "C"});

    // need to wrap because test is asynchronous
    act(() => {
      double.click();
    });
    await waitFor(() => {
      expect(screen.getByRole("heading", {name: "2"})).toBeInTheDocument();
    });
  });

  test("promises", async () => {
    render(<DoublicatorPromiserator/>);

    // https://www.w3.org/TR/html-aria/#docconformance
    const double = screen.getByRole("button", {name: "*"});
    const reset = screen.getByRole("button", {name: "C"});

    // need to wrap because test is asynchronous
    act(() => {
      double.click();
    });
    await waitFor(() => {
      expect(screen.getByRole("heading", {name: "2"})).toBeInTheDocument();
    });
  });

})
