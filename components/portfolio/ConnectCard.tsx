'use client'

import { motion } from 'framer-motion'

const contactLinks = [
  {
    id: 1,
    name: 'GitHub',
    icon: '🐙',
    url: 'https://github.com',
    color: '#000000',
    textColor: '#ffffff',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://linkedin.com',
    color: '#e8f4f0',
    textColor: '#000000',
  },
  {
    id: 3,
    name: 'Email',
    icon: '✉️',
    url: 'mailto:hello@example.com',
    color: '#ffd700',
    textColor: '#000000',
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

export default function ConnectCard() {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-[2.5rem] border-4 border-black bg-gradient-to-br from-[#fff9f5] to-[#fffbf7] p-8 md:p-12 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-4xl font-black text-black mb-4"
      >
        Let's Connect!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg font-semibold text-gray-700 mb-10 max-w-xl mx-auto"
      >
        I'm always excited to collaborate on new projects and meet fellow developers. Reach out and let's create something amazing together!
      </motion.p>

      {/* Contact Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center flex-wrap">
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative rounded-2xl border-4 border-black px-8 py-5 font-bold text-lg transition-all duration-300 overflow-hidden"
            style={{
              backgroundColor: link.color,
              color: link.textColor,
            }}
          >
            {/* Squish animation on tap */}
            <div className="flex items-center gap-3 justify-center">
              <span className="text-3xl">{link.icon}</span>
              <span>{link.name}</span>
            </div>

            {/* Hover shadow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  boxShadow: '12px 12px 0px rgba(0,0,0,0.2)',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Secondary message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-10 pt-8 border-t-3 border-black"
      >
        <p className="text-sm font-bold text-gray-600">
          💬 Response time: Usually within 24 hours
        </p>
      </motion.div>
    </motion.div>
  )
}
