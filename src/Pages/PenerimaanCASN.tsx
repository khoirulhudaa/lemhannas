import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LinesHero from "../Components/LineHero";

const PenerimaanCASN: React.FC = () => {
  return (
    <div className=" w-screen">
      <Navbar />
      <div className="relative w-screen bg-[#913d88] -z-10 h-[60vh] flex items-center justify-center mb-8">
        <LinesHero />
        <h2 className="text-white mt-8 text-[60px]">
          Seleksi Terbuka JPT dan Penerimaan CASN
        </h2>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <div className=" flex justify-between gap-5 items-center">
            <h2 className="font-bold text-[20px] md:text-[25px]  lg:text-[36px] mb-4">PPPK 2023</h2>
            <button className=" hidden md:block w-[100px] h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
          </div>
          <ol className="w-[90%]">
            <li className="mb-6 cursor-pointer hover:scale-95">
              1. Pengumuman Kelulusan Akhir Seleksi PPPK Lemhannas RI T.A. 2023.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              2. Pengumuman Peserta Seleksi Kompetensi Teknis Tambahan PPPK
              Lemhannas RI T.A. 2023.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              3. Pengumuman Jadwal Seleksi Kompetensi Teknis Tambahan PPPK
              Lemhannas RI T.A. 2023.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              4. Pengumuman Jadwal Seleksi Kompetensi Teknis PPPK Lemhannas RI
              T.A. 2023.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              5. Pengumuman Materi Pokok Seleksi Kompetensi Teknis PPPK
              Lemhannas RI T.A. 2023.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              6. Pengumuman Hasil Sanggah Seleksi Administrasi PPPK Lemhannas RI
              T.A. 2023.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              7. Hasil Seleksi Administrasi Penerimaan PPPK Lemhannas RI T.A.
              2023.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              8. Pengumuman Penyesuaian Jadwal Pelaksanaan Penerimaan PPPK
              Lemhannas RI T.A. 2023.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              9. Pengumuman Jabatan, Formasi, Kualifikasi, dan Persyaratan
              Penerimaan PPPK Lemhannas RI T.A. 2023.
            </li>
          </ol>
          <button className=" block md:hidden w-full h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
        </div>
        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <div className=" flex justify-between gap-5 items-center">
            <h2 className="font-bold text-[20px] md:text-[25px] lg:text-[36px] mb-4">CPNS 2021</h2>
            <button className=" hidden md:block w-[100px] h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
          </div>
          <ol className="w-[100%]">
            <li className="mb-6 cursor-pointer hover:scale-95">
              1. Pengumuman Kelulusan Akhir Penerimaan Calon Pegawai Negeri
              Sipil (CPNS) Lemhannas RI Tahun Anggaran 2021.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              2. Pengumuman Jadwal Pelaksanaan Seleksi Kompetensi Bidang (SKB)
              Penerimaan Calon Pegawai Negeri Sipil (CPNS) Lemhannas RI Tahun
              Anggaran 2021.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              3. Pengumuman Hasil Pelaksanaan Seleksi Kompetensi Dasar (SKD)
              Penerimaan Calon Pegawai Negeri Sipil (CPNS) Lemhannas RI Tahun
              Anggaran 2021.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              4. Titik Lokasi Pelaksanaan Ujian SKD Luar Negeri Penerimaan CPNS
              Lemhannas RI TA 2021.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              5. Titik Lokasi Pelaksanaan Ujian SKD Jakarta Penerimaan CPNS
              Lemhannas RI TA 2021.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              6. Jadwal Pelaksanaan SKD Penerimaan CPNS Lemhannas RI TA 2021.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              7. Pengumuman Hasil Sanggah Seleksi Administrasi CPNS Lemhannas RI
              2021.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              8. Pengumuman Hasil Seleksi Administrasi CPNS Lemhannas RI 2021.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              9. Pengumuman Perubahan Jadwal Pelaksanaan Penerimaan CPNS
              Lemhannas RI 2021.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              10 Format Surat Lamaran dan Surat Pernyataan.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              11. Pengumuman Jabatan, Formasi, Kualifikasi, dan Persyaratan.
            </li>
          </ol>
          <button className=" block md:hidden w-full h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
        </div>

        <div className="w-[80%] h-max mb-6 p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10">
          <div className=" flex justify-between gap-5 items-center">
            <h2 className="font-bold text-[20px] md:text-[25px] lg:text-[36px] mb-4">CPNS 2019</h2>
            <button className="hidden md:block w-[100px] h-[40px] hover:scale-95 rounded-md border-2 border-gray-500 cursor-pointer">
              Download
            </button>
          </div>
          <ol className="w-[100%]">
            <li className="mb-6 cursor-pointer hover:scale-95">
              1. Pengumuman Kelulusan Akhir Seleksi CPNS di Lingkungan Lemhannas
              RI Formasi 2019.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              2. Unduh Kelengkapan Berkas Kelulusan Akhir Seleksi CPNS di
              Lingkungan Lemhannas RI Formasi 2019.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              3. Perubahan Jadwal Psikotes dan Wawancara Peserta Seleksi
              Kompetensi Bidang (SKB) Calon Pegawai Negeri Sipil Lembaga
              Ketahanan Nasional RI Formasi 2019.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              4. Pelaksanaan dan Pemanggilan Peserta Seleksi Kompetensi Bidang
              (SKB) Calon Pegawai Negeri Sipil Lembaga Ketahanan Nasional RI
              Formasi 2019.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              5. Rencana Pelaksanaan Seleksi Kompetensi Bidang (SKB) Calon
              Pegawai Negeri Sipil Lembaga Ketahanan Nasional RI Formasi 2019.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              6. Peserta yang Dinyatakan Lulus Seleksi Kompetensi Dasar (SKD)
              CPNS Lemhannas RI T.A. 2019.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              7. Jadwal Pelaksanaan SKD Serta Peserta Kategori P1/TL 2018 pada
              Seleksi CPNS Lemhannas RI TA 2019.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              8. Pengumuman Hasil Sanggah Seleksi Administrasi CPNS Lemhannas RI
              2019.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              9. Pengumuman Hasil Seleksi Administrasi CPNS Lemhannas RI 2019.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              10 Pengumuman Perubahan Jadwal Serta Penyesuaian Kriteria Pelamar
              Disabilitas Seleksi CPNS Lemhannas RI 2019.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              11. Format Surat Lamaran, Pernyataan, dan Keterangan.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              12. Pengumuman Jabatan, Formasi, Kualifikasi, dan Persyaratan.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              13. Pengumuman Awal.
            </li>
            <li className="mb-6 cursor-pointer hover:scale-95">
              14. Unduh Seluruh Berkas pada Google Drive
              http://bit.ly/casnlemhannasri2019.
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

export default PenerimaanCASN;
