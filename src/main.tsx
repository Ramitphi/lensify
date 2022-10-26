import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { urqlClient } from "./utils/urql-client";
import { Provider } from "urql";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={urqlClient}>
      <App />
    </Provider>
  </React.StrictMode>
);
