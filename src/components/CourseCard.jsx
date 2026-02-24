import React from 'react'
import { Card, CardContent } from './Card'
import { Star, ShoppingCart, BookOpen, Clock, User } from 'lucide-react'
import { motion } from 'framer-motion'

export const CourseCard = ({ course }) => {
    return (
        <Card className="group overflow-hidden flex flex-col h-full bg-white border-none shadow-[0_4px_25px_rgba(0,0,0,0.06)] rounded-[2rem] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-500">
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
            <div className="relative aspect-[4/3] overflow-hidden mx-4 rounded-2xl bg-gray-50 border border-gray-100/50">
                <img
                    src={course.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ color: 'transparent' }}
                    onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${course.id}/600/450`
                        e.target.onerror = null
                    }}
                />

                {/* Selling Fast Tag */}
                {course.tag && (
                    <div className="absolute top-2 left-0 bg-[#ff9800] text-white text-[9px] font-black px-3 py-1.5 rounded-r-xl shadow-lg z-10 uppercase tracking-wider">
                        {course.tag}
                    </div>
                )}
            </div>

            <CardContent className="flex-1 p-5 pt-4 flex flex-col">
                {/* Meta Pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2.5 py-1 bg-green-50 text-green-600 text-[9px] font-bold rounded-full border border-green-100 italic">
                        {course.category}
                    </span>
                    <span className="px-2.5 py-1 bg-red-50 text-red-600 text-[9px] font-bold rounded-full border border-red-100 italic">
                        {course.level}
                    </span>
                    <span className="px-2.5 py-1 bg-yellow-50 text-yellow-600 text-[9px] font-bold rounded-full border border-yellow-100 italic">
                        {course.lessons} classes
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-black text-[15px] leading-[1.3] text-[#1e293b] mb-2 line-clamp-2">
                    {course.title}
                </h3>

                {/* Description bullet point */}
                <p className="text-[10px] font-medium text-gray-400 mb-6 line-clamp-2 flex items-start gap-1">
                    <span>{course.description || 'Build circuits & smart projects like alarms, weather stations, etc'}</span>
                </p>

                {/* Footer Stats */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[11px] font-black text-gray-700">
                        <div className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-gray-400" />
                            <span>{course.ageRange}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            <span>{course.lessonCount}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-gray-400 font-medium">₹</span>
                            <span>{course.price}</span>
                        </div>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 rounded-full border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gray-200 transition-all text-gray-600"
                    >
                        <ShoppingCart className="w-3.5 h-3.5" />
                    </motion.button>
                </div>
            </CardContent>
        </Card>
    )
}
