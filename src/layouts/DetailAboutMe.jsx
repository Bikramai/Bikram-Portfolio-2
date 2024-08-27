/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Headings from "@/components/Headings";
import download from "@/assets/images/download.svg";
import signature from "@/assets/images/signature.svg";
import aboutPic from "@/assets/images/about-pic.svg";
import t11 from "@/assets/images/stack-icons/image11.svg";
import t12 from "@/assets/images/stack-icons/image12.svg";
import t13 from "@/assets/images/stack-icons/image13.svg";
import t14 from "@/assets/images/stack-icons/image14.svg";
import t15 from "@/assets/images/stack-icons/image15.svg";
import t17 from "@/assets/images/stack-icons/image17.svg";
import t18 from "@/assets/images/stack-icons/image18.svg";
import t19 from "@/assets/images/stack-icons/image19.svg";
import t20 from "@/assets/images/stack-icons/image20.svg";
import t21 from "@/assets/images/stack-icons/image21.svg";
import t22 from "@/assets/images/stack-icons/image22.svg";
import t23 from "@/assets/images/stack-icons/image23.svg";
import t24 from "@/assets/images/stack-icons/image24.svg";
import t25 from "@/assets/images/stack-icons/image25.svg";
import t26 from "@/assets/images/stack-icons/image26.svg";
import t27 from "@/assets/images/stack-icons/image27.svg";
import t28 from "@/assets/images/stack-icons/image28.svg";
import t29 from "@/assets/images/stack-icons/image29.svg";
import t30 from "@/assets/images/stack-icons/image30.svg";
import t31 from "@/assets/images/stack-icons/image31.svg";
import t32 from "@/assets/images/stack-icons/image32.svg";
import f1 from "@/assets/images/f1.svg";
import f2 from "@/assets/images/f2.svg";
import f3 from "@/assets/images/f3.svg";
import f4 from "@/assets/images/f4.svg";
import f5 from "@/assets/images/f5.svg";
import award1 from "@/assets/images/award7.svg";
import award2 from "@/assets/images/award7.svg";
import award3 from "@/assets/images/award7.svg";
import award4 from "@/assets/images/award8.svg";
import figma from "@/assets/images/figma.png";
import r1 from "@/assets/images/r1.svg";
import experImg from "@/assets/images/experImg.svg";
import experImg1 from "@/assets/images/experImg1.png";
import pinkDownload from "@/assets/images/pink-download.svg";
import "./DetailAboutMe.css";
import resume from "../assets/resume.pdf";
import sound1 from "../assets/Audio/sound.mp3";
import sound2 from "../assets/Audio/audio2.mp3";
import sound3 from "../assets/Audio/audio3.mp3";
import { useRef, useState } from "react";
import SoundItem from "@/components/SoundItem";

const images = [
  {
    id: 1,
    img: t11,
    title: "HTML",
  },
  {
    id: 2,
    img: t12,
    title: "CSS",
  },
  {
    id: 3,
    img: t27,
    title: "JAVASCRIPT",
  },
  {
    id: 4,
    img: t14,
    title: "JAVA",
  },
  {
    id: 17,
    img: t28,
    title: "TYPESCRIPT",
  },
  {
    id: 3,
    img: t13,
    title: "PYTHON",
  },
  {
    id: 5,
    img: t15,
    title: "DJANGO",
  },
  {
    id: 6,
    img: t17,
    title: "BOOTSTRAP",
  },
  {
    id: 7,
    img: t18,
    title: "FIREBASE",
  },
  {
    id: 8,
    img: t19,
    title: "SEQUELIZE",
  },
  {
    id: 9,
    img: t20,
    title: "FLASK",
  },
  {
    id: 10,
    img: t21,
    title: "GIT HUB",
  },
  {
    id: 11,
    img: t22,
    title: "VS CODE",
  },
  {
    id: 12,
    img: t23,
    title: "POSTGRESQL",
  },
  {
    id: 13,
    img: t24,
    title: "SQLA",
  },
  {
    id: 14,
    img: t25,
    title: "REACT",
  },
  {
    id: 15,
    img: t26,
    title: "NODE JS",
  },
  {
    id: 18,
    img: t29,
    title: "SQL",
  },
  {
    id: 19,
    img: t30,
    title: "GIT",
  },
  {
    id: 20,
    img: t31,
    title: "TAILWIND CSS",
  },
  {
    id: 21,
    img: figma,
    title: "Figma",
  },
  {
    id: 32,
    img: t32,
    title: "POSTMAN",
  },
];

// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
  return <h5 className="font-secondary font-medium  text-2xl leading-7">{children}</h5>;
};

