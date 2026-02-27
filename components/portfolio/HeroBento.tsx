"use client";

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroBento() {
  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-[2.5rem] border-4 border-black bg-gradient-to-br from-[#fffbf7] via-[#fff9f5] to-[#fef8f3] p-8 md:p-12 shadow-[8px_8px_0px_rgba(0,0,0,0.1)]"
    >
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#e8f4f0] opacity-30" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#ffd700] opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6 text-8xl md:text-9xl"
        >
          👋
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-balance text-5xl font-black md:text-6xl lg:text-7xl text-black"
        >
          Hey, I'm Akshay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 text-balance text-xl font-semibold md:text-2xl text-gray-700"
        >
          Building beautiful, interactive and seamless experiences with my
          projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 flex gap-3 flex-wrap justify-center"
        >
          <div className="inline-block rounded-full border-3 border-black bg-black px-6 py-3 text-white font-bold">
            Full Stack Developer
          </div>
          <div className="inline-block rounded-full border-3 border-black bg-white px-6 py-3 text-black font-bold">
            UI Enthusiast
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
