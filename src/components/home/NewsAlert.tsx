import Link from "next/link";
import React from "react";

const NewsAlert = () => {
  return (
    <div className="">
      <div className="w-full flex items-center md:justify-center justify-start py-5  px-6 md:px-12 lg:px-16 xl:px-36 bg-merah">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-3 ">
          <div className="flex flex-row items-center gap-4">
            <Link href={'/artikel'} >
              <div className="px-4 py-2 flex justify-center items-center bg-white">
                <p className="text-sm lg:text-lg md:text-base text-merah font-semibold">
                  Breaking News
                </p>
              </div>
            </Link>
            <p className="text-sm  flex md:hidden text-gray-300">
              Tap To See the full story
            </p>
          </div>

          <div>
            <p className="text-white lg:text-lg md:text-base text-sm md:font-semibold font-medium">
              Kanye West says he is running for president in 2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAlert;
