import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MindBalance from "../taskOne/page/MindBalance";
import TaskTwo from "../taskTwo/page/TaskTwo";
import LicensePage from "../taskThree/components/license/page/LicensePage";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/task-one" element={<MindBalance />} />
        <Route path="/task-two" element={<TaskTwo />} />
        <Route path="/task-three-license" element={<LicensePage />} />
      </Routes>
    </Router>
  );
}

export default Routing;
