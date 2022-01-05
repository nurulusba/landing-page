import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ConfirmAddress from "./pages/confirm-address/ConfirmAddress";
import MainLayout from "./components/layout/MainLayout";

function App() {
  var d = new Date();
  var currentHour = d.getHours();
  if (currentHour >= 19 || currentHour <= 6) {
      document.body.setAttribute("data-theme", "dark-theme");
  } else {
      document.body.setAttribute("data-theme", "light-theme");
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/confirm-address"
          element={
            <MainLayout>
              <ConfirmAddress />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
