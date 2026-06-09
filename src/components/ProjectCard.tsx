"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface-lighter rounded-2xl border border-border/50 overflow-hidden hover:border-purple/30 transition-all duration-500"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple/20 via-blue/20 to-neon-pink/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-lighter via-transparent to-transparent" />
      </div>
      <div className="relative p-6 space-y-3">
        <h3 className="text-lg font-semibold font-heading text-text-primary group-hover:gradient-text transition-all duration-300">{project.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-purple/10 text-purple-light border border-purple/20">{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-2">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-purple-light transition-colors">
              <ExternalLink size={14} /> 在线预览
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-purple-light transition-colors">
              <GithubIcon /> 源代码
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
