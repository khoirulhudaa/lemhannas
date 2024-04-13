import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LinesHero from "../Components/LineHero";

const PenerimaanPPRA_PPSA: React.FC = () => {
  return (
    <div className=" w-screen">
      <Navbar />
      <div className="relative w-screen bg-[#913d88] h-[60vh] flex items-center justify-center mb-8">
        <LinesHero />
        <h2 className="text-white mt-8 text-[60px]">
          Penerimaan PPRA dan PPSA
        </h2>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <h2 className="font-bold text-[20px] md:text-[25px]  lg:text-[36px] mb-4">
            Penerimaan PPRA LXVI dan PPRA LXVII T.A. 2024
          </h2>
          <ol className="w-[90%]">
            <li className="mb-6 cursor-pointer hover:scale-95">
              1. Perubahan Pengumuman tentang Penyelenggaraan Program Pendidikan
              Reguler Angkatan (PPRA) LXVI dan LXVII T.A. 2024 Lemhannas RI.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              2. Pengumuman tentang Penyelenggaraan Program Pendidikan Reguler
              Angkatan (PPRA) LXVI dan LXVII T.A. 2024 Lemhannas RI.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              3. Formulir Pendaftaran Penerimaan PPRA LXVI dan PPRA LXVII T.A.
              2024.
            </li>
          </ol>
        </div>

        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <h2 className="font-bold text-[20px] md:text-[25px]  lg:text-[36px] mb-4">
            Penerimaan PPRA LXV dan PPSA XXIV T.A. 2023
          </h2>
          <ol className="w-[90%]">
            <li className="mb-6 cursor-pointer hover:scale-95">
              1. Perubahan Pengumuman tentang Penyelenggaraan Program Pendidikan
              Reguler Angkatan (PPRA) LXV dan Program Pendidikan Singkat
              Angkatan (PPSA) XXIV T.A. 2023 Lemhannas RI
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              2. Pengumuman tentang Penyelenggaraan Program Pendidikan Reguler
              Angkatan (PPRA) LXV dan Program Pendidikan Singkat Angkatan (PPSA)
              XXIV T.A. 2023 Lemhannas RI.
            </li>
          </ol>
        </div>

        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <h2 className="font-bold text-[20px] md:text-[25px]  lg:text-[36px] mb-4">
          Penerimaan PPRA LXIII dan PPRA LXIV T.A. 2022
          </h2>
          <ol className="w-[90%]">
            <li className="mb-6 cursor-pointer hover:scale-95">
            1. Pengumuman tentang Penyelenggaraan Program Pendidikan Reguler Angkatan (PPRA) LXIII dan LXIV T.A. 2022 Lemhannas RI
            </li>
          </ol>
        </div>

        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <h2 className="font-bold text-[20px] md:text-[25px]  lg:text-[36px] mb-4">
          Penerimaan PPRA LXII dan PPSA XXIII T.A. 2021
          </h2>
          <ol className="w-[90%]">
            <li className="mb-6 cursor-pointer hover:scale-95">
            1. Pengumuman tentang Penyelenggaraan Program Pendidikan Reguler Angkatan (PPRA) LXII dan Program Pendidikan Singkat Angkatan (PPSA) XXIII T.A. 2021 Lemhannas RI
            </li>
          </ol>
        </div>

        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <h2 className="font-bold text-[20px] md:text-[25px]  lg:text-[36px] mb-4">
          Penerimaan PPRA LX dan PPRA LXI T.A. 2020
          </h2>
          <ol className="w-[90%]">
            <li className="mb-6 cursor-pointer hover:scale-95">
            1. Pengumuman tentang Penyelenggaraan Program Pendidikan Reguler Angkatan (PPRA) LX dan Program Pendidikan Reguler Angkatan (PPRA) LXI T.A. 2020 Lemhannas RI
            </li>
          </ol>
        </div>

        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <h2 className="font-bold text-[20px] md:text-[25px]  lg:text-[36px] mb-4">
          Penerimaan PPRA LIX dan PPSA XXII T.A. 2019
          </h2>
          <ol className="w-[90%]">
            <li className="mb-6 cursor-pointer hover:scale-95">
            1. Pengumuman tentang Penyelenggaraan Program Pendidikan Reguler Angkatan (PPRA) LIX dan Program Pendidikan Singkat Angkatan (PPSA) XXII T.A. 2019 Lemhannas RI
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PenerimaanPPRA_PPSA;
