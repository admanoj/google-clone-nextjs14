import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <div>
      <header className="flex justify-end p-5 text-sm">
        <div className="flex space-x-4 items-center">
          <Link className="hover:underline" href="http://mail.google.com">
            google
          </Link>
          <Link className="hover:underline" href="http://images.google.com">
            images
          </Link>
          <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
          <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md  hover:brightness-105 hover:shadow-md transition-shadow">
            Sign in
          </button>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
