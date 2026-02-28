"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        <div className="flex flex-col gap-4 text-lg">
          <div>
            👋 嗨！很高兴在这里遇见你。
          </div>
          <div>
            我是一名崇尚 <span className="font-bold">Vibe Coding</span> 的全栈与 AI 开发工程师。对我而言，代码从来不仅是冰冷的字符堆砌，它更像是一种富有生命力的语言，用来编织流畅、自然且充满惊喜的数字体验。作为 <span className="font-bold">uniai 开源核心贡献者</span>，我热衷于在技术的边界上不断探索，寻找那些能让应用“活”起来的瞬间。
          </div>
          <div>
            我的 AI 之旅始于 <span className="font-bold">中科苏州智能计算技术研究院</span>。在那里，我有幸第一次深度接触人工智能，并开启了我的职业新时代。值得一提的是，在 <span className="font-bold">Dify</span> 项目初期，我就与他们的团队进行了深入交流，这段经历极大地拓宽了我的视野。
          </div>
          <div>
            后来，我在 <span className="font-bold">讯飞未来</span> 专注于 AI 领域的探索与开发。我非常享受从 0 到 1 将一个模糊的想法打磨成现实的过程——无论是搭建高效的企业级博客，还是构建复杂的 Agent 工作流与知识库系统，每当看着项目从无到有、从构想到落地，那份成就感总是让我乐此不疲。
          </div>
          <div>
            目前，我已入职 <span className="font-bold">阿里巴巴</span>，投身于 <span className="font-bold">AI 平台与 Agent 开发</span> 的核心业务中。在这里，我致力于探索大模型应用的新范式，通过构建更智能、更高效的 Agent 体系，为用户创造更具想象力的交互体验。
          </div>
          <div>
            在技术栈上，我像个贪心的探险家。我精通 <span className="font-bold">Vue, React, Node.js</span>，也深耕 <span className="font-bold">Electron</span> 与 <span className="font-bold">Uniapp</span> 跨平台开发。同时，我对 AI 的热爱让我深入 <span className="font-bold">Python</span> 后端，钻研 <span className="font-bold">Transformer 架构</span> 与 <span className="font-bold">Whisper</span> 等 ASR 模型。
          </div>
          <div>
             我现在的重心正全力投入在 <span className="font-bold">AI Agent 开发</span>、<span className="font-bold">AIGC 内容生成</span> 以及探索 <span className="font-bold">Spec Coding</span> 架构的新范式上。对我来说，保持对新技术的敏锐与热情，就是保持对未来的无限期待。
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 text-lg">
          <p>
            👋 Hi there! Glad to meet you here.
          </p>
          <p>
            I am a Full Stack & AI Engineer who embraces the <span className="font-bold italic">Vibe Coding</span> philosophy. To me, code is never just cold character strings; it's a vibrant language used to weave fluid, natural, and surprising digital experiences. As a <span className="font-bold">core contributor to uniai</span>, I am passionate about exploring the boundaries of technology, always looking for those moments that make an application come "alive."
          </p>

          <p>
            My journey into AI began at the <span className="font-bold">Suzhou Institute of Intelligent Computing Technology, CAS</span>. It was there that I first delved into artificial intelligence, marking a new era in my career. Notably, I had the opportunity to engage with the <span className="font-bold">Dify</span> team during their early stages, an experience that significantly broadened my horizons.
          </p>

          <p>
            Later, I was at <span className="font-bold">iFLYTEK Future</span>, focusing on AI exploration and development. I thoroughly enjoy the process of polishing a vague idea into reality from scratch—whether it's building an efficient enterprise blog or constructing complex Agent workflows and knowledge base systems. Watching a project grow from zero to one, from concept to launch, always brings me a sense of accomplishment that I never get tired of.
          </p>
          <p>
            Currently, I am at <span className="font-bold">Alibaba</span>, deeply involved in <span className="font-bold">AI Platform and Agent development</span>. I am dedicated to exploring new paradigms of LLM applications, building more intelligent and efficient Agent systems to create imaginative interactive experiences for users.
          </p>

          <p>
             In terms of tech stack, I'm like a greedy explorer. I am proficient in <span className="font-bold">Vue, React, and Node.js</span>, and I have deep expertise in <span className="font-bold">Electron</span> and <span className="font-bold">Uniapp</span> for cross-platform development. At the same time, my passion for AI leads me deep into <span className="font-bold">Python</span> backend, studying <span className="font-bold">Transformer architecture</span> and <span className="font-bold">ASR models like Whisper</span>.
          </p>

          <p>
            My current focus is fully dedicated to <span className="font-bold">AI Agent development</span>, <span className="font-bold">AIGC content generation</span>, and exploring the new paradigms of <span className="font-bold">Spec Coding</span> architecture. For me, staying keen and enthusiastic about new technologies is about keeping infinite expectations for the future.
          </p>
        </div>
      )}
    </motion.section>
  )
}
