import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";

import App from "./App";
import { MantineProvider } from "@mantine/core";
import { Footer, Navbar } from "./components/global";
import { MantineEmotionProvider } from "@mantine/emotion";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MantineProvider>
      <MantineEmotionProvider>
        <Navbar />
        <App />
        <Footer />
      </MantineEmotionProvider>
    </MantineProvider>
  </React.StrictMode>,
);
