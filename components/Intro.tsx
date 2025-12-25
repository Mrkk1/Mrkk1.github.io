"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import Link from "next/link"
import { Source_Code_Pro } from "next/font/google"
import { useLocale } from "next-intl"
import { useSectionInView } from "@/lib/hooks"
import { TypeAnimation } from "react-type-animation"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useTranslations } from "next-intl"
import useSound from "use-sound"
import { FaBlog } from "react-icons/fa"

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "400" })

export default function Intro() {
  const { ref } = useSectionInView("Home")
  const activeLocale = useLocale()
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const t = useTranslations("IntroSection")
  const [playHover] = useSound("/bubble.wav", { volume: 0.5 })

  return (
    <section
      ref={ref}
      className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/image.png"
              alt="developer-image"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            onHoverStart={() => {
              console.log("sound")
              playHover()
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.25, rotate: 15 }}
            className="absolute text-4xl bottom-0 right-0 hover:rotate-2"
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.div
        className="mb-10 mt-4 px-4 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={`${sourceCodePro.className} text-xl sm:text-2xl mb-2 block`}>
          {t("hello_im")}
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          {t("name")}
        </h1>

        <div className="text-2xl sm:text-4xl font-bold mb-6 h-[60px] sm:h-[80px] flex items-center justify-center flex-wrap gap-2">
          <span>I'm a </span>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "AI Application Engineer",
              1000,
              "Vibe Coding Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-indigo-600 dark:text-indigo-400"
          />
        </div>

        <p className="text-lg sm:text-xl font-medium max-w-[600px] mx-auto text-gray-700 dark:text-gray-300 !leading-relaxed">
          {t("short_intro")}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          target="_blank"
          className="bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="/虞威龙全栈开发.pdf"
        >
          {t("download_cv")}
          <HiDownload />
        </Link>
     

        <a
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Mrkk1"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className=" bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.cnblogs.com/mrkr"
          target="_blank"
        >
          <FaBlog />
        </a>
      </motion.div>
    </section>
  )
}
