import IconStartArrow from "assets/icons/IconStartArrow";
import React from "react";

type Props = {};

const HeroButton = (props: Props) => {
  return (
    <div>
      <button className="text-[20px] font-light">
        <p className="flex w-full">
          <p className="mt-2">شروع کنید</p>
          <span className="flex justify-center mr-4 bg-white items-center h-[44px] w-[30px] px-[6px] rounded-[50px]">
            <IconStartArrow className="text-mainBg w-[26px]" />
          </span>
        </p>
      </button>
    </div>
  );
};

export default HeroButton;
