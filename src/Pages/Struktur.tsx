import React from 'react'
import { StrukturImage } from '../Assets/Index'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import LinesHero from '../Components/LineHero'

const Struktur: React.FC = () => {
  return (
    <div className='w-screen'>
        <Navbar />
        <div className='relative w-screen bg-[#913d88] h-[40vh] md:h-[60vh] flex items-center justify-center mb-4 md:mb-8'>
            <LinesHero />
            <h2 className='text-white mt-8 text-[36px] md:text-[60px]'>Struktur Organisasi</h2>
        </div>
        
        <div className='w-full h-max mb-6 p-4 md:p-10'>
            <p className='leading-loose w-full md:w-[80%]'>Organisasi Lemhannas RI disusun berdasarkan pada:Peraturan Gubernur Nomor 12 Tahun 2017, tanggal 20 Desember 2017 tentang Tugas, Fungsi, Susunan Organisasi dan Tata Kerja Lembaga Ketahanan Nasional Republik Indonesia</p>
        </div>

        <div className='w-full h-max mx-auto flex items-center justify-center mb-6 px-4 md:px-10 pb-10'>
            <img src={StrukturImage} alt="struktur-organisasi-lemhannas-RI" />    
        </div>

        <Footer />
    </div>
  )
}

export default Struktur
