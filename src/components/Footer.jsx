import React from 'react'
import { motion } from 'framer-motion'

export const Footer = () => {
    return (
        <footer className="border-t border-border bg-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 py-12 md:px-6 md:py-16"
            >
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <a href="/" className="text-2xl font-black tracking-tighter">
                            <span className="text-[#0f172a]">Undo</span>
                            <span className="text-[#0073e6]">school</span>
                        </a>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Empowering learners through world-class education and expert mentorship. Build your future with UndoSchool.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary-600">Browse Courses</a></li>
                            <li><a href="#" className="hover:text-primary-600">Mentorship</a></li>
                            <li><a href="#" className="hover:text-primary-600">University Training</a></li>
                            <li><a href="#" className="hover:text-primary-600">Business Solutions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary-600">About Us</a></li>
                            <li><a href="#" className="hover:text-primary-600">Careers</a></li>
                            <li><a href="#" className="hover:text-primary-600">Blog</a></li>
                            <li><a href="#" className="hover:text-primary-600">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary-600">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary-600">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary-600">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary-600">Cookie Settings</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Undoschool Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">
                            <span className="sr-only">Twitter</span>
                            {/* Add icons here */}
                        </a>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}
