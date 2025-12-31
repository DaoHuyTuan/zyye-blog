import { json } from '@remix-run/node'
import { useNavigation } from '@remix-run/react'
import { Loading } from '~/components/Loading'
import { companies } from '~/utils/constants'
import { CompanyCard } from '~/components/CompanyCard'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import {
  SiTypescript,
  SiSolidity,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiGit
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import React from 'react'

export const loader = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return json({})
}

const skills = [
  <SiTypescript className="text-blue-600" />,
  <SiJavascript className="text-yellow-400" />,
  <SiSolidity className="text-gray-700" />,
  <FaReact className="text-sky-500" />,
  <SiNextdotjs className="text-black" />,
  <FaNodeJs className="text-green-600" />,
  <SiTailwindcss className="text-sky-400" />,
  <SiMongodb className="text-green-700" />,
  <SiPostgresql className="text-blue-800" />,
  <SiGit className="text-orange-500" />,
  <VscVscode className="text-blue-500" />
]

const marqueeKeyframes = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}`

export default function About() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col pt-[10px] gap-[32px] px-[20px] max-w-3xl mx-auto">
      <style>{marqueeKeyframes}</style>
      {/* Giới thiệu bản thân */}
      <section>
        <span className="text-[14px] text-gray-600 italic leading-relaxed">
          Hi, I'm a passionate Frontend Engineer with a strong background in
          blockchain and web technologies. I love building beautiful, performant
          web apps and always strive for clean, maintainable code. I enjoy
          learning new things and collaborating with talented people.
        </span>
      </section>

      {/* Skills Marquee */}
      {/* <section>
        <h2 className="text-[20px] font-semibold mb-3">Skills</h2>
        <div className="w-full">
          <div className="grid grid-col-6 gap-4 w-max">
            {[...skills, ...skills].map((icon, idx) => (
              <span
                key={idx}
                className="w-12 h-12 flex items-center justify-center rounded-full text-[28px] transition-all">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* Kinh nghiệm công ty */}
      <section>
        <h2 className="text-[20px] font-semibold mb-3">Experience</h2>
        <div className="flex flex-col gap-6">
          {companies.map(company => (
            <CompanyCard
              key={company.value}
              company={company}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
