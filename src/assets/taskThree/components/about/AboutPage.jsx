import LicenseNav from "../license/navbar/LicenseNav";
import Company from "./company/Company";
import Team from "./team/Team";
import LicenseFooter from "../license/footer/LicenseFooter";

function AboutPage() {
  return (
    <div>
      <LicenseNav />
      <Company />
      <Team />
      <LicenseFooter />
    </div>
  );
}

export default AboutPage;
