
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    ChevronLeft,
    PenTool,
    Type,
    Youtube,
    Smile,
    Terminal,
    ArrowRight,
    ArrowUpRight,
    ShieldAlert,
    Fingerprint
} from 'lucide-react';

const divisions = [
    {
        id: 'karyatulis',
        name: "Karya Tulis",
        tagline: "Merangkai Kata, Mengukir Makna",
        desc: "Wadah bagi para penulis untuk mengekspresikan ide, puisi, dan cerita yang menggugah jiwa.",
        logo: "/logo-oc-karyatulis.jpg",
        icon: Type,
        link: "https://chat.whatsapp.com/CQz2xHzSxGT4YojQ3EWrbE",
        text: "text-white",
        bento: "md:col-span-2 md:row-span-2" // Large Hero
    },
    {
        id: 'desain',
        name: "Desain Grafis",
        tagline: "Visualisasi Tanpa Batas",
        desc: "Eksplorasi estetika visual, tipografi, dan komposisi.",
        logo: "/logo-oc-desain.jpg",
        icon: PenTool,
        link: "https://forms.gle/d1SBHkeCWdDfYLGHA",
        text: "text-white",
        bento: "md:col-span-1 md:row-span-1"
    },
    {
        id: 'video',
        name: "Video Editing",
        tagline: "Sinematografi & Momen",
        desc: "Menggabungkan potongan momen menjadi narasi visual.",
        logo: "/logo-oc-video.jpg",
        icon: Youtube,
        link: "https://forms.gle/RZJgCeZWgBQF8DDd8",
        text: "text-white",
        bento: "md:col-span-1 md:row-span-1"
    },
    {
        id: 'meme',
        name: "Meme Creator",
        tagline: "Gudangnya Tawa & Realitas",
        desc: "Seni menyebarkan tawa melalui gambar dan konteks relevan.",
        logo: "/logo-oc-meme.jpg",
        icon: Smile,
        link: "https://chat.whatsapp.com/BVTsqKqYa9UL2CykAsMmJZ",
        text: "text-white",
        bento: "md:col-span-1 md:row-span-1"
    },
    {
        id: 'coding',
        name: "Coding",
        tagline: "Logika Pembangun Masa Depan",
        desc: "Menciptakan solusi digital melalui barisan kode tangguh.",
        logo: "/logo-oc-coding.jpg",
        icon: Terminal,
        link: "https://forms.gle/koA7J9giDqtokfBq7",
        text: "text-white",
        bento: "md:col-span-2 md:row-span-1" // Wide bottom
    },
];

