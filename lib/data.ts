import React from "react";
import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import viaimCodeImage from '@/public/viaimCode.png';
import lechatImage from "@/public/lechat.png";
import remeImage from "@/public/reme.png";
import zjytImage from "@/public/zjyt.png";
import vividraftImage from '@/public/vividraft.png';

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "Full Stack Engineer",
        location: "iFLYTEK Future",
        description:
            "Deeply involved in AI meeting headphone algorithm team. Built internal tool platforms, TTS/Mouth Replacement capabilities demo, and enterprise technical blog. Responsible for AI end-side model demos, internal Agent workflow platform, and RAG knowledge base projects.",
        icon: React.createElement(FaNodeJs),
        date: "2024.03 - Present",
    },
    {
        title: "Full Stack Developer",
        location: "Suzhou Institute of Intelligent Computing Technology, CAS",
        description:
            "Responsible for LeChat Mini Program (Uniapp) and LeChatPro Web development. Developed LLM background management and comment moderation system. Adopted agile development for rapid iteration and commercial transformation.",
        icon: React.createElement(FaVuejs),
        date: "2023.11 - 2024.03",
    },
]

export const experiencesDataZn = [
    {
        "title": "全栈开发工程师",
        "location": "科大讯飞耳机事业群",
        "description": "效力于AI会议耳机算法团队。负责搭建内部工具平台、算法能力展示、TTS与嘴替功能转化。开发企业技术博客、AI端侧模型Demo，以及内部Agent工作流平台和RAG知识库项目。",
        icon: React.createElement(FaNodeJs),
        "date": "2024年3月 - 至今"
    },
    {
        "title": "全栈开发工程师",
        "location": "中科苏州智能计算技术研究院",
        "description": "负责LeChat智能文档分析助手小程序（Uniapp）及LeChatPro网页版开发。独立完成LLM后台管理及言论评控系统。采用敏捷开发模式，促使项目成功商业化转型。",
        "icon": React.createElement(FaVuejs),
        "date": "2023年11月 - 2024年3月"
    },
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "viviDraft",
        "title_zh": "viviDraft",
        "description": "A Chrome extension that converts selected text into hand-drawn style knowledge graphs. SaaS model with Google login and credit system. Built with React, Vite, TailwindCSS, Shadcn/ui (Chrome Extension) and Next.js, Supabase, Stripe (Web/API).",
        "desc_zh": "一款将选中文字转化为手绘风格知识插图的 Chrome 插件。SaaS 模式，支持 邮箱注册 或 Google 登录与token制。基于 React, Vite, TailwindCSS, Shadcn/ui 开发插件端，Next.js, Supabase, Stripe 构建后端与 Web 端。",
        "tags": ["Chrome Extension", "React", "Next.js", "Supabase", "Stripe", "TailwindCSS"],
        "imageUrl": vividraftImage,
        "projectUrl": "",
        "demoUrl": "https://vividraft.weilai.ai/zh"
    },
    {
        "title": "viaimCode",
        "title_zh": "viaimCode",
        "description":
            "An AI-based platform for generating modern websites and professional PPTs via natural language. Features stream response, visual editing, conversational modification, and version management. Integrated with multiple AI providers.",
        "desc_zh": "基于AI的智能内容生成平台，通过自然语言快速生成网站和PPT。主导设计全栈架构，统一接入多家AI提供商。具备流式响应、可视化编辑、对话式交互修改及版本管理功能。",
        "tags": ["Next.js", "TypeScript", "Node.js", "Docker", "AI Agent"],
        "imageUrl": viaimCodeImage,
        "projectUrl": "https://github.com/Mrkk1/viaimcode",
        "demoUrl": "https://webcode.weilai.ai/"
    },
    {
        title: "Reme Meeting Assistant",
        title_zh: 'Reme 跨平台会议助手',
        description:
            "A cross-platform meeting recording and AI analysis tool targeting overseas users. Compatible with Lark and Zoom. Features automatic update system, script distribution, and high visual fluidity.",
        desc_zh: "面向海外用户的跨平台会议录制及AI分析助手。兼容Lark和Zoom。基于Electron独立开发，实现自动更新及脚本分发系统，并通过复杂动画实现高视觉流畅性。",
        tags: ["Electron", "Vue3", "Node.js", "LLM", "Whisper", "Ollama"],
        imageUrl: remeImage,
        demoUrl: 'https://reme.chat',
    },
    {
        title: "LeChat Document Assistant",
        title_zh: "Lechat 智能文档分析助手",
        description:
            "An intelligent document analysis chatbot based on IICT AI models. Handled registration, login, payment, and membership systems. Achieved stable commercial operation with 50k+ daily visits.",
        desc_zh: "以IICT人工智能语言大模型为核心的智能文献分析与对话机器人。负责注册、登录、充值及会员系统开发。确保商业版本准时上线并稳定运行，日均访问量五万余次。",
        tags: ["Uniapp", "Vue3", "Python", "AI"],
        imageUrl: lechatImage,
        projectUrl: 'https://github.com/uniai-lab/lechat-pro',
        demoUrl: 'https://lechat.cas-ll.cn',
    },
    {
        title: "Zhijian Yitong",
        title_zh: '指尖移通',
        description: "A comprehensive campus portal mini-program serving tens of thousands of students. Features schedule viewing, electricity checking, campus access, and facility booking. Daily visits avg 20k+.",
        desc_zh: "全新重构的校园官方微信小程序，为数万名学生提供便捷校园门户服务（课表、电表、门禁、预约等）。负责多个功能板块开发与接口联调，优化前端性能，兼容各版本手机，日均访问量2W+。",
        tags: ["WeChat Mini Program", "LinUI", "WXML", "JavaScript"],
        imageUrl: zjytImage,
      
    },
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Vue",
    "React",
    "Next.js",
    "Node.js",
    "Electron",
    "Uniapp",
    "Python",
    "Git",
    "Tailwind",
    "Prisma",
    "Three.js",
    "Transformer",
    "Whisper",
    "LLM/Agent",
    "RAG",
    "Docker"
] 
