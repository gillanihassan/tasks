import React from "react";
import FiveNavbar from "../components/navbar/FiveNavbar";
import HeroSection from "../components/heroSection/HeroSection";
import CardSection from "../components/cardSection/CardSection";
import FitBit from "../components/fitBit/FitBit";
import Purpose from "../components/purpose/Purpose";
import Mountain from "../components/mountain/Mountain";

function TaskFive() {
  return (
    <div>
      <FiveNavbar />
      <HeroSection />
      <CardSection />
      <FitBit />
      <Purpose />
      <Mountain />
    </div>
  );
}

export default TaskFive;
