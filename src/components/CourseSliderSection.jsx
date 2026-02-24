import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { CourseCard } from './CourseCard'

export const CourseSliderSection = ({ title, subtitle, courses, icon: Icon, id, hasGradient }) => {
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
    }, [courses])

    return (
        <section
            className="py-20 overflow-hidden"
            style={hasGradient ? { background: 'linear-gradient(113.73deg, rgba(242, 245, 255, 0.45) 1%, rgba(237, 230, 255, 0.45) 98.92%)' } : { backgroundColor: 'white' }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 flex items-center justify-center gap-3">
                        {title} {Icon && <span className="text-2xl">{Icon}</span>}
                    </h2>
                    <p className="text-gray-500 font-medium italic">
                        {subtitle}
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto group">
                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8 px-4"
                    >
                        {courses.map((course, idx) => (
                            <motion.div
                                key={`${id}-${course.id}-${idx}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="shrink-0 w-[277px]"
                            >
                                <CourseCard course={course} />
                            </motion.div>
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
        </section>
    )
}
