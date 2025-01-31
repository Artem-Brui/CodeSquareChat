import { createRoot } from "react-dom/client";
import "./main.scss";
import App from "./App.jsx";
import ContextProvider from "./context/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
