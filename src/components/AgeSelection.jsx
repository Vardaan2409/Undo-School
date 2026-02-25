import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const ageGroups = [
    { range: '1-2', color: 'border-[#facc15] text-gray-700' },
    { range: '2-3', color: 'border-[#facc15] text-gray-700' },
    { range: '3-4', color: 'border-[#facc15] text-gray-700' },
    { range: '4-5', color: 'border-[#fb923c] text-gray-700' },
    { range: '5-6', color: 'border-[#fb923c] text-gray-700' },
    { range: '6-7', color: 'border-[#fb923c] text-gray-700' },
    { range: '7-8', color: 'border-[#ec4899] text-gray-700' },
    { range: '8-9', color: 'border-[#ec4899] text-gray-700' },
    { range: '9-10', color: 'border-[#ec4899] text-gray-700' },
    { range: '10-11', color: 'border-[#ec4899] text-gray-700' },
    { range: '11-12', color: 'border-[#a855f7] text-gray-700' },
    { range: '12-13', color: 'border-[#a855f7] text-gray-700' },
    { range: '13-14', color: 'border-[#22c55e] text-gray-700' },
    { range: '14-15', color: 'border-[#22c55e] text-gray-700' },
    { range: '15-16', color: 'border-[#22c55e] text-gray-700' },
    { range: '16-17', color: 'border-[#22c55e] text-gray-700' },
    { range: '17-18', color: 'border-[#0ea5e9] text-gray-700' },
    { range: '18-19', color: 'border-[#0ea5e9] text-gray-700' },
    { range: '19-20', color: 'border-[#0ea5e9] text-gray-700' },
]

export const AgeSelection = () => {
    const scrollRef = useRef(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setShowLeftArrow(scrollLeft > 10)
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10)
        }
    }

    useEffect(() => {
        const currentRef = scrollRef.current
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll)
            handleScroll() // Initial check
        }
        return () => currentRef?.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        How Old Are You? 🎯
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        Pick your age and find the perfect courses just for you! ✨
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto group">
                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap justify-start lg:justify-center gap-3 pt-4 pb-6 overflow-x-auto no-scrollbar scroll-smooth px-4"
                    >
                        {ageGroups.map((age, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={`flex flex-col items-center justify-center min-w-[70px] md:min-w-[80px] h-[65px] md:h-[70px] border-2 rounded-xl bg-white flex-shrink-0 transition-transform duration-200 shadow-sm ${age.color}`}
                            >
                                <span className="text-sm font-bold">{age.range}</span>
                                <span className="text-[10px] font-bold uppercase">Years</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Left Navigation Arrow */}
                    <AnimatePresence>
                        {showLeftArrow && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white via-white/40 to-transparent flex items-center justify-start pointer-events-none transition-opacity duration-300 z-10"
                            >
                                <div
                                    className="h-full flex items-center pl-2 pointer-events-auto cursor-pointer"
                                    onClick={() => {
                                        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ x: -5 }}
                                        className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-100"
                                    >
                                        <ArrowLeft className="w-5 h-5 text-gray-800" strokeWidth={3} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Right Navigation Arrow */}
                    <AnimatePresence>
                        {showRightArrow && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white via-white/40 to-transparent flex items-center justify-end pointer-events-none transition-opacity duration-300 z-10"
                            >
                                <div
                                    className="h-full flex items-center pr-2 pointer-events-auto cursor-pointer"
                                    onClick={() => {
                                        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-100"
                                    >
                                        <ArrowRight className="w-5 h-5 text-gray-800" strokeWidth={3} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    )
}
