import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import AddRecipe from "./components/AddRecipe";

describe("Landing", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );
  });
  it("Landing must have a Link to redirect to /home", () => {
    const links = screen.queryAllByRole("link").map(link => link.href.substring(link.href.indexOf("/", 10)));
    expect(links).toContain("/home");
  });
});

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });
  it("Navbar must have a Link to return to landing /", () => {
    const links = screen.queryAllByRole("link").map(link => link.href.substring(link.href.indexOf("/", 10)));
    expect(links).toContain("/");
  });
  it("Navbar must have a Link to return to /home", () => {
    const links = screen.queryAllByRole("link").map(link => link.href.substring(link.href.indexOf("/", 10)));
    expect(links).toContain("/home");
  });
  it("Navbar must have a Link to acces form add Recipe", () => {
    const links = screen.queryAllByRole("link").map(link => link.href.substring(link.href.indexOf("/", 10)));
    expect(links).toContain("/home/add");
  });
});

describe("AddRecipe", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddRecipe />
        </BrowserRouter>
      </Provider>
    );
  });
  it("Form must have an input text for Title /", () => {
    const element = screen.getByLabelText("Title");
    expect(element.type).toBe("text");
  });
  it("Form must have an input textarea for Summary /", () => {
    const element = screen.getByLabelText("Summary");
    expect(element.type).toBe("textarea");
  });
  it("Form must have an input textarea for Image URL /", () => {
    const element = screen.getByLabelText("Image URL");
    expect(element.type).toBe("textarea");
  });
});
