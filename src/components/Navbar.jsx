import React, { useState } from 'react'
import { Button } from './Button'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-14">
                        {/* Logo */}
                        <a href="/" className="flex items-center">
                            <span className="text-2xl font-black tracking-tighter shrink-0">
                                <span className="text-[#0f172a]">Undo</span>
                                <span className="text-[#0073e6]">school</span>
                            </span>
                        </a>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center">
                            <a
                                href="#"
                                className="relative text-base font-bold text-[#7c3aed] transition-colors"
                            >
                                Course
                                <div className="absolute -bottom-2.5 left-0 h-[3px] w-full bg-linear-to-r from-[#7c3aed] to-[#db2777] rounded-full" />
                            </a>
                        </div>
                    </div>

                    {/* Desktop Right side actions */}
                    <div className="hidden lg:flex items-center space-x-10">
                        <button className="text-base font-bold text-black hover:opacity-80 transition-opacity cursor-pointer">
                            Login
                        </button>
                        <Button
                            className="rounded-full bg-linear-to-r from-[#7c3aed] to-[#d946ef] text-white px-6 py-2.5 text-sm font-bold border-none hover:shadow-xl hover:opacity-95 transition-all shadow-md h-auto"
                        >
                            Register for free
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-6">
                            <div className="flex flex-col space-y-4">
                                <a
                                    href="#"
                                    className="text-lg font-bold text-[#7c3aed]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Course
                                </a>
                                <div className="h-px bg-gray-50" />
                                <button
                                    className="text-lg font-bold text-black text-left"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </button>
                            </div>
                            <Button
                                className="w-full rounded-2xl bg-linear-to-r from-[#7c3aed] to-[#d946ef] text-white py-4 text-base font-bold border-none shadow-lg h-auto"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Register for free
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
