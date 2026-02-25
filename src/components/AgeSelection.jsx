import React from 'react'

const ageGroups = [
    { range: '1-2', color: 'border-[#facc15] text-gray-700' },
    { range: '2-3', color: 'border-[#facc15] text-gray-700' },
    { range: '3-4', color: 'border-[#facc15] text-gray-700' },
    { range: '4-5', color: 'border-[#fb923c] text-gray-700' },
    { range: '5-6', color: 'border-[#fb923c] text-gray-700' },
    { range: '6-7', color: 'border-[#fb923c] text-gray-700' },
    { range: '7-8', color: 'border-[#ec4899] text-gray-700' },
    { range: '8-9', color: 'border-[#ec4899] text-gray-700' },
    { range: '9-10', color: 'border-[#ec4899] text-gray-700' },
    { range: '10-11', color: 'border-[#ec4899] text-gray-700' },
    { range: '11-12', color: 'border-[#a855f7] text-gray-700' },
    { range: '12-13', color: 'border-[#a855f7] text-gray-700' },
    { range: '13-14', color: 'border-[#22c55e] text-gray-700' },
    { range: '14-15', color: 'border-[#22c55e] text-gray-700' },
    { range: '15-16', color: 'border-[#22c55e] text-gray-700' },
    { range: '16-17', color: 'border-[#22c55e] text-gray-700' },
    { range: '17-18', color: 'border-[#0ea5e9] text-gray-700' },
    { range: '18-19', color: 'border-[#0ea5e9] text-gray-700' },
    { range: '19-20', color: 'border-[#0ea5e9] text-gray-700' },
]

export const AgeSelection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        How Old Are You? 🎯
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        Pick your age and find the perfect courses just for you! ✨
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto group">
                    <div
                        className="flex flex-nowrap justify-start lg:justify-center gap-3 pt-4 pb-6 overflow-x-auto no-scrollbar scroll-smooth px-4"
                    >
                        {ageGroups.map((age, index) => (
                            <button
                                key={index}
                                className={`flex flex-col items-center justify-center min-w-[70px] md:min-w-[80px] h-[65px] md:h-[70px] border-2 rounded-xl bg-white flex-shrink-0 hover:scale-105 transition-transform duration-200 shadow-sm ${age.color}`}
                            >
                                <span className="text-sm font-bold">{age.range}</span>
                                <span className="text-[10px] font-bold uppercase">Years</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
