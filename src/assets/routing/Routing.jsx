import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MindBalance from "../taskOne/page/MindBalance";
import TaskTwo from "../taskTwo/page/TaskTwo";
import LicensePage from "../taskThree/components/license/page/LicensePage";
import ReferencePage from "../taskThree/components/reference/ReferencePage";
import About from "../taskThree/components/about/AboutPage";
import TaskFour from "../taskFour/page/TaskFour";
import Video from "../taskFour/componets/video/Video";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/task-one" element={<MindBalance />} />
        <Route path="/task-two" element={<TaskTwo />} />
        <Route path="/task-three-license" element={<LicensePage />} />
        <Route path="/task-three-reference" element={<ReferencePage />} />
        <Route path="/task-three-about" element={<About />} />
        <Route path="/task-four" element={<TaskFour />} />
        <Route path="/task-four/video" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default Routing;
