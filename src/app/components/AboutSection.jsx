"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import { Sparkles, GraduationCap, Award } from 'lucide-react'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='pl-2 space-y-2'>
        <li className="flex items-center gap-3 group">
          <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
          <span className="group-hover:text-purple-300 transition-colors">TypeScript</span>
        </li>
        <li className="flex items-center gap-3 group">
          <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
          <span className="group-hover:text-purple-300 transition-colors">MongoDB</span>
        </li>
        <li className="flex items-center gap-3 group">
          <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
          <span className="group-hover:text-purple-300 transition-colors">Express.js</span>
        </li>
        <li className="flex items-center gap-3 group">
          <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
          <span className="group-hover:text-purple-300 transition-colors">React</span>
        </li>
        <li className="flex items-center gap-3 group">
          <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
          <span className="group-hover:text-purple-300 transition-colors">Node.js</span>
        </li>
        <li className="flex items-center gap-3 group">
          <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
          <span className="group-hover:text-purple-300 transition-colors">Next.js</span>
        </li>
        <li className="flex items-center gap-3 group">
          <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
          <span className="group-hover:text-purple-300 transition-colors">Firebase</span>
        </li>
        <li className="flex items-center gap-3 group">
          <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
          <span className="group-hover:text-purple-300 transition-colors">Appwrite</span>
        </li>
        <li className="flex items-center gap-3 group">
          <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
          <span className="group-hover:text-purple-300 transition-colors">Cloudinary</span>
        </li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='pl-2 space-y-3'>
        <li className="flex items-start gap-3 group">
          <GraduationCap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
          <span className="group-hover:text-blue-300 transition-colors">Licence 3 (mention Très Bien) - Institut Supérieur Polytechnique de Madagascar à Antsobolo (ISPM) | 2024-2025</span>
        </li>
        <li className="flex items-start gap-3 group">
          <GraduationCap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
          <span className="group-hover:text-blue-300 transition-colors">Licence 2 (mention Assez Bien) - Institut Supérieur Polytechnique de Madagascar à Antsobolo (ISPM) | 2023-2024</span>
        </li>
        <li className="flex items-start gap-3 group">
          <GraduationCap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
          <span className="group-hover:text-blue-300 transition-colors">Licence 1 - Institut Supérieur Polytechnique de Madagascar à Antsobolo (ISPM) | 2019-2021</span>
        </li>
        <li className="flex items-start gap-3 group">
          <GraduationCap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
          <span className="group-hover:text-blue-300 transition-colors">Baccalauréat série D - Lycée Sainte Famille à Anosivavaka (LSFA) | 2018-2019</span>
        </li>
      </ul>
    )
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className='pl-2 space-y-2'>
        <li className="flex items-start gap-3 group">
          <Award className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5 group-hover:text-yellow-300 transition-colors" />
          <span className="group-hover:text-yellow-300 transition-colors">Certificat en Anglais (mention Excellent) - English School of Madagascar à Antanimena (ESM) | 2021-2023</span>
        </li>
      </ul>
    )
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransaction] = useTransition();

  const handleTabChange = (id) => {
    startTransaction(() => {
      setTab(id)
    })
  }
  
  return (
    <section id="about" className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/images/about-me.webp"
          width={700}
          height={700}
          alt='À propos'
        />

        <div className='mt-8 md:mt-0 text-left flex flex-col'>
          <h2 className='text-4xl font-bold text-white mb-4'>À propos de moi</h2>
          <p className='text-base md:text-lg'>
            Étudiant développeur web React, Next.js, Node.js, MongoDB. J&apos;ai réalisé 
            plusieurs projets dont une application bancaire digitale (Plaid/Dwolla) et 
            un système de gestion d&apos;abonnements avec workflows automatisés (API REST, 
            JWT, Upstash QStash). J&apos;expérimente l&apos;utilisation d&apos;APIs externes, 
            l&apos;authentification et la gestion de bases de données. Actuellement en L3 
            à l&apos;Institut Supérieur Polytechnique de Madagascar (mention Très Bien), 
            je suis à la recherche d&apos;un stage en développement web pour approfondir 
            mes compétences et contribuer à des projets concrets.
          </p>
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Éducation
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          
          <div className='mt-8 h-[250px] overflow-y-auto scrollbar-hide'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection