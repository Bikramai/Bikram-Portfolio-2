import fb from "@/assets/images/fb.svg";
import fgh from "@/assets/images/fgh.svg";
import ins from "@/assets/images/in.svg";
import li from "@/assets/images/li.svg";
import footerImg from "@/assets/images/footer-img.svg";
import followText from "@/assets/images/follow-text.svg";
import plusBtn from "@/assets/images/plus-btn.svg";
import joinBtn from "@/assets/images/join-btn.svg";
import useScrollToSection from "@/hooks/useScrollToSection";
import { menus } from "./Header";

const Footer = () => {
  const scrollToSection = useScrollToSection();

  return (
    <div className="pt-2" id="contact">
      <div className="w-full h-auto bg-[#282828] rounded-t-[20px]">
        <div className="flex items-center overflow-hidden py-5 xl:py-10">
          <div className="flex-animation">
            <div className="lg:w-[48px] lg:h-[48px] first-div">
              <img className="" src={plusBtn} alt="footer-img" />
            </div>
            <a
              href="https://www.linkedin.com/in/bikram-phurumbo-099010173/"
              target="_blank"
              rel="noreferrer"
              className="lg:min-w-[175px] second-div"
            >
              <img className="w-full h-full object-contain" src={joinBtn} alt="footer-img" />
            </a>
          </div>
          <div className="w-full ml-1 md:ml-5">
            <img className="" src={followText} alt="footer-img" />
          </div>
          <div className="flex-animation ml-1 md:ml-5">
            <div className="lg:w-[48px] lg:h-[48px] first-div">
              <img className="" src={plusBtn} alt="footer-img" />
            </div>
            <a
              href="https://www.linkedin.com/in/bikram-phurumbo-099010173/"
              target="_blank"
              rel="noreferrer"
              className="lg:min-w-[175px] second-div"
            >
              <img className="" src={joinBtn} alt="footer-img" />
            </a>
          </div>
          <div className="w-full ml-1 md:ml-5">
            <img className="" src={followText} alt="footer-img" />
          </div>
        </div>
        <div className="pb-0">
          <div className="bg-[#1D1D1D] rounded-t-3xl p-8 relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[743px] overflow-hidden">
            <img
              className="absolute bottom-[-70px] xl:bottom-0 xl:right-0 "
              src={footerImg}
              alt="footer-img"
            />
            <div></div>
            <div className="flex justify-between">
              <p className="max-w-[290px] font-primary font-light text-base md:text-xl leading-6 text-[#898788]">
                This is the end of the page, but the beginning of my journey...
              </p>

              <div className="grid gap-y-2 md:gap-y-4 z-10">
                {menus.map((link, index) => (
                  < div key={index} className="text-right" >
                  <p
                    className="font-primary font-light text-lg inline ml-auto md:text-xl leading-6 text-light-color 
                    border-b-2 hover:border-pink-color border-transparent cursor-pointer transition duration-300"
                    onClick={() => scrollToSection(link.navigateTo)}
                  >
                    {link.name}
                  </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid absolute bottom-5 gap-y-4">
            <a
                className="rounded-[50%] bg-pink-color bg-opacity-5 p-2 w-9 h-9 "
                href="https://github.com/bikramai"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fgh} alt="" className="w-full h-full object-contain" />
              </a>

              <a
                className="rounded-[50%] bg-pink-color bg-opacity-5 p-2 w-9 h-9 "
                href="https://www.linkedin.com/in/bikram-phurumbo-099010173/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={li} alt="" className="w-full h-full object-contain" />
              </a>
              
              <a
                className="rounded-[50%] bg-pink-color bg-opacity-5 p-2 w-9 h-9 "
                href="https://www.instagram.com/bikramp_official/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ins} alt="" className="w-full h-full object-contain" />
              </a>

              <a
                className="rounded-[50%] bg-pink-color bg-opacity-5 p-2 w-9 h-9 "
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fb} alt="" className="w-full h-full object-contain" />
              </a>
              
            </div>
            <h1
              className="font-secondary font-medium text-[30px] md:text-[60px] xl:text-[100px] xl:leading-[120px] text-light-gray text-center
           absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-default"
            >
              <div className="relative">
                {"THANK YOU".split("").map((letter, index) => (
                  <div
                    key={index}
                    className="inline-block transition-transform duration-300 ease-in-out hover:translate-y-[-10px] md:hover:translate-y-[-20px]"
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
