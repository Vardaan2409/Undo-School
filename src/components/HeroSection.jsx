import React from 'react'
import { motion } from 'framer-motion'
import { Search, Star, Users, GraduationCap } from 'lucide-react'
import heroBoy from '../assets/hero-boy.png'
import heroGirl from '../assets/hero-girl.png'

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#4c1d95] md:h-[506px] min-h-[506px] h-auto flex items-center justify-center pt-[76px] pb-12 md:pb-0">
            <div className="container relative z-10 mx-auto px-4 max-w-[1440px] py-12 md:py-0">
                <div className="flex flex-col items-center text-center w-full max-w-[760px] mx-auto">
                    {/* Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-3"
                    >
                        <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                            Learn a New Skill
                        </h1>
                        <p className="font-['Pacifico',cursive] text-2xl sm:text-4xl md:text-5xl text-[#e9ff32] drop-shadow-lg">
                            Everyday, Anytime, and Anywhere.
                        </p>
                    </motion.div>

                    <div className="h-10" /> {/* Reduced gap */}

                    {/* Capsule Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative w-full max-w-xl"
                    >
                        <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-2xl">
                            <Search className="absolute left-5 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="What do you want to learn today?"
                                className="w-full rounded-full py-3 pl-12 pr-28 text-base focus:outline-none text-gray-700"
                            />
                            <button className="absolute right-1.5 h-[calc(100%-12px)] px-8 rounded-full bg-linear-to-r from-purple-700 to-pink-500 text-white font-bold text-base hover:opacity-90 transition-opacity">
                                Search
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Students - Desktop */}
                <div className="hidden xl:block">
                    {/* Left: Boy Student & Badge */}
                    <div className="absolute left-0 -bottom-10 ml-4 pointer-events-none">
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative flex items-end justify-center"
                        >
                            {/* Enhanced Atmospheric Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.4)_0%,transparent_80%)] blur-3xl -z-10 scale-[2.5]" />

                            {/* 4.9 Rating Badge */}
                            <motion.div
                                animate={{ x: [-3, 3, -3] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute -top-10 left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl py-2 px-4 flex items-center gap-3 shadow-lg scale-90"
                            >
                                <div className="bg-yellow-400 p-1.5 rounded-lg shadow-lg">
                                    <Star className="w-4 h-4 text-purple-900 fill-purple-900" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-black text-lg leading-tight">4.9</span>
                                    <span className="text-white/80 text-[10px] uppercase tracking-wider">Rating</span>
                                </div>
                            </motion.div>

                            <img
                                src={heroBoy}
                                alt="Student with graduation cap"
                                className="h-[320px] object-contain"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                                    maskComposite: 'intersect',
                                    WebkitMaskComposite: 'source-in'
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Right: Girl Student & Badge */}
                    <div className="absolute right-0 -bottom-10 mr-4 pointer-events-none">
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                            className="relative flex items-end justify-center"
                        >
                            {/* Enhanced Atmospheric Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.4)_0%,transparent_80%)] blur-3xl -z-10 scale-[2.5]" />

                            {/* 10k+ Happy Kids Badge */}
                            <motion.div
                                animate={{ x: [3, -3, 3] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                                className="absolute -top-10 right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl py-2 px-4 flex items-center gap-3 shadow-lg scale-90"
                            >
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-linear-to-tr from-orange-400 to-pink-500 border border-white/40 flex items-center justify-center">
                                        <Users className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-linear-to-tr from-purple-500 to-indigo-600 border border-white/40 flex items-center justify-center">
                                        <GraduationCap className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-black text-lg leading-tight">10k+</span>
                                    <span className="text-white/80 text-[10px] font-medium">Happy kids</span>
                                </div>
                            </motion.div>

                            <img
                                src={heroGirl}
                                alt="Student reading book"
                                className="h-[320px] object-contain"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                                    maskComposite: 'intersect',
                                    WebkitMaskComposite: 'source-in'
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
