"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"
import { FaPlay } from "react-icons/fa"
import clsx from "clsx"
import { useTranslations, useLocale } from "next-intl"

interface Video {
  title: string
  url: string
  thumbnail?: string
}

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videos: Video[]
}

export default function VideoModal({ isOpen, onClose, videos }: VideoModalProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const t = useTranslations("ProjectSection")
  const activeLocale = useLocale()

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const currentVideo = videos[currentVideoIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl aspect-video bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
            >
              <IoClose size={24} />
            </button>

          {/* Video Player Area (Left) */}
          <div className="flex-1 bg-black relative">
            {currentVideo?.url ? (
              <video
                key={currentVideo.url}
                src={currentVideo.url}
                className="w-full h-full"
                controls
                autoPlay
              />
                ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  {t("video_not_available")}
                </div>
              )}
            </div>

            {/* Playlist Area (Right) */}
            <div className="w-full md:w-80 bg-[#1a1a1a] border-l border-white/10 flex flex-col">
              <div className="p-4 border-b border-white/10 bg-[#242424]">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  {t("playlist")}
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-gray-400 font-normal">
                    {t("playlist_count", { count: videos.length })}
                  </span>
                </h3>
              </div>

              <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-thin scrollbar-thumb-white/10">
                {videos.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={clsx(
                      "w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left group",
                      currentVideoIndex === index 
                        ? "bg-white/10 ring-1 ring-white/20" 
                        : "hover:bg-white/5"
                    )}
                  >
                    <div className="relative flex-shrink-0 w-24 h-14 bg-gray-900 rounded-md overflow-hidden border border-white/5 flex items-center justify-center">
                      {video.thumbnail || video.url.includes('aliyuncs.com') ? (
                        <img 
                          src={video.thumbnail || `${video.url}${video.url.includes('?') ? '&' : '?'}x-oss-process=video/snapshot,t_2000,f_jpg,w_400,m_fast`} 
                          alt={video.title} 
                          className="w-full h-full object-contain" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FaPlay className={clsx("w-3 h-3 transition-colors", currentVideoIndex === index ? "text-white" : "text-gray-600 group-hover:text-gray-400")} />
                        </div>
                      )}
                      {currentVideoIndex === index && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className={clsx(
                        "text-sm font-medium line-clamp-2 leading-snug",
                        currentVideoIndex === index ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                      )}>
                        {video.title}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">
                        {t("video_index")} {index + 1}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
