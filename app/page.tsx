'use client'

import { motion } from 'framer-motion'
import HeroBento from '@/components/portfolio/HeroBento'
import TechStack from '@/components/portfolio/TechStack'
import ProjectGallery from '@/components/portfolio/ProjectGallery'
import ExperienceTimeline from '@/components/portfolio/ExperienceTimeline'
import ConnectCard from '@/components/portfolio/ConnectCard'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function Portfolio() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-background via-[#f5f0eb] to-background px-4 py-8 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Hero Bento */}
        <HeroBento />

        {/* Tech Stack */}
        <TechStack />

        {/* Project Gallery */}
        <ProjectGallery />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Connect Card */}
        <ConnectCard />
      </div>
    </motion.main>
  )
}
