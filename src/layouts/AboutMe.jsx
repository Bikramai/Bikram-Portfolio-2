/* eslint-disable react/no-unescaped-entities */
import ImagesSection from "./ImagesSection";
import languages from "../assets/images/languages.svg";
import gray from "../assets/images/gray.png";

const AboutMe = () => {
  return (
    <div className="pt-28 w-full " id="intro">
      <div className="grid grid-cols-1 gap-2 lg:gap-12 h-full desktop-sec">
        <div className=" xl:pr-14">
          <h3 className="text-4xl sm:text-xl sm:font-semibold sm:leading-[74px] font-primary text-gray-color ">
            <label className="text-light-color">Results-driven full-stack developer</label> with a
            strong foundation in business and customer services, seeking a position in{" "}
            <label className="text-light-color">software development.</label> With expertise in{" "}
            <label className="text-light-color">JavaScript</label> (including{" "}
            <label className="text-light-color">Node.js and React), Python </label> and{" "}
            <label className="text-light-color">database design and implementation,</label> and
            committed to delivering user-first front-end views supported by robust, efficient
            back-end solutions. Bringing a unique blend of{" "}
            <label className="text-light-color">empathetic</label> and{" "}
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
            Currently driving technological
              <br /> advancement at <label className="text-light-color">Basic Theory</label>
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
