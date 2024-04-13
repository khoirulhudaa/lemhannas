import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import LinesHero from '../Components/LineHero'
import { Badge, Bintang, Bunga, Logo, Panj1, Panji2, Pita } from '../Assets/Index'

const LogoDanPanji: React.FC = () => {
  return (
    <div className='w-screen'>
        <Navbar />
        <div className='relative w-screen bg-[#913d88] h-[40vh] md:h-[60vh] flex items-center justify-center mb-4 md:mb-8'>
            <LinesHero />
            <h2 className='text-white mt-8 text-[36px] text-center md:w-full w-[80%] md:text-[60px]'>Logo dan Panji Operasi</h2>
        </div>
        
        <div className='w-full h-max text-center mb-6 p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>LOGO LEMHANNAS RI</h2>
            <div className='w-full mx-auto mt-12 flex justify-center'>
                <img src={Logo} alt="logo-lemhannas-RI" />
            </div>
        </div>

        <hr className='border border-slate-700 mt-10 mb-5' />

        <div className='w-full h-max mb-6 p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-left text-center md:text-[36px] mb-4'>Makna Lambang :</h2>
            <div className='w-full flex flex-wrap justify-between'>
                <div className='w-full md:w-[50%] md:flex mt-12 p-4 mb-10'>
                    <div className='w-full md:w-[20%] mr-8 flex items-center justify-center'>
                        <img src={Bintang} alt="bintang" className='mr-6' />
                    </div>
                    <p className='w-full md:text-left text-center md:mt-0 mt-6 md:w-[70%] leading-loose'>BINTANG NUR CAHYA, BERWARNA KUNING EMAS MELAMBANGKAN KETUHANAN YANG MAHA ESA.</p>
                </div>
                <div className='w-full md:w-[50%] md:flex mb-10 p-4'>
                    <div className='w-full md:w-[20%] mr-8 flex items-center justify-center'>
                        <img src={Bunga} alt="bunga" className='mr-6' />
                    </div>
                    <p className='w-full md:text-left text-center md:mt-0 mt-6 md:w-[70%] leading-loose'>BUNGA SEROJA, BERDAUN MAHKOTA LIMA LEMBAR BERWARNA PUTIH DENGAN  TEPI-TEPINYA BERWARNA KUNING EMAS DAN BERWARNA KUNING KUNYIT PADA PINGGIRAN AKHIRNYA. BUNGA SEROJA MELAMBANGKAN SIFAT ARIF BIJAKSANA YANG MENDAPATKAN PANCARAN MAYACAHYA PANCASILA.</p>
                </div>
                <div className='w-full md:w-[50%] md:flex mb-10 p-4'>
                    <div className='w-full md:w-[20%] mr-8 flex items-center justify-center'>
                        <img src={Badge} alt="badge" className='mr-6' />
                    </div>
                    <p className='w-full md:text-left text-center md:mt-0 mt-6 md:w-[70%] leading-loose'>TANDA KESATUAN (BADGE) LEMHANNAS, SESUAI KEPUTUSAN KETUA LEMHANNAS NO. 003/KPTS/LPN/65 DENGAN PINGGIRAN BIRU, TERLETAK DI TENGAH-TENGAH BUNGA SEROJA YANG MEMANCARKAN SINAR-SINAR BERWARNA KUNING EMAS KE SEGENAP PENJURU.</p>
                </div>
                <div className='w-full md:w-[50%] md:flex mb-10 p-4'>
                    <div className='w-full md:w-[20%] mr-8 flex items-center justify-center'>
                        <img src={Pita} alt="pita" className='-ml-6' />
                    </div>
                    <p className='w-full md:text-left text-center md:mt-0 mt-6 md:w-[70%] leading-loose'>ORNAMEN PITA, MENGGELOMBANG & SIMETRIS DIBAWAH BUNGA SEROJA BERWARNA PUTIH DENGAN PINGGIRAN BIRU DISEBELAH DALAM DAN BERWARNA KUNING KUNYIT DISEBELAH LUAR.</p>
                </div>
            </div>
        </div>

        <div className='w-full md:flex text-white items-center bg-[#913d88] h-max p-6 md:p-10'>
            <div className='md:w-1/2'>
                <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>Panji Operasi Lemhannas RI</h2>
                <p className='leading-loose'>(BERDASARKAN KEPPRES RI NOMOR 033/TK/TAHUN 1968 TENTANG PENGANUGERAHAN PANJI-PANJI OPERASI LEMHANNAS)</p>
            </div>
            <div className='flex items-center w-full md:w-[40vw] md:px-0 px-4 my-8'>
                <img src={Panj1} className='w-1/2 mt-[-10px]' alt="panji-bendera" />
                <img src={Panji2} className='md ml-4 w-[90%]:md:ml-12 w-1/2 mt-[-10px]' alt="panji-garuda" />
            </div>
        </div>

        <div className='w-full h-max p-4 md:mt-0 mt-6 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>1. Panji-panji Operasi</h2>
            <p>(BERDASARKAN KEPPRES RI NOMOR 033/TK/TAHUN 1968 TENTANG PENGANUGERAHAN PANJI-PANJI OPERASI LEMHANNAS)</p>
            <ol className='w-[90%] mt-4'>
                <li className='mb-2'>- a. Bentuk : Segi empat panjang</li>
                <li className='mb-2'>- b. Ukuran : 90 x 60 cm</li>
                <li className='mb-2'>- c. Bahan : Kain beludru disulam benang emas dan perak</li>
                <li className='mb-2'>- d. Warna dasar : <b>Ungu – limar/lembayung</b></li>
                <li className='mb-2'>- e. Jumbai : Warna kuning emas, panjang 7 cm</li>
                <li className='mb-2'>- f. Tali jumbai : Warna kuning emas, panjang 140 cm</li>
                <li className='mb-2'>- g. Sangkala : “Tanhana Dharmma Mangrva”</li>
            </ol>
        </div>
        
        <div className='w-full h-max p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>2. Lukisan</h2>
            <p>(BERDASARKAN KEPPRES RI NOMOR 033/TK/TAHUN 1968 TENTANG PENGANUGERAHAN PANJI-PANJI OPERASI LEMHANNAS)</p>
            <p className='mb-6 font-bold mt-5'>a. Sebelah kanan:</p>
            <ul className='w-[90%] mt-4'>
                <li className='mb-2'>- Lambang Negara Republik Indonesia yang ditetapkan dengan Peraturan Pemerintah RI Nomor 66 Tahun 1951 (Lembaran Negara Nomor 111 Tahun 1951 Tanggal 17 Oktober).</li>
                <li className='mb-2'>- Lambang kekuatan unsur-unsur Pertahanan Keamanan nasional dilingkari oleh untaian padi dan kapas diletakkan pada tiap sudut Panji-panji Operasi dan dihubungkan satu sama lain dengan tali berwarna kuning kunyit sejajar dengan keempat sisi Panji-panji.</li>
                <li className='mb-2'>- Kedua lambang tersebut di atas diletakkan pada warna dasar ungu limar/lembayung.</li>
            </ul>
            <div className='mb-6 mt-5 md:flex w-max items-center'>
                <p className='font-bold'>a. Sebelah kiri:</p>
                <p className='font-bold ml-5 md:inline hidden'>Lambang Bunga Seroja Dharmma terbagi atas:</p>
            </div>
            <ul className='w-[90%] mt-4'>
                <li className='mb-2'>- Bintang Nurcahya berwarna emas.</li>
                <li className='mb-2'>- Bunga Seroja berdaun mahkota lima lembar berwarna putih dan mempunyai tepi berwarna kuning emas dengan pinggiran kuning kunyit.</li>
                <li className='mb-2'>- Badge Lembaga Pertahanan Nasional sesuai dengan Surat Keputusan Ketua Lemhannas Nomor 003/Kpts/LPN/65 Tanggal 4 Mei 1965 dengan pinggiran biru berada di tengah-tengah Bunga Seroja yang memancarkan sinar-sinar berwarna kuning emas ke segala penjuru.</li>
                <li className='mb-2'>- Pita menggelombang berwarna putih dengan pinggiran biru di sebelah dalam dan kuning kunyit di sebelah luar, bertuliskan hitam “Tanhana Dharmma Mangrva”.</li>
                <li className='mb-2'>- Keseluruhan Lambang tersebut dikelilingi oleh tali berwarna kuning kunyit sejajar dengan keempat sisi panji operasi dan diletakkan pada warna <b>ungu-limar/lembayung.</b></li>
            </ul>
        </div>
        
        <div className='w-full h-max p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>3. <b>TIANG</b>, terdiri atas:</h2>
            <p className='font-bold ml-5 my-4'>Mustaka</p>
            <p>Berbentuk Burung Garuda yang siap terbang dan menjangkau kekuatan unsur-unsur Pertahanan Keamanan Nasional dan dilingkari oleh untaian padi dan bunga kapas, yang dikokohkan pada suatu alas di ujung galah.</p>
            <p className='font-bold ml-5 my-4'>Galah</p>
            <p>Berbentuk bulat panjang serta berukiran pada bagian atas dari tempat hingga mustaka panjang tiang disesuaikan dengan ukuran Panji-panji Operasi. Di bagian tengah tiang terdapat tempat pegangan, sedangkan ujung bawah tiang diberi alas kerucut.</p>
            <p className='my-4'>Bahan: kayu Cendana</p>
        </div>
      
        <div className='w-full h-max p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>4. Panca-Ripta</h2>
            <ul className='w-[90%] mt-4'>
                <li className='mb-2'>- Lambang Panji-panji Operasi Lembaga Ketahanan Nasional (Lemhannas) bernama Bunga Seroja “Tanhana Dharmma Mangrva” atau disingkat Bunga Seroja Dharmma, dan berwujud bunga seroja bermahkota 5 (lima) lembar daun bunga dalam pancaran maya putih yang melambangkan kesucian dan kemurnian, sedangkan di tengah-tengahnya bersinar perisai Lembaga Ketahanan Nasional yang melambangkan Ketahanan Nasional.</li>
            </ul>
        </div>

        <p className='my-5 ml-4 w-[90%] md:ml-12'>Di atas bunga Seroja bersinar Bintang Nurcahya; sedang di bawahnya terdapat pita menggelombang bertulisan “Tanhana Dharmma Mangrva”. Keseluruhan lambang ditempatkan di atas warna dasar <b>lembayung atau ungu limar</b>, yang melambangkan kekhidmatan suasana lingkungan wibawa praja.</p>
        <p className='my-5 ml-4 w-[90%] md:ml-12'>Keseluruhan lambang tersebut dilukis dalam tata warna delapan, yaitu: <b>lembayung atau limar-ungu</b>, kuning kunyit, kuning emas, biru, merah, putih, hitam dan hijau untuk mengibaratkan nyala tunggal yang bercahaya delapan, ialah lambang Hakikat Ke-Esa-an.</p>

        <ul className='w-[90%] ml-4 w-[90%] md:ml-12 mt-4'>
            <li className='mb-2'>- Bunga Seroja melambangkan sifat arif bijaksana, sedang mahkota lima lembar daun bunganya dalam warna putih bersih mengibaratkan pancaran maya cahaya Pancasila yang mekar dalam sifat arif bijaksana di tengah-tengah kekhidmatan suasana lingkungan wibawa praja.</li>
            <li className='mb-2'>- Bintang Nurcahya dalam warna kuning emas di atas bunga Seroja adalah lambang Ke-Tuhanan Yang Maha Esa, yang berada tepat di atas kata “Dharmma”.</li>
            <li className='mb-2'>- Pita bertulisan “Tanhana Dharmma Mangrva” (Tiada Kebenaran Bermuka Dua) menggelombang dari kiri dengan “Tanhana” (Tiada) dan ke kanan dengan “Mangrva” (Bermuka Dua) ibarat gerak limbang hati manusia, sedang di tengah menonjol naik “Dharmma” (Kebenaran) bagaikan isyarat yang mengingatkan manusia untuk senantiasa berpegang dan berlandaskan Kebenaran yang satu.</li>
            <li className='mb-2'>- “Tanhana Dharmma Mangrva” adalah sesanti Mpu Tantular dalam karyanya Purusada –Canta atau “Sutasoma”, yang dijelmakan dalam dharmma bakti Lemhannas dengan tekad “Tahan Karena Benar”, seperti digambarkan oleh pancaran sinar perisai Lemhannas ke segala penjuru.</li>
        </ul>

        <div className='w-full h-max p-4 md:p-10'>
            <h2 className='font-bold text-[24px] md:text-[36px] mb-4'>5. <b>Penutup</b>, terdiri atas:</h2>
            <p className='my-4'>Panji-panji operasi Bunga Seroja Dharmma melambangkan Dharmma bakti Lemhannas demi keuletan ketahanan nasional dan tercapainya satu cipta, rasa, karsa, kata dan karya berdasarkan kebenaran yang tunggal.</p>
        </div>

        <Footer />
    </div>
  )
}

export default LogoDanPanji
