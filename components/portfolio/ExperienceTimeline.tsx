'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    year: '2024 - Present',
    title: 'Senior Frontend Engineer',
    company: 'TechCorp Inc',
    description: 'Leading frontend architecture and mentoring junior developers',
    color: '#ffd700',
  },
  {
    id: 2,
    year: '2022 - 2024',
    title: 'Full Stack Developer',
    company: 'StartUp Labs',
    description: 'Built and scaled web applications from zero to production',
    color: '#e8f4f0',
  },
  {
    id: 3,
    year: '2021 - 2022',
    title: 'Frontend Developer',
    company: 'Design Studio',
    description: 'Created responsive UIs and interactive components',
    color: '#ffb84d',
  },
  {
    id: 4,
    year: '2020 - 2021',
    title: 'Junior Developer',
    company: 'Code Academy',
    description: 'Started journey with HTML, CSS, and JavaScript fundamentals',
    color: '#ff99cc',
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

export default function ExperienceTimeline() {
  return (
    <motion.div variants={itemVariants}>
      <h2 className="mb-12 text-3xl font-black text-black md:text-4xl">
        Career Timeline
      </h2>

      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-black" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <div
                  className="rounded-2xl border-3 border-black p-6"
                  style={{ backgroundColor: exp.color }}
                >
                  <span className="inline-block rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-bold text-black mb-3">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-black text-black mb-2">
                    {exp.title}
                  </h3>
                  <p className="font-bold text-gray-700 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="flex w-0 justify-center">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-6 w-6 rounded-full border-3 border-black bg-white"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-7 top-6 h-5 w-5 rounded-full border-3 border-black bg-white" />

            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute -left-5 top-11 h-12 w-1 bg-black" />
            )}

            <div
              className="rounded-2xl border-3 border-black p-6 ml-4"
              style={{ backgroundColor: exp.color }}
            >
              <span className="inline-block rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-bold text-black mb-3">
                {exp.year}
              </span>
              <h3 className="text-lg font-black text-black mb-2">
                {exp.title}
              </h3>
              <p className="font-bold text-gray-700 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
