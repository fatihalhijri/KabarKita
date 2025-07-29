import {
  CalendarDays,
  Star,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import NewsCard from "./NewsCard";
import SideNews from "./SideNews";

const News = () => {
  const dataDummy = [
    {
      img: "/mask-group.jpg",
      title:
        "John Lewis to make final journey across Edmund Pettus Bridge inprocession",
      subTitle:
        "The body of the late US Rep. John Lewis on Sunday will make thefinal journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
      hourMe: "2",
      createdBy: "Fatih Alhijri",
      menit: "24",
      simpan: "10",
      suka: "31",
      upload: "5",
    },
    {
      img: "/mask-group-3.jpg",
      title:
        "John Lewis to make final journey across Edmund Pettus Bridge inprocession",
      subTitle:
        "The body of the late US Rep. John Lewis on Sunday will make thefinal journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
      hourMe: "2",
      createdBy: "Fatih Alhijri",
      menit: "24",
      simpan: "10",
      suka: "31",
      upload: "5",
    },
    {
      img: "/mask-group-1.jpg",
      title:
        "John Lewis to make final journey across Edmund Pettus Bridge inprocession",
      subTitle:
        "The body of the late US Rep. John Lewis on Sunday will make thefinal journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
      hourMe: "2",
      createdBy: "Fatih Alhijri",
      menit: "24",
      simpan: "10",
      suka: "31",
      upload: "5",
    },
    {
      img: "/mask-group-2.jpg",
      title:
        "John Lewis to make final journey across Edmund Pettus Bridge inprocession",
      subTitle:
        "The body of the late US Rep. John Lewis on Sunday will make thefinal journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
      hourMe: "2",
      createdBy: "Fatih Alhijri",
      menit: "24",
      simpan: "10",
      suka: "31",
      upload: "5",
    },
    {
      img: "/mask-group-2.jpg",
      title:
        "John Lewis to make final journey across Edmund Pettus Bridge inprocession",
      subTitle:
        "The body of the late US Rep. John Lewis on Sunday will make thefinal journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
      hourMe: "2",
      createdBy: "Fatih Alhijri",
      menit: "24",
      simpan: "10",
      suka: "31",
      upload: "5",
    },
  ];
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const visibleProjects = showMore ? dataDummy.length : 4;
  return (
    <div className="w-full h-full py-5 px-6 md:px-12 lg:px-16 xl:px-36">
      <div className="flex lg:flex-row flex-col-reverse w-full gap-5">
        <div className="  lg:w-2/3 h-full ">
          <div className="w-full px-4 py-2 bg-white flex items-center justify-between shadow-black/40 shadow-sm ">
            <div className="flex md:flex-row gap-3">
              <Link href={"/#"} className="px-4 py-3 text-secondary">
                <button className="lg:font-bold md:font-semibold font-medium text-sm md:text-base  navbar__link relative ">
                  Latest Story
                </button>
              </Link>
              <Link href={"/#"} className="px-4 py-3 text-secondary">
                <button className="lg:font-bold md:font-semibold font-medium text-sm md:text-base  navbar__link relative ">
                  Think
                </button>
              </Link>
              <Link href={"/#"} className="px-4 py-3 text-secondary">
                <button className="lg:font-bold md:font-semibold font-medium text-sm md:text-base  navbar__link relative ">
                  Health
                </button>
              </Link>
            </div>
            <div className="py-2 px-2 ">
              <CalendarDays />
            </div>
          </div>
          <div className="py-3 grid md:grid-cols-2  grid-cols-1 mx-auto xl:gap-6 lg:gap-4 md:gap-3 gap-2">
            {dataDummy.slice(0, visibleProjects).map((data, index) => (
              <NewsCard
                img={data.img}
                title={data.title}
                subTitle={data.subTitle}
                hourMe={data.hourMe}
                createdBy={data.createdBy}
                menit={data.menit}
                simpan={data.simpan}
                suka={data.suka}
                upload={data.upload}
              />
            ))}
          </div>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={toggleShowMore}
          >
            <div className="px-4 w-fit py-2 bg-white  border-2 border-merah text-center ">
              
              <p className="font-semibold text-base md:text-[12px]  text-merah uppercase">
                {showMore ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak'}
              </p>
            </div>
          </div>
          <div className="py-5  block md:hidden">
            <div className="text-lg font-semibold text-secondary  text-justify">
              Location News
            </div>
            <div className="shadow-md w-full lg:px-4 md:px-3 px-2 py-4 bg-white h-44">
              <div className="py-2 flex flex-col gap-2">
                <label className="text-base text-secondary">
                  Get Location specific News
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Location"
                  name="nama"
                  className="w-full py-[0.7rem]  border border-black/20  text-black   px-4"
                />
              </div>
              <div className="px-4 w-36 py-2 bg-merah rounded-md text-center ">
                <p className="font-semibold md:text-base text-sm text-white">Join Now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-full h-full ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-3">
            <SideNews
              img="/mask-group-1.jpg"
              title="Beloved Arizona coach loses battle with coronavirus"
            />
            <SideNews
              img="/mask-group-1.jpg"
              title="Beloved Arizona coach loses battle with coronavirus"
            />
          </div>
          <div className="py-5 hidden md:block">
            <div className="text-lg font-semibold text-secondary  text-justify">
              Location News
            </div>
            <div className="shadow-md w-full lg:px-4 md:px-3 px-2 py-4 bg-white h-44">
              <div className="py-2 flex flex-col gap-2">
                <label className="text-base text-secondary">
                  Get Location specific News
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Location"
                  name="nama"
                  className="w-full py-[0.7rem]  border border-black/20  text-black   px-4"
                />
              </div>
              <div className="px-4 w-36 py-2 bg-merah rounded-md text-center ">
                <p className="font-semibold text-base text-white">Join Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4 py-5">
        <h2 className="text-2xl font-semibold">Editor Picks</h2>
        <Star />
      </div>

      <div></div>
    </div>
  );
};

export default News;
