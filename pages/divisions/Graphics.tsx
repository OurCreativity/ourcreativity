import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Crosshair, Users, Trophy, Zap, Star, ArrowUpRight, ShieldAlert, Sparkles } from 'lucide-react';
import { useHaptic } from '../../hooks/useHaptic';

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
    const playHaptic = useHaptic();

    return (
        <div className="min-h-screen bg-[#f0f0f0] text-black font-sans selection:bg-black selection:text-[#f0f0f0] overflow-x-hidden relative">
            {/* Background Texture Pointillism/Noise */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>

            {/* Navigasi Mengambang */}
            <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-12 flex justify-between items-start pointer-events-none">
                <Link to="/info" onClick={() => playHaptic('navigation')} className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm font-bold border-2 border-black hover:bg-black hover:text-white transition-all bg-white px-3 py-2 md:px-5 md:py-2.5 rounded-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 pointer-events-auto uppercase tracking-wider">
                    <ArrowLeft size={16} strokeWidth={3} className="w-4 h-4 md:w-5 md:h-5" /> KEMBALI
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
                    <span className="text-[40vw] md:text-[30vw] font-black leading-none tracking-tighter">GFX</span>
                </motion.div>

                <div className="flex-1 flex flex-col justify-center px-4 md:px-16 max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="relative"
                    >
                        {/* Brutalist Badge */}
                        <div className="absolute -top-12 -left-2 md:-left-8 bg-purple-500 text-white font-black px-3 py-1 md:px-4 md:py-2 text-[10px] md:text-base transform -rotate-6 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-20 flex items-center gap-2">
                            <Sparkles size={14} className="md:w-4 md:h-4" /> GRAFIS_01
                        </div>

                        <div className="flex items-start justify-between mb-8 md:mb-12 border-b-4 border-black pb-6 md:pb-8">
                            <div className="flex flex-col">
                                <span className="font-black text-black text-base sm:text-lg md:text-2xl uppercase tracking-widest bg-yellow-400 inline-block px-2 border-2 border-black rotate-1 truncate max-w-[200px] sm:max-w-full">DIVISION_GRAPHICS</span>
                                <a
                                    href="https://instagram.com/ocdesaingrafis"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => playHaptic('tap')}
                                    className="font-bold text-black text-[10px] md:text-sm mt-2 md:mt-3 tracking-widest hover:text-purple-600 transition-colors cursor-pointer flex items-center gap-1 md:gap-2"
                                >
                                    @ocdesaingrafis <ArrowUpRight size={14} className="md:w-[14px] md:h-[14px] w-3 h-3" />
                                </a>
                            </div>
                            <div className="relative group flex-shrink-0 ml-2">
                                <div className="absolute inset-0 bg-purple-500 rounded-full translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 border-2 border-black group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                                <img src="/logo-oc-desain.jpg" alt="OC Design Logo" className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 md:border-4 border-black object-cover relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                            </div>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mb-8 md:mb-12 text-black">
                            <span className="inline-block transform hover:-translate-y-2 hover:rotate-2 transition-transform duration-300">Komunitas</span><br />
                            <span className="text-white bg-black px-2 md:px-4 border-l-[4px] md:border-l-[8px] border-purple-500 inline-block transform -rotate-1 shadow-[4px_4px_0_0_rgba(168,85,247,1)] md:shadow-[8px_8px_0_0_rgba(168,85,247,1)] mt-2">Paling Liar</span>
                        </h1>

                        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center lg:items-start justify-between">
                            <div className="max-w-2xl bg-white p-5 md:p-8 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative w-full">
                                {/* Brutalist Pin */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full border-2 border-black shadow-sm"></div>
                                <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                                <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                                <div className="absolute bottom-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                                <div className="absolute bottom-2 right-2 w-2 h-2 bg-black rounded-full"></div>

                                <p className="text-lg md:text-3xl font-black leading-tight mb-4 md:mb-6 uppercase">
                                    Divisi favorit dan paling brutal di OurCreativity.
                                </p>
                                <p className="text-sm md:text-xl font-medium border-l-4 border-purple-500 pl-4 bg-gray-100 p-3 md:p-4">
                                    Rumah bagi <span className="text-purple-600 font-bold decoration-wavy underline decoration-purple-400">700+ desainer</span> yang siap menggebrak industri. Bukan sekadar grup, ini adalah <b>pergerakan</b>.
                                </p>
                            </div>

                            <div className="flex-shrink-0 relative group mt-4 lg:mt-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full border-4 md:border-8 border-black border-dashed flex items-center justify-center animate-spin-slow bg-yellow-400 text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:bg-red-500 hover:text-white transition-colors cursor-pointer" onClick={() => playHaptic('warning')}>
                                    <ShieldAlert className="w-10 h-10 md:w-12 md:h-12 lg:w-20 lg:h-20 absolute" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white font-black px-2 py-0.5 md:px-4 md:py-1 rotate-[-15deg] whitespace-nowrap text-[10px] md:text-xl md:text-base pointer-events-none">WARNING!</div>
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
                                {i === 0 && <Users className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 transform group-hover:-rotate-12 transition-transform duration-300" />}
                                {i === 1 && <Trophy className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 transform group-hover:rotate-12 transition-transform duration-300" />}
                                {i === 2 && <Zap className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 transform group-hover:scale-125 transition-transform duration-300" />}
                                <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-2">{stat.value}</h3>
                                <p className="font-bold uppercase text-sm md:text-lg inline-block bg-purple-600 text-white px-2 py-1 md:px-3 md:py-1 border-2 border-black group-hover:bg-black group-hover:text-white transform group-hover:rotate-2 transition-all">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Galeri Papan Investigasi */}
            <section className="py-24 md:py-32 px-6 overflow-hidden relative bg-[#121212] border-b-4 border-black border-t-8 border-t-red-600">
                {/* Background Corkboard/Gritty effect */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] z-0"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.02)_2px,transparent_2px)] bg-[size:50px_50px] [background-position:center_center] z-0"></div>

                <div className="flex flex-col items-center justify-center mb-12 md:mb-16 relative z-10 w-full">
                    <div className="bg-red-600 text-white px-4 py-2 md:px-8 md:py-3 transform -rotate-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_0_rgba(0,0,0,1)] inline-block mb-4 border-2 border-black w-full max-w-[90vw] md:w-auto overflow-hidden">
                        <h2 className="text-2xl sm:text-3xl md:text-6xl font-black uppercase tracking-widest text-center flex items-center justify-center gap-2 md:gap-4 truncate">
                            <Crosshair className="w-6 h-6 md:w-9 md:h-9 animate-pulse hidden sm:block" /> CASE FILES <Crosshair className="w-6 h-6 md:w-9 md:h-9 animate-pulse hidden sm:block" />
                        </h2>
                    </div>
                    <p className="font-bold text-[10px] sm:text-xs md:text-lg text-white uppercase tracking-widest bg-black border border-white/20 px-3 md:px-4 py-1 rotate-1 shadow-[2px_2px_0_0_rgba(220,38,38,0.5)] md:shadow-[4px_4px_0_0_rgba(220,38,38,0.5)] text-center max-w-[90vw] truncate">TARGET: GRAFIS_01 // CLASSIFIED</p>
                </div>

                <div className="max-w-6xl mx-auto relative z-10 min-h-auto md:min-h-[800px] flex items-center justify-center">

                    {/* SVG Red Strings for Desktop (Hidden on Mobile) */}
                    <svg className="absolute inset-0 w-full h-full z-0 hidden md:block pointer-events-none" style={{ filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.8))' }}>
                        {/* Line from Item 1 to Item 2 */}
                        <line x1="25%" y1="20%" x2="75%" y2="25%" stroke="#dc2626" strokeWidth="4" strokeDasharray="8,4" />
                        {/* Line from Item 1 to Item 3 */}
                        <line x1="25%" y1="20%" x2="30%" y2="75%" stroke="#dc2626" strokeWidth="3" />
                        {/* Line from Item 2 to Item 4 */}
                        <line x1="75%" y1="25%" x2="70%" y2="80%" stroke="#dc2626" strokeWidth="4" />
                        {/* Line from Item 3 to Item 4 */}
                        <line x1="30%" y1="75%" x2="70%" y2="80%" stroke="#dc2626" strokeWidth="3" strokeDasharray="12,6" />
                        {/* Cross Line */}
                        <line x1="25%" y1="20%" x2="70%" y2="80%" stroke="#dc2626" strokeWidth="2" opacity="0.6" />
                    </svg>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative w-full">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: item.rotate }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                                onMouseEnter={() => playHaptic('hover')}
                                onClick={() => playHaptic('tap')}
                                className={`relative group w-full ${item.margin}`}
                            >
                                <div className={`relative aspect-square md:aspect-[4/3] bg-[#fdfbf7] p-3 md:p-4 pb-8 md:pb-12 shadow-[8px_8px_15px_0_rgba(0,0,0,0.4)] md:shadow-[12px_12px_20px_0_rgba(0,0,0,0.6)] hover:shadow-[12px_12px_20px_0_rgba(0,0,0,0.6)] md:hover:shadow-[16px_16px_30px_0_rgba(0,0,0,0.8)] hover:-translate-y-2 transition-all duration-300 border border-gray-200 cursor-pointer`}>

                                    {/* Push Pin */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 z-30">
                                        <div className="w-6 h-6 rounded-full bg-red-600 border border-red-800 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.5),2px_4px_6px_rgba(0,0,0,0.6)] mx-auto relative">
                                            <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-red-400 opacity-60"></div>
                                        </div>
                                        {/* Pin Shadow */}
                                        <div className="w-1 h-3 bg-black/40 mx-auto -mt-1 skew-x-12 blur-[1px]"></div>
                                    </div>

                                    <div className="h-full w-full relative overflow-hidden border border-gray-300">
                                        <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover filter sepia-[0.2] contrast-125 brightness-90 group-hover:sepia-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>

                                    <div className="absolute bottom-2 md:bottom-3 left-3 md:left-4 right-3 md:right-4 flex justify-between items-end flex-wrap gap-2">
                                        <div className="w-[70%]">
                                            <h3 className="font-black text-sm md:text-lg lg:text-xl uppercase text-black leading-none font-mono tracking-tighter truncate">{item.title}</h3>
                                            <p className="text-[9px] md:text-xs font-bold text-red-600 mt-0.5 md:mt-1 uppercase font-mono truncate">{item.desc}</p>
                                        </div>
                                        <div className="text-[8px] md:text-[10px] font-bold border border-black px-1.5 py-0.5 md:px-2 text-black">FILE_{i + 1}</div>
                                    </div>

                                    {/* Random Tape */}
                                    {i % 2 === 0 && (
                                        <div className="absolute -left-4 top-10 w-16 h-6 bg-white/40 border-2 border-white/50 rotate-[-15deg] backdrop-blur-sm shadow-sm mix-blend-screen"></div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                        <h2 className="text-4xl sm:text-5xl md:text-9xl font-black uppercase text-black mb-8 md:mb-12 leading-[0.9] md:leading-[0.8] tracking-tighter">
                            SIAP BERGABUNG <br />
                            <span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] block mt-2 md:mt-4">DENGAN ELITE?</span>
                        </h2>
                        <div className="bg-white border-2 md:border-4 border-black p-4 md:p-8 inline-block transform rotate-1 shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:shadow-[12px_12px_0_0_rgba(0,0,0,1)] mb-12 md:mb-16 relative w-[90vw] md:w-auto">
                            {/* Pin */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-full border-2 border-black"></div>
                            <p className="text-sm md:text-2xl text-black font-bold max-w-2xl mx-auto uppercase">
                                Jangan cuma jadi penonton. Jadilah bagian dari pencipta tren di industri kreatif.
                            </p>
                        </div>

                        <div>
                            <a href="https://forms.gle/d1SBHkeCWdDfYLGHA" target="_blank" rel="noopener noreferrer">
                                <button onClick={() => playHaptic('action')} className="group relative px-6 py-4 md:px-12 md:py-6 bg-black text-white font-black uppercase tracking-widest text-lg md:text-2xl border-4 border-transparent hover:border-white transition-all transform hover:-translate-y-2 hover:rotate-1 shadow-[8px_8px_0_0_rgba(255,255,255,1)] md:shadow-[12px_12px_0_0_rgba(255,255,255,1)] hover:shadow-none hover:bg-white hover:text-black">
                                    <span className="flex items-center gap-2 md:gap-4">
                                        BERGABUNG <ArrowUpRight size={24} className="md:w-[32px] md:h-[32px] group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-transform" />
                                    </span>
                                </button>
                            </a>
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
