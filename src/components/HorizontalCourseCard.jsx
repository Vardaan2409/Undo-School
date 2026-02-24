import React from 'react'
import { Card } from './Card'
import { Star, ShoppingCart, BookOpen, User } from 'lucide-react'

export const HorizontalCourseCard = ({ course }) => {
    return (
        <Card className="flex flex-row overflow-hidden bg-white border border-gray-100 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow w-[588px] h-[178px] shrink-0">
            {/* Left: Image with 'Selling Fast' tag */}
            <div className="relative w-[220px] h-full shrink-0 bg-gray-100">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400';
                        e.target.style.opacity = '0.5';
                    }}
                />
                {course.tag && (
                    <div className="absolute top-0 left-0 bg-[#ff9800] text-white text-[9px] font-black px-3 py-1 rounded-br-xl shadow-lg z-10">
                        {course.tag.toUpperCase()}
                    </div>
                )}
            </div>

            {/* Right: Content */}
            <div className="flex-1 p-4 flex flex-col justify-between overflow-hidden">
                <div className="overflow-hidden">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                        <span className="px-2 py-0.5 bg-[#fefce8] text-[#854d0e] text-[9px] font-bold rounded-full border border-yellow-100 italic">
                            {course.subCategory || 'English'}
                        </span>
                        <span className="px-2 py-0.5 bg-[#fff1f2] text-[#be123c] text-[9px] font-bold rounded-full border border-pink-100 italic">
                            {course.level}
                        </span>
                        <span className="px-2 py-0.5 bg-[#f0f9ff] text-[#0369a1] text-[9px] font-bold rounded-full border border-sky-100 italic">
                            Morning class
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-black text-base leading-tight text-[#1e293b] mb-2 line-clamp-2">
                        {course.title}
                    </h3>

                    {/* Instructor & Info */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 whitespace-nowrap">
                            <span>By: <span className="text-gray-900">{course.instructor}</span></span>
                            <span className="flex items-center gap-0.5 text-[#eab308]">
                                <Star className="w-2.5 h-2.5 fill-current" /> {course.rating}
                            </span>
                            <span className="text-gray-400 font-medium">| 200+ learners</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3 bg-[#f8fbff] px-3 py-1.5 rounded-xl border border-blue-50/50">
                        <div className="flex items-center gap-1 text-[10px] font-black text-gray-700">
                            <User className="w-3 h-3 text-gray-400" />
                            <span>{course.ageRange}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-black text-gray-700">
                            <BookOpen className="w-3 h-3 text-gray-400" />
                            <span>{course.lessons}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-black text-gray-700">
                            <span className="text-gray-400">₹</span>
                            <span>{course.price}</span>
                        </div>
                    </div>

                    <button className="ml-auto p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm shrink-0">
                        <ShoppingCart className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                </div>
            </div>
        </Card>
    )
}
