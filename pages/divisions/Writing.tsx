import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowLeft, Feather, Quote, PenTool, BookOpen, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useHaptic } from '../../hooks/useHaptic';

const writings = [
    {
        title: "Poet Box",
        category: "Puisi Digital",
        excerpt: "Kotak rahasia yang menyimpan ribuan bait doa dan keresahan. Sebuah antologi digital yang menghubungkan jiwa-jiwa yang haus akan makna.",
        author: "O.C Team",
        image: "/assets/divisions/writing/poet_box.png"
    },
    {
        title: "Rabu dan Sihir Cintanya",
        category: "Puisi Digital",
        excerpt: "Kumpulan bait-bait puisi tentang kegelisahan perasaan cinta yang mendalam. Di mana kata-kata menjadi pelampiasan atas rindu yang tak kunjung usai di setiap hari Rabu.",
        author: "O.C Team",
        image: "/assets/divisions/writing/rabu_dan_sihir.png"
    },
    {
        title: "Story Voting",
        category: "Proyek Kolaboratif",
        excerpt: "Voting karya cerita interaktif di mana komunitas menentukan alur narasi. Sebuah eksperimen sosial dalam merajut jalinan cerita bersama-sama.",
        author: "O.C Team",
        image: "/assets/divisions/writing/story_voting.png"
    }
];

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    // Wrapper gulir halus yang disederhanakan untuk nuansa "premium"
    return <div className="scroll-smooth">{children}</div>;
};

const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.img style={{ y }} src={src} alt={alt} className="w-full h-[120%] object-cover" />
        </div>
    );
};

const RevealText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
                viewport={{ once: true }}
            >
                {text}
            </motion.div>
        </div>
    );
};

