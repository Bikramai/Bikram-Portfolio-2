/* eslint-disable react/prop-types */
import Star from "@/assets/images/Star.svg";

const Headings = (props) => {
  const {
    headingFirst = "select",
    headingSecond = "work",
    subHeadOne = "case studies",
    subHeadTwo = "product STRATEGY",
    subHeadThree = "design process ",
  } = props;

  return (
    <>
      <div className="w-full uppercase">
        <div className="flex justify-center items-center gap-0 md:gap-2 xl:gap-10">
          <h1 className="font-primary font-normal text-5xl md:text-8xl lg:text-[130px] xl:text-[170px] 2xl:text-[170px] leading-[4rem] md:leading-[8rem] lg:leading-[252px]">
            {headingFirst}
          </h1>
          <div className="">
            <img src={Star} alt="pic11" className="w-6 h-6 md:w-12 md:h-12 " />
          </div>
          <h1 className="font- primary font-semibold italic text-5xl md:text-8xl lg:text-[130px] xl:text-[170px] 2xl:text-[170px] leading-[4rem] md:leading-[8rem] lg:leading-[252px]">
            {headingSecond}
          </h1>
        </div>
      </div>

      <div className="flex w-full items-center gap-2 md:gap-5 px-2 lg:px-16 uppercase">
        <p className="font-secondary font-normal leading-5 text-xs md:text-base whitespace-nowrap text-gray-color ml-auto">
          {subHeadOne}
        </p>
        <div className="w-full opacity-20 h-px bg-light-gray" />
        <p className="font-secondary font-normal leading-5 text-xs md:text-base whitespace-nowrap text-gray-color">
          {subHeadTwo}
        </p>
        <div className=" w-full opacity-20 h-px bg-light-gray" />
        <p className="font-secondary font-normal leading-5 text-xs md:text-base whitespace-nowrap text-gray-color mr-auto">
          {subHeadThree}
        </p>
      </div>
    </>
  );
};

export default Headings;
