import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LinesHero from "../Components/LineHero";
import { P3da } from "../Assets/Index";

const p3DA: React.FC = () => {
  return (
    <div className=" w-screen">
      <Navbar />
      <div className="relative w-screen bg-[#913d88] -z-10 h-[60vh] flex items-center justify-center mb-8">
        <LinesHero />
        <h2 className="text-white mt-8 text-[60px]">Penerimaan P3DA</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-14">
        <div className="h-max mb-6 w-[350px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <img src={P3da} alt="P3DA" className="  cursor-pointer" />
          <div className=" p-4 flex flex-col gap-4">
            <p className="cursor-pointer hover:scale-95">
              1. Surat Edaran Penyelenggaraan Program Pemantapan Pimpinan Daerah
              Angkatan (P3DA) XI T.A. 2020.
            </p>
            <p className="cursor-pointer hover:scale-95">
              2. Formulir Program Pemantapan Pimpinan Daerah Angkatan (P3DA) XI
              T.A. 2020
            </p>
            <button className=" w-[100px] self-center h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
          </div>
        </div>
        <div className="h-max mb-6 w-[350px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <img src={P3da} alt="P3DA" className="  cursor-pointer" />
          <div className=" p-4 flex flex-col gap-4">
            <p className="cursor-pointer hover:scale-95">
              1. Surat Edaran Penyelenggaraan Program Pemantapan Pimpinan Daerah
              Angkatan (P3DA) XI T.A. 2020.
            </p>
            <p className="cursor-pointer hover:scale-95">
              2. Formulir Program Pemantapan Pimpinan Daerah Angkatan (P3DA) XI
              T.A. 2020
            </p>
            <button className=" w-[100px] self-center h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
          </div>
        </div>
        <div className="h-max mb-6 w-[350px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <img src={P3da} alt="P3DA" className="  cursor-pointer" />
          <div className=" p-4 flex flex-col gap-4">
            <p className="cursor-pointer hover:scale-95">
              1. Surat Edaran Penyelenggaraan Program Pemantapan Pimpinan Daerah
              Angkatan (P3DA) XI T.A. 2020.
            </p>
            <p className="cursor-pointer hover:scale-95">
              2. Formulir Program Pemantapan Pimpinan Daerah Angkatan (P3DA) XI
              T.A. 2020
            </p>
            <button className=" w-[100px] self-center h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
          </div>
        </div>
        <div className="h-max mb-6 w-[350px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <img src={P3da} alt="P3DA" className="  cursor-pointer" />
          <div className=" p-4 flex flex-col gap-4">
            <p className="cursor-pointer hover:scale-95">
              1. Surat Edaran Penyelenggaraan Program Pemantapan Pimpinan Daerah
              Angkatan (P3DA) XI T.A. 2020.
            </p>
            <p className="cursor-pointer hover:scale-95">
              2. Formulir Program Pemantapan Pimpinan Daerah Angkatan (P3DA) XI
              T.A. 2020
            </p>
            <button className=" w-[100px] self-center h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default p3DA;
