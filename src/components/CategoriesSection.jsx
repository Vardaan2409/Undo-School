import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { CourseCard } from './CourseCard'
import { courses } from '../data/courses'

const categories = [
    { name: 'Coding', id: 'coding' },
    { name: 'Public speaking', id: 'public-speaking' },
    { name: 'Chess', id: 'chess' },
    { name: 'Home work help', id: 'home-work-help' },
    { name: 'App building', id: 'app-building' }
]

export const CategoriesSection = () => {
    const [activeTab, setActiveTab] = useState('coding')
    const scrollRef = React.useRef(null)
    const catScrollRef = React.useRef(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)
    const [showCatLeftArrow, setShowCatLeftArrow] = useState(false)
    const [showCatRightArrow, setShowCatRightArrow] = useState(true)

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setShowLeftArrow(scrollLeft > 10)
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10)
        }
    }

    const handleCatScroll = () => {
        if (catScrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = catScrollRef.current
            setShowCatLeftArrow(scrollLeft > 10)
            setShowCatRightArrow(scrollLeft + clientWidth < scrollWidth - 10)
        }
    }

    React.useEffect(() => {
        const currentRef = scrollRef.current
        const currentCatRef = catScrollRef.current

        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll)
            handleScroll()
        }
        if (currentCatRef) {
            currentCatRef.addEventListener('scroll', handleCatScroll)
            handleCatScroll()
        }

        return () => {
            currentRef?.removeEventListener('scroll', handleScroll)
            currentCatRef?.removeEventListener('scroll', handleCatScroll)
        }
    }, [activeTab])

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-24 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Popular Categories
                    </h2>
                    <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
                        Pick what you love most! ✨
                    </p>
                </div>

                <div className="max-w-7xl mx-auto mb-20 px-4 relative group/cat">
                    <div
                        ref={catScrollRef}
                        className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-4 overflow-x-auto no-scrollbar pb-4 md:pb-0 scroll-smooth"
                    >
                        {categories.map((cat) => (
                            <motion.button
                                key={cat.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-8 py-4 rounded-2xl font-black text-sm md:text-lg transition-all duration-300 border-2 shrink-0 cursor-pointer ${activeTab === cat.id
                                    ? 'bg-[#ff9800] border-[#ff9800] text-white shadow-[0_10px_25px_rgba(255,152,0,0.3)]'
                                    : 'bg-white border-gray-100 text-gray-600 hover:border-gray-200'
                                    }`}
                            >
                                {cat.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Left Category Arrow */}
                    <AnimatePresence>
                        {showCatLeftArrow && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-0 left-0 h-[72px] w-20 bg-gradient-to-r from-white via-white/40 to-transparent flex items-center justify-start pointer-events-none transition-opacity duration-300 z-10 md:hidden"
                            >
                                <div
                                    className="h-full flex items-center pl-2 pointer-events-auto cursor-pointer"
                                    onClick={() => {
                                        catScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' })
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ x: -3 }}
                                        className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-gray-100"
                                    >
                                        <ArrowLeft className="w-4 h-4 text-gray-800" strokeWidth={3} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Right Category Arrow */}
                    <AnimatePresence>
                        {showCatRightArrow && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-0 right-0 h-[72px] w-20 bg-gradient-to-l from-white via-white/40 to-transparent flex items-center justify-end pointer-events-none transition-opacity duration-300 z-10 md:hidden"
                            >
                                <div
                                    className="h-full flex items-center pr-2 pointer-events-auto cursor-pointer"
                                    onClick={() => {
                                        catScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ x: 3 }}
                                        className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-gray-100"
                                    >
                                        <ArrowRight className="w-4 h-4 text-gray-800" strokeWidth={3} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Course Slider for the Active Category */}
                <div className="relative max-w-7xl mx-auto group">
                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-8 px-4"
                    >
                        <AnimatePresence mode="wait">
                            {courses.concat(courses).slice(0, 8).map((course, idx) => (
                                <motion.div
                                    key={`${activeTab}-${course.id}-${idx}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="shrink-0 w-[277px] h-[403px]"
                                >
                                    <CourseCard course={course} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
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
                                        scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' })
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
                                        scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' })
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

