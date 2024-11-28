import React from "react";
import Home from '../Home/Home';
import { Route, Routes } from "react-router-dom";
import Privacy from "../Privacy Policy/Privacy";
import Terms from "../Terms Conditions/Terms";
import Publisher from "../Publisher Details/Publisher";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/publisher-details" element={<Publisher />} />

      </Routes>

    </div>
  );
};

export default Router;
