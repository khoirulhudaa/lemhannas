import { lazy } from "react";

const Beranda = lazy(() => import('../Pages/Beranda'))
const VisiMisi = lazy(() => import('../Pages/VisiMisi'))
const Sejarah = lazy(() => import('../Pages/Sejarah'))
const KedudukanTugas = lazy(() => import('../Pages/KedudukanTugas'))
const Struktur = lazy(() => import('../Pages/Struktur'))
const PejabatGubernur = lazy(() => import('../Pages/PejabatGubernur'))
const LogoDanPanji = lazy(() => import('../Pages/LogoDanPanji'))
const Video = lazy(() => import('../Pages/Video'))
const Photo = lazy(() => import('../Pages/Photo'))
const BeritaUtama = lazy(() => import('../Pages/BeritaUtama'))
const ArsipBerita = lazy(() => import('../Pages/ArsipBerita'))
const Opini = lazy(() => import('../Pages/Opini'))
const PenerimaanPPRA_PPSA = lazy(() => import('../Pages/PenerimaanPPRA_PPSA'))
const SeleksiJpt = lazy(() => import('../Pages/SeleksiJpt'))
const PenerimaanCASN = lazy(() => import('../Pages/PenerimaanCASN'))
const lHKPN = lazy(() => import('../Pages/LHKPN'))
const p3DA = lazy(() => import('../Pages/P3DA'))
const NewsLetter = lazy(() => import('../Pages/NewsLetter'))
const MajalahSwantara = lazy(() => import('../Pages/MajalahSwantara'))
const Kpu = lazy(() => import('../Pages/KUP'))

interface RouterProps {
    path: string,
    component: React.FC<{}>,
    exact: boolean
}

const Router: RouterProps[] = [
    {
        path: '/',
        component: Beranda,
        exact: true
    },
    {
        path: '/visi-misi',
        component: VisiMisi,
        exact: false
    },
    {
        path: '/sejarah',
        component: Sejarah,
        exact: false
    },
    {
        path: '/kedudukan-tugas-dan-fungsi',
        component: KedudukanTugas,
        exact: false
    },
    {
        path: '/struktur',
        component: Struktur,
        exact: false
    },
    {
        path: '/pejabat-gubernur',
        component: PejabatGubernur,
        exact: false
    },
    {
        path: '/logo-dan-panji',
        component: LogoDanPanji,
        exact: false
    },
    {
        path: '/photo',
        component: Photo,
        exact: false
    },
    {
        path: '/video',
        component: Video,
        exact: false
    },
    {
        path: '/berita-utama',
        component: BeritaUtama,
        exact: false
    },
    {
        path: '/arsip-berita',
        component: ArsipBerita,
        exact: false
    },
    {
        path: '/opini',
        component: Opini,
        exact: false
    },
    {
        path: '/penerimaan-ppra-ppsa',
        component: PenerimaanPPRA_PPSA,
        exact: false
    },
    {
        path: '/pengumuman-jpt-2024',
        component: SeleksiJpt,
        exact: false
    },
    {
        path: '/pengumuman-cpns',
        component: PenerimaanCASN,
        exact: false
    },
    {
        path: '/pengumuman-lhkpn',
        component: lHKPN,
        exact: false
    },
    {
        path: '/pengumuman-p3da',
        component: p3DA,
        exact: false
    },
    {
        path: '/newsletter',
        component: NewsLetter,
        exact: false
    },
    {
        path: '/majalah-swantara',
        component: MajalahSwantara,
        exact: false
    },
    {
        path: '/kpu',
        component: Kpu,
        exact: false
    },

]

export default Router