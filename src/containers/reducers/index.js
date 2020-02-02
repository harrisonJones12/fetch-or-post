const reducer = (state = {}, action) => {
  switch (action.type) {
    case "MAKE_POST":
      return { ...state, loading: true };
    case "POST_MADE":
      return { ...state, loading: false, post: action.json, showModal: true };
    case "MODAL_CLOSE":
      return { ...state, showModal: false };
    default:
      return state;
  }
};
export default reducer;
