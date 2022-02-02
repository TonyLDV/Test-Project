import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import thunk from "redux-thunk";
import { rootReducer } from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { compose, createStore, applyMiddleware } from "redux";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
