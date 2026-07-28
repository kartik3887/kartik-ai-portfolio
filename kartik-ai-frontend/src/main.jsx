import { AuthProvider } from "@/context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
      }}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
);
