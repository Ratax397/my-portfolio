"use client"
import dynamic from 'next/dynamic';
import React from 'react'

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
)

const achievementsList = [
  {
    metric: "Projets",
    value: "4",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Visiteurs",
    value: "10000",
  },
  {
    metric: "Utilisateurs",
    value: "7",
    postfix: "+",
  },
  {
    metric: "Année",
    value: "1",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='border-[#33353F] border rounded-md py-8 px-4 sm:px-16 flex flex-col sm:flex-row items-center justify-between'>
        {
          achievementsList.map((achievement, index) => {
            return (
              <div key={index} className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'>
                <h2 className='text-white text-4xl font-bold flex flex-row items-baseline'>
                  {achievement.prefix && (
                    <span className='mr-1'>{achievement.prefix}</span>
                  )}
                  <AnimatedNumbers 
                    includeComma  
                    animateToNumber={parseInt(achievement.value)}
                    locale='fr-FR'
                    className='text-white text-4xl font-bold'
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        tension: 140 * (index + 1),  
                        friction: 100,
                      }
                    }}
                  />
                  {achievement.postfix && (
                    <span className='ml-1'>{achievement.postfix}</span>
                  )}
                </h2>
                <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AchievementsSection