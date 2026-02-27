"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "KickOffGear",
    description:
      "Full-stack e-commerce football store featuring NLP-driven product search and an interactive chatbot.",
    category: "Full Stack",
    color: "#FFD899", // Soft Orange
    tags: ["Next.js", "Supabase", "NLP", "Tailwind"],
  },
  {
    id: 2,
    title: "PhonkItUp",
    description:
      "Phonk music streaming platform with global trend charts and secure auth, reaching 30+ users in 24 hours",
    category: "Full Stack",
    color: "#B4F8C8", // Mint Green
    tags: ["Next.js", "PostgreSQL", "Supabase", "Auth"],
  },
  {
    id: 3,
    title: "COPD Management App",
    description:
      "Mobile app for chronic lung disease tracking, featuring real-time symptom logs and doctor search.",
    category: "Mobile App",
    color: "#FFAEBC", // Soft Pink
    tags: ["React Native", "Expo", "Firestore"],
  },
  {
    id: 4,
    title: "MelodyCraft",
    description:
      "AI-powered music composer that generates unique MIDI tracks. Won 'Best UI/UX' at a 200+ person hackathon.",
    category: "AI / ML",
    color: "#A0E7E5", // Pastel Cyan
    tags: ["Next.js", "Deep Learning", "MIDI"],
  },
  {
    id: 5,
    title: "Project Reign",
    description:
      "Ed-tech platform with personalized learning styles and focus sessions. National Finalist at a hackathon.",
    category: "EdTech",
    color: "#FBE7C6", // Pale Yellow
    tags: ["Python", "Langchain", "Node.js", "SQL"],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
  );
}
