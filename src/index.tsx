import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";

import App from "./App";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/global/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MantineProvider>
      <Navbar />
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
