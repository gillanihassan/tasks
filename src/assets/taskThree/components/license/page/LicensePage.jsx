import React from "react";
import LicenseNav from "../navbar/LicenseNav";
import BuySection from "../buySection/BuySection";
import LicensesSection from "../licensesSection/LicensesSection";
import LicenseService from "../licenseService/LicenseService";
import FormSection from "../formSection/FormSection";
import ContactForm from "../contactForm/ContactForm";
import BillingSection from "../billingSection/BillingSection";
import Policy from "../policy/Policy";

function LicensePage() {
  return (
    <div>
      <LicenseNav />
      <BuySection />
      <LicensesSection />
      <LicenseService />
      <FormSection />
      <ContactForm />
      <BillingSection />
      <Policy />
    </div>
  );
}

export default LicensePage;
