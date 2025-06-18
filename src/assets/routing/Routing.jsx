import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MindBalance from "../taskOne/page/MindBalance";
import TaskTwo from "../taskTwo/page/TaskTwo";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/task-one" element={<MindBalance />} />
        <Route path="/task-two" element={<TaskTwo />} />
      </Routes>
    </Router>
  );
}

export default Routing;
