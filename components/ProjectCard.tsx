import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative border-t border-white/20 py-12 md:py-24 cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
        <div className="flex flex-col gap-2">
            <span className="font-sans text-acid-lime text-sm tracking-widest uppercase">{project.category}</span>
            <h3 className="font-display text-4xl md:text-7xl font-bold uppercase text-white group-hover:text-transparent group-hover:stroke-text transition-all duration-300" 
                style={isHovered ? { WebkitTextStroke: '1px #fff' } : {}}>
              {project.title}
            </h3>
        </div>
        
        <div className="flex flex-col items-end mt-4 md:mt-0">
             <span className="font-sans text-neutral-400 text-lg">{project.year}</span>
             <motion.div 
                className="bg-acid-lime text-black p-3 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ rotate: isHovered ? 45 : 0 }}
             >
                 <ArrowUpRight size={24} />
             </motion.div>
        </div>
      </div>

      {/* Hover Image Reveal */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[500px] md:h-[350px] z-0 pointer-events-none overflow-hidden rounded-lg opacity-0"
        animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            rotate: isHovered ? Math.random() * 6 - 3 : 0 // slight random rotation
        }}
        transition={{ duration: 0.4 }}
      >
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale contrast-125"
        />
      </motion.div>
    </motion.div>
  );
};
