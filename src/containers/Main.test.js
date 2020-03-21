import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
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
    action
  };

  afterEach(cleanup);

  // console.log(props);

  it("it renders with correct intial state", () => {
    const mockStore = configureStore();
    const store = mockStore(state);

    const { getByTestId } = render(
      <Provider store={store}>
        <ConnectedMain />
      </Provider>
    );
    const Post = getByTestId("post-form");
    expect(Post).toBeDefined();
  });

  it.only("submits form successfully", () => {
    const { getByTestId } = render(<Main {...props} />);
    console.log(props);
    fireEvent.click(getByTestId("post-form"));

    expect(action.makePost).toHaveBeenCalled();
  });
});
