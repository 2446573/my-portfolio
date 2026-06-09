"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  { href: "https://github.com/yourusername", label: "GitHub", icon: GithubIcon },
  { href: "https://twitter.com/yourusername", label: "X (Twitter)", icon: TwitterIcon },
  { href: "https://linkedin.com/in/yourusername", label: "LinkedIn", icon: LinkedinIcon },
  { href: "mailto:hello@alexchen.dev", label: "邮箱", icon: Mail },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
    <>
      {/* 英雄区 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-deep/40 via-surface to-blue/20 animate-gradient bg-[length:400%_400%]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple/10 text-purple-light border border-purple/20 mb-6">全栈开发者 &amp; 设计师</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">你好，我是 <span className="gradient-text">Alex Chen</span></motion.h1>
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">我用简洁的代码和精心的设计，打造现代、高性能的 Web 应用。热衷于构建真正有价值的产品。</motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple/25">查看我的作品 <ChevronRight size={18} /></Link>
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-purple/50 transition-all">关于我</Link>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-10">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-xl text-text-muted hover:text-purple-light hover:bg-purple/10 border border-transparent hover:border-purple/20 transition-all duration-200" aria-label={label}><Icon /></a>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-16" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}><ArrowDown size={20} className="text-text-muted mx-auto" /></motion.div>
        </motion.div>
      </section>

      {/* 项目展示 */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple/10 text-purple-light border border-purple/20 mb-4">精选作品</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">项目 <span className="gradient-text">精选</span></h2>
            <p className="text-text-secondary max-w-xl mx-auto">这里展示了我近期的一些作品，涵盖 AI、电商和开发者工具等领域。</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (<ProjectCard key={project.id} project={project} index={index} />))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-purple-light transition-colors group">查看全部项目 <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /></Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">一起 <span className="gradient-text">合作</span></h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">有项目想做？我随时欢迎新的机会和有趣的合作。</p>
            <a href="mailto:hello@alexchen.dev" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple/25 glow-effect"><Mail size={18} /> 联系我</a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
