import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Header from "./components/Header";

const App = () => {
  const { isSignedIn } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isSignedIn ? (
            <>
              <Header />
              <Dashboard />
            </>
          ) : (
            <RedirectToSignIn />
          )
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
