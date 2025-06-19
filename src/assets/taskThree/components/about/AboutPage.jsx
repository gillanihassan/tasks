import LicenseNav from "../license/navbar/LicenseNav";
import Company from "./company/Company";
import Team from "./team/Team";
import LicenseFooter from "../license/footer/LicenseFooter";
import ContactUs from "./contanct-us/ContactUs";

function AboutPage() {
  return (
    <div>
      <LicenseNav />
      <Company />
      <Team />
      <ContactUs />
      <LicenseFooter />
    </div>
  );
}

export default AboutPage;
