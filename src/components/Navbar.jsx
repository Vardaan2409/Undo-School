import React from 'react'
import { Button } from './Button'
import { motion } from 'framer-motion'

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-14">
                        {/* Logo */}
                        <a href="/" className="flex items-center">
                            <span className="text-2xl font-black tracking-tighter">
                                <span className="text-[#0f172a]">Undo</span>
                                <span className="text-[#0073e6]">school</span>
                            </span>
                        </a>

                        {/* Navigation Links */}
                        <div className="flex items-center">
                            <a
                                href="#"
                                className="relative text-base font-bold text-[#7c3aed] transition-colors"
                            >
                                Course
                                <div className="absolute -bottom-2.5 left-0 h-[3px] w-full bg-linear-to-r from-[#7c3aed] to-[#db2777] rounded-full" />
                            </a>
                        </div>
                    </div>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-10">
                        <button className="text-base font-bold text-black hover:opacity-80 transition-opacity cursor-pointer">
                            Login
                        </button>
                        <Button
                            className="rounded-full bg-linear-to-r from-[#7c3aed] to-[#d946ef] text-white px-6 py-2.5 text-sm font-bold border-none hover:shadow-xl hover:opacity-95 transition-all shadow-md h-auto"
                        >
                            Register for free
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
