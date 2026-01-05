"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="pt-12 lg:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start px-4"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500'>
              Bonjour, je suis{" "}
            </span>
            <br/> 
            <TypeAnimation
              sequence={[
                'Mamy Tahirisoa',
                2000,
                'Développeur Front-End',
                2000,
                'Développeur Back-End',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Dev Web Front & Back - passionné par la création d&apos;expériences digitales innovantes.
          </p>
          <div>
            {/* Bouton Embauchez-moi - Lien vers contact */}
            <Link 
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white inline-block text-center"
            >
              Embauchez-moi
            </Link>
            
            {/* Bouton Télécharger CV - Lien Google Drive */}
            <a 
              href="/cv/CV-RAJOELISON-Mamy-Tahirisoa.pdf" 
              className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 hover:bg-gradient-to-bl text-white mt-3 inline-block'
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Télécharger CV
              </span>
            </a>
          </div>
        </motion.div> 
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 w-[330px] h-[330px] hover:scale-105 transition-transform duration-300">
            <div className="rounded-full bg-[#181818] w-full h-full relative">
              <Image 
                src="/images/my-profile-transparent.png"
                alt="hero image"
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                width={230}
                height={230}
              />
            </div>
          </div>   
        </motion.div>           
      </div>
    </section>
  )
}

export default HeroSection