import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, Film, MousePointer2, Scissors, GripHorizontal,
    Play, SkipBack, SkipForward, Download, Settings,
    Monitor, Maximize2, Hash, LayoutTemplate, Layers,
    Video, Info, Zap, Camera, Mic, Palette, Wand2, Aperture, Music
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Timecode } from '../../components/video';
import {
    workGallery, stats, menuItems, projectFolders,
    activeEffects, editingTags, vfxTags, colorPalette
} from '../../data/videoPageData';
import { useHaptic } from '../../hooks/useHaptic';

export const VideoPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const playHaptic = useHaptic();

    // --- Animation Transforms (Expanded for More Slides) ---
    // Total Height: 1000vh approx to accommodate steps

    // 1. Intro (0 - 0.1)
    const introOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
    const introScale = useTransform(scrollYProgress, [0, 0.08], [1, 1.2]);

    // 2. Philosophy (0.08 - 0.2)
    const philoOpacity = useTransform(scrollYProgress, [0.08, 0.12, 0.18, 0.22], [0, 1, 1, 0]);

    // 3. Workflow A: Editing (0.22 - 0.35)
    const wfEditOpacity = useTransform(scrollYProgress, [0.22, 0.25, 0.32, 0.35], [0, 1, 1, 0]);
    const wfEditX = useTransform(scrollYProgress, [0.22, 0.35], [50, -50]);

    // 4. Workflow B: VFX (0.35 - 0.48) 
    const wfVfxOpacity = useTransform(scrollYProgress, [0.35, 0.38, 0.45, 0.48], [0, 1, 1, 0]);
    const wfVfxScale = useTransform(scrollYProgress, [0.35, 0.48], [0.9, 1.1]);

    // 5. Workflow C: Color (0.48 - 0.6)
    const wfColorOpacity = useTransform(scrollYProgress, [0.48, 0.52, 0.58, 0.62], [0, 1, 1, 0]);

    // 6. Workflow D: Sound (0.62 - 0.75)
    const wfSoundOpacity = useTransform(scrollYProgress, [0.62, 0.65, 0.72, 0.75], [0, 1, 1, 0]);

    // 7. Gallery (0.75 - 0.9)
    const galleryOpacity = useTransform(scrollYProgress, [0.75, 0.78, 0.88, 0.92], [0, 1, 1, 0]);

    // 8. CTA (0.92 - 1.0)
    const ctaOpacity = useTransform(scrollYProgress, [0.92, 0.95, 1], [0, 1, 1]);

    const timelineWidth = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), { stiffness: 100, damping: 30 });

    return (
        <div ref={containerRef} className="h-[1000vh] bg-[#050505] text-xs text-gray-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.15),_transparent_50%)] pointer-events-none"></div>

            <div className="fixed inset-0 z-10 flex flex-col bg-transparent">

                {/* --- HEADER --- */}
                <div className="h-14 bg-black/60 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 shrink-0 z-50">
                    <div className="flex items-center gap-6">
                        <Link to="/info" className="flex items-center gap-2 font-bold text-gray-400 hover:text-white transition-colors">
                            <ArrowLeft size={16} />
                            <span className="hidden sm:inline tracking-wider">Our Creativity<span className="text-cyan-500 font-mono text-[10px] ml-1">.OCVP</span></span>
                        </Link>
                        <div className="hidden lg:flex gap-6 text-gray-500 text-xs font-medium">
                            {menuItems.map(m => (
                                <span key={m} className="hover:text-white cursor-pointer transition-colors">{m}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="h-6 w-[1px] bg-white/10"></div>
                        <div className="font-mono text-cyan-400 tracking-widest bg-cyan-950/30 px-3 py-1 rounded border border-cyan-500/20 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]">
                            <Timecode scrollProgress={scrollYProgress} />
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => playHaptic('heavy')}
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-md text-cyan-400 border border-white/10 transition-all hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        >
                            <Download size={14} />
                            <span className="font-bold tracking-widest text-[10px]">RENDER</span>
                        </motion.button>
                    </div>
                </div>

                {/* --- WORKSPACE --- */}
                <div className="flex-1 flex overflow-hidden bg-black/20">

                    {/* LEFT BIN (Browser Media) */}
                    <div className="hidden lg:flex w-56 xl:w-64 flex-col border-r border-white/10 bg-black/40 backdrop-blur-md">
                        <div className="flex bg-white/5 border-b border-white/10">
                            <div className="px-4 py-2 bg-white/10 text-white border-t-2 border-cyan-500 text-[10px] uppercase tracking-widest font-bold">Proyek</div>
                            <div className="px-4 py-2 text-gray-500 text-[10px] uppercase tracking-widest hover:text-gray-300 cursor-pointer">Peramban</div>
                        </div>
                        <div className="flex-1 p-3 overflow-y-auto custom-scrollbar space-y-6">
                            <div className="grid grid-cols-2 gap-3">
                                {projectFolders.map(f => (
                                    <div key={f} className="aspect-square bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/50 flex flex-col items-center justify-center p-2 text-gray-500 group cursor-pointer transition-all hover:bg-cyan-950/20 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
                                        <Layers size={24} className="group-hover:text-cyan-400 transition-colors mb-2" strokeWidth={1.5} />
                                        <span className="text-[10px] text-center font-medium group-hover:text-gray-200 tracking-wide">{f}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-white/10 pt-4">
                                <div className="text-[10px] font-bold text-gray-600 mb-3 tracking-[0.2em] uppercase">Aset Diimpor</div>
                                <div className="space-y-1">
                                    {workGallery.map((v, i) => (
                                        <div key={i} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer group transition-colors">
                                            <Film size={14} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
                                            <span className="text-gray-500 group-hover:text-gray-200 truncate font-mono text-[10px] tracking-wide">{v.title}_FINAL.mp4</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CENTER MONITOR (Program) */}
                    <div className="flex-1 flex flex-col min-w-0 bg-transparent relative">
                        <div className="h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 text-gray-400 text-[10px] uppercase tracking-widest font-mono">
                            <div className="flex items-center gap-1">
                                <div className="px-4 py-1.5 bg-white/10 text-cyan-400 border-t-2 border-cyan-500 font-bold rounded-t-sm">Program: Komposisi_Utama</div>
                            </div>
                            <span className="opacity-50">1920x1080 • Apple ProRes 422</span>
                        </div>

                        {/* SCREENBOX */}
                        <div className="flex-1 flex items-center justify-center p-2 sm:p-6 md:p-8 relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_transparent_100%)]">

                            <motion.div
                                animate={{
                                    y: [0, -4, 0],
                                    rotateX: [0, 0.5, 0],
                                    rotateY: [0, -0.5, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="aspect-video w-full max-w-6xl max-h-full bg-black shadow-[0_0_100px_-15px_rgba(6,182,212,0.2)] rounded-xl relative overflow-hidden border border-white/10 ring-1 ring-white/5 group hover:shadow-[0_0_140px_-10px_rgba(6,182,212,0.25)] transition-shadow duration-700 perspective-[2000px]"
                            >

                                {/* Overlay Batas Aman (Sembunyi default, muncul pas hover/play) */}
                                <div className="absolute inset-[5%] border border-cyan-500/20 pointer-events-none z-[60] opacity-30"></div>
                                <div className="absolute inset-[10%] border border-cyan-500/20 pointer-events-none z-[60] opacity-20"></div>
                                <div className="absolute top-6 right-6 flex gap-3 z-[60] items-center bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
                                    <span className="text-[10px] font-bold text-gray-200 tracking-widest font-mono">REC</span>
                                </div>

                                {/* --- SCENES --- */}

                                {/* 1. Pembukaan (Intro) */}
                                <motion.div style={{ opacity: introOpacity, scale: introScale }} className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505]">
                                    <div className="w-32 md:w-48 mb-6 relative">
                                        <div className="absolute inset-0 bg-orange-500 blur-[50px] opacity-20"></div>
                                        <img src="/assets/divisions/video_logo.jpg" className="w-full h-full object-contain relative z-10" alt="Video Logo" />
                                    </div>
                                    <h1 className="text-3xl md:text-6xl font-black text-white text-center tracking-tighter mb-2">
                                        DIVISI VIDEO
                                    </h1>
                                    <a
                                        href="https://instagram.com/ocvideoediting"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-500/80 font-mono text-[10px] tracking-widest uppercase mb-4 hover:text-orange-500 transition-colors cursor-pointer"
                                    >
                                        IG: @ocvideoediting
                                    </a>
                                    <p className="text-orange-500 font-mono text-[10px] tracking-[0.5em] uppercase border border-orange-500/30 px-4 py-1 rounded-full">
                                        GULIR UNTUK MEMULAI
                                    </p>
                                </motion.div>

                                {/* 2. Filosofi */}
                                <motion.div style={{ opacity: philoOpacity }} className="absolute inset-0 z-20 flex bg-[#0a0a0a] items-center justify-center p-12">
                                    <div className="text-center max-w-3xl">
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            className="inline-block mb-4"
                                        >
                                            <Aperture size={48} className="text-orange-500 mx-auto mb-4 animate-spin-slow" />
                                        </motion.div>
                                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                            KITA GAK CUMA <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">MOTONG GAMBAR.</span>
                                        </h2>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                            Kita rangkai cerita dan emosi. Dari footage mentah jadi video yang bikin orang ngerasa sesuatu.
                                        </p>
                                        <div className="flex justify-center gap-8 border-t border-gray-800 pt-8">
                                            {stats.map(s => (
                                                <div key={s.label} className="text-center">
                                                    <div className="text-2xl font-black text-white">{s.val}</div>
                                                    <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">{s.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* 3. Alur Kerja A: Editing */}
                                <motion.div style={{ opacity: wfEditOpacity, x: wfEditX }} className="absolute inset-0 z-30 flex bg-[#111] items-center px-16">
                                    <div className="w-1/2 pr-8 space-y-6">
                                        <div className="flex items-center gap-3 text-orange-500 font-mono text-xs font-bold">
                                            <Scissors size={16} />
                                            <span>TAHAP 01: EDITING</span>
                                        </div>
                                        <h2 className="text-5xl font-black text-white">BANGUN <br />CERITA</h2>
                                        <p className="text-gray-400">
                                            Di sini kita mulai rangkai cerita. Pilih momen terbaik dari ratusan klip mentah dan susun jadi alur yang asik ditonton.
                                        </p>
                                        <div className="flex gap-2">
                                            {editingTags.map(t => (
                                                <span key={t} className="px-2 py-1 border border-white/20 rounded text-[10px] text-gray-300">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-64 bg-gray-900 border border-gray-800 rounded relative overflow-hidden">
                                        {/* Visualisasi Timeline Abstrak */}
                                        <div className="absolute inset-0 flex flex-col justify-center gap-2 p-4 opacity-50">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ width: ["0%", "80%", "40%", "100%"] }}
                                                    transition={{ duration: 2 + i, repeat: Infinity, ease: "easeInOut" }}
                                                    className={`h-4 rounded ${i % 2 === 0 ? 'bg-blue-600' : 'bg-purple-600'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* 4. Alur Kerja B: VFX */}
                                <motion.div style={{ opacity: wfVfxOpacity, scale: wfVfxScale }} className="absolute inset-0 z-30 flex flex-row-reverse bg-[#0d0d0d] items-center px-16">
                                    <div className="w-1/2 pl-8 space-y-6 text-right">
                                        <div className="flex items-center justify-end gap-3 text-purple-500 font-mono text-xs font-bold">
                                            <span>TAHAP 02: VFX</span>
                                            <Wand2 size={16} />
                                        </div>
                                        <h2 className="text-5xl font-black text-white">TAMBAHIN <br />EFEK</h2>
                                        <p className="text-gray-400">
                                            Tambahin grafis keren, bersihin gambar yang kurang bagus, dan bikin hal-hal yang impossible jadi nyata di layar.
                                        </p>
                                        <div className="flex justify-end gap-2">
                                            {vfxTags.map(t => (
                                                <span key={t} className="px-2 py-1 border border-purple-500/30 bg-purple-500/10 rounded text-[10px] text-purple-300">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-64 bg-gray-900 border border-gray-800 rounded relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
                                            {[...Array(64)].map((_, i) => <div key={i} className="border border-green-500/30"></div>)}
                                        </div>
                                        <motion.div
                                            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                            transition={{ duration: 8, repeat: Infinity }}
                                            className="w-32 h-32 border-2 border-green-500 rounded-full flex items-center justify-center"
                                        >
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* 5. Alur Kerja C: Warna */}
                                <motion.div style={{ opacity: wfColorOpacity }} className="absolute inset-0 z-30 flex bg-[#111] items-center px-16">
                                    <div className="w-1/2 pr-8 space-y-6">
                                        <div className="flex items-center gap-3 text-pink-500 font-mono text-xs font-bold">
                                            <Palette size={16} />
                                            <span>TAHAP 03: WARNA</span>
                                        </div>
                                        <h2 className="text-5xl font-black text-white">ATUR <br />MOOD</h2>
                                        <p className="text-gray-400">
                                            Bikin suasana yang pas lewat warna. Mau yang gelap-gelap sinematik atau terang-colorful, semua bisa.
                                        </p>
                                    </div>
                                    <div className="w-1/2 h-64 flex gap-2">
                                        {colorPalette.map((c, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: "10%" }}
                                                whileInView={{ height: "100%" }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                                className={`flex-1 ${c} rounded-full opacity-80 mix-blend-screen`}
                                            />
                                        ))}
                                    </div>
                                </motion.div>

                                {/* 6. Alur Kerja D: Suara */}
                                <motion.div style={{ opacity: wfSoundOpacity }} className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#080808]">
                                    <div className="text-center mb-8">
                                        <Music size={40} className="text-emerald-500 mx-auto mb-4" />
                                        <h2 className="text-4xl font-black text-white">SUARA</h2>
                                        <p className="text-gray-500 text-sm mt-2">50% KUALITAS VIDEO YA DARI SUARANYA</p>
                                    </div>
                                    <div className="flex items-center justify-center gap-1 h-32 w-full max-w-2xl px-12">
                                        {[...Array(40)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: ["10%", "80%", "30%", "60%"] }}
                                                transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.02 }}
                                                className="w-2 bg-emerald-500/60 rounded-full"
                                            />
                                        ))}
                                    </div>
                                </motion.div>

                                {/* 7. Galeri */}
                                <motion.div style={{ opacity: galleryOpacity }} className="absolute inset-0 z-40 bg-[#0a0a0a] p-8 flex flex-col">
                                    <div className="flex justify-between items-end mb-6 border-b border-gray-800 pb-2">
                                        <h2 className="text-2xl font-black text-white">GALERI KARYA</h2>
                                        <span className="text-[10px] text-gray-500 font-mono">PORTOFOLIO_PILIHAN</span>
                                    </div>
                                    <div className="flex-1 flex items-center justify-center gap-16">
                                        {workGallery.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ y: i % 2 === 0 ? -20 : 20, rotate: i % 2 === 0 ? -2 : 2 }}
                                                animate={{
                                                    y: i % 2 === 0 ? [20, -20] : [-20, 20],
                                                    rotate: i % 2 === 0 ? [-2, 1] : [2, -1]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    ease: "easeInOut"
                                                }}
                                                whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                                                className="relative group w-1/3 aspect-video overflow-hidden border border-white/10 rounded-xl bg-gray-900 cursor-pointer shadow-2xl transition-all"
                                            >
                                                <img
                                                    src={item.thumb}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                    alt={item.title}
                                                />
                                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-all">
                                                    <div className="text-sm font-black text-white mb-1 italic uppercase tracking-tighter">{item.title}</div>
                                                    <div className="text-[10px] text-orange-500 font-bold uppercase tracking-[0.2em]">{item.type}</div>
                                                </div>
                                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-black">
                                                        <Play size={18} fill="currentColor" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <p className="text-[#444] text-[10px] font-mono text-center mt-8 uppercase tracking-[0.5em]">Klik untuk memutar pratinjau</p>
                                </motion.div>

                                {/* 8. Aksi (CTA) */}
                                <motion.div style={{ opacity: ctaOpacity }} className="absolute inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0.9 }}
                                        whileInView={{ scale: 1 }}
                                        className="text-center px-4"
                                    >
                                        <h2 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-[0.9] tracking-tighter">
                                            Roll <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Action!</span>
                                        </h2>
                                        <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-10 font-mono">Output siap dirender.</p>
                                        <a href="https://forms.gle/RZJgCeZWgBQF8DDd8" target="_blank" rel="noopener noreferrer">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => playHaptic('medium')}
                                                className="bg-white text-black px-12 py-5 font-black text-sm uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(6,182,212,0.4)]"
                                            >
                                                GABUNG SEKARANG
                                            </motion.button>
                                        </a>
                                    </motion.div>
                                </motion.div>

                            </motion.div>
                        </div>
                    </div>

                    {/* NAV CONTROLS */}
                    <div className="h-12 bg-black/40 backdrop-blur-md border-t border-white/10 flex items-center justify-between px-3 sm:px-6 shrink-0 relative z-50">
                        <div className="flex items-center gap-4 sm:gap-6">
                            <motion.div whileTap={{ scale: 0.9 }} onClick={() => playHaptic('light')}>
                                <SkipBack size={18} className="text-gray-500 cursor-pointer hover:text-cyan-400 transition-colors" />
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className={`w-10 sm:w-12 h-8 rounded-md flex items-center justify-center cursor-pointer transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] ${isPlaying ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'}`}
                                onClick={() => {
                                    setIsPlaying(!isPlaying);
                                    playHaptic('medium');
                                }}
                            >
                                <Play size={16} fill={isPlaying ? "currentColor" : "none"} className={isPlaying ? "ml-1" : ""} />
                            </motion.div>
                            <motion.div whileTap={{ scale: 0.9 }} onClick={() => playHaptic('light')}>
                                <SkipForward size={18} className="text-gray-500 cursor-pointer hover:text-cyan-400 transition-colors" />
                            </motion.div>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="hidden sm:block text-[10px] text-cyan-400 font-mono bg-cyan-950/30 px-3 py-1 rounded border border-cyan-500/20">FIT • 100%</div>
                            <motion.div whileTap={{ scale: 0.9 }} onClick={() => playHaptic('light')}>
                                <Settings size={16} className="text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" />
                            </motion.div>
                            <motion.div whileTap={{ scale: 0.9 }} onClick={() => playHaptic('light')}>
                                <Maximize2 size={16} className="text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* RIGHT INSPECTOR */}
                <div className="hidden xl:flex w-64 flex-col border-l border-white/10 bg-black/40 backdrop-blur-md">
                    <div className="flex bg-white/5 border-b border-white/10">
                        <div className="px-4 py-2 bg-white/10 text-white border-t-2 border-cyan-500 text-[10px] uppercase tracking-widest font-bold">Kontrol Efek</div>
                        <div className="px-4 py-2 text-gray-500 text-[10px] uppercase tracking-widest hover:text-gray-300 cursor-pointer">Lumetri</div>
                    </div>
                    <div className="p-5 space-y-8">
                        <div className="space-y-4">
                            <div className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Transformasi Video</div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center group cursor-text">
                                    <span className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors">Posisi</span>
                                    <div className="flex gap-2">
                                        <span className="text-[10px] text-cyan-400 font-mono bg-black/50 px-2 py-1 rounded border border-white/5">960.0</span>
                                        <span className="text-[10px] text-cyan-400 font-mono bg-black/50 px-2 py-1 rounded border border-white/5">540.0</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center group cursor-text">
                                    <span className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors">Skala</span>
                                    <span className="text-[10px] text-cyan-400 font-mono bg-black/50 px-2 py-1 rounded border border-white/5">
                                        <motion.span>{useTransform(scrollYProgress, [0, 1], [100.0, 120.0]).get()?.toFixed(1)}</motion.span>%
                                    </span>
                                </div>
                                <div className="flex justify-between items-center group cursor-text">
                                    <span className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors">Rotasi</span>
                                    <span className="text-[10px] text-cyan-400 font-mono bg-black/50 px-2 py-1 rounded border border-white/5">0.0°</span>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-white/10 pt-6 space-y-4">
                            <div className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] flex justify-between items-center">
                                Tumpukan Efek
                                <div className="w-4 h-4 rounded bg-white/5 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">+</div>
                            </div>
                            <div className="space-y-2">
                                {activeEffects.map(e => (
                                    <div key={e.n} className="flex items-center justify-between p-2.5 bg-black/30 border border-white/5 rounded-md hover:border-white/20 hover:bg-white/5 transition-all text-gray-400 group cursor-pointer">
                                        <span className="text-[10px] font-medium tracking-wide group-hover:text-white transition-colors">{e.n}</span>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-12 h-1 ${e.c} rounded-full opacity-50`}></div>
                                            <div className="w-4 h-3 border border-white/20 rounded-sm flex items-center justify-center"><div className="w-1 h-1 bg-cyan-500 rounded-full"></div></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* --- TIMELINE --- */}
            <div className="h-[20vh] md:h-[28vh] min-h-[120px] md:min-h-[180px] bg-black/50 backdrop-blur-xl border-t border-white/10 flex flex-col shrink-0 z-40 relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between text-gray-400 text-[10px] font-mono">
                    <div className="flex items-center gap-6">
                        <span className="font-bold text-gray-200 bg-white/10 px-3 py-1 rounded-sm">Sequence_01</span>
                        <span className="text-cyan-500 tracking-widest">3840x2160 • 23.976fps</span>
                    </div>
                    <div className="text-cyan-400 font-bold bg-black/50 px-3 py-1 rounded border border-white/5 tracking-wider">00:00:23:14</div>
                </div>

                <div className="flex-1 flex overflow-hidden">
                    <div className="w-12 border-r border-white/10 flex flex-col items-center py-4 gap-6 text-gray-500 bg-black/40">
                        <div className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded cursor-pointer box-content"><MousePointer2 size={16} /></div>
                        <div className="p-1.5 hover:bg-white/10 rounded cursor-pointer transition-colors box-content"><Scissors size={16} /></div>
                        <div className="p-1.5 hover:bg-white/10 rounded cursor-pointer transition-colors box-content"><GripHorizontal size={16} /></div>
                    </div>

                    <div className="flex-1 bg-black/40 relative p-1.5 flex flex-col gap-1.5 overflow-hidden">
                        {/* Playhead Overlay */}
                        <div className="absolute inset-0 pointer-events-none z-50">
                            <motion.div
                                style={{ left: timelineWidth }}
                                className="absolute top-0 bottom-0 w-[1px] bg-red-500 border-r border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.8)] h-full"
                            >
                                <div className="w-4 h-5 bg-red-500 -mx-[2px] rounded-b-sm shadow-[0_4px_10px_rgba(239,68,68,0.5)] flex items-center justify-center">
                                    <div className="w-1 h-2 border-x border-black/30"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Tracks */}
                        {/* Video Track 2 */}
                        <div className="h-10 bg-white/5 border border-white/10 rounded-r-md relative flex items-center group">
                            <div className="absolute left-0 w-10 h-full bg-black/60 border-r border-white/10 flex items-center justify-center text-[10px] font-black text-gray-500 tracking-wider">V2</div>
                            <div className="absolute left-[10%] w-[15%] h-[80%] bg-pink-500/20 border border-pink-500/40 flex items-center px-2 text-[9px] text-pink-300 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-pink-500/30 transition-colors cursor-pointer backdrop-blur-sm">Teks_Pembuka</div>
                            <div className="absolute left-[60%] w-[20%] h-[80%] bg-pink-500/20 border border-pink-500/40 flex items-center px-2 text-[9px] text-pink-300 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-pink-500/30 transition-colors cursor-pointer backdrop-blur-sm">LowerThird_Nama</div>
                        </div>

                        {/* Video Track 1 */}
                        <div className="h-10 bg-white/5 border border-white/10 rounded-r-md relative flex items-center group">
                            <div className="absolute left-0 w-10 h-full bg-black/60 border-r border-white/10 flex items-center justify-center text-[10px] font-black text-cyan-500 tracking-wider">V1</div>
                            <div className="absolute left-[5%] w-[40%] h-[80%] bg-cyan-600/30 border border-cyan-400/50 flex items-center px-2 text-[9px] text-cyan-100 font-mono rounded overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-cyan-500/40 transition-colors cursor-pointer backdrop-blur-sm">
                                <div className="w-full truncate">A001_C004_PRORES.MXF</div>
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-transparent opacity-50"></div>
                            </div>
                            <div className="absolute left-[47%] w-[35%] h-[80%] bg-cyan-600/30 border border-cyan-400/50 flex items-center px-2 text-[9px] text-cyan-100 font-mono rounded overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-cyan-500/40 transition-colors cursor-pointer backdrop-blur-sm">
                                <div className="w-full truncate">A001_C012_PRORES.MXF</div>
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-transparent opacity-50"></div>
                            </div>
                        </div>

                        {/* Audio Track 1 */}
                        <div className="h-12 bg-white/[0.03] border border-white/5 mt-2 rounded-r-md flex items-center relative group">
                            <div className="absolute left-0 w-10 h-full bg-black/60 border-r border-white/10 flex items-center justify-center text-[10px] font-black text-emerald-500 tracking-wider">A1</div>
                            <div className="absolute left-0 w-full h-full bg-emerald-950/30 border border-emerald-500/20 flex items-center gap-[1px] px-12 pl-[50px] opacity-80 backdrop-blur-sm">
                                {[...Array(120)].map((_, i) => <div key={i} className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm opacity-70" style={{ height: `${20 + Math.random() * 60}%` }}></div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
