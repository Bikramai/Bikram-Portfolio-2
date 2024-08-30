import g1 from "@/assets/images/g1.png";
import g2 from "@/assets/images/g2.png";
import g3 from "@/assets/images/g3.png";
import g4 from "@/assets/images/g4.png";
import g5 from "@/assets/images/g5.png";
import g6 from "@/assets/images/g6.png";
import g7 from "@/assets/images/g7.png";
import g8 from "@/assets/images/g8.png";
import g9 from "@/assets/images/reactt.svg";
import g10 from "@/assets/images/g10.png";
import g11 from "@/assets/images/g11.png";
import g12 from "@/assets/images/node-js.svg";
import g13 from "@/assets/images/python2.svg";
import g14 from "@/assets/images/django2.svg";
import g15 from "@/assets/images/api3.png";

const ImagesSection = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="grid gap-3">
        <div className="flex gap-2">
          <a
            className="overflow-hidden rounded-xl h-full"
            href="https://www.linkedin.com/in/bikramp/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={g1}
              alt="LinkedIn Logo"
              className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
          <a
            className="overflow-hidden rounded-xl h-full"
            href="https://github.com/Bikramai"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={g2}
              alt="Github logo"
              className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
          <a
            className="overflow-hidden rounded-xl h-full"
            href="mailto:bikramphurumbo@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={g3}
              alt="Email logo"
              className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
          <a
            className="overflow-hidden rounded-xl h-full"
            href="https://www.instagram.com/bikramp_official/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={g10}
              alt="Instragram Logo"
              className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
        </div>
        <a
          className="overflow-hidden rounded-xl"
          href="https://github.com/Bikramai/Pokemon-Game-App"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g4}
            alt="Pokemon Game"
            className="w-full h-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a>
        <a
          className="overflow-hidden rounded-xl"
          href="https://github.com/Bikramai"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g5}
            alt="BookieMart Store"
            className="h-full w-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a>
        <a
          className="overflow-hidden rounded-xl"
          href="https://github.com/Bikramai/Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g6}
            alt="Weather App"
            className="h-full w-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a>
        {/* <a
          className="overflow-hidden rounded-xl"
          href="https://www.awwwards.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g6}
            alt=""
            className="h-full w-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a> */}

        {/* <a
          className="overflow-hidden rounded-xl"
          href="https://www.awwwards.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g4}
            alt=""
            className="h-full w-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a> */}
      </div>

      <div className="grid gap-4">
        <a
          className="overflow-hidden rounded-xl"
          href="https://github.com/Bikramai/Node.js-Jokes-App"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g7}
            alt="Jokes App"
            className="h-full w-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a>
        {/* <a
          className="overflow-hidden rounded-xl"
          href="https://www.awwwards.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g6}
            alt=""
            className="h-full w-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a> */}
        <a
          className="overflow-hidden rounded-xl"
          href="https://github.com/Bikramai/Django-Interships-App"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g8}
            alt="Intership App"
            className="h-full w-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a>
        <a
          className="overflow-hidden rounded-xl"
          href="https://github.com/Bikramai/ranger134_wh5_day5_hw"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g11}
            alt="Car Rental Database"
            className="w-full h-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a>
        {/* <a
          className="overflow-hidden rounded-xl"
          href="https://www.awwwards.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g7}
            alt=""
            className="h-full w-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a>   */}
        <div>
          {/* <div className="grid gap-2"> */}
            <div className="flex justify-center gap-2">
              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Book-land-Ecomerce-Store"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={g9}
                  alt="JavaScript Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Pokemon-Game-App"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={g12}
                  alt="Node.js logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>

              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Node.js---Vidly-Apps"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={g15}
                  alt="api logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/ranger134_wk3_day4_hw"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={g13}
                  alt="Python logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
              <a
                className="overflow-hidden rounded-xl h-full"
                href="https://github.com/Bikramai/Bridetool"
                target="_blank"
                rel="Python with Django"
              >
                <img
                  src={g14}
                  alt="Django Logo"
                  className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ImagesSection;