const Gate = () => {
    const container = useRef<HTMLDivElement>(null);
    const gateParent = useRef<HTMLDivElement>(null);
    const gateLeft = useRef<HTMLDivElement>(null);
    const gateRight = useRef<HTMLDivElement>(null);
    const contentWrapper = useRef<HTMLDivElement>(null);
    const lockBtn = useRef<HTMLButtonElement>(null);

    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isMaintenance] = useState(false);
    const [openingAppId, setOpeningAppId] = useState<string | null>(null);
    const navigate = useNavigate();

    useGSAP(() => {
        // Initial State: Locked view with slight 3D perspective
        gsap.set(gateParent.current, { perspective: 2000 });
        gsap.set([gateLeft.current, gateRight.current], { transformOrigin: "left center" });
        gsap.set(gateRight.current, { transformOrigin: "right center" });

        // Idle animation for the lock
        gsap.to(".lock-pulse", {
            scale: 1.5,
            opacity: 0,
            duration: 2,
            repeat: -1,
            ease: "power2.out"
        });
    }, { scope: container });

    const handleOpen = () => {
        if (isUnlocked || isMaintenance) return;
        setIsUnlocked(true);

        const tl = gsap.timeline();

        // 1. Lock Interaction - Scale & Snap
        tl.to(lockBtn.current, {
            scale: 0.9,
            duration: 0.2,
            ease: "back.in(1)",
        })
            .to(lockBtn.current, {
                scale: 3,
                opacity: 0,
                duration: 0.6,
                ease: "power4.out"
            })

            // 2. 3D Gate Open Animation - Deep Perspective Swing
            .to(gateLeft.current, {
                rotateY: -120,
                x: "-10%",
                scale: 1.1,
                duration: 2.5,
                ease: "expo.inOut"
            }, "-=0.4")
            .to(gateRight.current, {
                rotateY: 120,
                x: "10%",
                scale: 1.1,
                duration: 2.5,
                ease: "expo.inOut"
            }, "<")

            // 3. Background shift - Solid black rather than heavy gradients
            .to(".immersive-bg", {
                scale: 1.05,
                opacity: 1,
                duration: 2.5,
                ease: "power2.out"
            }, "-=2")

            // 4. Staggered Content Appearance
            .fromTo(".story-item",
                {
                    y: 60,
                    opacity: 0,
                    scale: 0.95,
                    transformOrigin: "bottom center"
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    stagger: {
                        amount: 0.5,
                        from: "start"
                    },
                    ease: "expo.out",
                    clearProps: "all"
                },
                "-=1.5"
            );
    };

    // App Open Animation Sequence
    const handleCardClick = (e: React.MouseEvent, divId: string, link: string) => {
        e.preventDefault();
        if (openingAppId) return; // Prevent multiple clicks

        setOpeningAppId(divId);

        // Define the card element
        const cardTarget = `.bento-card-${divId}`;

        const tl = gsap.timeline({
            onComplete: () => {
                // Open the link after animation completes
                window.open(link, '_blank');
                // Reset states after a short delay so user can return
                setTimeout(() => {
                    setOpeningAppId(null);
                    gsap.set(cardTarget, { clearProps: "all" });
                    gsap.set(cardTarget + " .card-content-fade", { clearProps: "all" });
                    gsap.set(".story-item", { opacity: 1, scale: 1, clearProps: "all" });
                }, 1000);
            }
        });

        // 1. Fade out everything else
        tl.to(".story-item:not(" + cardTarget + ")", {
            opacity: 0,
            scale: 0.95,
            duration: 0.4,
            ease: "power2.inOut"
        });

        // 2. Expand the clicked card to fill screen
        tl.to(cardTarget, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            borderRadius: 0,
            duration: 0.6,
            ease: "expo.inOut"
        }, "-=0.2");

        // 3. Fade content within the expanding card for a clean transition out (staggered delay)
        tl.to(cardTarget + " .card-content-fade", {
            opacity: 0,
            y: -15, // Rise up instead of drop
            duration: 0.3,
            ease: "power2.in"
        }, "-=0.2"); // Triggered near the end of the expansion
    };

    return (
        <div ref={container} className="fixed inset-0 z-50 bg-[#020202] overflow-hidden font-sans text-white select-none">

            {/* BRANDING BACKGROUND (Restoring the OurCreativity Aesthetic) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="immersive-bg absolute inset-0 opacity-0 transform-gpu transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-[#030303]"></div>
                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`, backgroundSize: '100px 100px' }}></div>

                    {/* Brand Orbs matching App.tsx */}
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-rose-900/10 blur-[100px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-indigo-900/10 blur-[120px] rounded-full mix-blend-screen" />
                </div>
            </div>

            {/* NAVIGATION: ABORT/BACK */}
            <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => navigate('/info')}
                className="absolute top-10 left-10 z-[100] flex items-center gap-4 px-6 py-3 rounded-full bg-[#111] border border-white/5 hover:bg-white/10 transition-colors group"
            >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-bold tracking-[0.4em] text-gray-400 group-hover:text-white transition-colors">KEMBALI</span>
            </motion.button>

            {/* MAINTENANCE OVERLAY */}
            <AnimatePresence>
                {isMaintenance && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-md"
                    >
                        <div className="text-center max-w-md px-10">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", damping: 20 }}
                                className="w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-8 relative"
                            >
                                <ShieldAlert className="w-10 h-10 text-amber-500" />
                                <div className="absolute inset-0 bg-amber-500/20 rounded-3xl blur-xl animate-pulse"></div>
                            </motion.div>

                            <h2 className="text-3xl font-serif text-white mb-4 italic tracking-wide">Gerbang Tertutup</h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-10 font-serif">
                                Portal divisi saat ini sedang dalam pemeliharaan sistem. Kami sedang merapihkan gerbang untuk pengalaman yang lebih baik. Silakan kembali lagi nanti.
                            </p>

                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

                            <div className="flex items-center justify-center gap-4">
                                <div className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-gray-500">
                                    STATUS: PEMELIHARAAN
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 3D GATE SYSTEM */}
            <div
                ref={gateParent}
                className={`absolute inset-0 z-50 flex overflow-hidden pointer-events-none ${isUnlocked ? 'z-10' : 'z-50'}`}
            >
                {/* Left 3D Panel */}
                <div
                    ref={gateLeft}
                    className="relative w-1/2 h-full bg-[#0a0a0a] border-r border-white/5 flex items-center justify-end px-12 transform-style-3d pointer-events-auto"
                >
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-black/40 transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}></div>
                    <div className="opacity-10 pointer-events-none select-none hidden md:block">
                        <Fingerprint size={300} strokeWidth={0.5} />
                    </div>
                </div>

                {/* Right 3D Panel */}
                <div
                    ref={gateRight}
                    className="relative w-1/2 h-full bg-[#0a0a0a] border-l border-white/5 flex items-center justify-start px-12 transform-style-3d pointer-events-auto"
                >
                    <div className={`absolute inset-0 bg-gradient-to-l from-transparent to-black/40 transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}></div>
                    <div className="opacity-10 pointer-events-none select-none hidden md:block">
                        <Fingerprint size={300} strokeWidth={0.5} className="rotate-180" />
                    </div>
                </div>

                {/* LOCK MECHANISM (Floating in center) */}
                <div className={`absolute inset-0 z-[60] flex items-center justify-center transition-all duration-700 ${isUnlocked ? 'pointer-events-none opacity-0' : 'pointer-events-auto'}`}>
                    <button
                        ref={lockBtn}
                        onClick={handleOpen}
                        className="relative w-40 h-40 flex items-center justify-center outline-none group"
                    >
                        {/* Pulsing Visuals */}
                        <div className="lock-pulse absolute inset-0 rounded-full border-2 border-rose-500/50"></div>
                        <div className="lock-pulse absolute inset-0 rounded-full border-2 border-rose-500/30 scale-125 animation-delay-500"></div>

                        <div className="absolute inset-[-20px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]"></div>

                        {/* Inner Circle */}
                        <div className="relative w-28 h-28 bg-[#000] border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(244,63,94,0.1)] group-hover:shadow-[0_0_100px_rgba(244,63,94,0.25)] transition-all duration-500 group-active:scale-90">
                            <ShieldAlert className="w-10 h-10 text-white group-hover:text-rose-400 transition-colors" strokeWidth={1.5} />

                            {/* Decorative HUD Ring */}
                            <svg className="absolute w-full h-full inset-0 opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-rose-500" />
                            </svg>
                        </div>

                        <div className="absolute -bottom-20 flex flex-col items-center gap-2">
                            <span className="text-[10px] tracking-[0.8em] font-bold text-gray-500 group-hover:text-rose-400 transition-colors">SIAPKAN_DIRI</span>
                            <div className="w-12 h-[1px] bg-white/10"></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* MAIN CONTENT (Story Revealed) */}
            <div
                ref={contentWrapper}
                className={`relative z-20 w-full h-full overflow-y-auto ${!isUnlocked ? 'invisible pointer-events-none' : 'visible pointer-events-auto'}`}
            >
                <div className="min-h-screen container mx-auto px-6 py-32 flex flex-col items-center">

                    {/* Story Header (Restoring Brand Typography & Glow) */}
                    <div className="story-item text-center mb-16 max-w-4xl relative">
                        <div className="absolute inset-0 bg-hero-glow opacity-20 blur-[80px] rounded-full z-0 mix-blend-screen"></div>
                        <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-gray-400 w-fit mx-auto mb-6 relative z-10 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> KOMUNITAS TERBUKA
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.1] tracking-tight mt-6 relative z-10 drop-shadow-lg">
                            Tentukan Arah <br />
                            <span className="italic font-light">Eksplorasi</span> Kita.
                        </h1>
                        <p className="text-lg text-gray-400 font-sans max-w-xl mx-auto relative z-10">
                            Sebuah ruang kolaborasi tanpa sekat. Kami memadukan <span className="text-white font-medium">seni</span>, <span className="text-white font-medium">teknologi</span>, dan <span className="text-white font-medium">cerita</span> dalam satu spektrum.
                        </p>
                    </div>

                    {/* Discord Ultimate CTA Banner - Solid & Clean */}
                    <a
                        href="https://discord.gg/PvRSUHVaa9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="story-item mb-16 relative group w-full max-w-4xl rounded-3xl block text-center bg-[#111] border border-white/5 hover:border-[#5865F2]/50 transition-colors duration-300"
                    >
                        <div className="relative px-8 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-left flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                    {/* Discord SVG Logo */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16" className="text-[#5865F2]">
                                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                    </svg>
                                    Komunitas Utama
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    Semua obrolan seru, kolaborasi, dan info rilis baru ada di server Discord kami.
                                </p>
                            </div>
                            <div className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold transition-colors w-full md:w-auto text-sm text-center">
                                GABUNG DISCORD
                            </div>
                        </div>
                    </a>

                    {/* Bento Grid Layout - Clean & Minimal */}
                    <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[250px] gap-6 w-full max-w-5xl pb-40">
                        {divisions.map((div, i) => (
                            <div
                                key={div.id}
                                className={`story-item bento-card-${div.id} ${div.bento || 'md:col-span-1 md:row-span-1'} ${openingAppId && openingAppId !== div.id ? 'pointer-events-none' : ''}`}
                            >
                                <div
                                    onClick={(e) => handleCardClick(e, div.id, div.link)}
                                    className={`group relative flex flex-col h-full bg-[#0a0a0a] border border-white/5 hover:border-white/20 hover:bg-[#121212] rounded-[1.5rem] p-6 md:p-8 transition-colors duration-500 cursor-pointer overflow-hidden`}
                                >
                                    <div className="card-content-fade flex flex-col h-full z-10 pointer-events-none">
                                        <div className="flex justify-between items-start mb-auto">
                                            <div className="px-3 py-1 rounded-sm border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.15em] text-gray-400">
                                                <div.icon size={16} className="inline-block mr-2" /> DIVISI
                                            </div>
                                            <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={24} />
                                        </div>

                                        {/* Information */}
                                        <div className="mt-10">
                                            <h3 className="text-3xl font-serif font-semibold text-white mb-3">{div.name}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                                {div.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Monochromatic background image that only appears on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none z-0">
                                        <img src={div.logo} alt="" className="w-full h-full object-cover grayscale" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* GLOBAL STYLES FOR GSAP & CSS ANIMATIONS */}
            <style>{`
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
            `}</style>

        </div>
    );
};

export default Gate;
