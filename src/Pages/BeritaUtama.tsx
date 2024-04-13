import React, { useEffect, useRef } from 'react';
import Footer from '../Components/Footer';
import LinesHero from '../Components/LineHero';
import Navbar from '../Components/Navbar';

const BeritaUtama: React.FC = () => {
    let iframeRef = useRef(null);

    useEffect(() => {
      const iframe: any = iframeRef?.current;
  
      if (iframe) {
        // Mengatur parameter autoplay pada URL video
        iframe.src = `${iframe.src}`;
      }
    }, []);
  return (
    <div className='w-screen'>
        <Navbar />

        <div className='relative w-screen bg-[#913d88] h-[40vh] md:h-[60vh] flex items-center justify-center mb-4 md:mb-8'>
            <LinesHero />
            <h2 className='text-white mt-8 text-[36px] text-center md:text-[60px]'>Berita Utama</h2>
        </div>

        {/* BERITA */}
        <div className='w-full p-4 md:p-12 h-max overflow-x-hidden'>
            <h2 className='font-bold text-[24px] md:text-[32px] relative'>Berita Utama Lemhannas</h2>
            <div className='w-full flex flex-wrap'>
                <div className='w-max h-max pb-4 mt-8 flex w-full flex-wrap'>
                    <div className='w-full md:w-[23%] mb-6 md:mr-6 h-[360px] active:scale-[0.98] hover:brightness-[90%] cursor-pointer rounded-[12px] bg-white shadow-md border border-slate-500 overflow-hidden'>
                        <div className='w-full h-[60%] overflow-hidden'>
                            <img src="https://www.lemhannas.go.id/images/2024/04/0204_Evaluasi_SAKIP.jpg" className='h-full' alt="foto-card" />
                        </div>
                        <div className='w-ful h-[40%] p-4'>
                            <small className='text-slate-400 mt-2'>14 April 2024</small>
                            <div className='w-full mt-3 overflow-hidden'>
                                <h2 className='text-[16px] font-normal'>Tingkatkan Reformasi Birokrasi, Lemhannas RI Selenggarakan Sosialisasi SAKIP</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[23%] mb-6 md:mr-6 h-[360px] active:scale-[0.98] hover:brightness-[90%] cursor-pointer rounded-[12px] bg-white shadow-md border border-slate-500 overflow-hidden'>
                        <div className='w-full h-[60%] overflow-hidden'>
                            <img src="https://www.lemhannas.go.id/images/2024/04/0204_Evaluasi_SAKIP.jpg" className='h-full' alt="foto-card" />
                        </div>
                        <div className='w-ful h-[40%] p-4'>
                            <small className='text-slate-400 mt-2'>14 April 2024</small>
                            <div className='w-full mt-3 overflow-hidden'>
                                <h2 className='text-[16px] font-normal'>Tingkatkan Reformasi Birokrasi, Lemhannas RI Selenggarakan Sosialisasi SAKIP</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[23%] mb-6 md:mr-6 h-[360px] active:scale-[0.98] hover:brightness-[90%] cursor-pointer rounded-[12px] bg-white shadow-md border border-slate-500 overflow-hidden'>
                        <div className='w-full h-[60%] overflow-hidden'>
                            <img src="https://www.lemhannas.go.id/images/2024/04/0204_Evaluasi_SAKIP.jpg" className='h-full' alt="foto-card" />
                        </div>
                        <div className='w-ful h-[40%] p-4'>
                            <small className='text-slate-400 mt-2'>14 April 2024</small>
                            <div className='w-full mt-3 overflow-hidden'>
                                <h2 className='text-[16px] font-normal'>Tingkatkan Reformasi Birokrasi, Lemhannas RI Selenggarakan Sosialisasi SAKIP</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[23%] mb-6 md:mr-6 h-[360px] active:scale-[0.98] hover:brightness-[90%] cursor-pointer rounded-[12px] bg-white shadow-md border border-slate-500 overflow-hidden'>
                        <div className='w-full h-[60%] overflow-hidden'>
                            <img src="https://www.lemhannas.go.id/images/2024/04/0204_Evaluasi_SAKIP.jpg" className='h-full' alt="foto-card" />
                        </div>
                        <div className='w-ful h-[40%] p-4'>
                            <small className='text-slate-400 mt-2'>14 April 2024</small>
                            <div className='w-full mt-3 overflow-hidden'>
                                <h2 className='text-[16px] font-normal'>Tingkatkan Reformasi Birokrasi, Lemhannas RI Selenggarakan Sosialisasi SAKIP</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[23%] mb-6 md:mr-6 h-[360px] active:scale-[0.98] hover:brightness-[90%] cursor-pointer rounded-[12px] bg-white shadow-md border border-slate-500 overflow-hidden'>
                        <div className='w-full h-[60%] overflow-hidden'>
                            <img src="https://www.lemhannas.go.id/images/2024/04/0204_Evaluasi_SAKIP.jpg" className='h-full' alt="foto-card" />
                        </div>
                        <div className='w-ful h-[40%] p-4'>
                            <small className='text-slate-400 mt-2'>14 April 2024</small>
                            <div className='w-full mt-3 overflow-hidden'>
                                <h2 className='text-[16px] font-normal'>Tingkatkan Reformasi Birokrasi, Lemhannas RI Selenggarakan Sosialisasi SAKIP</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[23%] mb-6 md:mr-6 h-[360px] active:scale-[0.98] hover:brightness-[90%] cursor-pointer rounded-[12px] bg-white shadow-md border border-slate-500 overflow-hidden'>
                        <div className='w-full h-[60%] overflow-hidden'>
                            <img src="https://www.lemhannas.go.id/images/2024/04/0204_Evaluasi_SAKIP.jpg" className='h-full' alt="foto-card" />
                        </div>
                        <div className='w-ful h-[40%] p-4'>
                            <small className='text-slate-400 mt-2'>14 April 2024</small>
                            <div className='w-full mt-3 overflow-hidden'>
                                <h2 className='text-[16px] font-normal'>Tingkatkan Reformasi Birokrasi, Lemhannas RI Selenggarakan Sosialisasi SAKIP</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default BeritaUtama
