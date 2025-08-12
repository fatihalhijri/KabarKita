import {Heart, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="md:h-[80vh] w-full mx-auto flex py-5  px-6 md:px-12 lg:px-16 xl:px-36 ">
      <div className="flex justify-start items-center">
        <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-12">
          <div className="w-full lg:w-1/2  hidden lg:flex   justify-center items-center ">
            <Image
              alt="sabun"
              src={"/sabun-batang.jpg"}
              width={400}
              height={400}
              className=""
            />
          </div>

          <div className="w-full lg:w-1/2  h-full flex flex-col">
            <div className="flex flex-col justify-start ">
              <div className="flex justify-between items-center py-2">
                <p className="lg:font-bold font-medium text-xl text-merah">
                  Trending
                </p>
                <div className="flex gap-4 text-gray-500 text-[30px] ">
                  <User />
                  <div className="relative">
                    <Heart />
                    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                      0
                    </div>
                  </div>
                  <div className="relative">
                    <ShoppingBag />
                    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                      0
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="lg:font-bold font-semibold  text-secondary text-left lg:text-4xl text-3xl ">
                  Cake meme reflects coronavirus absurdity in a world where
                  nothing is what it seems
                </h2>
                <div className="md:w-56  lg:h-1/4  lg:w-1/4  lg:hidden flex  justify-center items-center ">
                  <Image
                    alt="sabun"
                    src={"/sabun-batang.jpg"}
                    width={400}
                    height={400}
                    className=""
                  />
                </div>
                <div className="">
                  <p className=" md:text-lg text-base text-secondary text-justify">
                    Earlier this month, a viral video depicting hyper-realistic
                    cakes as everyday items had folks on social media
                    double-guessing every other post, and sometimes even their
                    own realities, effectively launching the next meme : “Is
                    this real or is this cake?”
                  </p>
                  <div className="flex gap-4 items-start justify-start flex-row text-left py-2">
                    <p className="text-base font-semibold text-secondary">
                      2 Hours Ago
                    </p>
                    <p className="text-base  text-black/40">
                      By Fatih Alhijri | 1 minute read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