export const Writing = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const playHaptic = useHaptic();

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-[#f8f5f0] text-[#1c1a17] font-serif selection:bg-[#3d3831] selection:text-[#f8f5f0] overflow-x-hidden relative">
                {/* Paper Texture Overlay */}
                <div className="pointer-events-none fixed inset-0 z-50 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

                {/* Bilah Kemajuan */}
                <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-[#1c1a17] origin-left z-50" />

                {/* Navigasi */}
                <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-[#f8f5f0] pointer-events-none">
                    <Link to="/info" onClick={() => playHaptic('light')} className="flex items-center gap-3 text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity pointer-events-auto font-sans font-medium">
                        <ArrowLeft size={16} /> Daftar Isi
                    </Link>
                    <div className="hidden md:block text-xs tracking-[0.2em] uppercase opacity-70 font-sans border border-[#f8f5f0]/30 px-3 py-1 rounded-full">
                        Edisi Terbatas • Vol. 01
                    </div>
                </nav>

                {/* Bagian Hero - "SENI BERCERITA" */}
                <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-24 pb-12">
                    <div className="max-w-[1400px] mx-auto w-full">
                        <div className="border-b-2 border-[#1c1a17] pb-6 mb-8 md:mb-16 flex flex-col md:flex-row justify-between items-end gap-6 md:gap-0">
                            <div className="flex flex-col">
                                <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-[#1c1a17]/60 mb-2">Prolog Kajian</span>
                                <span className="font-serif italic text-xl md:text-2xl text-[#5a5245]">Bagian I: Aksara & Jiwa</span>
                            </div>
                            <a
                                href="https://instagram.com/ocedisikaryatulis"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => playHaptic('medium')}
                                className="font-sans text-xs tracking-[0.2em] border border-[#1c1a17] px-4 py-2 hover:bg-[#1c1a17] hover:text-[#f8f5f0] transition-colors cursor-pointer uppercase pointer-events-auto relative z-20 inline-block"
                            >
                                Arsip Publikasi (IG)
                            </a>
                        </div>

                        <h1 className="text-6xl md:text-[13vw] leading-[0.8] font-medium tracking-tighter uppercase mb-16 flex flex-col border-b-[8px] border-double border-[#1c1a17] pb-8 md:pb-12 text-[#1c1a17]">
                            <span className="block text-[#1c1a17]/90 font-light italic ml-[5vw] md:ml-[10vw]">Seni</span>
                            <span className="block font-black tracking-[-0.05em]">Bercerita.</span>
                        </h1>

                        <div className="columns-1 md:columns-2 gap-16 text-lg md:text-2xl leading-[1.8] text-[#3d3831] font-serif max-w-6xl">
                            <p className="mb-8">
                                <span className="float-left text-8xl md:text-9xl leading-[0.7] pr-3 font-black mt-2 text-[#1c1a17]">D</span>
                                i tengah bisingnya lanskap digital yang serba instan dan dangkal, kami memilih untuk mengambil jeda. Kami memilih untuk merangkai aksara dengan saksama, membangun narasi yang utuh, dan menghidupkan kembali ruh otentik dari sebuah cerita. Di OurCreativity, tulisan lebih dari sekadar instrumen penyampaian pesan.
                            </p>
                            <p className="mb-8 indent-8 md:indent-12 text-[#1c1a17]/80">
                                Ini adalah tentang melukis dunia dengan pelita kata. Setiap kalimat ditimbang, setiap ide diuji, dan setiap karya adalah bentuk perlawanan paling elegan terhadap kedangkalan massal. Kami tidak sekadar menulis fiksi atau esai; kami mendekonstruksi realitas.
                            </p>
                        </div>
                    </div>
                </header>

                {/* Bagian Manifesto / Kolase */}
                <section className="py-24 md:py-32 px-6 md:px-24 border-t-8 border-t-[#1c1a17]">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
                        <div className="md:col-span-4 sticky top-32">
                            <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block text-[#1c1a17]/60 border-l-2 border-[#1c1a17] pl-4">Doktrin Divisi</span>
                            <h2 className="text-5xl md:text-7xl leading-[1.1] mb-8 font-medium">
                                Berpikir.<br />
                                Menulis.<br />
                                <span className="italic font-light text-[#5a5245]">Mengubah.</span>
                            </h2>
                            <p className="font-serif text-[#3d3831] leading-[1.8] mb-8 text-lg">
                                Barang siapa yang menguasai narasi, ia menguasai realitas. Kami mengumpulkan para penulis, penyair, dan pemikir yang tidak takut membongkar apa yang mapan melalui ketajaman pena.
                            </p>
                            <div className="w-16 h-16 rounded-full border border-[#1c1a17] flex items-center justify-center relative group">
                                <PenTool size={24} className="group-hover:opacity-0 transition-opacity" />
                                <Feather size={24} className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                        <div className="md:col-span-8 relative min-h-[80vh] flex flex-col items-end">
                            {/* Elemen Kolase Editorial */}
                            <div className="relative z-10 bg-[#f8f5f0] p-10 md:p-12 shadow-[12px_12px_0_0_rgba(28,26,23,0.1)] border border-[#1c1a17]/20 max-w-lg mb-[-120px] md:mr-12 transform -rotate-1 hidden md:block backdrop-blur-sm">
                                <Quote size={40} className="text-[#1c1a17]/10 mb-6 absolute top-4 left-4" />
                                <p className="text-2xl md:text-3xl italic leading-relaxed mb-6 font-serif relative z-10 text-[#3d3831]">
                                    "Manusia tidak akan pernah bisa memahami dirinya sendiri dengan utuh, kecuali melalui cerita yang ia tuturkan dan cerita yang ia baca."
                                </p>
                                <span className="font-sans text-xs tracking-[0.2em] border-t border-[#1c1a17]/20 pt-4 block w-full uppercase">Kutipan Pilihan</span>
                            </div>

                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=2573&auto=format&fit=crop"
                                alt="Pena dan Kertas"
                                className="w-full md:w-[85%] aspect-[4/3] md:aspect-auto md:h-[600px] z-0 grayscale contrast-[1.1] border-8 border-[#f8f5f0] shadow-2xl"
                            />
                        </div>
                    </div>
                </section>

                {/* Bagian Pameran / Oase */}
                <section className="py-32 px-6 md:px-24 bg-[#1c1a17] text-[#f8f5f0] relative z-20">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24 lg:mb-32 border-b-2 border-[#f8f5f0]/20 pb-12">
                            <div>
                                <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block text-[#f8f5f0]/60">Pustaka Utama</span>
                                <h2 className="text-6xl md:text-8xl font-medium tracking-tight">Katalog <span className="italic font-light text-[#a39783]">Kisah</span></h2>
                            </div>
                            <div className="font-sans text-right hidden md:block">
                                <p className="text-sm text-[#f8f5f0]/60 tracking-widest uppercase">Edisi Cetak & Digital</p>
                                <p className="text-lg mt-2 font-serif italic text-[#a39783]">Vol. 01 — 2025</p>
                            </div>
                        </div>

                        <div className="space-y-40 md:space-y-48">
                            {writings.map((work, i) => (
                                <div key={i} className={`group flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-32 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-full md:w-5/12 overflow-hidden relative">
                                        {/* Book shadow effect */}
                                        <div className="absolute inset-y-4 -right-4 w-full bg-[#f8f5f0]/5 transform translate-y-4 pointer-events-none"></div>
                                        <div className="relative overflow-hidden aspect-[3/4] border-l-[12px] border-[#3d3831] shadow-2xl">
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10 opacity-60"></div>
                                            <img
                                                src={work.image}
                                                alt={work.title}
                                                className="w-full h-full object-cover transition-all duration-[2s] ease-[0.22,1,0.36,1] group-hover:scale-105 group-hover:contrast-125"
                                            />
                                            {/* Simulate book cover title if image is plain */}
                                            <div className="absolute top-12 left-6 right-6 z-20 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 hidden">
                                                <h4 className="font-serif text-3xl font-black uppercase text-white drop-shadow-lg">{work.title}</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-7/12 flex flex-col">
                                        <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#a39783] mb-6 block flex items-center gap-4">
                                            <span className="w-8 h-[1px] bg-[#a39783]"></span>
                                            {work.category}
                                        </span>
                                        <h3 className="text-5xl md:text-7xl mb-8 leading-[1.1] font-medium tracking-tight">
                                            {work.title}
                                        </h3>
                                        <p className="font-serif text-[#f8f5f0]/80 text-lg md:text-2xl leading-[1.8] mb-12 max-w-2xl drop-shadow-sm">
                                            {work.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 mt-auto">
                                            <div className="w-16 h-[1px] bg-[#f8f5f0]/30 transition-all duration-500 group-hover:w-32"></div>
                                            <span className="font-sans text-sm tracking-[0.2em] text-[#f8f5f0]/60 uppercase">Penyusun: <span className="text-[#f8f5f0]">{work.author}</span></span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer Editorial Baru */}
                <footer className="py-32 px-6 md:px-24 bg-[#eae5db] text-[#1c1a17] text-center border-t border-[#1c1a17]/20 relative">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        <BookOpen size={48} className="mb-10 text-[#3d3831] opacity-50" strokeWidth={1} />
                        <h2 className="text-5xl md:text-8xl mb-10 leading-[0.9] font-medium tracking-tighter">
                            Titik. <br />
                            <span className="italic font-light text-[#5a5245]">Dan Paragraf Baru.</span>
                        </h2>
                        <p className="font-serif text-xl md:text-3xl text-[#1c1a17]/80 mb-16 leading-[1.6] max-w-3xl">
                            Akhiri masa lalumu sebagai pembaca pasif. Mulailah menulis babak baru dalam pergerakan kreatif ini.
                        </p>
                        <a href="https://chat.whatsapp.com/CQz2xHzSxGT4YojQ3EWrbE" target="_blank" rel="noreferrer" onClick={() => playHaptic('heavy')} className="group relative px-12 py-5 bg-[#1c1a17] text-[#f8f5f0] font-sans text-sm uppercase tracking-[0.3em] overflow-hidden hover:scale-105 transition-transform duration-300 inline-block shadow-2xl">
                            <span className="relative z-10 flex items-center gap-4">
                                Tuliskan Namamu <ArrowLeft className="rotate-180" size={16} />
                            </span>
                        </a>
                    </div>

                    <div className="mt-40 pt-10 border-t border-[#1c1a17]/10 flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-xs tracking-widest uppercase text-[#1c1a17]/50 max-w-[1400px] mx-auto">
                        <span>© 2025 OURCREATIVITY — BAGIAN KARYA TULIS</span>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-[#1c1a17] transition-colors">Vol 01.</a>
                            <a href="#" className="hover:text-[#1c1a17] transition-colors">Arsip</a>
                            <a href="#" className="hover:text-[#1c1a17] transition-colors">Manifesto</a>
                        </div>
                    </div>
                </footer>
            </div>
        </SmoothScroll>
    );
};
