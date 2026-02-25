import React from 'react'
import { motion } from 'framer-motion'

const teachers = [
    {
        name: 'Andy Brew',
        qualification: 'M.Sc, B.Ed',
        experience: '15+ Years',
        students: '1000+ Students',
        subject: 'Computer science',
        image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Sara Smith',
        qualification: 'M.A, B.Ed',
        experience: '10+ Years',
        students: '800+ Students',
        subject: 'Public speaking',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Robert Miller',
        qualification: 'Grandmaster',
        experience: '12+ Years',
        students: '1200+ Students',
        subject: 'Chess',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Emma Wilson',
        qualification: 'PhD in Robotics',
        experience: '8+ Years',
        students: '500+ Students',
        subject: 'Robotics',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Michael Brown',
        qualification: 'Tech Specialist',
        experience: '7+ Years',
        students: '400+ Students',
        subject: 'App building',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'David Clark',
        qualification: 'M.Sc (Math)',
        experience: '20+ Years',
        students: '2000+ Students',
        subject: 'Mathematics',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
    },
]

export const TeachersSection = ({ hasGradient }) => {
    return (
        <section
            className="py-24 overflow-hidden"
            style={hasGradient ? { background: 'linear-gradient(113.73deg, rgba(242, 245, 255, 0.45) 1%, rgba(237, 230, 255, 0.45) 98.92%)' } : { backgroundColor: 'white' }}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Learn from Top Teachers
                    </h2>
                    <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto italic">
                        Expert instructors who make learning fun and engaging for every child
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-24">
                    {teachers.map((teacher, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.6,
                                ease: [0.23, 1, 0.32, 1]
                            }}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 pt-16 pb-8 px-4 flex flex-col items-center relative"
                        >
                            {/* Avatar - sticking out */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white"
                                >
                                    <img
                                        src={teacher.image}
                                        alt={teacher.name}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                    />
                                </motion.div>
                            </div>

                            <h3 className="font-black text-xl text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">{teacher.name}</h3>

                            <div className="text-[13px] text-gray-500 font-medium mb-1 whitespace-nowrap">
                                <span>{teacher.qualification}</span>
                                <span className="mx-2 text-gray-300">|</span>
                                <span>{teacher.experience}</span>
                            </div>

                            <p className="text-[14px] text-gray-500 font-medium mb-6">
                                {teacher.students}
                            </p>

                            <div className="mt-auto w-full flex justify-center">
                                <span className="px-5 py-2 bg-gray-50 text-gray-900 text-[12px] font-bold rounded-full whitespace-nowrap border border-gray-100 group-hover:bg-purple-50 group-hover:border-purple-100 group-hover:text-purple-700 transition-all">
                                    {teacher.subject}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
