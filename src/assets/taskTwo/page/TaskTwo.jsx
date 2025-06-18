import Header from "../components/header/Header";
import AmazonGrowth from "../components/amazonGrowth/AmazonGrowth";
import BrandService from "../components/brandService/BrandService";
import MarketAccess from "../components/marketAccess/MarketAccess";
import WareHouse from "../components/wareHouse/WareHouse";
import BrandPartner from "../components/brandPartner/BrandPartner";
import TeamSection from "../components/teamSection/TeamSection";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
// import BrandAccelerate from "../components/brandAccelerate/BrandAccelerate";

function TaskTwo() {
  return (
    <div>
      <Header />
      <AmazonGrowth />
      <BrandService />
      {/* <BrandAccelerate /> */}
      <MarketAccess />
      <WareHouse />
      <BrandPartner />
      <TeamSection />
      <About />
      <Footer />
    </div>
  );
}

export default TaskTwo;
