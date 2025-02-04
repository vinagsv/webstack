import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import StarRating from "./StarRating.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    {/* <StarRating maxRating={10} color="red" size={24} /> */}
  </StrictMode>
);
