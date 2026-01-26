import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowLeft, Maximize2, Crosshair, Users, Trophy, Zap, Star, ArrowUpRight, Pin } from 'lucide-react';

// --- Komponen Marquee Lokal ---
const Marquee = ({ text }: { text: string }) => (
    <div className="overflow-hidden whitespace-nowrap py-4 bg-[#1a4731]/40 border-y border-[#2d5a42]/50 backdrop-blur-sm relative z-20">
        <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="inline-block"
        >
            {[...Array(4)].map((_, i) => (
                <span key={i} className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-white mx-4">
                    {text}
                </span>
            ))}
        </motion.div>
    </div>
);

// --- Data Statis ---
const stats = [
    { value: "700+", label: "ANGGOTA" },
    { value: "50+", label: "PROYEK KOLABORASI" },
    { value: "24/7", label: "AKTIVITAS DISCORD" }
];

const highlights = [
    {
        title: "TAGWALL 90'S DESIGN",
        desc: "OurCreativity 0.7 - Total 80+ Participant",
        image: "/tagwall-90s-design.jpg",
        rotate: 6,
        x: "15%",
        y: "20%",
        zIndex: 10
    },
    {
        title: "TAGWALL BRUTALISM",
        desc: "OurCreativity 1.2 - Part 1",
        image: "/tagwall-brutalism.webp",
        rotate: -3,
        x: "45%",
        y: "15%",
        zIndex: 20
    },
    {
        title: "TAGWALL KEMERDEKAAN",
        desc: "Lekas Sembuh Indonesiaku. 70+",
        image: "/tagwall-kemerdekaan.webp",
        rotate: 3,
        x: "10%",
        y: "60%",
        zIndex: 15
    },
    {
        title: "TAGWALL SUPERHERO",
        desc: "OurCreativity 1.1 - Total 80+ Participant",
        image: "/tagwall-superhero.webp",
        rotate: -6,
        x: "70%",
        y: "55%",
        zIndex: 5
    }
];

// --- Sub-komponen Lampu Gantung ---
const HangingLamp = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 25, stiffness: 120 });
    const springY = useSpring(mouseY, { damping: 25, stiffness: 120 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Cahaya Senter */}
            <motion.div
                className="fixed inset-0 pointer-events-none z-[100] mix-blend-soft-light shadow-[inset_0_0_100px_rgba(0,0,0,1)]"
                style={{
                    background: `radial-gradient(circle 350px at ${springX}px ${springY}px, rgba(255,255,240,0.4) 0%, rgba(0,0,0,0.95) 100%)`
                }}
            />
            {/* Cahaya Spotlight Terfokus */}
            <motion.div
                className="fixed inset-0 pointer-events-none z-[101] mix-blend-overlay"
                style={{
                    background: `radial-gradient(circle 120px at ${springX}px ${springY}px, rgba(255,255,200,0.6) 0%, transparent 100%)`
                }}
            />

            {/* Lampu Visual di Sudut */}
            <div className="fixed top-0 right-0 w-64 h-64 pointer-events-none z-[102] opacity-80">
                <img src="/lamp-head.png" alt="" className="w-full h-full object-contain rotate-[-15deg] transform translate-x-12 translate-y-[-12px] brightness-150 drop-shadow-2xl"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
        </>
    );
};

