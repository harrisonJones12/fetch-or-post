import { put, takeLatest, all } from "redux-saga/effects";

function* makePost(action) {
  const {
    payload: { title, body, userId }
  } = action;

  try {
    const json = yield fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json());

    yield put({ type: "POST_MADE", json });
  } catch (e) {
    console.log(e);
  }
}


function* fetchPost() {
  
  try {
    const jsonFetch = yield fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
   


    yield put({ type: "FETCH_SUCCESSFUL", jsonFetch });
  } catch (e) {
    console.log(e);
  }
}




function* actionWatcher() {
  yield takeLatest("MAKE_POST", makePost);
  yield takeLatest("FETCH_POST", fetchPost);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
  // code after all-effect
}