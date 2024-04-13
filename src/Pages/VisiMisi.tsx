import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import LinesHero from '../Components/LineHero'

const VisiMisi: React.FC = () => {
  return (
    <div className='w-screen'>
        <Navbar />
        <div className='relative w-screen bg-[#913d88] h-[40vh] md:h-[60vh] flex items-center justify-center mb-4 md:mb-8'>
            <LinesHero />
            <h2 className='text-white mt-8 text-[40px] md:text-[60px]'>Visi dan Misi</h2>
        </div>
        
        <div className='w-full h-max mb-6 p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>Visi Lemhannas RI</h2>
            <p className='leading-loose w-full md:w-[80%]'>"Menjadi Pusat Layanan Unggulan (Center of Excellence) yang Berkualitas dan Kredibel dalam bidang Ketahanan Nasional dalam mewujudkan Indonesia Maju yang Berdaulat, Mandiri dan Berkepribadian berlandaskan Gotong-Royong"</p>
        </div>

        <div className='w-full h-max mb-6 p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>Visi Lemhannas RI</h2>
            <p className='mb-4 w-full md:w-[80%]'>Dalam mewujudkan visi tersebut dilaksanakan 4 (empat) misi yaitu:</p>
            <ol className=' w-full md:w-[90%]'>
                <li className='mb-6'>1. Mewujudkan Kader dan Pemantapan Pimpinan Tingkat Nasional berbasis pengarusutamaan gender yang berpikir komprehensif, integral, holistik, integratif dan profesional memiliki watak, moral dan etika kebangsaan, negarawan, berwawasan nusantara serta memiliki cakrawala pandang yang universal.</li>
                <li className='mb-6'>2. Mewujudkan agen perubahan dan komponen bangsa berbasis pengarusutamaan gender melalui pemantapan nilai-nilai kebangsaan guna meningkatkan dan memantapkan wawasan kebangsaan dalam rangka membangun karakter kebangsaan.</li>
                <li className='mb-6'>3. Mewujudkan kajian yang bersifat konsepsional dan strategis mengenai berbagai permasalahan nasional, regional dan internasional yang diperlukan oleh presiden, guna menjamin keutuhan dan tetap tegaknya Negara Kesatuan Republik Indonesia.</li>
                <li className='mb-6'>4. Mewujudkan Sistem Pengukuran Ketahanan Nasional di pusat dan daerah yang mendukung Sistem Keamanan Nasional yang integratif.</li>
            </ol>
        </div>
        <Footer />
    </div>
  )
}

export default VisiMisi
