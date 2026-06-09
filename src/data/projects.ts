export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "AI 聊天平台",
    description: "实时 AI 聊天平台，支持多模型切换、流式响应、消息历史记录和可定制的 AI 角色。专为开发团队打造。",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    image: "/projects/project-1.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "project-2",
    title: "DevOps 监控面板",
    description: "面向开发者的数据分析仪表盘，实时监控应用性能、追踪错误、可视化部署指标和管理告警。",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "/projects/project-2.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "project-3",
    title: "ShopFlow 电商平台",
    description: "全功能电商平台，支持商品管理、AI 智能推荐、购物车、Stripe 支付集成和后台管理面板。",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
    image: "/projects/project-3.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "project-4",
    title: "WeatherViz 天气可视化",
    description: "交互式天气可视化应用，支持动态全球地图、7 天预报、历史数据对比和流畅的数据驱动动画。",
    tags: ["Vue.js", "D3.js", "OpenWeather", "CSS 动画"],
    image: "/projects/project-4.svg",
    liveUrl: "https://example.com",
  },
  {
    id: "project-5",
    title: "TeamFlow 协作平台",
    description: "协作式项目管理工具，支持看板视图、WebSocket 实时协作、团队工作区和冲刺规划。",
    tags: ["React", "Socket.io", "MongoDB", "Tailwind CSS"],
    image: "/projects/project-5.svg",
    repoUrl: "https://github.com",
  },
  {
    id: "project-6",
    title: "作品集生成器",
    description: "拖拽式作品集搭建工具，通过 Markdown 内容生成精美且 SEO 优化的个人网站，内置多种主题。",
    tags: ["Next.js", "MDX", "shadcn/ui", "Vercel"],
    image: "/projects/project-6.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];
