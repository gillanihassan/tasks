import React from "react";
import LicenseNav from "../navbar/LicenseNav";
import BuySection from "../buySection/BuySection";
import LicensesSection from "../licensesSection/LicensesSection";
import LicenseService from "../licenseService/LicenseService";
import FormSection from "../formSection/FormSection";
import ContactForm from "../contactForm/ContactForm";

function LicensePage() {
  return (
    <div>
      <LicenseNav />
      <BuySection />
      <LicensesSection />
      <LicenseService />
      <FormSection />
      <ContactForm />
    </div>
  );
}

export default LicensePage;
