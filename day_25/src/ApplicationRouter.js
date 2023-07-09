import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultPage from "./pages/ResultPage";
import AccountPage from "./pages/AccountPage";
import CharactersPage from "./pages/CharactersPage";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import Callback from "./pages/Callback";
import Protected from "./components/Protected";
import { useSelector } from "react-redux";

const ApplicationRouter = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <BrowserRouter>
      <NavBar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/callback"
          element={
            <Callback />
          }
        />
        <Route
          path="/search"
          element={
            <Protected isSignedIn={isAuthenticated}>
              <ResultPage />
            </Protected>
          }
        />
        <Route
          path="/account"
          element={
            <Protected isSignedIn={isAuthenticated}>
              <AccountPage />
            </Protected>
          }
        />
        <Route
          path="/character/:mal_id"
          element={
            <Protected isSignedIn={isAuthenticated}>
              <CharactersPage />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRouter;
