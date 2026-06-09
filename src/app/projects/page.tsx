"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;

  return (
    <div className="pt-24 pb-24">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple/10 text-purple-light border border-purple/20 mb-4">作品集</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            我的 <span className="gradient-text">项目</span>
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            这里汇集了我从 AI 平台到开发者工具的各种项目实践。
          </p>
        </motion.div>

        {/* 过滤标签 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all duration-200 ${
              selectedTag === null
                ? "bg-purple/15 text-purple-light border-purple/30"
                : "bg-surface-lighter text-text-secondary border-border/50 hover:border-purple/30 hover:text-text-primary"
            }`}
          >
            全部
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-purple/15 text-purple-light border-purple/30"
                  : "bg-surface-lighter text-text-secondary border-border/50 hover:border-purple/30 hover:text-text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* 项目网格 */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} index={0} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted">该标签下暂无项目。</p>
          </div>
        )}
      </section>
    </div>
  );
}
