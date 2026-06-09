export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "design";
}

export const skills: Skill[] = [
  // 前端
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "HTML5/CSS3", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Redux/Zustand", category: "frontend" },

  // 后端
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "REST API", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "Redis", category: "backend" },

  // 工具
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "GitHub Actions", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Linux", category: "tools" },

  // 设计
  { name: "UI/UX 设计", category: "design" },
  { name: "Figma", category: "design" },
  { name: "设计系统", category: "design" },
  { name: "响应式设计", category: "design" },
  { name: "原型设计", category: "design" },
  { name: "无障碍设计", category: "design" },
];

export const categoryLabels: Record<string, string> = {
  frontend: "前端",
  backend: "后端",
  tools: "工具与运维",
  design: "设计",
};
