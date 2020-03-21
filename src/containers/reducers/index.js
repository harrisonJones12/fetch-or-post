const initialState = {
  fetchResponse: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MAKE_POST":
    case "FETCH_POST":
      return { ...state, loading: true };
    case "POST_MADE":
      return { ...state, loading: false, post: action.json, showModal: true };
    case "MODAL_CLOSE":
      return { ...state, showModal: false };
    case "FETCH_SUCCESSFUL":
      return { ...state, loading: false, fetchResponse: action.jsonFetch };
    default:
      return state;
  }
};
export default reducer;
