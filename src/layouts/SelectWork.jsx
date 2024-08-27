import Headings from "@/components/Headings";
import w1 from "../assets/images/w1.png";
import w2 from "../assets/images/w2.png";
import w3 from "../assets/images/w3.png";
import w4 from "../assets/images/w4.png";
import w5 from "../assets/images/w5.png";
import w6 from "../assets/images/w6.png";

import t1 from "@/assets/images/js.svg";
import t2 from "@/assets/images/btstrap.svg";
import t3 from "@/assets/images/tapi.png";
import t4 from "@/assets/images/python.svg";
import t5 from "@/assets/images/tdjango.svg";
import t6 from "@/assets/images/postgresql.svg";
import t7 from "@/assets/images/treact.svg";
import t8 from "@/assets/images/ts.svg";
import t9 from "@/assets/images/firebase.svg";
import t10 from "@/assets/images/flutter.svg";
import t11 from "@/assets/images/dart.svg";
import t12 from "@/assets/images/nodejs.svg";
import t13 from "@/assets/images/jwt.svg";

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
      <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap gap-3 justify-center lg:justify-between mt-16 ">
        <a
          className="grid gap-y-2 bg-dark-black  rounded-xl px-2 py-3 group cursor-pointer"
          href="https://github.com/Bikramai/Book-land-Ecomerce-Store"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323] group-hover:bg-[#0F7122] rounded-xl py-3 lg:py-7 px-3 lg:px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h5 className="text-sm md:text-base leading-7 font-semibold font-primary text-white">
                BookieMart app
              </h5>
              <p className="text-sm md:text-base leading-7 font-secondary font-semibold text-white">
                Full Stack Development
              </p>
            </div>
          </div>
          <div className="overflow-hidden w-full h-full object-cover lg:h-full rounded-xl">
            <img
              src={w1}
              alt="BookieMart app"
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition ease-out duration-300"
            />
          </div>
          <h5 className="text-sm md:text-base leading-7 font-semibold font-primary text-white">
          <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Description:</h1>
            This web application is designed to combine the best aspects of
            social media and e-commerce for book lovers. Users can browse
            products, make purchases, and share their favorite items with
            friends and followers.
          </h5>
          <div>
            <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Technologies:</h1>
          <p>
            Frontend: JavaScript, HTML, CSS, Bootstrap.
            Backend: Python, Django Database: PostgreSQL
          </p><br></br>
            <div className="flex justify-center">
            <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t1}
                  alt="js Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t2}
                  alt="bootstrap Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t3}
                  alt="api Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t4}
                  alt="python Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t5}
                  alt="Django Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t6}
                  alt="Postgresql Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            </div>
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
                E-Commerce Store
              </h5>
              <p className="text-base leading-6 font-secondary font-semibold text-white">
                Full Stack Development
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
          <h5 className="text-sm md:text-base leading-7 font-semibold font-primary text-white">
          <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Description:</h1>
            Website demonstrates an ability to construct a Full-Stack
            application with the following features: User Authentication Front
            End (with react material-ui) Full CRUD Operations: Create, post,
            Read, Update, Delete, Add Cart, with API calls via routes and
            requests we will make with React.
          </h5>
          <div>
            <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Technologies:</h1>
          <p>
            Frontend: React, Typescript, Bootstrap.
            Database: API, Google Firebase
          </p><br></br>

          <div className="flex justify-center">
            <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t7}
                  alt="react Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t2}
                  alt="bootstrap Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t8}
                  alt="typescript Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t3}
                  alt="api Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t4}
                  alt="python Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t5}
                  alt="Django Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t9}
                  alt="firebase Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            </div>
          </div>
        </a>

        <a
          className="grid gap-y-2 bg-dark-black rounded-xl px-2 py-3 group cursor-pointer"
          href="https://github.com/Bikramai/Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323] group-hover:bg-[#0291DE]  rounded-xl py-7 px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h1 className="text-base leading-7 font-semibold font-primary text-white">
                Weather App
              </h1>
              <p className="text-xl leading-6 font-secondary font-semibold text-white">
                Full Stack Development
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
          <h5 className="text-sm md:text-base leading-7 font-semibold font-primary text-white">
          <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Description:</h1>
            A Flutter application that provides current weather information and
            a 5-day forecast using the OpenWeather API. Features Display current
            weather conditions Show 5-day weather forecast Search for weather by
            city name Responsive UI for different screen sizes
          </h5>
          <div>
            <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Technologies:</h1>
          <p>
            Frontend : Flutter
            Backend : Dart
          </p><br></br>

          <div className="flex justify-center">
            <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t10}
                  alt="flutter Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t11}
                  alt="dart Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t3}
                  alt="api Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            </div>
          </div>
        </a>
      </div>
      <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap gap-6 justify-center lg:justify-between mt-16 ">
        <a
          className="grid gap-y-2 bg-dark-black  rounded-xl px-2 py-3 group cursor-pointer"
          href="https://github.com/Bikramai/Pokemon-Game-App"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323] group-hover:bg-[#0F7122] rounded-xl py-3 lg:py-7 px-3 lg:px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h5 className="text-sm md:text-base leading-7 font-semibold font-primary text-white">
                Pokemon Game
              </h5>
              <p className="text-sm md:text-base leading-6 font-secondary font-semibold text-white">
                Full Stack Development
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
          <h5 className="text-sm md:text-base leading-7 font-semibold font-primary text-white">
          <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Description:</h1>
            Pokémon Battle web application that allows users to fetch Battle
            Data - Users can input an opponent's name to fetch their Pokémon
            data and prepare for a battle.
          </h5>
          <div>
            <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Technologies:</h1>
          <p>
            Frontend: React, Javascript, CSS, HTML.
            Backend: Node.js, Express(ES6), JWT, Axios
            Database: SQLite, PostgreSQL
          </p><br></br>

          <div className="flex justify-center">
            <a
              className="overflow-hidden rounded-xl h-full"
              href="https://github.com/Bikramai/Storefront3-App-Django"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={t7}
                alt="react Logo"
                className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
              />
            </a>

            <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t1}
                  alt="js Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t2}
                  alt="bootstrap Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t3}
                  alt="api Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t12}
                  alt="nodejs Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t13}
                  alt="jwt Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t6}
                  alt="Postgresql Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            </div>
          </div>
        </a>

        <a
          className="grid gap-y-2 bg-dark-black  rounded-xl px-2 py-3 group cursor-pointer"
          href="https://github.com/Bikramai/Parkinsonai-app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323]  group-hover:bg-[#5D23D9] rounded-xl py-7 px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h5 className="text-base leading-7 font-semibold font-primary text-white">
                Parkinson Ai
              </h5>
              <p className="text-sm md:text-base leading-6 font-secondary font-semibold text-gray-white">
                Full Stack Development
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
          <h5 className="text-sm md:text-base leading-7 font-semibold font-primary text-white">
          <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Description:</h1>
            PARKINSON is an innovative web application designed Detect the
            neurological diseases symtoms by sending voice through the restfull
            api so it detact the diseases against your voice.
          </h5>
          <div>
            <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Technologies:</h1>
          <p>
            Frontend : Javascript, Express(ES6), CSS, HTML.                                     
            Backend : Python, Django
            Database : API, SQLite, PostgreSQL
          </p><br></br>

          <div className="flex justify-center">
            <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t1}
                  alt="js Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t2}
                  alt="bootstrap Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t3}
                  alt="api Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t4}
                  alt="python Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t5}
                  alt="Django Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t6}
                  alt="Postgresql Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            </div>
          </div>
        </a>

        <a
          className="grid gap-y-2 bg-dark-black rounded-xl px-2 py-3 group cursor-pointer"
          href="https://github.com/Bikramai/Cleaning-Service-Site"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-[#232323] group-hover:bg-[#0291DE]  rounded-xl py-7 px-8 transition ease-out duration-300">
            <div className="flex justify-between">
              <h5 className="text-base leading-7 font-semibold font-primary text-white">
                Cleaning Service
              </h5>
              <p className="text-sm md:text-base leading-6 font-secondary font-semibold text-white">
                Full Stack Development
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
          <h5 className="text-sm md:text-base leading-7 font-semibold font-primary text-white">
          <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Description:</h1>
            Omni Serve is an innovative web application designed For providing
            Cleaning Service Online , User can Order their Service Using Form
            Submission or Directly call to company.
          </h5>
          <div>
            <h1 className="text-sm md:text-xl leading-7 font-secondary font-semibold">Technologies:</h1>
          <p>
            Frontend : Javascript, Express(ES6), Bootstrap, CSS, HTML.                                     
            Backend : Python, Django,
            Database : PostgreSQL
          </p> <br></br>

          <div className="flex justify-center">
            <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t1}
                  alt="js Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t2}
                  alt="bootstrap Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t3}
                  alt="api Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t4}
                  alt="python Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t5}
                  alt="Django Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Storefront3-App-Django"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={t6}
                  alt="Postgresql Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SelectWork;
