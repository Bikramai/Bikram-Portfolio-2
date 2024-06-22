import Headings from "@/components/Headings";
import w1 from "../assets/images/w1.png";
import w2 from "../assets/images/w2.png";
import w3 from "../assets/images/w3.png";
import w4 from "../assets/images/w4.png";
import w5 from "../assets/images/w5.png";
import w6 from "../assets/images/w6.png";

const SelectWork = () => {
  return (
    <div className="pt-14" id="select-work">
      <Headings
        headingFirst="select"
        headingSecond="work"
        subHeadOne="case studies"
        subHeadTwo="product STRATEGY"
        subHeadThree="design process"
      />
      <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap gap-6 justify-center lg:justify-between mt-16 ">
        <a
          className="grid gap-y-2 bg-dark-black  rounded-xl px-2 py-3 group cursor-pointer"
          href="https://digitalservice-ten.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323] group-hover:bg-[#0F7122] rounded-xl py-3 lg:py-7 px-3 lg:px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h5 className="text-sm md:text-base leading-7 font-semibold font-primary text-white">
                Project 1
              </h5>
              <p className="text-sm md:text-xl leading-6 font-secondary font-semibold text-gray-color">
                15 Jan
              </p>
            </div>
          </div>
          <div className="overflow-hidden w-full h-full object-cover lg:h-full rounded-xl">
            <img
              src={w1}
              alt=""
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition ease-out duration-300"
            />
          </div>
        </a>

        <a
          className="grid gap-y-2 bg-dark-black  rounded-xl px-2 py-3 group cursor-pointer"
          href="https://ranger134-wk10-proj.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323]  group-hover:bg-[#5D23D9] rounded-xl py-7 px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h5 className="text-base leading-7 font-semibold font-primary text-white">
                Project 2
              </h5>
              <p className="text-xl leading-6 font-secondary font-semibold text-gray-color">
                31 Jan
              </p>
            </div>
          </div>
          <div className="overflow-hidden w-full h-full object-cover lg:h-full rounded-xl">
            <img
              src={w2}
              alt=""
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition ease-out duration-300"
            />
          </div>
        </a>

        <a
          className="grid gap-y-2 bg-dark-black rounded-xl px-2 py-3 group cursor-pointer"
          href="https://game-app-orcin.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323] group-hover:bg-[#0291DE]  rounded-xl py-7 px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h5 className="text-base leading-7 font-semibold font-primary text-white">
                Project 3
              </h5>
              <p className="text-xl leading-6 font-secondary font-semibold text-gray-color">
                15 Feb
              </p>
            </div>
          </div>
          <div className="overflow-hidden lg:h-full rounded-xl">
            <img
              src={w3}
              alt=""
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 w-full h-full object-cover transition ease-out duration-300"
            />
          </div>
        </a>
      </div>
      <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap gap-6 justify-center lg:justify-between mt-16 ">
      <a
          className="grid gap-y-2 bg-dark-black  rounded-xl px-2 py-3 group cursor-pointer"
          href="https://digitalservice-ten.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323] group-hover:bg-[#0F7122] rounded-xl py-3 lg:py-7 px-3 lg:px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h5 className="text-sm md:text-base leading-7 font-semibold font-primary text-white">
                Project 4
              </h5>
              <p className="text-sm md:text-xl leading-6 font-secondary font-semibold text-gray-color">
                28 Feb
              </p>
            </div>
          </div>
          <div className="overflow-hidden w-full h-full object-cover lg:h-full rounded-xl">
            <img
              src={w4}
              alt=""
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition ease-out duration-300"
            />
          </div>
        </a>

        <a
          className="grid gap-y-2 bg-dark-black  rounded-xl px-2 py-3 group cursor-pointer"
          href="https://ranger134-wk10-proj.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323]  group-hover:bg-[#5D23D9] rounded-xl py-7 px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h5 className="text-base leading-7 font-semibold font-primary text-white">
                Project 5
              </h5>
              <p className="text-xl leading-6 font-secondary font-semibold text-gray-color">
                15 March
              </p>
            </div>
          </div>
          <div className="overflow-hidden w-full h-full object-cover lg:h-full rounded-xl">
            <img
              src={w5}
              alt=""
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition ease-out duration-300"
            />
          </div>
        </a>

        <a
          className="grid gap-y-2 bg-dark-black rounded-xl px-2 py-3 group cursor-pointer"
          href="https://game-app-orcin.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323] group-hover:bg-[#0291DE]  rounded-xl py-7 px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h5 className="text-base leading-7 font-semibold font-primary text-white">
                Project 6
              </h5>
              <p className="text-xl leading-6 font-secondary font-semibold text-gray-color">
                30 March
              </p>
            </div>
          </div>
          <div className="overflow-hidden lg:h-full rounded-xl">
            <img
              src={w6}
              alt=""
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 w-full h-full object-cover transition ease-out duration-300"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SelectWork;
