import { test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Quiz from "./components/Quiz";

test.only("renders the starting phrase with hidden words", () => {

  const props = {
    words: [
      { word: "I", display: true },
      { word: "think", display: false },
      { word: "therefore", display: true },
      { word: "I", display: false },
      { word: "am", display: true },
    ],
    options: ["think", "therefore", "swim", "wonder"],
  };

  render(<Quiz {...props} />);

  screen.getByText("I _ therefore _ am");
});

test("can update the phrase with chosen word", () => {
 // setup props

 // render the Quiz component

 // find the button with text "swim"
 // click on this button

 // check the text has been updated with the blank filled in
  fireEvent.click(screen.getByRole("button", { name: /swim/ }));
  screen.getByText("I think therefore swim am");
});

test("can check if user has inputted correct answer", () => {

});
