"use client"

import React from "react"
import { headerLanguageMap, projectsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import SectionHeading from "./SectionHeading"
import Project from "./Project"
import { useLocale } from "next-intl"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6"
import { useState } from "react"
import VideoModal from "./VideoModal"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1)
  const activeLocale = useLocale()
  const [selectedVideos, setSelectedVideos] = useState<{ title: string; url: string; thumbnail?: string }[] | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleOpenVideo = (videos: { title: string; url: string; thumbnail?: string }[]) => {
    setSelectedVideos(videos)
    setIsVideoModalOpen(true)
  }

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        {" "}
        {activeLocale === "zh"
          ? headerLanguageMap["Projects"]
          : "Featured Projects"}
      </SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} onOpenVideo={handleOpenVideo} />
          </React.Fragment>
        ))}
      </div>
      <Link
        className="group tracing-wide font-semibold hover:underline hover:underline-offset-4 hover:decoration-pink text-slate-800 dark:text-slate-400 w-full flex gap-1 items-center justify-center mt-10"
        target="_blank"
        href="https://github.com/Mrkk1"
      >
        View All Projects
        <FaAngleRight className="group-hover:translate-x-2 transition" />
      </Link>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videos={selectedVideos || []}
      />
    </section>
  )
}
