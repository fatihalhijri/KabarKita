import { Archive, Heart, Upload } from "lucide-react";
import Image from "next/image";
import React from "react";
interface propsType {
  img: string;
  title: string;
  subTitle: string;
  hourMe: string;
  createdBy: string;
  menit: string;
  suka: string;
  upload: string;
  simpan: string;
}

const NewsCard: React.FC<propsType> = ({
  img,
  title,
  subTitle,
  hourMe,
  createdBy,
  menit,
  suka,
  upload,
  simpan,
}: any) => {
  return (
    <div>
      <div className="border border-gray-300 w-full max-w-[440px]  shadow-md flex flex-col items-center  justify-between ">
        <div className="flex items-center justify-center   h-1/4  w-full overflow-hidden bg-gray-100">
          <Image
            className=" object-cover w-full h-full"
            src={img}
            width={500}
            height={500}
            alt={title}
          ></Image>
        </div>

        <div className="lg:px-4 md:px-3 px-2 py-2 flex flex-col justify-start items-start  gap-2 w-full h-1/2  ">
          <div className="flex flex-col gap-3">
            <h2 className="text-secondary text-base lg:text-lg md:text-base  md:font-semibold font-medium ">
              {title}
            </h2>
            <div className="text-base text-secondary pb-10 text-justify">
              {subTitle}
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-4 justify-between flex-row ">
              <p className="text-sm font-semibold text-secondary">
                {hourMe} Hours Ago
              </p>
              <p className="text-sm text-opacity-80   text-secondary">
                By {createdBy} | {menit} minute read
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 w-full  lg:px-4 md:px-3 px-2 py-3">
          <div className="flex justify-center items-center gap-5">
            <div className="flex flex-row gap-1 items-center justify-center">
              <Heart className="text-merah " />
              <p className="text-xs text-secondary">{suka}</p>
            </div>
            <div className="flex flex-row gap-1 items-center justify-center">
              <Upload className="text-secondary" />
              <p className="text-xs text-secondary">{upload}</p>
            </div>
            <div className="flex flex-row gap-1 items-center justify-center">
              <Archive className="text-secondary" />
              <p className="text-xs text-secondary">{simpan}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