export const Graphics = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-[#0d2118] text-white font-sans selection:bg-[#4ade80] selection:text-black overflow-x-hidden relative">

            {/* CUTTING MAT BACKGROUND SYSTEM */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Warna Dasar Hijau Cutting Mat */}
                <div className="absolute inset-0 bg-[#0d2118]" />

                {/* Grid Halus */}
                <div className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `linear-gradient(#1a4731 1px, transparent 1px), linear-gradient(90deg, #1a4731 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* Grid Utama (Setiap 5 kotak) */}
                <div className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `linear-gradient(#2d5a42 2px, transparent 2px), linear-gradient(90deg, #2d5a42 2px, transparent 2px)`,
                        backgroundSize: '100px 100px'
                    }}
                />

                {/* Markings Penggaris di Tepi */}
                <div className="absolute top-0 left-0 bottom-0 w-8 border-r border-[#1a4731] flex flex-col items-center py-4 gap-20 opacity-40 font-mono text-[10px]">
                    {[...Array(10)].map((_, i) => <span key={i}>{i * 10}</span>)}
                </div>
                <div className="absolute top-0 left-0 right-0 h-8 border-b border-[#1a4731] flex items-center px-12 gap-20 opacity-40 font-mono text-[10px]">
                    {[...Array(15)].map((_, i) => <span key={i}>{i * 10}</span>)}
                </div>

                {/* Tekstur Material Berpori */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </div>

            <HangingLamp />

            {/* Navigasi Mengambang */}
            <nav className="fixed top-8 left-0 right-0 z-[110] px-6 md:px-12 flex justify-between items-start pointer-events-none">
                <Link to="/info" className="flex items-center gap-2 text-sm font-mono hover:text-[#4ade80] transition-colors bg-black/60 backdrop-blur-md px-6 py-3 rounded-none border border-white/10 pointer-events-auto transform rotate-[-1deg] shadow-lg">
                    <ArrowLeft size={16} /> [ KEMBALI ]
                </Link>
                <div className="hidden md:flex flex-col items-end gap-1 pointer-events-auto">
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-300 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 shadow-lg transform rotate-[1deg]">
                        <span>STATUS: LIVE_SESSIONS</span>
                        <span className="text-[#4ade80] animate-pulse">●</span>
                    </div>
                </div>
            </nav>

            <div className="relative z-10 max-w-[1800px] mx-auto min-h-screen">

                {/* Hero Section - Dirancang seperti potongan kertas di board */}
                <header className="pt-32 pb-20 px-6 md:px-12 flex flex-col md:flex-row gap-12 items-start justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative max-w-4xl"
                    >
                        {/* Judul dengan gaya Paper Collage */}
                        <div className="relative inline-block mb-12 transform rotate-[-2deg]">
                            <div className="absolute -inset-4 bg-white shadow-xl transform rotate-[1deg] z-0" />
                            <div className="relative z-10 p-4">
                                <span className="font-mono text-[#1a4731] text-xs font-bold block mb-2 underline decoration-wavy">DIV_01 // DESAIN_GRAFIS</span>
                                <h1 className="text-6xl md:text-9xl font-black text-black leading-none uppercase tracking-tighter">
                                    KOMUNITAS <br />
                                    <span className="text-[#1a4731] italic">PALING LIAR</span>
                                </h1>
                                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#4ade80] rounded-full flex items-center justify-center text-black font-bold transform rotate-12 shadow-md">
                                    700+
                                </div>
                            </div>
                            {/* Selotip Selotip */}
                            <div className="absolute -top-8 left-1/4 w-32 h-10 bg-white/40 backdrop-blur-sm rotate-[-45deg] z-20 pointer-events-none border-x border-black/5" />
                            <div className="absolute -bottom-8 right-1/4 w-32 h-10 bg-white/40 backdrop-blur-sm rotate-[-45deg] z-20 pointer-events-none border-x border-black/5" />
                        </div>

                        <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
                            <div className="max-w-xl bg-black/40 backdrop-blur-md p-6 border border-white/10 shadow-2xl relative">
                                <Pin className="absolute -top-3 left-1/2 -translate-x-1/2 text-red-500 fill-red-500 w-6 h-6" />
                                <p className="text-xl md:text-2xl text-white font-bold leading-tight mb-4">
                                    Rumah bagi kreator yang siap menggebrak industri kreatif. Bukan grup chat, ini adalah pergerakan.
                                </p>
                                <p className="text-sm md:text-base text-gray-400 font-mono">
                                    [ LOG_START: 2025_V5 ] <br />
                                    [ LOCATION: INTERNET_WIDE ]
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-shrink-0 relative group">
                        <div className="w-48 h-48 md:w-64 md:h-64 relative transform rotate-3">
                            <div className="absolute inset-0 bg-white shadow-2xl transform transition-transform group-hover:rotate-0" />
                            <img src="/logo-oc-desain.jpg" alt="OC Design Logo" className="relative z-10 w-full h-full object-cover p-2 gray-scale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        {/* Sticky Note */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-200 text-black p-4 shadow-lg transform rotate-[-8deg] font-mono text-xs hover:rotate-0 transition-transform">
                            <p className="font-bold underline mb-2 italic">TODO LIST:</p>
                            <ul className="space-y-1">
                                <li>- Breaking Rules [OK]</li>
                                <li>- Make Chaos [OK]</li>
                                <li>- Stay Wild [OK]</li>
                            </ul>
                        </div>
                    </div>
                </header>

                <Marquee text="KOLABORASI TANPA BATAS • KARYA TANPA HENTI • BREAK THE RULES •" />

                {/* Statistik sebagai Sticker */}
                <section className="py-20 px-6 md:px-12 flex flex-wrap gap-8 justify-center relative overflow-hidden">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 5 : -5 }}
                            className={`p-10 bg-white text-black shadow-2xl border-4 border-black relative ${i % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'}`}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-inner" />
                            <h3 className="text-5xl font-black mb-1">{stat.value}</h3>
                            <p className="font-mono text-xs uppercase tracking-tighter opacity-60 underline font-bold">{stat.label}</p>
                        </motion.div>
                    ))}
                </section>

                {/* THE CONCEPT BOARD - INTERACTIVE SECTION */}
                <section ref={boardRef} className="relative w-full h-[1000px] mt-20 mb-40 overflow-hidden cursor-crosshair">

                    {/* Elemen Dekoratif Board */}
                    <div className="absolute top-10 left-10 text-9xl font-black text-white/5 uppercase select-none pointer-events-none">
                        CONCEPT_BOARD_V.01
                    </div>

                    <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 text-white/20 font-mono text-[10px] select-none pointer-events-none">
                        <span>LATENCY: 5MS</span>
                        <span>INTERACTIVE: ENABLED</span>
                        <span>PHYSICS: FRAMER_MOTION</span>
                    </div>

                    {/* RED STRINGS (Connecting items) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-10">
                        <defs>
                            <filter id="stringFilter" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                                <feOffset in="blur" dx="1" dy="1" result="offsetBlur" />
                                <feMerge>
                                    <feMergeNode in="offsetBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {/* Garis Merah ke-1 */}
                        <motion.line
                            x1="22%" y1="28%" x2="48%" y2="22%"
                            stroke="#ef4444" strokeWidth="3" filter="url(#stringFilter)"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                        />
                        {/* Garis Merah ke-2 */}
                        <motion.line
                            x1="48%" y1="22%" x2="18%" y2="68%"
                            stroke="#ef4444" strokeWidth="3" filter="url(#stringFilter)"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ delay: 0.5 }}
                        />
                        {/* Garis Merah ke-3 */}
                        <motion.line
                            x1="48%" y1="22%" x2="78%" y2="62%"
                            stroke="#ef4444" strokeWidth="3" filter="url(#stringFilter)"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ delay: 1 }}
                        />
                        {/* Titik Simpul (Pins) */}
                        <circle cx="22%" cy="28%" r="4" fill="#600" />
                        <circle cx="48%" cy="22%" r="4" fill="#600" />
                        <circle cx="18%" cy="68%" r="4" fill="#600" />
                        <circle cx="78%" cy="62%" r="4" fill="#600" />
                    </svg>

                    {/* Draggable Polaroids */}
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            drag
                            dragMomentum={false}
                            dragConstraints={boardRef}
                            style={{
                                top: item.y,
                                left: item.x,
                                rotate: item.rotate,
                                zIndex: item.zIndex
                            }}
                            whileDrag={{ scale: 1.05, zIndex: 100, rotate: 0 }}
                            className="absolute group active:cursor-grabbing"
                        >
                            <div className="w-64 md:w-80 bg-white p-4 pb-12 shadow-2xl border border-black/5 transform-gpu transition-shadow group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-black/20 z-20 shadow-inner" />
                                <div className="aspect-square bg-gray-100 overflow-hidden relative mb-4">
                                    <div className="absolute inset-0 bg-[#1a4731]/20 mix-blend-multiply z-10 pointer-events-none group-hover:opacity-0 transition-opacity" />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
                                    />
                                </div>
                                <div className="px-2">
                                    <h3 className="font-black text-xl text-black leading-none uppercase mb-2 tracking-tighter">{item.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="h-px flex-1 bg-black/10" />
                                        <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest leading-tight italic">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 text-black/10 group-hover:text-black/30 transition-colors">
                                    <Maximize2 size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Sticker Sticker Tambahan (Draggable too!) */}
                    <motion.div drag dragConstraints={boardRef} dragMomentum={false} className="absolute top-[35%] right-[25%] z-40 cursor-grab active:cursor-grabbing">
                        <div className="w-20 h-20 bg-[#4ade80] rounded-full flex items-center justify-center text-black font-black text-xl border-4 border-black rotate-12 shadow-lg group">
                            NEW!
                        </div>
                    </motion.div>

                    <motion.div drag dragConstraints={boardRef} dragMomentum={false} className="absolute bottom-[25%] left-[20%] z-40 cursor-grab active:cursor-grabbing">
                        <div className="px-4 py-2 bg-yellow-300 text-black font-mono text-xs font-bold border-2 border-black -rotate-6 shadow-md">
                            #WILD_GRAPHICS
                        </div>
                    </motion.div>
                </section>

                {/* CTA Footer - Dirancang seperti Poster ditempel */}
                <footer className="pb-40 relative">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            className="bg-white text-black p-12 md:p-20 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] relative transform rotate-1"
                        >
                            {/* Selotip Sudut */}
                            <div className="absolute -top-4 -left-10 w-40 h-10 bg-[#4ade80]/60 backdrop-blur-sm rotate-45 border-x border-black/5" />
                            <div className="absolute -top-4 -right-10 w-40 h-10 bg-[#4ade80]/60 backdrop-blur-sm -rotate-45 border-x border-black/5" />

                            <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-none italic underline decoration-[#4ade80]">
                                JOIN <br /> THE WILD.
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-2xl font-mono leading-tight">
                                // JADILAH BAGIAN DARI 700+ KREATOR <br />
                                // YANG MENGUBAH WAJAH INDUSTRI KREATIF INDONESIA.
                            </p>

                            <a href="https://discord.gg/ourcreativity" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white font-black text-2xl hover:bg-[#1a4731] transition-colors shadow-xl">
                                GABUNG [ DISCORD ] <ArrowUpRight size={28} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Credit Line Sticker */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur-md px-6 py-2 border border-white/10 text-[10px] font-mono whitespace-nowrap">
                        <span>© 2025 OURCREATIVITY_V5</span>
                        <span className="text-gray-500">|</span>
                        <span>DEVELOPED_BY_ELITE_SYSTEMS</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-[#4ade80]">SYSTEM: STABLE</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};
