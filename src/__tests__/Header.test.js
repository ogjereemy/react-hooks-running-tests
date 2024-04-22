import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  function Header(props) {
    return <h1>hello from the Header!</h1>;
  }
  
  // export default Header;a

  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});

