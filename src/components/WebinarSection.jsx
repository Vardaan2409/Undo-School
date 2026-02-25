import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CourseCard } from './CourseCard'
import { courses } from '../data/courses'
import { AlarmClock, ArrowLeft, ArrowRight } from 'lucide-react'

export const WebinarSection = ({ hasGradient }) => {
    const scrollRef = useRef(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)
    // Just using first 8 courses for demo
    const webinarCourses = courses.concat(courses).slice(0, 8)

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
            className="py-20 relative overflow-hidden"
            style={hasGradient ? { background: 'linear-gradient(113.73deg, rgba(242, 245, 255, 0.45) 1%, rgba(237, 230, 255, 0.45) 98.92%)' } : { backgroundColor: 'white' }}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-12 relative">
                    <div className="flex items-center gap-4 text-purple-600 mb-2">
                        <div className="h-[2px] w-12 bg-purple-200" />
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                            Webinar starting within 24 hrs
                        </h2>
                        <div className="h-[2px] w-12 bg-purple-200" />
                    </div>
                    <div className="absolute -top-10 right-20 opacity-5 hidden lg:block pointer-events-none">
                        <AlarmClock className="w-60 h-60 text-purple-900 rotate-12" />
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto group">
                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-8 px-4"
                    >
                        {webinarCourses.map((course, idx) => (
                            <motion.div
                                key={`webinar-${course.id}-${idx}`}
                                whileHover={{ y: -5 }}
                                className="shrink-0 w-[277px] h-[394px]"
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
