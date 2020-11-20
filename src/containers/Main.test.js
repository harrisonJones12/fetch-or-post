import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
// import '@testing-library/jest-dom/extend-expect'
import ConnectedMain, { Main, mapStateToProps } from "./Main";

// import { Item } from "react-bootstrap/lib/Breadcrumb";
// // import { Item } from "react-bootstrap/lib/Breadcrumb";

describe("<Main />", () => {
  const state = { showModal: false };

  const action = {
    makePost: jest.fn()
  };

  const props = {
    ...mapStateToProps(state),
    makePost: jest.fn()
  };

  afterEach(cleanup);

  const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)
  
    return render(ui, { wrapper: BrowserRouter })
  }

  // console.log(props);

  it("it renders with correct intial state", () => {
    const mockStore = configureStore();
    const store = mockStore(state);

    const { getByTestId } = renderWithRouter(
      <Provider store={store}>
        <ConnectedMain />
      </Provider>
    );
    const Post = getByTestId("post-form");
    expect(Post).toBeDefined();
  });

  it("submits form successfully", () => {
    const { getByTestId } = renderWithRouter(<Main {...props} />);

    fireEvent.click(getByTestId("post-form"));

    expect(props.makePost).toHaveBeenCalled();
  });
});
