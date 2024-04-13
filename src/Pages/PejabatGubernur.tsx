import React from 'react'
import { Gub1, Gub10, Gub11, Gub12, Gub13, Gub14, Gub15, Gub16, Gub17, Gub2, Gub3, Gub4, Gub5, Gub6, Gub7, Gub8, Gub9 } from '../Assets/Index'
import Footer from '../Components/Footer'
import LinesHero from '../Components/LineHero'
import Navbar from '../Components/Navbar'

const PejabatGubernur: React.FC = () => {
  return (
    <div className='w-screen'>
        <Navbar />
        <div className='relative w-screen bg-[#913d88] h-[60vh] flex items-center justify-center mb-8'>
            <LinesHero />
            <h2 className='text-white mt-8 text-[60px]'>Pejabat Gubernur Lemhannas RI</h2>
        </div>

        <div className='w-full p-6 flex flex-wrap justify-between'>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub1} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub2} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub3} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub4} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub5} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub6} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub7} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub8} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub9} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub10} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub11} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub12} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub13} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub14} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub15} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub16} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
            <div className='w-[22%] h-max mb-4 overflow-hidden rounded-[12px] mr-4'>
                <img src={Gub17} className='w-full h-full rounded-[12px]' alt="foto-gubernur" />
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default PejabatGubernur
