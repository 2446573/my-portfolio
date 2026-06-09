"use client";

import { motion } from "framer-motion";
import { skills, categoryLabels } from "@/data/skills";
import { Calendar, MapPin, GraduationCap, Briefcase, Mail, Download } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "高级前端开发工程师",
    org: "Tech Innovation Co.",
    date: "2023 - 至今",
    location: "上海",
    description: "负责服务 100K+ 用户的 SaaS 平台前端架构设计，推动 Next.js 和 TypeScript 在全团队的普及。",
  },
  {
    type: "work",
    title: "全栈开发工程师",
    org: "StartupXYZ",
    date: "2021 - 2023",
    location: "远程",
    description: "负责核心产品功能的从零到一开发，通过性能优化将页面加载时间缩短 40%。",
  },
  {
    type: "education",
    title: "计算机科学 学士",
    org: "University of Technology",
    date: "2017 - 2021",
    location: "Boston, MA",
    description: "主修人机交互与软件工程。院长名单入选者，发表过 Web 无障碍相关研究论文。",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      {/* 个人简介 */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple/10 text-purple-light border border-purple/20 mb-4">关于我</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-8">我是 <span className="gradient-text">谁</span></h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-purple/30 glow-effect">
              <img src="/images/avatar.svg" alt="头像" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p className="text-lg">我是一名全栈开发者和设计师，热衷于用现代化的技术打造高性能的 Web 体验。多年的全栈开发经验让我能够从架构到实现，将创意通过简洁的代码和精心的设计变为现实。</p>
            <p className="text-lg">我专注于 React、Next.js 和 TypeScript 技术栈，同时乐于探索新技术。不写代码的时候，我喜欢参与开源项目、写技术博客，或者捣鼓各种 AI 工具。</p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="mailto:hello@alexchen.dev" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity"><Mail size={14} /> 联系我</a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-secondary text-sm font-medium hover:text-text-primary hover:border-purple/50 transition-all"><Download size={14} /> 下载简历</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 技能 */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-2">技能与 <span className="gradient-text">工具</span></h2>
          <p className="text-text-secondary">我日常使用的技术和工具。</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(categoryLabels).map(([key, label], catIdx) => {
            const categorySkills = skills.filter((s) => s.category === key);
            return (
              <motion.div key={key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: catIdx * 0.1 }}
                className="bg-surface-lighter rounded-2xl border border-border/50 p-6 hover:border-purple/30 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-purple-light mb-4 uppercase tracking-wider">{label}</h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span key={skill.name} className="px-3 py-1.5 text-xs font-medium bg-surface/60 text-text-secondary rounded-lg border border-border/30 hover:bg-purple/10 hover:text-purple-light hover:border-purple/30 transition-all duration-200 cursor-default">{skill.name}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 经历时间线 */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-2">我的 <span className="gradient-text">经历</span></h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-blue to-transparent" />
          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="relative pl-16">
                <div className="absolute left-5 top-1 -translate-x-1/2 w-7 h-7 rounded-full bg-surface-lighter border-2 border-purple flex items-center justify-center">
                  {item.type === "work" ? <Briefcase size={12} className="text-purple-light" /> : <GraduationCap size={12} className="text-blue-light" />}
                </div>
                <div className="bg-surface-lighter rounded-xl border border-border/50 p-5 hover:border-purple/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-base font-semibold font-heading text-text-primary">{item.title}</h3>
                    <span className="text-xs text-purple-light flex items-center gap-1"><Calendar size={11} />{item.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
                    <span className="flex items-center gap-1"><MapPin size={11} />{item.location}</span>
                    <span className="text-border">&middot;</span>
                    <span>{item.org}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-purple-deep/20 via-surface-lighter to-blue/10 rounded-3xl border border-border/50 p-10 sm:p-14">
          <h2 className="text-3xl font-bold font-heading mb-4">与我 <span className="gradient-text">联系</span></h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">有问题想交流，或者想一起合作？期待你的来信。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@alexchen.dev" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple/25">
              <Mail size={18} /> 说声 Hi
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-purple/50 transition-all">
              <Download size={18} /> 简历
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
