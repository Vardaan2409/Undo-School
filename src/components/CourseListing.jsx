import React, { useState, useMemo } from 'react'
import { courses, categories, levels } from '../data/courses'
import { CourseCard } from './CourseCard'
import { Button } from './Button'
import { Filter, SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const CourseListing = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedLevel, setSelectedLevel] = useState('All Levels')
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory
            const levelMatch = selectedLevel === 'All Levels' || course.level === selectedLevel
            return categoryMatch && levelMatch
        })
    }, [selectedCategory, selectedLevel])

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Explore All Courses</h2>
                        <p className="text-muted-foreground">Showing {filteredCourses.length} top-rated courses</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <Filter className="h-4 w-4 mr-2" /> Filters
                        </Button>
                        <div className="hidden md:flex items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground mr-2">Sort by:</span>
                            <Button variant="outline" size="sm">
                                Most Popular <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-4">
                    {/* Sidebar Filters */}
                    <aside className="hidden lg:block space-y-8">
                        <div>
                            <h4 className="font-bold mb-4 flex items-center">
                                <SlidersHorizontal className="h-4 w-4 mr-2" /> Categories
                            </h4>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className="relative block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors group"
                                    >
                                        {selectedCategory === category && (
                                            <motion.div
                                                layoutId="activeCategory"
                                                className="absolute inset-0 bg-primary-50 rounded-lg"
                                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className={`relative font-medium ${selectedCategory === category ? 'text-primary-600 font-bold' : 'text-muted-foreground group-hover:text-foreground'
                                            }`}>
                                            {category}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Level</h4>
                            <div className="space-y-2">
                                {levels.map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setSelectedLevel(level)}
                                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedLevel === level
                                            ? 'bg-primary-50 text-primary-600 font-bold'
                                            : 'text-muted-foreground hover:bg-muted font-medium'
                                            }`}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl bg-primary-600 p-6 text-white shadow-lg overflow-hidden relative">
                            <div className="relative z-10">
                                <h4 className="font-bold mb-2">Get 25% Off Today</h4>
                                <p className="text-sm opacity-90 mb-4">Subscribe to our newsletter for exclusive deals.</p>
                                <Button className="bg-white text-primary-600 hover:bg-gray-100 w-full">Subscribe Now</Button>
                            </div>
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 h-24 w-24 rounded-full bg-white/10" />
                        </div>
                    </aside>

                    {/* Course Grid */}
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="popLayout">
                            {filteredCourses.length > 0 ? (
                                <motion.div
                                    layout
                                    className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                                >
                                    {filteredCourses.map((course) => (
                                        <motion.div
                                            key={course.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                            layout
                                        >
                                            <CourseCard course={course} />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-border text-center">
                                    <p className="text-xl font-medium text-muted-foreground mb-4">No courses found matching your criteria.</p>
                                    <Button variant="outline" onClick={() => { setSelectedCategory('All'); setSelectedLevel('All Levels'); }}>
                                        Clear all filters
                                    </Button>
                                </div>
                            )}
                        </AnimatePresence>

                        <div className="mt-12 flex justify-center">
                            <Button variant="outline" size="lg">Load More Courses</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Filter Modal */}
            <AnimatePresence>
                {isFilterOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsFilterOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-[70] w-full max-w-xs bg-white p-6 shadow-2xl lg:hidden"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-bold">Filters</h3>
                                <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold mb-4">Categories</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {categories.map((category) => (
                                            <Button
                                                key={category}
                                                variant={selectedCategory === category ? 'primary' : 'outline'}
                                                size="sm"
                                                onClick={() => { setSelectedCategory(category); setIsFilterOpen(false); }}
                                                className="justify-start"
                                            >
                                                {category}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold mb-4">Level</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {levels.map((level) => (
                                            <Button
                                                key={level}
                                                variant={selectedLevel === level ? 'primary' : 'outline'}
                                                size="sm"
                                                onClick={() => { setSelectedLevel(level); setIsFilterOpen(false); }}
                                                className="justify-start"
                                            >
                                                {level}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section >
    )
}
