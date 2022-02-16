import { createWrapper } from "next-require-wrapper";
import { createStore } from "redux";

import reducer from "../reducers/index.js";

const configureStore = () => {
  const store = createStore(reducer);
  store.dispatch({
    type: "CHANGE_EMAIL",
    data: "boogiecho@gmail.com"
  })
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",

});

export default wrapper;