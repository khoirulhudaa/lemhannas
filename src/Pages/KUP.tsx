import React from "react";
import LinesHero from "../Components/LineHero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const kUP: React.FC = () => {
  return (
    <div className=" w-screen">
      <Navbar />
      <div className="relative w-screen bg-[#913d88] h-[60vh] flex items-center justify-center mb-8">
        <LinesHero />
        <h2 className="text-white mt-8 text-[60px] text-center">
          KPU
          <p className=" italic">Kuliah Umum dan Presentasi Pimpinan</p>
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default kUP;
