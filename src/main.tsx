import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <App />
    </ClerkProvider>
  </BrowserRouter>
);