const HirtoryTable = (props) => {
  const { year, head, subHead, icon } = props;
  return (
    <div className="flex gap-x-10 xl:gap-x-5">
      <div className="">
        <p className="font-primary font-normal text-base leading-5 text-gray-color whitespace-nowrap">
          {year}
        </p>
      </div>
      <div className="">
        <h5 className="font-primary font-medium text-base leading-5 text-light-color flex gap-2">
          {head}{" "}
          {icon && (
            <a href="#" target="_blank">
              <img src={pinkDownload} alt="" className="cursor-pointer" />
            </a>
          )}
        </h5>
        <p className="font-primary font-normal text-base leading-5 text-gray-color mt-1">
          {subHead}
        </p>
      </div>
    </div>
  );
};

const DetailAboutMe = () => {
  const playlist = [
    {
      id: 0,
      image: f1,
      title: "Coding",
      description: "My Passion",
      sound: sound1,
      status: false,
    },
    {
      id: 1,
      image: f2,
      title: "Love to Travel",
      description: "Travel",
      sound: sound2,
      status: false,
    },
    {
      id: 2,
      image: f3,
      title: "Laptop Life-Style",
      description: "Remote",
      sound: sound3,
      status: false,
    },
    {
      id: 4,
      image: f4,
      title: "Love",
      description: "Family",
      sound: sound1,
      status: false,
    },
    {
      id: 5,
      image: f5,
      title: "Nature",
      description: "Lover",
      sound: sound1,
      status: false,
    },
  ];
  const [isPlaying, setIsPlaying] = useState(playlist);
  const audioRef = useRef(null);

  const playSound = (soundItem) => {
    setIsPlaying((prevPlaylist) =>
      prevPlaylist.map((item) => {
        if (item.id === soundItem.id) {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }

          if (!item.status) {
            const audio = new Audio(item.sound);
            audio.load();
            audio.play();
            audioRef.current = audio;
          }

          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="pt-14" id="about">
      <Headings
        headingFirst="about"
        headingSecond="me"
        subHeadOne="based in america"
        subHeadTwo="detail-oriented"
        subHeadThree="curious"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        <div className="grid gap-y-6">
          {/* //- 1st  */}
          <div className="bg-dark-black rounded-xl p-6">
            <h5 className="font-primary font-medium  text-xl">
              I'm a Full Stack Developer coding on JavaScript, TypeScript, C#, Python, SQL. 
              Frameworks I've worked with: Flask, Django, React, Node.js, .NET. Love working with REST APIs 
              and PostgreSQL databases on backend. I can't wait to find my first full time opportunity.
            </h5>
            <a
              className="font-primary font-medium text-base mt-1 flex items-center bg-[#2F2F2F] h-8 rounded-md gap-2 px-4 py-6 ml-auto w-32"
              href={resume}
              target="_blank"
              download="Resume"
              rel="noreferrer"
            >
              <img className="" src={download} alt="picccc" />
              Resume
            </a>
          </div>

          {/* //* Forth  */}
          <div className="bg-dark-black rounded-xl p-10">
            <Title>MY BACKGROUND</Title>
            <div className="font-primary font-medium  text-base text-gray-color leading-5 mt-6">
              <p>
                With 13 years of experience in a business, I have  a diverse skill set that encompasses{" "}
                <span className="text-white">leadership, strategic planning,</span>{" "}and{" "} 
                <span className="text-white">operational efficiency.</span>{" "}My entrepreneurial journey has 
                been marked by the <span className="text-white">ability</span>{" "}to{" "}<span className="text-white">adapt</span>{" "}and 
                thrive in <span className="text-white">dynamic environments,</span>{" "}always ensuring that my business stayed ahead of the curve. 
                This extensive experience has not only sharpened my <span className="text-white">problem-solving</span>{" "}abilities but also 
                instilled a profound understanding of customer needs and <span className="text-white">market trends,</span>{" "}which are crucial in any industry. 
              </p>

              <p className="mt-5">
                Driven by a<span className="text-white">{" "}passion for technology</span>{" "}and a relentless <span className="text-white">curiosity,</span>{" "} 
                with a background in <span className="text-white">computer science</span>{" "}as well, I made a deliberate transition into software engineering. 
                This shift was motivated by a desire to leverage my <span className="text-white">analytical skills</span>{" "}and <span className="text-white">innovative mindset</span>{" "}
                in a field that continuously evolves. My background in business has provided me with a unique perspective on technology's role in <span className="text-white">solving real-world</span>{" "}
                problems, allowing me to approach software development with a holistic view that balances technical excellence with <span className="text-white">practical applicability.</span>
              </p>

              <p className="mt-5">
              <span className="text-white">My curiosity led me to wonder:</span>{" "}Could I also create something that can evoke this effect on people? Now, fueled by a fervent desire to excel, I eagerly seek avenues to 
                further hone my expertise and make impactful contributions in the ever-evolving landscape of technology, elevating everyday experiences into <span className="text-white">inspiring solutions.</span>
              </p>
            </div>
            <img src={signature} alt="picccccc" className="mt-10" />
          </div>

          {/* //+ Seven */}
          <div className="bg-dark-black rounded-xl">
            <div className="w-full h-full">
              <img src={aboutPic} alt="" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>
        <div className="grid gap-y-6">
          {/* //- second */}
          <div className="bg-dark-black rounded-xl p-6 relative">
            <img src={r1} alt="" className="w-full" />
            <div className="flex flex-col gap-y-3 absolute left-5 bottom-5">
              <button className="font-primary font-medium text-base leading-4 text-light-color bg-[#363535] px-4 py-5 h-6 rounded-md flex items-center self-start">
                Hi!
              </button>
              <button className="font-primary font-medium text-base leading-4 text-light-color bg-[#363535] px-4 py-5 h-6 rounded-md flex items-center self-start">
                I'm Dev BIKRAM
              </button>
              <button className="font-primary font-medium text-base leading-4 text-light-color bg-[#363535] px-4 py-5 h-6 rounded-md flex items-center self-start">
                Happy to connect with you
              </button>
            </div>
          </div>

          {/* //* Fivth */}
          <div className="bg-dark-black rounded-xl p-6">
            <Title>AWARDS & FEATURES</Title>
            <div className="grid gap-4 mt-6">
              <div className="flex gap-x-10 xl:gap-x-16">
                <div className="">
                  <h5 className="font-primary font-medium text-base leading-5 text-light-color">
                    2023
                  </h5>
                  <h5 className="font-primary font-medium text-base leading-5 text-light-color">
                    Portfolio
                  </h5>
                </div>
                <div className="grid gap-y-4">
                  <a
                    className="flex gap-5 cursor-pointer"
                    href="https://www.credly.com/org/coding-temple/badge/front-end-engineering-certificate-of-completion"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="">
                      <img src={award1} alt="" />
                    </div>
                    <div className="">
                      <h5 className="font-primary font-medium text-base leading-5 text-light-color">
                        Certificate Completion Award
                      </h5>
                      <p className="font-primary font-normal text-base leading-5 text-gray-color mt-1">
                        Dent-A Super Performer
                      </p>
                    </div>
                  </a>
                  <a
                    className="flex gap-5 cursor-pointer"
                    href="https://www.credly.com/org/coursera/badge/google-data-analytics-professional-certificate-non-"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="">
                      <img src={award2} alt="" />
                    </div>
                    <div className="">
                      <h5 className="font-primary font-medium text-base leading-5 text-light-color">
                        Google - Data Analytics
                      </h5>
                      <p className="font-primary font-normal text-base leading-5 text-gray-color mt-1">
                        Coursera
                      </p>
                    </div>
                  </a>
                  <a
                    className="flex gap-5 cursor-pointer"
                    href="https://www.kaggle.com/bikramlimbu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="">
                      <img src={award3} alt="" />
                    </div>
                    <div className="">
                      <h5 className="font-primary font-medium text-base leading-5 text-light-color">
                        Machine Learning - Kaggle
                      </h5>
                      <p className="font-primary font-normal text-base leading-5 text-gray-color mt-1">
                        AI & ML
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex gap-x-10 xl:gap-x-16">
                <div className="">
                  <h5 className="font-primary font-medium text-base leading-5 text-light-color">
                    2018
                  </h5>
                  <h5 className="font-primary font-medium text-base leading-5 text-light-color">
                    Portfolio
                  </h5>
                </div>
                <div className="grid gap-y-4">
                  <a
                    className="flex gap-5 cursor-pointer"
                    href="https://www.fortis.edu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="">
                      <img src={award4} alt="" />
                    </div>
                    <div className="">
                      <h5 className="font-primary font-medium text-base leading-4 text-light-color">
                        Fortis College
                      </h5>
                      <p className="font-primary font-normal text-base leading-4 text-gray-color mt-1">
                        Computer Infomation Technology
                      </p>
                      <p className="font-primary font-normal text-base leading-4 text-gray-color mt-1">
                        Dent-A Student Award
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* //+ 8th */}
          <div className="bg-dark-black rounded-xl p-6">
            <Title>TECH STACKS</Title>
            <div className="flex flex-wrap gap-6 mt-6">
              {images.map((image, index) => (
                <div key={index} className="grid justify-items-center">
                  <a
                    className="w-12 h-12"
                    href="https://www.awwwards.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={image.img}
                      alt={`Image ${index}`}
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <p className="font-primary font-medium text-xs md:text-sm leading-4 text-gray-color mt-2 text-center">
                    {image.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-none md:gap-6 gap-y-6 md:col-start-1 md:col-end-3 lg:col-start-auto lg:col-end-auto ">
          {/* //- Third */}
          <div className="bg-dark-black rounded-xl p-6 md:col-start-0 md:col-end-1">
            <Title>EXPERIENCE</Title>

            <div className="grid gap-9 mt-6">
              <HirtoryTable
                year="2023--NOW"
                head="Software Engineer"
                subHead="Software Developer"
                icon="true"
              />
              <HirtoryTable
                year="2022--NOW"
                head="GitHub"
                subHead="Projects"
                icon="true"
              />
              <HirtoryTable
                year="2018--NOW"
                head="Shop"
                subHead="Amazon"
                icon="true"
              />
              <HirtoryTable
                year="2014--2023"
                head="Manager"
                subHead="Retail Store Cuyahoga falls Ohio"
                icon="true"
              />
              <HirtoryTable
                year="2019--2021"
                head="Techanican"
                subHead="Desk Support"
                icon="true"
              />
            </div>
            <div className="w-full opacity-20 h-px bg-light-gray my-7" />
            <p className="font-primary font-medium text-base leading-5 text-light-color text-center">
              Companies I’ve collaborated with
            </p>
            <img src={experImg} alt="" className="mx-auto my-5" />
            <img src={experImg1} alt="" className="mx-auto my-5" />
          </div>

          {/* //* Sixth */}
          <div className="bg-dark-black rounded-xl p-6">
            <Title>EDUCATION</Title>
            <div className="grid gap-9 mt-5">
              <HirtoryTable year="2023--2023" head="Coding Temple" subHead="Software Engineer Certificate" />
              <HirtoryTable year="2021--2022" head="Google" subHead="Data Analytics Certificate" />
              <HirtoryTable year="2018--2020" head="Fortis College" subHead="Computer Science Major" />
            </div>
            <div className="w-full opacity-20 h-px bg-light-gray my-7" />
            <p className="font-primary font-medium text-base leading-5 text-light-color text-center">
              Companies I’ve collaborated with
            </p>
            <img src={experImg} alt="" className="mx-auto my-5" />
            <img src={experImg1} alt="" className="mx-auto my-5" />
            <img src={experImg} alt="" className="mx-auto my-5" />
            <img src={experImg1} alt="" className="mx-auto my-5" />
            <img src={experImg} alt="" className="mx-auto my-5" />
            <img src={experImg1} alt="" className="mx-auto my-5" />
          </div>

          {/* //+ 9th  */}
          {/* <div className="bg-dark-black rounded-xl p-6">
            <Title>YEARLY PLANNER</Title>
            <div className="grid gap-10 mt-5">
              <HirtoryTable year="Quater1" head="Yearly Plan" subHead="Product Research" />
              <HirtoryTable year="Quater2" head="Yearly Plan" subHead="Product Development" />
              <HirtoryTable year="Quater3" head="Yearly Plan" subHead="Product Production" />
              <HirtoryTable year="Quater4" head="Yearly Plan" subHead="Listing Optimization" />
              <div className="w-full opacity-20 h-px bg-light-gray my-0" />
            <p className="font-primary font-medium text-base leading-5 text-light-color text-center">
              Reach My Goals, Find Focus & Build Habits
            </p>
            </div>
          </div> */}

<div className="bg-dark-black rounded-xl p-6 md:col-start-0 md:col-end-1">
            <Title>YEARLY PLANNER</Title>

            <div className="grid gap-9 mt-6">
              <HirtoryTable
                year="Q1-PLAN"
                head="6-Projects"
                subHead="Product Research"
                icon="true"
              />
              <HirtoryTable
                year="Q2-PLAN"
                head="6-Projects"
                subHead="Product Development"
                icon="true"
              />
              <HirtoryTable
                year="Q3-PLAN"
                head="6-Projects"
                subHead="Product Production"
                icon="true"
              />
              <HirtoryTable
                year="Q4-PLAN"
                head="6-Projects"
                subHead="Listing Optimization"
                icon="true"
              />
            <p className="font-primary font-medium text-base leading-5 text-light-color text-center">
              Vision is a Picture of the future that produces passion.
            </p>
            </div>
            <div className="w-full opacity-20 h-px bg-light-gray my-7" />
            <p className="font-primary font-medium text-base leading-5 text-light-color text-center">
              Reach My Goals, Find Focus & Build Habits
            </p>
            {/* <img src={experImg1} alt="" className="mx-auto my-5" /> */}
          </div>

          {/* //+ 10th  */}
          <div className="bg-dark-black rounded-xl p-6">
            <Title>HOBBIES</Title>
            {isPlaying.map((playData) => (
              <div className="grid gap-6 mt-14" key={playData.id}>
                <SoundItem
                  id={playData.id}
                  image={playData.image}
                  title={playData.title}
                  description={playData.description}
                  playSound={playSound}
                  status={playData.status}
                  sound={playData.sound}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAboutMe;
