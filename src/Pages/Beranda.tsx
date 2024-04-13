import React, { useEffect, useRef } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { Gedung, Gedung2, Gub17, LPSE, Logo, SP4N } from '../Assets/Index';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Beranda: React.FC = () => {
    let iframeRef = useRef(null);

    useEffect(() => {
      const iframe: any = iframeRef?.current;
  
      if (iframe) {
        // Mengatur parameter autoplay pada URL video
        iframe.src = `${iframe.src}`;
      }
    }, []);
  return (
    <div className='w-full overflow-x-hidden'>
        <Navbar />

        <div className='w-full md:px-8 md:flex h-max'>
            <div className='w-screen md:w-[70%] h-max md:pt-12'>
                <div className='w-full h-max md:h-[200px] bg-purple-700 overflow-hidden md:flex items-center'>
                    <div className='relative w-full md:w-[70%] h-max md:h-full md:pr-6 pt-6'>
                        <div className='text-white border-b-[8px] border-b-orange-300 py-4 pr-4 pl-8 w-full h-full'>
                            <h2 className='font-bold text-[18px] md:text-[26px] w-[80%] mb-4'>Selamat Datang di Situs Resmi Lemhannas RI</h2>
                            <p className='md:text-[16px] text-[14px] md:w-max w-[80%]'>Website ini adalah Situs resmi dari Lemhannas RI</p>
                        </div>
                    </div>
                    <div className='w-full md:w-[30%] md:inline hidden md:h-full h-max overflow-hidden'>
                        <img src={Gedung2} className='md:scale-[1.6] transform md:-skew-y-6 clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 80%)]' alt="gedung" />
                    </div>
                </div>
                <div className='w-full bg-white md:flex md:mt-5 h-max'>
                    <div className='relative w-full md:w-[65%] h-[200px] md:h-[400px] overflow-hidden'>
                        <img src={Gedung2} className='absolute top-0 left-0 w-full h-full' alt="foto" />
                        <div className='absolute bottom-0 left-0 w-full p-4 md:p-6 bg-black bg-opacity-[0.6] text-white'>
                            <h2 className='md:text-[16px] text-[12px] md:w-full w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod pariatur nostrum repellendus eos optio?</h2>
                            <p className='font-normal text-slate-300 text-[12px] mt-2'>22 Maret 2024 18:00 WIB</p>
                        </div>
                    </div>
                    <div className='relative bg-slate-800 overflow-x-hidden w-full md:w-[35%] h-[400px] overflow-y-auto'>
                        <div className='relative w-full h-[15%] top-0 left-0 text-[22px] bg-orange-400 text-white flex items-center pl-4 font-bold'>
                            <p>Informasi Terkini</p>
                        </div>
                        <div className='w-full h-[70%] overflow-y-auto'>
                            <div className='w-full h-max p-4'>
                                <p className='text-white text-[14px] mb-2'>Lorem ipsum dolor sit amet consectetur.</p>
                                <div className='text-slate-400 w-full flex items-center'>
                                    <small>12 Oktober 2024</small>
                                    <small className='ml-2'>17 WIB</small>
                                </div>
                            </div>
                            <div className='w-full h-max p-4'>
                                <p className='text-white text-[14px] mb-2'>Lorem ipsum dolor sit amet consectetur.</p>
                                <div className='text-slate-400 w-full flex items-center'>
                                    <small>12 Oktober 2024</small>
                                    <small className='ml-2'>17 WIB</small>
                                </div>
                            </div>
                            <div className='w-full h-max p-4'>
                                <p className='text-white text-[14px] mb-2'>Lorem ipsum dolor sit amet consectetur.</p>
                                <div className='text-slate-400 w-full flex items-center'>
                                    <small>12 Oktober 2024</small>
                                    <small className='ml-2'>17 WIB</small>
                                </div>
                            </div>
                            <div className='w-full h-max p-4'>
                                <p className='text-white text-[14px] mb-2'>Lorem ipsum dolor sit amet consectetur.</p>
                                <div className='text-slate-400 w-full flex items-center'>
                                    <small>12 Oktober 2024</small>
                                    <small className='ml-2'>17 WIB</small>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full h-[15%] top-0 left-0 text-[18px] text-center justify-center bg-orange-400 text-white flex items-center font-bold'>
                            <p>Lihat Semua</p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col h-max mt-[50px]'>
                    <div className='flex items-center mb-5'>
                        <div className='w-[40px] h-[30px] bg-gradient-to-r from-pink-400 to-purple-700 mr-2'>
                        </div>
                        <h2 className='text-black text-[26px] font-bold'>Unit Kerja</h2>
                    </div>

                    <div className='my-5 flex flex-wrap md:px-0 px-3 justify-between'>
                        <div className='overflow-hidden md:flex justify-between mb-5 w-full md:w-[48%] flex items-center bg-green-700 text-white font-bold pl-4 h-[60px]'>
                            <p className='font-bold text-[16px] w-[90%] md:w-[60%]'>Kedeputian Pendidikan</p>
                            <img src={Gedung} alt="foto" className='w-full w-[40%] md:inline hidden' />
                        </div>
                        <div className='overflow-hidden md:flex justify-between mb-5 w-full md:w-[48%] flex items-center bg-orange-600 text-white font-bold pl-4 h-[60px]'>
                            <p className='font-bold text-[16px] w-[90%] md:w-[60%]'>Kedeputian Pendidikan</p>
                            <img src={Gedung} alt="foto" className='w-full w-[40%] md:inline hidden' />
                        </div>
                        <div className='overflow-hidden md:flex justify-between mb-5 w-full md:w-[48%] flex items-center bg-blue-500 text-white font-bold pl-4 h-[60px]'>
                            <p className='font-bold text-[16px] w-[90%] md:w-[60%]'>Kedeputian Pendidikan</p>
                            <img src={Gedung} alt="foto" className='w-full w-[40%] md:inline hidden' />
                        </div>
                        <div className='overflow-hidden md:flex justify-between mb-5 w-full md:w-[48%] flex items-center bg-purple-600 text-white font-bold pl-4 h-[60px]'>
                            <p className='font-bold text-[16px] w-[90%] md:w-[60%]'>Kedeputian Pendidikan</p>
                            <img src={Gedung} alt="foto" className='w-full w-[40%] md:inline hidden' />
                        </div>
                        <div className='overflow-hidden md:flex justify-between mb-5 w-full md:w-[48%] flex items-center bg-orange-500 text-white font-bold pl-4 h-[60px]'>
                            <p className='font-bold text-[16px] w-[90%] md:w-[60%]'>Kedeputian Pendidikan</p>
                            <img src={Gedung} alt="foto" className='w-full w-[40%] md:inline hidden' />
                        </div>
                        <div className='overflow-hidden md:flex justify-between mb-5 w-full md:w-[48%] flex items-center bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold pl-4 h-[60px]'>
                            <p className='font-bold text-[16px] w-[90%] md:w-[60%]'>Kedeputian Pendidikan</p>
                            <img src={Gedung} alt="foto" className='w-full w-[40%] md:inline hidden' />
                        </div>
                        <div className='overflow-hidden md:flex justify-between mb-5 w-full md:w-[48%] flex items-center bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold pl-4 h-[60px]'>
                            <p className='font-bold text-[16px] w-[90%] md:w-[60%]'>Kedeputian Pendidikan</p>
                            <img src={Gedung} alt="foto" className='w-full w-[40%] md:inline hidden' />
                        </div>
                        <div className='overflow-hidden md:flex justify-between mb-5 w-full md:w-[48%] flex items-center bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold pl-4 h-[60px]'>
                            <p className='font-bold text-[16px] w-[90%] md:w-[60%]'>Kedeputian Pendidikan</p>
                            <img src={Gedung} alt="foto" className='w-full w-[40%] md:inline hidden' />
                        </div>
                    </div>
                </div>
             
                <div className='w-full flex flex-col h-max mt-[20px] md:mt-[50px]'>
                    <div className='flex items-center mb-5'>
                        <div className='w-[40px] h-[30px] bg-gradient-to-r from-pink-400 to-purple-700 mr-2'>
                        </div>
                        <h2 className='text-black text-[26px] font-bold'>Media Sosial Update</h2>
                    </div>

                    <div className='my-5 flex flex-wrap md:px-0 px-6 justify-between'>
                        <div className='overflow-hidden flex justify-between py-5 mb-5 w-full md:w-[38%] flex flex-col items-center bg-slate-300 rounded-[20px] text-white font-bold h-max flex'>
                            <p className='font-bold text-[16px] w-full mb-4 flex items-center px-4'>
                                <div className='w-[40px] bg-blue-500 justify-center h-[40px] rounded-lg flex items-center text-white p-2 mr-3'>
                                    <FaFacebookF />
                                </div>
                                <p className='text-black'>Facebook</p>
                            </p>
                            <div className='h-max md:h-[350px] overflow-hidden w-[90%]'>
                                <img src={Gedung} alt="foto" className='w-full h-full' />
                            </div>
                        </div>
                        <div className='overflow-hidden flex justify-between py-5 mb-5 w-full md:w-[58%] flex flex-col items-center bg-slate-300 rounded-[20px] text-white font-bold h-max flex'>
                            <p className='font-bold text-[16px] w-full mb-4 flex items-center px-4'>
                                <div className='w-[40px] bg-blue-500 justify-center h-[40px] rounded-lg flex items-center text-white p-2 mr-3'>
                                    <FaFacebookF />
                                </div>
                                <p className='text-black'>Facebook</p>
                            </p>
                            <div className='h-max md:h-[350px] overflow-hidden w-[90%]'>
                                <img src={Gedung} alt="foto" className='w-full h-full' />
                            </div>
                        </div>
                        <div className='overflow-hidden flex justify-between py-5 mb-5 w-full md:w-[58%] flex flex-col items-center bg-slate-300 rounded-[20px] text-white font-bold h-max flex'>
                            <p className='font-bold text-[16px] w-full mb-4 flex items-center px-4'>
                                <div className='w-[40px] bg-blue-500 justify-center h-[40px] rounded-lg flex items-center text-white p-2 mr-3'>
                                    <FaFacebookF />
                                </div>
                                <p className='text-black'>Facebook</p>
                            </p>
                            <div className='h-max md:h-[350px] overflow-hidden w-[90%]'>
                                <img src={Gedung} alt="foto" className='w-full h-full' />
                            </div>
                        </div>
                        <div className='overflow-hidden flex justify-between py-5 mb-5 w-full md:w-[38%] flex flex-col items-center bg-slate-300 rounded-[20px] text-white font-bold h-max flex'>
                            <p className='font-bold text-[16px] w-full mb-4 flex items-center px-4'>
                                <div className='w-[40px] bg-blue-500 justify-center h-[40px] rounded-lg flex items-center text-white p-2 mr-3'>
                                    <FaFacebookF />
                                </div>
                                <p className='text-black'>Facebook</p>
                            </p>
                            <div className='h-max md:h-[350px] overflow-hidden w-[90%]'>
                                <img src={Gedung} alt="foto" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex md:flex-row flex-col justify-center md:justify-around items-center my-12 md:my-24'>
                    <div className='w-[110px] h-max md:mb-0 mb-12'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='w-[110px] h-max md:mb-0 mb-12'>
                        <img src={SP4N} alt="logo" />
                    </div>
                    <div className='w-[110px] h-max md:mb-0 mb-12'>
                        <img src={LPSE} alt="logo" />
                    </div>
                </div>

            </div>

            <div className='w-full md:w-[30%] py-9 h-max px-3'>
                <div className='w-full md:w-[90%] mx-auto h-max mb-6 shadow-lg bg-white'>
                    <div className='h-max w-full overflow-hidden'>
                        <img src={Gub17} alt="foto" />
                    </div>
                    <div className='w-full p-3'>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, praesentium?</p>
                    </div>
                </div>

                <div className='w-full md:w-[90%] mx-auto h-max mb-6 shadow-lg bg-white'>
                    <div className='h-max w-full overflow-hidden'>
                        <img src={Gub17} alt="foto" />
                    </div>
                    <div className='w-full p-3'>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, praesentium?</p>
                    </div>
                </div>

                <div className='w-full md:w-[90%] mx-auto h-max mb-6 shadow-lg bg-white'>
                    <div className='h-max w-full overflow-hidden'>
                        <img src={Gub17} alt="foto" />
                    </div>
                    <div className='w-full p-3'>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, praesentium?</p>
                    </div>
                </div>
               
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Beranda
