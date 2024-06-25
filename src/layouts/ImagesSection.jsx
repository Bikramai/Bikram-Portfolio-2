import g1 from "@/assets/images/g1.svg";
import g2 from "@/assets/images/g2.svg";
import g3 from "@/assets/images/g3.svg";
import g4 from "@/assets/images/g4.svg";
import g5 from "@/assets/images/g5.svg";
import g6 from "@/assets/images/g6.svg";
import g7 from "@/assets/images/g7.svg";
import g8 from "@/assets/images/g8.svg";

const ImagesSection = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="grid gap-4">
        <div className="flex gap-2 ">
          <a
            className="overflow-hidden rounded-xl h-full"
            href="https://github.com/bikramai"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={g1}
              alt=""
              className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
          <a
            className="overflow-hidden rounded-xl h-full"
            href="https://www.linkedin.com/in/bikram-phurumbo-099010173/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={g2}
              alt=""
              className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
          <a
            className="overflow-hidden rounded-xl h-full"
            href="http://www.amazon.com/shops/Abode-Zen"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={g3}
              alt=""
              className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
        </div>
        <a
          className="overflow-hidden rounded-xl"
          href="https://www.awwwards.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g5}
            alt=""
            className="w-full h-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a>
        <a
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
        </a>
        <a
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
        </a>
        <a
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
        </a>

        <a
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
        </a>
      </div>

      <div className="grid gap-4">
        <a
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
        </a>
        <a
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
        </a>
        <a
          className="overflow-hidden rounded-xl"
          href="https://www.awwwards.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g8}
            alt=""
            className="h-full w-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a>
        <a
          className="overflow-hidden rounded-xl"
          href="https://www.awwwards.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={g5}
            alt=""
            className="w-full h-full grayscale hover:scale-110 hover:grayscale-0 transition duration-300"
          />
        </a>
        <a
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
        </a>  
        <div className="flex gap-2 ">
          <a
            className="overflow-hidden rounded-xl h-full"
            href="https://www.awwwards.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={g1}
              alt=""
              className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
          <a
            className="overflow-hidden rounded-xl h-full"
            href="https://www.awwwards.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={g2}
              alt=""
              className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
          
          <a
            className="overflow-hidden rounded-xl h-full"
            href="https://www.awwwards.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={g3}
              alt=""
              className="h-full w-full object-cover hover:scale-110 grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
