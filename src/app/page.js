import React from "react";
import HomeHeader from "../components/homeHeader/page";
import HomeSearch from "../components/homeSearch/page";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* header */}
      <HomeHeader />

      {/* body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
        />
        <HomeSearch />
      </div>
    </div>
  );
};

export default page;
