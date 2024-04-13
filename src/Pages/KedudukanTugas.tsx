import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import LinesHero from '../Components/LineHero'

const KedudukanTugas: React.FC = () => {
  return (
    <div className='w-screen'>
        <Navbar />
        <div className='relative w-screen bg-[#913d88] h-[40vh] md:h-[60vh] flex items-center justify-center mb-4 md:mb-8'>
            <LinesHero />
            <h2 className='text-white mt-8 text-[36px] md:text-[36px] w-[80%] md:w-full text-center md:text-[60px]'>Kedudukan Tugas dan Fungsi</h2>
        </div>
        
        <div className='w-full h-max mb-6 p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>Kedudukan</h2>
            <ol className='w-[90%]'>
                <li className='mb-6'>1. Lembaga Ketahanan Nasional Republik Indonesia, yang selanjutnya disebut Lemhannas RI adalah Lembaga Pemerintah Non Kementerian yang berada di bawah dan bertanggung jawab kepada Presiden melalui Menteri yang menyelenggarakan koordinasi, sinkronisasi, dan pengendalian urusan Kementerian dalam penyelenggaraan pemerintahan di bidang politik, hukum, dan keamanan.</li>
                <li className='mb-6'>2. Lemhannas RI dipimpin oleh Gubernur Lemhannas RI.</li>
                <li className='mb-6'>3. Dalam melaksanakan tugasnya, Gubernur Lemhannas RI dibantu oleh seorang Wakil Gubernur.</li>
            </ol>
        </div>

        <div className='w-full h-max mb-6 p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>Tugas</h2>
            <p className='mb-4 w-full md:w-[80%] font-bold'>Lemhannas Rl mempunyai tugas membantu Presiden dalam:</p>
            <ol className='w-[90%]'>
                <li className='mb-6'>1. menyelenggarakan pendidikan penyiapan kader dan pemantapan pimpinan tingkat nasional yang berpikir komprehensif, integral, holistik, integratif dan profesional, memiliki watak, moral dan etika kebangsaan, negarawan, berwawasan nusantara serta mempunyai cakrawala pandang yang universal;</li>
                <li className='mb-6'>2. menyelenggarakan pengkajian yang bersifat konsepsional dan strategis mengenai berbagai permasalahan nasional, regional, dan internasional yang diperlukan oleh Presiden, guna menjamin keutuhan dan tetap tegaknya Negara Kesatuan Republik Indonesia; dan</li>
                <li className='mb-6'>3. menyelenggarakan pemantapan nilai-nilai kebangsaan guna meningkatkan dan memantapkan wawasan kebangsaan dalam rangka membangun karakter bangsa.</li>
            </ol>
        </div>
        
        <div className='w-full h-max mb-6 p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>Fungsi</h2>
            <p className='mb-4 w-full md:w-[80%] font-bold'>Dalam melaksanakan tugas sebagaimana dimaksud, Lemhannas RI menyelenggarakan fungsi:</p>
            <ol className='w-[90%]'>
                <li className='mb-6'>1. penyelenggaraan pendidikan, penyiapan kader dan pemantapan pimpinan tingkat nasional;</li>
                <li className='mb-6'>2. pengkajian permasalahan strategik nasional, regional, dan internasional di bidang geografi, demografi, sumber kekayaan alam, ideologi, politik, hukum, pertahanan, dan keamanan, ekonomi, sosial budaya, ilmu pengetahuan dan teknologi, serta permasalahan internasional;</li>
                <li className='mb-6'>3. pemantapan nilai-nilai kebangsaan yang bersumber dari Pancasila, Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, Negara Kesatuan Republik Indonesia dan sesanti Bhinneka Tunggal Ika, dan sistem nasional serta pembudayaan nilai-nilai kebangsaan;</li>
                <li className='mb-6'>4. evaluasi dan pengembangan penyelenggaraan pendidikan kader dan pimpinan tingkat nasional, pengkajian yang bersifat konsepsional dan strategis mengenai berbagai permasalahan nasional, regional, dan internasional, serta pemantapan nilai-nilai kebangsaan;</li>
                <li className='mb-6'>5. pelaksanaan penelitian dan pengukuran ketahanan nasional seluruh wilayah Indonesia;</li>
                <li className='mb-6'>6. pelaksanaan pelatihan dan pengkajian bidang kepemimpinan nasional bagi calon pimpinan bangsa;</li>
                <li className='mb-6'>7. pelaksanaan kerja sama pendidikan pascasarjana di bidang ketahanan nasional dengan lembaga pendidikan nasional dan/atau internasional dan kerja sama pengkajian strategik serta pemantapan nilai-nilai kebangsaan dengan institusi di dalam dan di luar negeri;</li>
                <li className='mb-6'>8. koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organisasi di lingkungan Lemhannas RI;</li>
                <li className='mb-6'>9. pengawasan atas pelaksanaan tugas di lingkungan Lemhannas RI; dan</li>
                <li className='mb-6'>10. pelaksanaan dukungan yang bersifat substantif kepada seluruh unsur organisasi di lingkungan Lemhannas RI.</li>
            </ol>
        </div>

        <Footer />
    </div>
  )
}

export default KedudukanTugas
