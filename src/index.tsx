import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import App from "./App";
import { MantineProvider } from "@mantine/core";
import { Footer, Navbar } from "./components/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MantineProvider>
      <Navbar />
      <App />
      <Footer />
    </MantineProvider>
  </React.StrictMode>,
);
