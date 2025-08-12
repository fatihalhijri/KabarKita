import { LucideCircleDot } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  title: string;
}

const SideNews: React.FC<Props> = ({ img, title }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-full py-5  flex items-center lg:gap-4 md:gap-3 gap-2">
          <h2 className="font-bold text-lg text-merah">Live</h2>
          <LucideCircleDot className="text-merah " height={18} width={18} />
        </div>
        <div className="px-4 w-36 md:py-2 py-1 bg-red-600 rounded-full text-center animate-pulse">
          <p className="font-semibold md:text-sm text-white text-xs">Join Now</p>
        </div>
      </div>
      
      <div className="w-full py-3 max-w-[440px] bg-transparent flex flex-col items-center  justify-between ">
        <div className="flex items-center justify-center   h-1/4  w-full  overflow-hidden ">
          <Image
            className=" object-cover w-full h-full"
            src={img}
            width={500}
            height={500}
            alt={title}
          ></Image>
        </div>

        <div className=" py-2 flex flex-col justify-start items-start  gap-2 w-full h-1/2  ">
          <div className="flex flex-col gap-3">
            <h2 className="text-secondary text-base lg:text-lg md:text-base  md:font-semibold font-medium ">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNews;
