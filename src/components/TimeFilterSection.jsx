import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, CloudSun, Moon, Star, CloudRain, ArrowLeft, ArrowRight } from 'lucide-react'
import { HorizontalCourseCard } from './HorizontalCourseCard'
import { courses } from '../data/courses'

const timeSlots = [
    { name: 'Morning classes', time: '8am - 12pm', icon: <Sun className="w-12 h-12 text-gray-800" /> },
    { name: 'Afternoon classes', time: '12pm - 4pm', icon: <CloudSun className="w-12 h-12 text-gray-800" /> },
    { name: 'Evening classes', time: '4pm - 8pm', icon: <Moon className="w-12 h-12 text-gray-800" /> },
    { name: 'Late evening classes', time: '8pm - 11pm', icon: <Star className="w-12 h-12 text-gray-800" /> },
]

export const TimeFilterSection = ({ hasGradient }) => {
    const scrollRef = React.useRef(null)
    const [showLeftArrow, setShowLeftArrow] = React.useState(false)
    const [showRightArrow, setShowRightArrow] = React.useState(true)

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setShowLeftArrow(scrollLeft > 10)
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10)
        }
    }

    React.useEffect(() => {
        const currentRef = scrollRef.current
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll)
            handleScroll()
        }
        return () => currentRef?.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section
            className="py-20 overflow-hidden"
            style={hasGradient ? { background: 'linear-gradient(113.73deg, rgba(242, 245, 255, 0.45) 1%, rgba(237, 230, 255, 0.45) 98.92%)' } : { backgroundColor: 'white' }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Filter with Time
                    </h2>
                    <p className="text-gray-500 font-medium text-lg">
                        Choose the perfect time that fits your child's schedule
                    </p>
                </div>

                {/* Time Slots Selection */}
                <div className="flex flex-wrap justify-center gap-[12px] mb-16 max-w-7xl mx-auto">
                    {timeSlots.map((slot, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -3 }}
                            className="bg-white border border-gray-100 rounded-[12px] p-[12px] shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden w-[248px] h-[70px] flex items-center shrink-0"
                        >
                            <div className="relative z-10 flex flex-col justify-center h-full">
                                <h3 className="font-black text-gray-900 text-sm leading-tight">{slot.name}</h3>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">{slot.time}</p>
                            </div>

                            <div className="absolute -bottom-1 -right-1 opacity-100 scale-75 origin-bottom-right">
                                {React.cloneElement(slot.icon, { strokeWidth: 1.5, className: "w-16 h-16 text-gray-900" })}
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* Horizontal Course List with Arrow Navigation */}
                <div className="relative max-w-7xl mx-auto group">
                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8 px-4"
                    >
                        {courses.concat(courses).slice(0, 8).map((course, idx) => (
                            <motion.div
                                key={`${course.id}-${idx}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <HorizontalCourseCard course={course} />
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
                                className="absolute top-0 left-0 h-[178px] w-24 bg-gradient-to-r from-white via-white/40 to-transparent flex items-center justify-start pointer-events-none transition-opacity duration-300 z-10"
                            >
                                <div
                                    className="h-full flex items-center pl-2 pointer-events-auto cursor-pointer hover:bg-white/10 transition-colors"
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
                                className="absolute top-0 right-0 h-[178px] w-24 bg-gradient-to-l from-white via-white/40 to-transparent flex items-center justify-end pointer-events-none transition-opacity duration-300 z-10"
                            >
                                <div
                                    className="h-full flex items-center pr-2 pointer-events-auto cursor-pointer hover:bg-white/10 transition-colors"
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
        </section>
    )
}
