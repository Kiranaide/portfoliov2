import Image from 'next/image'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Experience />
    </>
  )
}
