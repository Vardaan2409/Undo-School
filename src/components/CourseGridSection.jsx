import React from 'react'
import { CourseCard } from './CourseCard'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const CourseGridSection = ({ title, subtitle, courses, icon: Icon }) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 flex items-center justify-center gap-3">
                        {title} {Icon && <span className="text-2xl">{Icon}</span>}
                    </h2>
                    <p className="text-gray-500 font-medium italic">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <CourseCard course={course} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
