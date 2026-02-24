import React from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { AgeSelection } from './components/AgeSelection'
import { CourseGridSection } from './components/CourseGridSection'
import { TeachersSection } from './components/TeachersSection'
import { WebinarSection } from './components/WebinarSection'
import { CategoriesSection } from './components/CategoriesSection'
import { TimeFilterSection } from './components/TimeFilterSection'
import { CourseSliderSection } from './components/CourseSliderSection'
import { courses } from './data/courses'

function App() {
  const newLaunches = courses.filter(c => c.tag === 'New' || c.id === 1)
  const featuredCourses = courses.slice(0, 5)

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AgeSelection />

        <CourseSliderSection
          id="new-launches"
          title="New Launches"
          subtitle="Our most loved courses that kids absolutely adore!"
          icon="🌟"
          courses={newLaunches}
          hasGradient={true}
        />

        <CourseSliderSection
          id="featured"
          title="Featured Courses"
          subtitle="Our most loved courses that kids absolutely adore!"
          icon="⭐"
          courses={featuredCourses}
        />

        <TeachersSection hasGradient={true} />

        <CourseSliderSection
          id="explore"
          title="Explore Our Courses"
          subtitle="Discover a world of learning and fun with our wide range of classes!"
          icon="🚀"
          courses={courses}
        />

        <WebinarSection hasGradient={true} />

        <CategoriesSection />

        <TimeFilterSection hasGradient={true} />
      </main>
      <Footer />
    </div>
  )
}

export default App



