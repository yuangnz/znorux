"use client"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import BG_Principal from "./assets/img/BG_IMG1.jpg"
import ProfileIcon from "./assets/img/profileicon.jpg"
import AboutSection from "@/components/about-section"
import TwitchStream from "@/components/twitch-section"
import StreamSchedule from "@/components/stream-schedule"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import { useGlitch } from 'react-powerglitch'



export default function Page() {
  const glitch = useGlitch({
    "timing": {
      "duration": 3550,
      "easing": "ease-in"
    },
    "glitchTimeSpan": {
      "start": 0.4
    },
    "shake": {
      "amplitudeX": 0.15,
      "amplitudeY": 0.1
    },
    "slice": {
      "count": 6,
      "velocity": 12,
      
    }
  });
  const glitch2 = useGlitch({
    "timing": {
      "duration": 4650,
      "easing": "ease-in"
    }
  });

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
        <Link href="/">
          <Image
            src={ProfileIcon}
            alt="Logo"
            width={40}
            height={40}
            ref={glitch2.ref}
            className="rounded-full"
          />
        </Link>
        <Button variant="ghost" size="icon" className="text-white">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen">
        {/* MAIN CONTENT */}
        <div className="absolute inset-0 ">
          <Image
            src={BG_Principal}
            alt="Background"
            width={1920}
            height={1080}
            className="bg-fixed w-full h-full opacity-50"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-24 ">
          <div className="flex flex-row">
          <h1 className=" text-[18vw] md:text-[8vw] font-bold leading-none tracking-tighter mb-6 glitch leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 drop-shadow-2xl" ref={glitch.ref}>
            ZNORUX
          </h1>
          <Link href="/" className="translate-y-1/4 translate-x-5">
            <Image
              src={ProfileIcon}
              alt="Logo"
              width={70}
              height={40}
              ref={glitch2.ref}
              className="rounded-full "
              
            />
          </Link>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <button className="flex items-center gap-2 hover:opacity-70 transition-opacity font-bold">
              <span className="h-12 w-12 rounded-full border flex items-center justify-center">
                ▶
              </span>
              PLAY THE MUSIC
            </button>
            <div className="space-y-1 font-bold">
              <p>COUNTER STRIKE 2</p>
              <p>ESCAPE FROM TARKOV</p>
            </div>
            <div className="space-y-1 font-bold">
              <p>MEXICO</p>
              <p>Derek Graham</p>
            </div>
          </div>
        </div>
      </main>
      <AboutSection />

      <section className="px-6 md:px-12 lg:px-24 py-24 space-y-12 bg-gradient-to-bl from-zinc-800 to-black">
        <span className="text-sm tracking-wider text-gray-400 font-semibold ">02</span>
        <h1 className="text-[12vw] md:text-[4vw] font-bold leading-none tracking-tighter mb-6">
          STREAM
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:space-y-32">
          <div className="lg:col-span-2">

            <TwitchStream />
          </div>
          <div className="">
            <StreamSchedule />
          </div>
        </div>
      </section>
      <ProjectsSection />


      <section className="px-6 md:px-12 lg:px-24 py-24 space-y-12 bg-gradient-to-bl from-zinc-800 to-black">
        <span className="text-sm tracking-wider text-gray-400 font-semibold ">04</span>
        <h1 className="text-[12vw] md:text-[4vw] font-bold leading-none tracking-tighter mb-6 bg-clip-text bg-gradient-to-r from-white to-purple-200">
          CONTACTO
        </h1>
        <div className="md:space-y-32">
          <div className="">

            <ContactSection />
          </div>

        </div>
      </section>
    </div>
  )
}

