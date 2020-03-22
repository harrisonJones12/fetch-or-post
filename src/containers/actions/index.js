export const makePost = payload => ({
  type: "MAKE_POST",
  payload: payload
});

export const modalClose = () => ({
  type: "MODAL_CLOSE"
});

export const fetchPost = ()  => ({
  type: "FETCH_POST",
});
