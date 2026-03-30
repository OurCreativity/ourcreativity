<div align="center">

# OurCreativity

**Platform Komunitas Kreatif — Revolution Edition v5.0**

![Version](https://img.shields.io/badge/versi-5.0.0-0D1117?style=flat-square&labelColor=1a1a2e)
![Status](https://img.shields.io/badge/status-aktif-00d26a?style=flat-square&labelColor=1a1a2e)
![License](https://img.shields.io/badge/lisensi-MIT-blue?style=flat-square&labelColor=1a1a2e)

React 19 · TypeScript · Vite 6 · Tailwind CSS · Framer Motion · Supabase

[Demo](https://ourcreativity.vercel.app) · [Laporkan Bug](https://github.com/ardelyo/ourcreativity/issues) · [Ajukan Fitur](https://github.com/ardelyo/ourcreativity/issues)

</div>

---

## Apa Ini?

OurCreativity adalah platform buat komunitas kreatif. Tempat orang-orang showcase karya mereka — mulai dari desain grafis, coding, video, tulisan, sampai meme. Dibangun pakai React 19, TypeScript, dan Supabase sebagai backend.

Versi 5.0 ini hasil rebuild total dari UI sebelumnya. Navigasi sekarang pakai Bento Grid, animasi pakai Framer Motion, dan routing sudah pakai BrowserRouter biar URL-nya bisa di-share.

---

## Fitur

**Lima divisi kreativitas:**

| Divisi | Isi |
|--------|-----|
| Grafis | Seni digital, UI/UX, ilustrasi |
| Coding | Project software, eksperimen kode |
| Video | Karya sinematik, short film |
| Menulis | Artikel, cerita, jurnalisme |
| Meme | Ya... meme |

**Yang baru di v5.0:**
- BrowserRouter — URL yang persistent dan bisa di-share
- Error Boundary — kalau ada error, nggak langsung white screen
- Creation Studio v2 — editor multi-format (slide, code, text, video)
- Fetch error states dengan tombol retry
- Glassmorphism dan pencahayaan dinamis di seluruh UI

Detail perubahan lengkap ada di [docs/MASTER_UPDATE_V5.md](docs/MASTER_UPDATE_V5.md).

---

## Tech Stack

| | |
|---|---|
| Framework | React 19 |
| Bahasa | TypeScript 5.8 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animasi | Framer Motion |
| Routing | React Router DOM |
| Database | Supabase |
| Ikon | Lucide React |

---

## Cara Jalankan

Butuh **Node.js v18+** dan **npm** atau **yarn**.

```bash
# clone repo
git clone https://github.com/ardelyo/ourcreativity.git
cd ourcreativity

# install dependencies
npm install

# setup environment
cp .env.example .env
# isi .env dengan kredensial Supabase kamu

# jalankan
npm run dev
```

Buka `http://localhost:5173` di browser.

Kalau butuh panduan setup Supabase yang lebih detail, baca [docs/SETUP.md](docs/SETUP.md).

### Perintah Lain

```bash
npm run build     # build produksi
npm run preview   # preview hasil build
```

---

## Struktur Folder

```
ourcreativity/
├── components/        # komponen UI yang reusable
│   ├── BentoGrid/
│   ├── Navbar/
│   ├── CreationStudio/
│   └── ...
├── pages/             # halaman-halaman aplikasi
│   ├── Home.tsx
│   ├── Karya.tsx
│   ├── Tim.tsx
│   └── ...
├── lib/               # utilities
│   └── supabase.ts
├── docs/              # dokumentasi (Bahasa Indonesia)
├── App.tsx            # root component & routing
├── index.css          # global styles
├── tailwind.config.ts
└── vite.config.ts
```

---

## Dokumentasi

Semua dokumentasi ditulis dalam Bahasa Indonesia.

| Dokumen | Tentang |
|---------|---------|
| [Setup](docs/SETUP.md) | Instalasi dan konfigurasi awal |
| [Master Update v5.0](docs/MASTER_UPDATE_V5.md) | Ringkasan perubahan besar di v5.0 |
| [Database](docs/DATABASE.md) | Schema dan query Supabase |
| [Arsitektur](docs/ARSITEKTUR.md) | Struktur kode dan keputusan teknis |
| [Routing](docs/ROUTING.md) | Sistem routing aplikasi |
| [Komponen](docs/KOMPONEN.md) | Cara pakai tiap komponen |
| [Halaman](docs/HALAMAN.md) | Detail implementasi halaman |
| [Deployment](docs/PANDUAN_DEPLOYMENT.md) | Cara deploy ke produksi |
| [Kontribusi](docs/KONTRIBUSI.md) | Standar kode dan alur kerja |
| [Riwayat Versi](docs/versions/RIWAYAT_VERSI_LENGKAP.md) | Sejarah versi dari awal |

---

## Kontribusi

Mau bantu? Silakan.

1. Fork repo ini
2. Buat branch baru (`git checkout -b fitur/nama-fitur`)
3. Commit perubahanmu (`git commit -m 'Tambah fitur X'`)
4. Push (`git push origin fitur/nama-fitur`)
5. Buat Pull Request

Baca [CONTRIBUTING.md](./CONTRIBUTING.md) dulu sebelum mulai biar nggak bingung soal standar kode dan alur review.

---

## Governance

| Dokumen | Fungsi |
|---------|--------|
| [MAINTAINERS.md](./MAINTAINERS.md) | Siapa yang maintain, bagaimana keputusan diambil |
| [ROADMAP.md](./ROADMAP.md) | Rencana fitur ke depan |
| [CHANGELOG.md](./CHANGELOG.md) | Riwayat rilis |
| [AUTHORS.md](./AUTHORS.md) | Daftar kontributor |
| [SECURITY.md](./SECURITY.md) | Laporan masalah keamanan |

Punya pertanyaan? Buka [GitHub Discussions](https://github.com/ardelyo/ourcreativity/discussions).
Nemuin bug? Buat [issue](https://github.com/ardelyo/ourcreativity/issues).

---

## Tim

**Ardelyo** — Lead Developer & Designer
**DoctorThink** — Code Refactoring & Documentation

---

## Soal Lisensi dan Brand

Kodenya open source di bawah lisensi MIT. Bebas dipakai buat belajar, dimodifikasi, atau dipakai di project sendiri — termasuk komersial.

Tapi nama "OurCreativity", logo, dan identitas visualnya dilindungi. Jangan pakai nama atau logo kami buat project lain supaya nggak bikin bingung orang. Detail lengkapnya ada di [BRAND_USAGE.md](./BRAND_USAGE.md).

```
Hak Cipta © 2025 OurCreativity
Dilisensikan di bawah Lisensi MIT.
```

---

<div align="center">

Dibuat oleh Tim OurCreativity — Edisi Coding

*Merangkai Imajinasi Kita.*

[![GitHub Stars](https://img.shields.io/github/stars/ardelyo/ourcreativity?style=social)](https://github.com/ardelyo/ourcreativity)

</div>
