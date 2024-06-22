// SoundItem.js

import pause from "@/assets/images/pause.svg";
import play from "@/assets/images/play.svg";

const SoundItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, title, description, playSound, status } = props;

  return (
    <div className="flex items-center bg-[#2F2F2F] h-20 rounded-3xl gap-5 px-3 py-2 pr-5">
      <div className="">
        {/* {console.log("status", status)} */}
        <img src={image} alt="" />
      </div>
      <div className="">
        <h5 className="font-primary font-medium text-base leading-4 text-light-color">{title}</h5>
        <p className="font-primary font-medium text-base leading-4 text-gray-color mt-2">
          {description}
        </p>
      </div>
      <div className="ml-auto cursor-pointer w-10 h-full" onClick={() => playSound(props)}>
        <img
          src={status !== true ? play : pause}
          alt=""
          className={`w-full h-full object-contain ${status ? "rotate" : ""}`}
        />
      </div>
    </div>
  );
};

export default SoundItem;
