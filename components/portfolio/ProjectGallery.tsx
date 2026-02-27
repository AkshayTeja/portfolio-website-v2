'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory management',
    category: 'Frontend',
    color: '#ffd700',
    tags: ['React', 'Next.js', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Design System',
    description: 'Comprehensive component library with 50+ documented components',
    category: 'Design',
    color: '#e8f4f0',
    tags: ['Tailwind', 'Storybook', 'Figma'],
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization with interactive charts',
    category: 'Backend',
    color: '#ffb84d',
    tags: ['Next.js', 'Node.js', 'Charts'],
  },
  {
    id: 4,
    title: 'Mobile App',
    description: 'Cross-platform mobile application with offline support',
    category: 'Mobile',
    color: '#ff99cc',
    tags: ['React Native', 'Firebase', 'Maps'],
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function ProjectGallery() {
  return (
    <motion.div variants={itemVariants}>
      <h2 className="mb-8 text-3xl font-black text-black md:text-4xl">
        Featured Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className="group relative rounded-[2.5rem] border-4 border-black p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] transition-all hover:shadow-[12px_12px_0px_rgba(0,0,0,0.15)] cursor-pointer"
            style={{ backgroundColor: project.color }}
          >
            {/* Category Sticker */}
            <div className="absolute -right-4 -top-4 rounded-2xl border-3 border-black bg-black px-4 py-2 text-white font-bold text-sm transform rotate-12">
              {project.category}
            </div>

            <h3 className="text-2xl font-black text-black mb-3 pr-20">
              {project.title}
            </h3>

            <p className="text-gray-800 font-semibold mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-bold text-black"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Project Button */}
            <motion.button
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl border-3 border-black bg-black px-6 py-3 font-bold text-white transition-colors hover:bg-gray-800"
            >
              View Project →
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
