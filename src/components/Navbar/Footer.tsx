import { Heart, Mail, Map } from "lucide-react";
import Link from "next/link";
import React from "react";
import Contact from "./contact";

const Footer = () => {
  return (
    <div className=" w-[100%] py-5 bg-black/10 shadow-black/20 shadow-sm px-6 md:px-12 lg:px-16 xl:px-36">
      <div className=" h-full flex lg:flex-row md:flex-col flex-col items-start justify-between gap-[2rem] border-b-[1.4px]  border-gray-600 border-opacity-40 ">
        <div className="flex md:flex-row flex-col items-start xl:justify-between gap-4">
          <div className="w-full md:w-1/2">
            <div className="text-secondary text-[18px] font-medium text-lg">
              Kabar
              <span className="text-merah ">Kita</span>
            </div>
            <h1 className="text-base mt-[0.5rem] font-normal text-black/70 opacity-70  ">
              Selalu siap untuk Produk baru dan kolaborasi yang menantang. Saya
              percaya kolaborasi adalah kunci untuk solusi berkelanjutan.
            </h1>
            <div className="flex flex-row items-center  py-3 gap-2">
              <Heart></Heart>
              <Heart></Heart>
              <Heart></Heart>
            </div>
          </div>
          <div className="md:w-1/5 lg:mx-auto ">
            <h1 className="text-black/70 font-semibold  pt-2 text-lg ">
              Link Cepat
            </h1>
            <Link href="/" passHref>
              <p className="text-base text-black/70 opacity-80 py-2 cursor-pointer hover:text-primary ">
                Beranda
              </p>
            </Link>
            <Link href="/tentang" passHref>
              <p className="text-base text-black/70 opacity-80 py-2 cursor-pointer hover:text-primary ">
                Tentang
              </p>
            </Link>

            <Link href="/kategori" passHref>
              <p className="text-base text-black/70 opacity-80 py-2 cursor-pointer hover:text-primary ">
                Kategori
              </p>
            </Link>
            <Link href="/kontak" passHref>
              <p className="text-base text-black/70 opacity-80 py-2 cursor-pointer hover:text-primary ">
                Kontak
              </p>
            </Link>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col w-full justify-between gap-5">
          <div className="w-1/2">
            <h1 className="text-black/70   font-semibold  pt-2 text-lg ">
              Alamat
            </h1>
            <div className="flex items-center py-2  space-x-2  ">
              <Map className="w-[1rem] h-[1rem] text-primary " />
              <p className="text-[17px] font-normal text-black/70   opacity-75  ">
                Bekasi, Jawa Barat
              </p>
            </div>
            <div className="flex items-center py-2  space-x-2  ">
              <Mail className="w-[1rem] h-[1rem] text-primary " />
              <p className="text-[17px] font-normal text-black/70   opacity-75  ">
                fatihalhijri02@gmail.com
              </p>
            </div>
          </div>
          <Contact></Contact>
        </div>
      </div>
      <div className="mt-[1.4rem]  mx-auto text-black/70   opacity-70 ">
        &#169; 2024 KabarKita
      </div>
    </div>
  );
};

export default Footer;
