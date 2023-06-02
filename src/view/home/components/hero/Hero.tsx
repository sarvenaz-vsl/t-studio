import React from "react";
import HeroButton from "./HeroButton";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="mt-4 relative text-center mx-0 top-0 left-0 w-full">
      <div className="fixed left-1/2 -translate-x-[50%] w-full">
        <h1 className="text-[100px] w-full text-white/[0.025]">
          <p>کارآفرین درونی خود را با</p>
          <b> استودیو-تی </b>
          آزاد کنید
        </h1>
      </div>
      <div className="mx-0 w-full mt-12 justify-center text-center absolute left-1/2 -translate-x-[50%]">
        <h1 className="text-[60px] font-light">
          <p>کارآفرین درونی خود را با</p>
          <b> استودیو-تی </b>
          آزاد کنید
        </h1>
        <div className="mt-8">
          <HeroButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
