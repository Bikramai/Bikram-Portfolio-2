/* eslint-disable react/no-unescaped-entities */
import ImagesSection from "./ImagesSection";
import languages from "../assets/images/languages.svg";
import gray from "../assets/images/gray.png";

const AboutMe = () => {
  return (
    <div className="pt-24 w-full " id="intro">
      <div className="grid grid-cols-1 gap-2 lg:gap-12 h-full desktop-sec">
        <div className=" xl:pr-14">
          <h3 className="text-xl sm:text-xl sm:font-semibold sm:leading-[62px] font-primary text-gray-color ">
            <label className="text-light-color">I'm a Full Stack Software Engineer,</label> with a
            interested in crafting high-quality, clean code and continuing to expand my interest in{" "}
            <label className="text-light-color">algorithms, data structures, object-oriented code, </label> and scalable design with coding on{" "}
            <label className="text-light-color">JavaScript,</label>{" "}
            <label className="text-light-color">TypeScript, C#, Python, SQL.</label> Frameworks I've worked with{" "}
            <label className="text-light-color">: React, Node.js, .NET, Flask, Django</label> and
            Love working with <label className="text-light-color">REST APIs</label>{" "}and <label className="text-light-color">PostgreSQL</label>{" "}
            databases on backend. I have a particular interest in translating UI designs into reality,
            AI generative tools to solve problems, clean, refactored code, testing and TDD, and would love to learn more about Cloud hosting. 🎨
            
            I specialize in crating complex and innovatve interfaces, scalable logic, and problem-soving abilites. 
            I provide customized solutions that merge innovation, quality, and proessionalism to achieve client objectives 
            and foster business success.{" "}🚀

            Committed to delivering user-first front-end views supported by robust, efficient back-end solutions.
            Bringing a unique blend of{" "}<label className="text-light-color">empathetic</label> and{" "}
            <label className="text-light-color">analytical problem-solving</label> that enhances
            both the technical and business aspects of development. Excels within collaborative,
            technically-driven environments,{" "}
            <label className="text-light-color">enthusiastically poised</label> to enhance and
            <label className="text-light-color"> elevate </label> user experiences alongside your{" "}
            <label className="text-light-color">esteemed team!</label> 
          </h3>
          <div className="flex justify-between mt-8">
            <span className="text-base font-secondary font-normal text-gray-color leading-5">
              I've helped multiple companies
              <br /> deliver <label className="text-light-color">high-quality</label> web design.
            </span>
            <span className="text-base font-secondary font-normal text-gray-color leading-5">
            Currently Seeking a position 
              <br /> in <label className="text-light-color">Software Development.</label>
            </span>
          </div>
          <div className="mt-14 relative ">
            <img src={languages} className="grayscale w-full h-auto object-cover" />
            <img src={gray} className="w-full h-auto object-cover absolute top-0" />
          </div>
        </div>

        <div className="h-full opacity-20 w-px bg-light-gray" />

        <div className="">
          <ImagesSection />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
