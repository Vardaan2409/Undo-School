import React from 'react'
import { Card, CardContent } from './Card'
import { Star, ShoppingCart, BookOpen, Clock, User } from 'lucide-react'
import { motion } from 'framer-motion'

export const CourseCard = ({ course }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
        >
            <Card className="group overflow-hidden flex flex-col h-full bg-white border-none shadow-[0_4px_25px_rgba(0,0,0,0.06)] rounded-[2.5rem] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500">
                {/* Top Rating Bar */}
                <div className="flex items-center justify-end px-4 py-2 text-[10px] font-bold text-gray-500 bg-white/50">
                    <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[#eab308] text-[#eab308]" />
                        <span className="text-[#eab308]">{course.rating}</span>
                        <span className="text-gray-300 mx-1">|</span>
                        <span>200+ learners</span>
                    </div>
                </div>

                {/* Image & Tags */}
                <div className="relative aspect-[4/3] overflow-hidden mx-4 rounded-[1.5rem] bg-gray-50 border border-gray-100/50">
                    <img
                        src={course.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-115"
                        style={{ color: 'transparent' }}
                        onError={(e) => {
                            e.target.src = `https://picsum.photos/seed/${course.id}/600/450`
                            e.target.onerror = null
                        }}
                    />

                    {/* Selling Fast Tag */}
                    {course.tag && (
                        <motion.div
                            animate={{
                                backgroundColor: ['#ff9800', '#fbbf24', '#ff9800'],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-2 left-0 text-white text-[9px] font-black px-3 py-1.5 rounded-r-xl shadow-lg z-10 uppercase tracking-wider group-hover:pl-5 transition-all"
                        >
                            {course.tag}
                        </motion.div>
                    )}
                </div>

                <CardContent className="flex-1 p-6 pt-4 flex flex-col">
                    {/* Meta Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100 italic transition-colors group-hover:bg-green-100">
                            {course.category}
                        </span>
                        <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full border border-red-100 italic transition-colors group-hover:bg-red-100">
                            {course.level}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-black text-[16px] leading-[1.3] text-[#1e293b] mb-2 line-clamp-2 transition-colors group-hover:text-purple-700">
                        {course.title}
                    </h3>

                    {/* Description bullet point */}
                    <p className="text-[11px] font-medium text-gray-400 mb-6 line-clamp-2 flex items-start gap-1">
                        <span>{course.description || 'Build circuits & smart projects like alarms, weather stations, etc'}</span>
                    </p>

                    {/* Footer Stats */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-[12px] font-black text-gray-700">
                            <div className="flex items-center gap-1.5">
                                <User className="w-4 h-4 text-gray-400" />
                                <span>{course.ageRange}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-gray-400" />
                                <span>{course.lessonCount}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-gray-400 font-medium">₹</span>
                                <span>{course.price}</span>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: '#f3e8ff' }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-full border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all text-gray-600 hover:text-purple-600"
                        >
                            <ShoppingCart className="w-4 h-4" />
                        </motion.button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
