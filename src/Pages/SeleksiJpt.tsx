import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LinesHero from "../Components/LineHero";

const SeleksiJpt: React.FC = () => {
  return (
    <div className=" w-screen">
      <Navbar />
      <div className="relative w-screen bg-[#913d88] -z-10 h-[60vh] flex items-center justify-center mb-8">
        <LinesHero />
        <h2 className="text-white mt-8 text-[60px]">Seleksi Terbuka JPT</h2>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div className="w-[80%] h-max mb-6 p-5 md:p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <div className=" flex justify-between gap-5 items-center">
            <h2 className="font-bold text-[20px] md:text-[25px]  lg:text-[36px] mb-4">
              JPT Pratama 2022
            </h2>
            <button className=" hidden md:block w-[100px] h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
          </div>
          <ol className="w-[90%]">
            <li className="mb-6 cursor-pointer hover:scale-95">
              1. Pengumuman Hasil Integrasi Nilai Seleksi Terbuka JPT Pratama
              Lemhannas RI Tahun 2022.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              2. Pengumuman Uji Kompetensi Bidang dan Wawancara Seleksi Terbuka
              JPT Pratama Lemhannas RI Tahun 2022.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              3. Pengumuman Kelulusan Seleksi Administrasi dan Notifikasi
              Pelaksanaan Seleksi Manajerial Seleksi Terbuka JPT Pratama
              Lemhannas RI Tahun 2022.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              4. Pengumuman Seleksi Terbuka JPT Pratama Lemhannas RI Tahun 2022.
            </li>
          </ol>
          <button className=" block md:hidden w-full h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeleksiJpt;
