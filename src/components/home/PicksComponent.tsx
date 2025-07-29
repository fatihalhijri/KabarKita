import { SparklesIcon, Star, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  user: string;
  role: string;
}

const PicksComponent = ({ img, user, role }: Props) => {
  return (
    <div>
      <div className=" w-full h-full flex flex-col items-start ">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex flex-row items-center justify-center gap-4 w-full overflow-hidden max-h-48  ">
            <Image
              alt={user}
              src={img}
              width={300}
              height={300}
              className=" h-full w-1/3 object-contain cursor-pointer"
            />
            <div className="flex flex-col  justify-between ">
              <h2 className="text-secondary text-2xl lg:text-lg md:text-base  md:font-semibold font-medium">
                {user}
              </h2>
              <p className="text-base">{role}</p>
            </div>
          </div>
          {/* <div className="flex flex-row items-center justify-center gap-4 w-full overflow-hidden max-h-48  ">
            <Image
              alt={user}
              src={img}
              width={300}
              height={300}
              className=" h-full md:w-1/3 object-contain cursor-pointer"
            />
            <div className="flex flex-col  justify-between ">
              <h2 className="text-secondary text-2xl lg:text-lg md:text-base  md:font-semibold font-medium">
                {user}
              </h2>
              <p className="text-base">{role}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PicksComponent;
