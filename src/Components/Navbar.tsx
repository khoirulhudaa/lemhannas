import React, { useState } from "react";
import { FaFacebookF, FaGlobe, FaInstagram, FaSearch, FaSignInAlt, FaTiktok, FaTimes, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Gedung, Logo, Nav } from "../Assets/Index";

const Navbar: React.FC = () => {
  const [activeTentang, setActiveTentang] = useState<boolean>(false);
  const [activeBerita, setActiveBerita] = useState<boolean>(false);
  const [activePengumuman, setActivePengumuman] = useState<boolean>(false);
  const [activePublikasi, setActivePublikasi] = useState<boolean>(false);
  const [activeInformasi, setActiveInformasi] = useState<boolean>(false);
  const [activeGaleri, setActiveGaleri] = useState<boolean>(false);
  const [select, setSelect] = useState<string>("");
  const [activeSidebar, setActiveSidebar] = useState<boolean>(false);

  const handleActiveTentang = () => {
    setActiveTentang(!activeTentang);
    if (select !== "tentang") {
      setSelect("tentang");
    } else {
      setSelect("");
    }
    setActiveBerita(false);
    setActiveGaleri(false);
    setActivePengumuman(false);
    setActivePublikasi(false);
  };

  const handleActiveBerita = () => {
    setActiveTentang(false);
    if (select !== "berita") {
      setSelect("berita");
    } else {
      setSelect("");
    }
    setActiveBerita(!activeBerita);
    setActiveGaleri(false);
    setActivePengumuman(false);
    setActivePublikasi(false);
  };

  const handleActivePengumuman = () => {
    setActiveTentang(false);
    if (select !== "pengumuman") {
      setSelect("pengumuman");
    } else {
      setSelect("");
    }
    setActiveBerita(false);
    setActivePengumuman(!activePengumuman);
    setActivePublikasi(false);
    setActiveGaleri(false);
  };

  const handleActiveInformasi = () => {
    setActiveTentang(false);
    if (select !== "informasi") {
      setSelect("informasi");
    } else {
      setSelect("");
    }
    setActiveBerita(false);
    setActivePengumuman(false);
    setActiveInformasi(!activeInformasi);
    setActivePublikasi(false);
    setActiveGaleri(false);
  };

  const handleActivePublikasi = () => {
    setActiveTentang(false);
    if (select !== "publikasi") {
      setSelect("publikasi");
    } else {
      setSelect("");
    }
    setActiveBerita(false);
    setActivePengumuman(false);
    setActivePublikasi(!activePublikasi);
    setActiveGaleri(false);
  };

  const handleActiveGaleri = () => {
    setActiveTentang(false);
    if (select !== "galeri") {
      setSelect("galeri");
    } else {
      setSelect("");
    }
    setActiveBerita(false);
    setActivePengumuman(false);
    setActivePublikasi(false);
    setActiveGaleri(!activeGaleri);
  };

  return (
    <div className="relative z-[44444444444] top-0 left-0 w-screen flex items-center bg-white md:h-[180px]">
   
      {/* Sidebar */}
      <div
        className={`fixed md:hidden inline text-left top-0 duration-300 ${
          activeSidebar ? "left-0" : "left-[-100%]"
        } bg-white p-12 z-[99999999999993333] w-screen h-screen overflow-y-auto`}
      >
        <div
          onClick={() => setActiveSidebar(!activeSidebar)}
          className="w-[40px] z-[44444] h-[40px] text-red-500 text-[24px] absolute top-5 right-5 cursor-pointer"
        >
          <FaTimes />
        </div>
        <ul className="mt-4 flex flex-col text-black md:text-white">
          <li
            onClick={() => (window.location.href = "/")}
            className="mb-12 md:mb-0 md:mr-6 cursor-pointer active:scale-[0.98] hover:brightness-[90%]"
          >
            Beranda
          </li>
          <li className="relative mb-12 cursor-pointer">
            <p
              onClick={() => handleActiveTentang()}
              className={`${
                select === "tentang" ? "text-purple-700" : "text-black md:text-white"
              }`}
            >
              Tentang
            </p>
            <ul
              className={`bg-white absolute w-[300px] shadow-lg ml-[-6px] rounded-lg p-5 duration-300 ${
                activeTentang
                  ? "block mt-2 opacity-1"
                  : "hidden mt-0 opacity-0"
              }`}
            >
              <Link to="/sejarah">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  1. Sejarah Lemhannas RI
                </li>
              </Link>
              <Link to="/visi-misi">
                <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                  2. Visi dan Misi
                </li>
              </Link>
              <Link to="/kedudukan-tugas-dan-fungsi">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  3. Tugas dan Fungsi
                </li>
              </Link>
              <Link to="/">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  4. Tugas Tannas
                </li>
              </Link>
              <Link to="/struktur">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  5. Struktur Organisasi
                </li>
              </Link>
              <Link to="/logo-dan-panji">
                <li className="hover:text-purple-600 active:scale-[0.99]">6. Logo dan Panji Operasi</li>
              </Link>
            </ul>
          </li>
          <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer">
            <p
              onClick={() => handleActiveBerita()}
              className={`${
                select === "berita" ? "text-purple-700" : "text-black md:text-white"
              }`}
            >
              Berita
            </p>
            <ul
              className={`bg-white absolute w-[200px] shadow-lg ml-[-6px] rounded-lg p-5 duration-300 ${
                activeBerita ? "block mt-0 opacity-1" : "hidden mt-0 opacity-0"
              }`}
            >
              <Link to="/berita-utama">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  1. Berita Utama
                </li>
              </Link>
              <Link to="/arsip-berita">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  2. Press Release
                </li>
              </Link>
            </ul>
          </li>
          <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer">
            <p
              onClick={() => handleActiveInformasi()}
              className={`${
                select === "informasi" ? "text-purple-700" : "text-black md:text-white"
              }`}
            >
              Informasi Publik
            </p>
            <ul
              className={`bg-white absolute w-[300px] shadow-lg ml-[-6px] rounded-lg p-5 duration-300 ${
                activeInformasi
                  ? "block mt-1 opacity-1"
                  : "hidden mt-0 opacity-0"
              }`}
            >
              <Link to="https://sipp.lemhannas.go.id/">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  1. Informasi Wajib Diumumkan Berkala
                </li>
              </Link>
              <Link to="/pengumuman-jpt-2024">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  2. Informasi Serta Merta
                </li>
              </Link>
              <Link to="/pengumuman-cpns">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  3. Informasi Setiap Saat
                </li>
              </Link>
              <Link to="/pengumuman-p3da">
                <li className="hover:text-purple-600 active:scale-[0.99]">
                  4. Permohonan Informasi
                </li>
              </Link>
            </ul>
          </li>
          <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer">
            <p
              onClick={() => handleActivePengumuman()}
              className={`${
                select === "pengumuman" ? "text-purple-700" : "text-black md:text-white"
              }`}
            >
              Pengumuman
            </p>
            <ul
              className={`bg-white absolute w-[300px] shadow-lg ml-[-6px] rounded-lg p-5 duration-300 ${
                activePengumuman
                  ? "block mt-1 opacity-1"
                  : "hidden mt-0 opacity-0"
              }`}
            >
              <Link to="https://sipp.lemhannas.go.id/">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  1. Penerimaan Peserta Didik Lemhannas RI
                </li>
              </Link>
              <Link to="/pengumuman-jpt-2024">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  2. Seleksi JPT
                </li>
              </Link>
              <Link to="/pengumuman-cpns">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  3. Penerimaan CASN
                </li>
              </Link>
              <Link to="/pengumuman-p3da">
                <li className="hover:text-purple-600 active:scale-[0.99]">
                  4. Pengadaan
                </li>
              </Link>
            </ul>
          </li>
          <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer">
            <p
              onClick={() => handleActivePublikasi()}
              className={`${
                select === "publikasi" ? "text-purple-700" : "text-black md:text-white"
              }`}
            >
              Publikasi
            </p>
            <ul
              className={`bg-white absolute w-[240px] shadow-lg ml-[-6px] rounded-lg p-5 duration-300 ${
                activePublikasi
                  ? "block mt-1 opacity-1"
                  : "hidden mt-0 opacity-0"
              }`}
            >
              <Link to="/newsletter">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  1. Newsletter Digital
                </li>
              </Link>
              <Link to="/majalah-swantara">
                <li className="mb-5 hover:text-purple-600 active:scale-[0.99]">
                  2. Majalah Swantara Digital
                </li>
              </Link>
              <Link to="https://jdih.lemhannas.go.id/">
                {" "}
                <li className="hover:text-purple-600 active:scale-[0.99]">
                  J. DIH
                </li>
              </Link>
            </ul>
          </li>
          <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer">
            <a href="#footer">
              <p
                className={`${
                  select === "galeri" ? "text-purple-700" : "text-black md:text-white"
                }`}
              >
                Kontak
              </p>
            </a>
          </li>
        </ul>
      </div>
      {/* Sidebar */}

      <div className="h-[80px] md:h-[180px] absolute left-0 top-0 w-screen overflow-hidden bg-white  ">
        <img src={Nav} alt="NAV" className="z-[98888] top-0 right-0 absolute w-[100%] md:inline hidden" />
      </div>
      <div className="w-[20%] absolute overflow-hidden opacity-[0.8] hidden h-full md:flex items-center justify-center bg-white">
        <img src={Gedung} alt="logo-lemhannas" className="scale-[1]" />
      </div>
   
      <div className="w-[20%] relative overflow-hidden z-[3333333] md:ml-12 ml-3 h-full flex items-center justify-center">
        <img src={Logo} alt="logo-lemhannas" className="w-[80%] md:mt-0 mt-3 md:w-[46%]" />
      </div>
   
      <div className="flex md:flex-col w-[80%] items-center md:items-end md:mt-0 mt-4">
        <div className="flex items-center justify-end md:mr-12 w-[80%] md:mb-6 2 z-[43333344] h-full">
                <div className="bg-orange-400 hidden md:flex items-center justify-center mr-6 text-white rounded-full p-2 w-[45px] h-[45px]"><FaGlobe /></div>
                <div className="bg-orange-400 hidden md:flex items-center justify-center mr-6 text-white rounded-full p-2 w-[45px] h-[45px]"><FaInstagram/></div>
                <div className="bg-orange-400 hidden md:flex items-center justify-center mr-6 text-white rounded-full p-2 w-[45px] h-[45px]"><FaFacebookF/></div>
                <div className="bg-orange-400 hidden md:flex items-center justify-center mr-6 text-white rounded-full p-2 w-[45px] h-[45px]"><FaTwitter/></div>
                <div className="bg-orange-400 hidden md:flex items-center justify-center mr-6 text-white rounded-full p-2 w-[45px] h-[45px]"><FaTiktok/></div>
                <div className="bg-orange-400 hidden md:flex items-center justify-center mr-6 text-white rounded-full p-2 w-[45px] h-[45px]"><FaYoutube/></div>
                <div className="rounded-full font-bold h-max w-max px-8 py-3 flex items-center justify-center cursor-pointer active:scale-[0.9] hover:brightness-[90%] bg-gradient-to-r from-pink-600 to-purple-900 text-white">
                  Masuk <FaSignInAlt className="ml-4"/>
                </div>
        </div>

        {/* Button sidebar */}
        <div
          onClick={() => setActiveSidebar(!activeSidebar)}
          className="w-[44px] mr-4 h-[40px] cursor-pointer hover:brightness-[90%] ml-4 active:scale-[0.98] border border-slate-500 rounded-md md:hidden z-[444] bg-white flex flex-col items-center justify-center"
          >
          <div className="w-[70%] bg-slate-600 h-[2px] my-1"></div>
          <div className="w-[70%] bg-slate-600 h-[2px] my-1"></div>
          <div className="w-[70%] bg-slate-600 h-[2px] my-1"></div>
        </div>
        {/* Button sidebar */}

          <ul className="w-max justify-end z-[43333344] h-full pl-8 bg-gradient-to-r from-pink-600 to-purple-900 rounded-full p-3 hidden md:flex text-white items-center">
            <li
              onClick={() => (window.location.href = "/")}
              className="mb-12 md:mb-0 md:mr-6 cursor-pointer text-[14px] active:scale-[0.98] hover:brightness-[90%]"
            >
              BERANDA
            </li>
            <li className="relative text-white mr-6 cursor-pointer">
              <p
                onClick={() => handleActiveTentang()}
                className={`${
                  select === "tentang" ? "text-purple-700" : "text-black md:text-white"
                }`}
              >
                TENTANG LEMHANNAS
              </p>
              <ul
                className={`bg-white text-white absolute w-[300px] shadow-lg ml-[-6px] rounded-lg p-5 duration-300 ${
                  activeTentang ? "block mt-10 opacity-1" : "hidden mt-0 opacity-0"
                }`}
              >
                <Link to="/sejarah">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    1. Sejarah Lemhannas RI
                  </li>
                </Link>
                <Link to="/visi-misi">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    2. Visi dan Misi
                  </li>
                </Link>
                <Link to="/kedudukan-tugas-dan-fungsi">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    3. Tugas dan Fungsi
                  </li>
                </Link>
                <Link to="/">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    4. Tugas Tannas
                  </li>
                </Link>
                <Link to="/struktur">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    5. Struktur Organisasi
                  </li>
                </Link>
                <Link to="/logo-dan-panji">
                  <li className="text-black">6. Logo dan Panji Operasi</li>
                </Link>
              </ul>
            </li>
            <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer text-[14px]">
              <p
                onClick={() => handleActiveBerita()}
                className={`${
                  select === "berita" ? "text-purple-700" : "text-black md:text-white"
                }`}
              >
                BERITA
              </p>
              <ul
                className={`bg-white absolute w-[200px] shadow-lg ml-[-6px] rounded-lg p-5 duration-300 ${
                  activeBerita ? "block mt-10 opacity-1" : "hidden mt-0 opacity-0"
                }`}
              >
                <Link to="/berita-utama">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    1. Berita Utama
                  </li>
                </Link>
                <Link to="/arsip-berita">
                  <li className="text-black hover:text-purple-600 active:scale-[0.99]">
                    2. Press Release
                  </li>
                </Link>
              </ul>
            </li>
            <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer text-[14px]">
              <p
                onClick={() => handleActivePengumuman()}
                className={`${
                  select === "pengumuman" ? "text-purple-700" : "text-black md:text-white"
                }`}
              >
                PENGUMUMAN
              </p>
              <ul
                className={`bg-white absolute w-[300px] shadow-lg ml-[-6px] rounded-lg p-5 duration-300 ${
                  activePengumuman
                    ? "block mt-10 opacity-1"
                    : "hidden mt-0 opacity-0"
                }`}
              >
                <Link to="https://sipp.lemhannas.go.id/">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    1. Penerimaan Peserta Didik Lemhannas RI
                  </li>
                </Link>
                <Link to="/penerimaan-ppra-ppsa">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    2. Penerimaan PPRA & PPSA
                  </li>
                </Link>
                <Link to="/pengumuman-jpt-2024">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    3. Seleksi JPT
                  </li>
                </Link>
                <Link to="/pengumuman-cpns">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    4. Penerimaan CASN
                  </li>
                </Link>
                <Link to="/pengumuman-cpns">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    5. Pengadaan
                  </li>
                </Link>
              </ul>
            </li>
            <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer text-[14px]">
              <p
                onClick={() => handleActivePublikasi()}
                className={`${
                  select === "publikasi" ? "text-purple-700" : "text-black md:text-white"
                }`}
              >
                PUBLIKASI
              </p>
              <ul
                className={`bg-white absolute w-[240px] shadow-lg ml-[-6px] rounded-lg p-5 duration-300 ${
                  activePublikasi
                    ? "block mt-10 opacity-1"
                    : "hidden mt-0 opacity-0"
                }`}
              >
                <Link to='/newsletter'>
                <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                  1. Newsletter Digital
                </li>
                </Link>
                <Link to="/majalah-swantara">
                <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                  2. Majalah Swantara Digital
                </li>
                </Link>
                <Link to="https://jdih.lemhannas.go.id/">
                <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                  3. JDIH
                </li>
                </Link>
              </ul>
            </li>
            <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer text-[14px]">
              <p
                onClick={() => handleActiveGaleri()}
                className={`${
                  select === "galeri" ? "text-purple-700" : "text-black md:text-white"
                }`}
              >
                GALERI
              </p>
              <ul
                className={`bg-white absolute w-[120px] shadow-lg ml-[-6px] rounded-lg p-5 duration-300 ${
                  activeGaleri ? "block mt-10 opacity-1" : "hidden mt-0 opacity-0"
                }`}
              >
                <Link to="/photo">
                  <li className="mb-5 text-black hover:text-purple-600 active:scale-[0.99]">
                    1. Photo
                  </li>
                </Link>
                <Link to="/video">
                  <li className="text-black hover:text-purple-600 active:scale-[0.99]">
                    2. Video
                  </li>
                </Link>
              </ul>
            </li>
            <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer text-[14px]">
              Tansformasi Lemhannas RI
            </li>
            <a href="#footer">
              <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer text-[14px]">Kontak</li>
            </a>
            <li className="mb-12 md:mb-0 md:mr-6 cursor-pointer text-[14px]">
              <FaSearch className="text-white" />
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
