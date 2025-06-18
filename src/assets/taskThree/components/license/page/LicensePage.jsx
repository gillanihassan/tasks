import React from "react";
import LicenseNav from "../navbar/LicenseNav";
import BuySection from "../buySection/BuySection";
import LicensesSection from "../licensesSection/LicensesSection";

function LicensePage() {
  return (
    <div>
      <LicenseNav />
      <BuySection />
      <LicensesSection />
    </div>
  );
}

export default LicensePage;
