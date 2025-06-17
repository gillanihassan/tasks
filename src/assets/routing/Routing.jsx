import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MindBalance from "../taskOne/page/MindBalance";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/taskOne" element={<MindBalance />} />
      </Routes>
    </Router>
  );
}

export default Routing;
