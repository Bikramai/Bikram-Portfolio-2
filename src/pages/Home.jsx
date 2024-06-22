import HeroSection from "@/layouts/HeroSection";
import Header from "@/layouts/Header";
import AboutMe from "@/layouts/AboutMe";
import SelectWork from "@/layouts/SelectWork";
import DetailAboutMe from "@/layouts/DetailAboutMe";
import Footer from "@/layouts/Footer";

const Home = () => {
  // - Home
  return (
    <div>
      <Header />
      <div className="p-4 md:p-16 pt-0">
        <HeroSection />
        <AboutMe />
        <SelectWork />
        <DetailAboutMe />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
