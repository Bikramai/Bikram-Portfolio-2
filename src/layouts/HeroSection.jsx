import moment from "moment-timezone";
import rings from "../assets/images/rings.svg";
import link from "../assets/images/resume-link.svg";
import bannerImage from "../assets/images/banner-img.svg";
import resume from "../assets/resume.pdf";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [timeNewYork, setTimeNewYork] = useState("");
  const [dateNewYork, setDateNewYork] = useState("");

  const dateAndTimeCalculation = () => {
    const now = new Date();
    setTimeNewYork(moment.tz(now, "America/New_York").format("hh:mm A"));
    setDateNewYork(moment.tz(now, "America/New_York").format("dddd, D MMMM YYYY"));
  };

  useEffect(() => {
    dateAndTimeCalculation();

    const interval = setInterval(() => {
      dateAndTimeCalculation();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* //- Banner Section */}
      <div
        className="grid px-2 md:px-20 content-center min-h-[300px] md:min-h-[410px] xl:min-h-[500px] mt-16 justify-center text-center container"
        id="hero-section"
      >
        <img
          src={bannerImage}
          className="absolute left-1/2 top-1/2 hover:scale-110 transition duration-300 transform -translate-x-1/2 -translate-y-1/2"
          alt=""
        />

        <div className="inline-block">
          <h1 className="text-[70px] sm:text-[105px] md:text-[135px] lg:text-[170px] xl:text-[220px] leading-[75px] md:leading-[105px] lg:leading-[135px] xl:leading-[185px] font-medium font-primary text-light-color inline-block static first-text">
            HITHERE
          </h1>
          <div className="flex justify-between text-[10px] sm:text-base leading-none font-secondary font-normal text-pink-color">
            <span className="second-text">Transitioning From Business Towards</span>
            <span className="third-text">Software Engineering Path</span>
          </div>
        </div>
        <div className="flex items-end mt-3 forth-text">
          <h1 className="text-[60px] sm:text-[105px] md:text-[110px] lg:text-[160px] xl:text-[200px] leading-[43px] sm:leading-[70px] md:leading-[95px] lg:leading-[120px] xl:leading-[160px] font-semibold font-primary text-light-color">
            IAM<span className="glass-text animate-border">B</span>
            <span className="text-pink-color animate-border pinkbgcolor">I</span>
            <span className="glass-text animate-border">KRAM</span>
          </h1>
          <div className="w-[35px] sm:w-[65px] md:w-[100px] h-2 md:h-3 bg-[#D9d9d9] animate-gradient"></div>
        </div>
      </div>
      <div className="flex justify-between pt-12 md:pt-20">
        {/* //- Left Side */}

        <div className="flex gap-1">
          <div className="grid">
            <h6 className="text-sm sm:text-xl sm:leading-6 font-medium font-primary text-light-color">
              Based in Ohio, USA
            </h6>
            <p className="text-xs sm:text-base leading-5 font-secondary font-normal text-gray-color sm:mt-3">
              {timeNewYork} | {dateNewYork}
            </p>
          </div>
          <div className="w-4 sm:w-10 h-8 sm:h-16">
            <img src={rings} alt="rings" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* //- Right Side */}
        <div className="grid">
          <h6 className="text-sm sm:text-xl sm:leading-6 font-medium font-primary text-light-color">
            View Resume
          </h6>
          <a
            className="flex gap-1 sm:mt-3 items-center cursor-pointer"
            href={resume}
            target="_blank"
            download="Resume"
            rel="noreferrer"
          >
            <div className="h-3 sm:h-6 w-3 sm:w-6">
              <img src={link} alt="link" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs sm:text-base sm:leading-5 font-secondary font-normal text-gray-color">
              Link Portfolio
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
