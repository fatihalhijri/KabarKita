import {
  Archive,
  Heart,
  MessageSquare,
  Upload,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingArtikel = () => {
  return (
    <div className="w-full h-full ">
      <div className="md:flex hidden h-1/2 bg-gray-700 w-full absolute -z-10"></div>
      <div className="flex md:hidden  bg-gray-700 w-full h-[30vh]">
        <div className="flex md:hidden justify-center items-center px-6 py-5">
          <h2 className="lg:text-4xl text-2xl  text-white font-semibold font-serif leading-snug">
            John Lewis, civil rights giant, crosses infamous Selma bridge one
            final time
          </h2>
        </div>
      </div>
      <div className="md:py-5  md:px-12 lg:px-16 xl:px-36">
        <section className="flex flex-row justify-between items-center gap-10">
          <div className="hidden md:flex w-1/6  flex-col items-center justify-center gap-2 px-6 md:px-0">
            <p className="text-base font-medium text-secondary text-center">
              See more like this?
            </p>
            <div className="flex flex-row items-center gap-1">
              <div className="bg-green-500 w-3 h-3 rounded-full"></div>
              <p className="text-2xl pb-2">|</p>
              <div className="bg-red-500 w-3 h-3 rounded-full"></div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Heart color="red"></Heart>
              <p className=" font-medium text-secondary">28</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <MessageSquare />
              <p className=" font-medium text-secondary">28</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Archive />
              <p className=" font-medium text-secondary">28</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="md:flex hidden justify-center items-center py-5 px-6 md:px-0">
              <h2 className="lg:text-4xl md:text-2xl sm:text-lg text-white font-semibold font-serif leading-snug">
                John Lewis, civil rights giant, crosses <br /> infamous Selma
                bridge one final time
              </h2>
            </div>
            <div className="w-full h-full md:aspect-[16/7] flex flex-col items-center justify-center">
              <Image
                alt=""
                src={"/mask-group.jpg"}
                height={500}
                width={500}
                className="w-full h-full object-cover"
              />
              <div></div>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-start md:gap-5 py-5 h-full px-6 md:px-0">
              <div className="md:w-2/3 w-full">
                <div className="flex flex-row items-start justify-start pb-5">
                  <p className="text-black/50 text-base font-medium">
                    {" "}
                    12 Hours Ago
                  </p>{" "}
                  <p className="text-black/50 text-base font-medium">
                    By Carolina Cassey | 4min Read
                  </p>
                </div>
                <div className="flex flex-col gap-5 ">
                  <p className="text-base text-secondary whitespace-pre-line">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsam, blanditiis veniam. Numquam obcaecati atque inventore?
                    Quos dolores alias quia. Alias sit adipisci obcaecati ad
                    blanditiis sed reiciendis eligendi temporibus quidem.
                  </p>
                  <p className="text-base text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure non tenetur dignissimos eum atque sequi sapiente
                    perferendis est doloremque quas sint repudiandae possimus
                    corporis animi dolor et, autem quis iusto!
                  </p>
                  <p className="text-base text-secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum impedit molestias quaerat cum facere eius quia
                    quisquam blanditiis iure nesciunt itaque, porro, dolore quae
                    suscipit placeat! Voluptates commodi facere asperiores!
                    lorem
                  </p>
                  <p className="text-base text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure non tenetur dignissimos eum atque sequi sapiente
                    perferendis est doloremque quas sint repudiandae possimus
                    corporis animi dolor et, autem quis iusto!
                  </p>
                </div>
                <div className="flex flex-col gap-5 py-5">
                  <hr className="border  border-red-500" />
                  <h2 className="font-serif text-2xl font-medium">
                    Solemn crowds watch as Lewis, who died earlier this month at
                    the age of 80, is borne by caisson over Edmund Pettus Bridge
                  </h2>
                  <hr className="border  border-red-500" />
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-3">
                  <Image
                    alt=""
                    src={"/mask-group-1.jpg"}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  ></Image>
                  <div className="flex flex-row gap-4 ">
                    <div className="text-4xl text-red-500">|</div>
                    <p className="text-base ">
                      The casket of late U.S. Rep. John Lewis, a pioneer of the
                      civil rights movement who died July 17, is carried outside
                      the Brown Chapel A.M.E. Church, in Selma, Ala., on July
                      26, 2020.{" "}
                      <Link href={"/#"} className="underline text-red-500">
                        Christopher Aluka Berry / Reuters
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <p className="text-base text-secondary whitespace-pre-line">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsam, blanditiis veniam. Numquam obcaecati atque inventore?
                    Quos dolores alias quia. Alias sit adipisci obcaecati ad
                    blanditiis sed reiciendis eligendi temporibus quidem.
                  </p>
                  <p className="text-base text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure non tenetur dignissimos eum atque sequi sapiente
                    perferendis est doloremque quas sint repudiandae possimus
                    corporis animi dolor et, autem quis iusto!
                  </p>
                  <p className="text-base text-secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum impedit molestias quaerat cum facere eius quia
                    quisquam blanditiis iure nesciunt itaque, porro, dolore quae
                    suscipit placeat! Voluptates commodi facere asperiores!
                    lorem
                  </p>
                  <p className="text-base text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure non tenetur dignissimos eum atque sequi sapiente
                    perferendis est doloremque quas sint repudiandae possimus
                    corporis animi dolor et, autem quis iusto!
                  </p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-3">
                  <Image
                    alt=""
                    src={"/mask-group-3.jpg"}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  ></Image>
                  <div className="flex flex-row gap-4 ">
                    <div className="text-4xl text-red-500">|</div>
                    <p className="text-base ">
                      The casket of late U.S. Rep. John Lewis, a pioneer of the
                      civil rights movement who died July 17, is carried outside
                      the Brown Chapel A.M.E. Church, in Selma, Ala., on July
                      26, 2020.{" "}
                      <Link href={"/#"} className="underline text-red-500">
                        Christopher Aluka Berry / Reuters
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <p className="text-base text-secondary whitespace-pre-line">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsam, blanditiis veniam. Numquam obcaecati atque inventore?
                    Quos dolores alias quia. Alias sit adipisci obcaecati ad
                    blanditiis sed reiciendis eligendi temporibus quidem.
                  </p>
                  <p className="text-base text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure non tenetur dignissimos eum atque sequi sapiente
                    perferendis est doloremque quas sint repudiandae possimus
                    corporis animi dolor et, autem quis iusto!
                  </p>
                  <p className="text-base text-secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum impedit molestias quaerat cum facere eius quia
                    quisquam blanditiis iure nesciunt itaque, porro, dolore quae
                    suscipit placeat! Voluptates commodi facere asperiores!
                    lorem
                  </p>
                  <p className="text-base text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure non tenetur dignissimos eum atque sequi sapiente
                    perferendis est doloremque quas sint repudiandae possimus
                    corporis animi dolor et, autem quis iusto!
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/4">
                <div className="">
                  <div>
                    <h2 className="text-2xl font-semibold pb-5">
                      Recomended For You
                    </h2>
                    <div className="bg-white shadow-md  ">
                      <div>
                        <Image
                          alt=""
                          src={"/mask-group.jpg"}
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="py-4 px-4">
                        <p className="text-base font-medium text-justify">
                          Millions rely on emergency pandemic benefits for rent,
                          food, and medicine. Now, that lifeline could
                          disappear.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold pb-5">
                      Base On Like
                    </h2>
                    <div className="">
                      <div>
                        <Image
                          alt=""
                          src={"/mask-group.jpg"}
                          width={500}
                          height={500}
                        />
                      </div>
                      <div>
                        <p className="text-base font-medium text-justify">
                          Millions rely on emergency pandemic benefits for rent,
                          food, and medicine. Now, that lifeline could
                          disappear.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="px-6 md:px-0">
          <div>
            <h2 className="text-2xl font-semibold py-4">Related Topic</h2>
          </div>
          <div className="w-full  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <div className="border border-gray-300 flex flex-col items-center justify-center bg-white shadow-md">
              <Image
                alt=""
                src={"/mask-group-3.jpg"}
                width={500}
                height={500}
              />
              <div className="px-5 py-3">
                <p className="font-medium text-base">
                  Hill Republicans begin jockeying for power in a possible
                  post-Trump world
                </p>
              </div>
              <div className="border-t border-gray-300 w-full  lg:px-4 md:px-3 px-2 py-3">
                <div className="flex justify-center items-center gap-5">
                  <div
                   className="flex flex-row gap-1 items-center justify-center">
                    <Heart className="text-merah " />
                    <p className="text-xs text-secondary">21</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Upload className="text-secondary" />
                    <p className="text-xs text-secondary">44</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Archive className="text-secondary" />
                    <p className="text-xs text-secondary">12</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 flex flex-col items-center justify-center bg-white shadow-md">
              <Image
                alt=""
                src={"/mask-group-1.jpg"}
                width={500}
                height={500}
              />
              <div className="px-5 py-3">
                <p className="font-medium text-base">
                  Hill Republicans begin jockeying for power in a possible
                  post-Trump world
                </p>
              </div>
              <div className="border-t border-gray-300 w-full  lg:px-4 md:px-3 px-2 py-3">
                <div className="flex justify-center items-center gap-5">
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Heart className="text-merah " />
                    <p className="text-xs text-secondary">21</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Upload className="text-secondary" />
                    <p className="text-xs text-secondary">44</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Archive className="text-secondary" />
                    <p className="text-xs text-secondary">12</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 flex flex-col items-center justify-center bg-white shadow-md">
              <Image alt="" src={"/mask-group.jpg"} width={500} height={500} />
              <div className="px-5 py-3">
                <p className="font-medium text-base">
                  Hill Republicans begin jockeying for power in a possible
                  post-Trump world
                </p>
              </div>
              <div className="border-t border-gray-300 w-full  lg:px-4 md:px-3 px-2 py-3">
                <div className="flex justify-center items-center gap-5">
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Heart className="text-merah " />
                    <p className="text-xs text-secondary">21</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Upload className="text-secondary" />
                    <p className="text-xs text-secondary">44</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Archive className="text-secondary" />
                    <p className="text-xs text-secondary">12</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 flex flex-col items-center justify-center bg-white shadow-md">
              <Image
                alt=""
                src={"/mask-group-2.jpg"}
                width={500}
                height={500}
              />
              <div className="px-5 py-3">
                <p className="font-medium text-base">
                  Hill Republicans begin jockeying for power in a possible
                  post-Trump world
                </p>
              </div>
              <div className="border-t border-gray-300 w-full  lg:px-4 md:px-3 px-2 py-3">
                <div className="flex justify-center items-center gap-5">
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Heart className="text-merah " />
                    <p className="text-xs text-secondary">21</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Upload className="text-secondary" />
                    <p className="text-xs text-secondary">44</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Archive className="text-secondary" />
                    <p className="text-xs text-secondary">12</p>
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

export default LandingArtikel;
