import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import LinesHero from '../Components/LineHero'

const Video: React.FC = () => {
  return (
    <div className='w-screen'>
        <Navbar />
        <div className='relative w-screen bg-[#913d88] h-[40vh] md:h-[60vh] flex items-center justify-center mb-4 md:mb-8'>
            <LinesHero />
            <h2 className='text-white mt-8 text-[36px] text-center md:text-[60px]'>Galeri Video Lemhannas</h2>
        </div>

        <div className='w-full h-max p-4 md:p-12 md:mb-0 mb-6'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>Video Lemhannas</h2>
            <div className="flexbin flexbin-margin">
               <iframe src="https://www.lemhannas.go.id/images/videos/profil/VIDEO_PROFIL_BAHASA_INGGRIS.mp4" className='w-full h-max'></iframe>
               <iframe src="https://www.lemhannas.go.id/images/videos/profil/VIDEO_PROFIL_BAHASA_INGGRIS.mp4" className='w-full h-max mt-5'></iframe>
            </div>
         </div>

        <Footer />
    </div>
  )
}

export default Video
