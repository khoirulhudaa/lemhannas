import React from 'react'
import { FooterBg, Gedung } from '../Assets/Index'

const Footer: React.FC = () => {
  return (
    <>
      <div id='footer' className='w-screen relative bg-slate-800 text-white h-max md:py-0 py-7 md:h-[300px] overflow-hidden text-left'>
          <div className='relative z-[33333] w-screen md:w-[50vw] pl-6 md:pl-12 w-max h-full flex flex-col justify-center md:text-black text-white'>
            <h2 className='mb-6 font-bold text-[30px] text-left md:text-black'>HUBUNGI KAMI</h2>
            <p className='w-max md:text-[16px] mb-5 md:text-black z-[3333] text-[12px]'>
              Biro Humas Settama Lemhannas RI <br />
              Gedung Asta Gatra Lantai 2 <br />
              Jalan Medan Merdeka Selatan No. 10 <br />
              Jakarta, 10110
            </p>
            <h2 className='font-bold md:text-black text-[20px]'>Telephone: 021-383 2108/2463</h2>
          </div>
          <img src={FooterBg} alt="bg" className='absolute left-0 top-0 z-[22] md:inline hidden' />
          <img src={Gedung} alt="gedung" className='absolute top-0 right-0 grayscale-[100%] h-full md:inline hidden' />
      </div>

      <div className='w-screen text-center flex items-center justify-center p-3 md:p-6 bg-slate-300 text-slate-700'>
        <p className='leading-loose text-[10px] md:text-[14px]'>© Copyright Bagpen Rohumas Lemhannas RI. All Rights Reserved <br /> Designed by Biro Humas</p>
      </div>
    </>
  )
}

export default Footer
