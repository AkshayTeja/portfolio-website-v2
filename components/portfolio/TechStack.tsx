'use client'

import { motion } from 'framer-motion'

const techItems = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind', icon: '🌊' },
  { name: 'Framer Motion', icon: '✨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Git', icon: '🔀' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function TechStack() {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-[2.5rem] border-4 border-black bg-[#e8f4f0] p-8 md:p-10 shadow-[8px_8px_0px_rgba(0,0,0,0.1)]"
    >
      <h2 className="mb-8 text-center text-3xl font-black text-black md:text-4xl">
        Tech Arsenal
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 gap-4">
        {techItems.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group rounded-2xl border-3 border-black bg-white p-4 text-center cursor-pointer transition-colors hover:bg-[#ffd700]"
          >
            <div className="mb-2 text-3xl">{tech.icon}</div>
            <p className="font-bold text-black text-sm">{tech.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Scrolling */}
      <div className="md:hidden overflow-x-auto pb-4">
        <div className="flex gap-3 min-w-max px-2">
          {techItems.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex-shrink-0 rounded-2xl border-3 border-black bg-white p-4 text-center min-w-[120px]"
            >
              <div className="mb-2 text-3xl">{tech.icon}</div>
              <p className="font-bold text-black text-sm">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
