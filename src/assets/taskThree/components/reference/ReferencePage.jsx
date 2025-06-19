import LicenseNav from "../license/navbar/LicenseNav";
import About from "./about/About";
import Success from "./success/Success";
import LicenseFooter from "../license/footer/LicenseFooter";

function ReferencePage() {
  return (
    <div>
      <LicenseNav />
      <Success />
      <About />
      <LicenseFooter />
    </div>
  );
}

export default ReferencePage;
