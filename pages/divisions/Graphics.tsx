import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Crosshair, Users, Trophy, Zap, Star, ArrowUpRight, ShieldAlert, Sparkles } from 'lucide-react';

// --- Komponen Marquee Lokal ---
const Marquee = ({ text, reverse = false }: { text: string, reverse?: boolean }) => (
    <div className="overflow-hidden whitespace-nowrap py-3 bg-purple-600 border-y-2 border-black transform -rotate-1 shadow-[0_4px_0_0_rgba(0,0,0,1)] z-20 relative">
        <motion.div
            animate={{ x: reverse ? [-1000, 0] : [0, -1000] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="inline-block"
        >
            {[...Array(6)].map((_, i) => (
                <span key={i} className="text-xl md:text-3xl font-black text-black mx-4 uppercase tracking-widest">
                    {text}
                </span>
            ))}
        </motion.div>
    </div>
);

// --- Data Statis ---
const stats = [
    { value: "700+", label: "ACTIVE MEMBERS" },
    { value: "50+", label: "COLLABS" },
    { value: "24/7", label: "CHAOS" }
];

const highlights = [
    {
        title: "TAGWALL 90'S DESIGN",
        desc: "OurCreativity 0.7 - Total 80+ Participant",
        image: "/tagwall-90s-design.jpg",
        rotate: 6,
        margin: "mt-10 md:mt-0",
        zIndex: "z-10",
        color: "bg-blue-500"
    },
    {
        title: "TAGWALL BRUTALISM",
        desc: "OurCreativity 1.2 - Part 1",
        image: "/tagwall-brutalism.webp",
        rotate: -3,
        margin: "mt-0 md:-mt-10",
        zIndex: "z-20",
        color: "bg-purple-500"
    },
    {
        title: "TAGWALL KEMERDEKAAN",
        desc: "Lekas Sembuh Indonesiaku. 70+",
        image: "/tagwall-kemerdekaan.webp",
        rotate: 4,
        margin: "mt-20 md:mt-10",
        zIndex: "z-10",
        color: "bg-red-500"
    },
    {
        title: "TAGWALL SUPERHERO",
        desc: "OurCreativity 1.1 - Total 80+ Participant",
        image: "/tagwall-superhero.webp",
        rotate: -5,
        margin: "mt-5 md:-mt-5",
        zIndex: "z-0",
        color: "bg-yellow-500"
    }
];

export const Graphics = () => {
    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <div className="min-h-screen bg-[#f0f0f0] text-black font-sans selection:bg-black selection:text-[#f0f0f0] overflow-x-hidden relative">
            {/* Background Texture Pointillism/Noise */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>

            {/* Navigasi Mengambang */}
            <nav className="fixed top-6 left-0 right-0 z-50 px-6 md:px-12 flex justify-between items-start pointer-events-none">
                <Link to="/info" className="flex items-center gap-2 text-sm font-bold border-2 border-black hover:bg-black hover:text-white transition-all bg-white px-5 py-2.5 rounded-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 pointer-events-auto uppercase tracking-wider">
                    <ArrowLeft size={16} strokeWidth={3} /> KEMBALI
                </Link>
                <div className="hidden md:flex flex-col items-end gap-2 pointer-events-auto">
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest bg-white/90 backdrop-blur-sm px-4 py-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <span>STATUS: ONLINE</span>
                        <div className="w-3 h-3 bg-red-500 animate-pulse border border-black rounded-full"></div>
                    </div>
                </div>
            </nav>

            {/* Bagian Hero */}
            <header className="relative min-h-screen flex flex-col pt-32 pb-16 overflow-hidden bg-[#e0e0e0]">
                {/* Grid Background Brutalist */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <motion.div style={{ y: yHero }} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                    <span className="text-[30vw] font-black leading-none tracking-tighter">GFX</span>
                </motion.div>

                <div className="flex-1 flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="relative"
                    >
                        {/* Brutalist Badge */}
                        <div className="absolute -top-12 -left-4 md:-left-8 bg-purple-500 text-white font-black px-4 py-2 transform -rotate-6 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-20 flex items-center gap-2">
                            <Sparkles size={16} /> GRAFIS_01
                        </div>

                        <div className="flex items-start justify-between mb-8 border-b-4 border-black pb-8">
                            <div className="flex flex-col">
                                <span className="font-black text-black text-2xl uppercase tracking-widest bg-yellow-400 inline-block px-2 border-2 border-black rotate-1">DIVISION_GRAPHICS</span>
                                <a
                                    href="https://instagram.com/ocdesaingrafis"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-black text-sm mt-3 tracking-widest hover:text-purple-600 transition-colors cursor-pointer flex items-center gap-2"
                                >
                                    @ocdesaingrafis <ArrowUpRight size={14} />
                                </a>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-purple-500 rounded-full translate-x-2 translate-y-2 border-2 border-black group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                                <img src="/logo-oc-desain.jpg" alt="OC Design Logo" className="w-20 h-20 rounded-full border-4 border-black object-cover relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mb-12 text-black">
                            <span className="inline-block transform hover:-translate-y-2 hover:rotate-2 transition-transform duration-300">Komunitas</span><br />
                            <span className="text-white bg-black px-4 border-l-8 border-purple-500 inline-block transform -rotate-1 shadow-[8px_8px_0_0_rgba(168,85,247,1)] mt-2">Paling Liar</span>
                        </h1>

                        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
                            <div className="max-w-2xl bg-white p-6 md:p-8 border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative">
                                {/* Brutalist Pin */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full border-2 border-black shadow-sm"></div>
                                <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                                <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                                <div className="absolute bottom-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                                <div className="absolute bottom-2 right-2 w-2 h-2 bg-black rounded-full"></div>

                                <p className="text-xl md:text-3xl font-black leading-tight mb-6 uppercase">
                                    Divisi favorit dan paling brutal di OurCreativity.
                                </p>
                                <p className="text-base md:text-xl font-medium border-l-4 border-purple-500 pl-6 bg-gray-100 p-4">
                                    Rumah bagi <span className="text-purple-600 font-bold decoration-wavy underline decoration-purple-400">700+ desainer</span> yang siap menggebrak industri. Bukan sekadar grup, ini adalah <b>pergerakan</b>.
                                </p>
                            </div>

                            <div className="flex-shrink-0 relative group">
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-black border-dashed flex items-center justify-center animate-spin-slow bg-yellow-400 text-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                                    <ShieldAlert className="w-12 h-12 md:w-20 md:h-20 absolute" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white font-black px-4 py-1 rotate-[-15deg] whitespace-nowrap text-xl">WARNING!</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            <div className="border-t-4 border-b-4 border-black">
                <Marquee text="KOLABORASI TANPA BATAS • KARYA TANPA HENTI • " />
                <Marquee text="CREATE DESTROY REBUILD • " reverse={true} />
            </div>

            {/* Bagian Statistik / Manifesto */}
            <section className="bg-black text-white relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-white border-b-4 border-black">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-12 md:p-16 flex flex-col items-center text-center group hover:bg-white hover:text-black transition-colors duration-300 relative overflow-hidden">
                            {/* Hover background slide */}
                            <div className="absolute inset-0 bg-yellow-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 z-0"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                {i === 0 && <Users className="w-16 h-16 mb-6 transform group-hover:-rotate-12 transition-transform duration-300" />}
                                {i === 1 && <Trophy className="w-16 h-16 mb-6 transform group-hover:rotate-12 transition-transform duration-300" />}
                                {i === 2 && <Zap className="w-16 h-16 mb-6 transform group-hover:scale-125 transition-transform duration-300" />}
                                <h3 className="text-6xl md:text-7xl font-black tracking-tighter mb-2">{stat.value}</h3>
                                <p className="font-bold uppercase text-lg inline-block bg-purple-600 text-white px-3 py-1 border-2 border-black group-hover:bg-black group-hover:text-white transform group-hover:rotate-2 transition-all">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Galeri Kolase Tersebar */}
            <section className="py-32 px-6 overflow-hidden relative bg-[#f0f0f0] border-b-4 border-black">
                {/* Background Grid Accent */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.05)_2px,transparent_2px)] bg-[size:100px_100px] [background-position:center_center]"></div>

                <div className="flex flex-col items-center justify-center mb-24 relative z-10">
                    <div className="bg-black text-white px-8 py-4 border-4 border-black transform -rotate-1 shadow-[8px_8px_0_0_rgba(168,85,247,1)] inline-block mb-6">
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-center">
                            GALERI <span className="text-purple-400">KEKACAAN</span>
                        </h2>
                    </div>
                    <p className="font-bold text-xl uppercase tracking-widest bg-yellow-400 border-2 border-black px-4 py-1 rotate-2">DOKUMENTASI KARYA</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative min-h-[800px] z-10">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, rotate: 0, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: item.rotate, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                            className={`relative group ${item.margin} ${item.zIndex}`}
                        >
                            <div className={`relative aspect-[3/4] bg-white border-4 border-black p-3 shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-3 hover:translate-y-3 transition-all duration-300`}>
                                {/* Top colored bar */}
                                <div className={`h-8 w-full ${item.color} border-b-4 border-black mb-3 flex items-center px-2 justify-between`}>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
                                        <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
                                    </div>
                                    <span className="text-black font-black text-xs">IMG_{i + 1}</span>
                                </div>

                                <div className="h-[calc(100%-44px)] relative overflow-hidden border-2 border-black">
                                    <div className="absolute inset-0 bg-purple-500/20 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 bg-black p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="font-black text-xl uppercase text-white mb-1 leading-tight">{item.title}</h3>
                                        <p className="text-xs font-bold text-gray-400">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Efek Selotip (Miring) */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#e3e3e3] border-2 border-gray-300 rotate-[-4deg] opacity-80 mix-blend-multiply"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Footer */}
            <footer className="bg-purple-600 relative overflow-hidden py-32 border-b-[16px] border-black">
                {/* Halftone Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '12px 12px' }}></div>

                <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-6xl md:text-9xl font-black uppercase text-black mb-12 leading-[0.8] tracking-tighter">
                            SIAP BERGABUNG <br />
                            <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] block mt-4">DENGAN ELITE?</span>
                        </h2>
                        <div className="bg-white border-4 border-black p-6 md:p-8 inline-block transform rotate-1 shadow-[12px_12px_0_0_rgba(0,0,0,1)] mb-16 relative">
                            {/* Pin */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-2 border-black"></div>
                            <p className="text-xl md:text-2xl text-black font-bold max-w-2xl mx-auto uppercase">
                                Jangan cuma jadi penonton. Jadilah bagian dari pencipta tren di industri kreatif.
                            </p>
                        </div>

                        <div>
                            <button className="group relative px-12 py-6 bg-black text-white font-black uppercase tracking-widest text-2xl border-4 border-transparent hover:border-white transition-all transform hover:-translate-y-2 hover:rotate-1 shadow-[12px_12px_0_0_rgba(255,255,255,1)] hover:shadow-none hover:bg-white hover:text-black">
                                <span className="flex items-center gap-4">
                                    BERGABUNG <ArrowUpRight size={32} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bilah Bawah */}
                <div className="absolute bottom-0 left-0 w-full border-t-4 border-black bg-white py-3 px-6 flex justify-between items-center font-bold text-black text-sm uppercase">
                    <span>© 2025 OURCREATIVITY</span>
                    <span className="bg-yellow-400 px-3 py-1 border-2 border-black">SYS_ACTIVE</span>
                </div>
            </footer>
        </div>
    );
};
