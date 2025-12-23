"use client"
import React, { useEffect, useState } from 'react'

export default function NewYearPopup() {

    const [isvisible,setIsVisible]=useState(false)
    const [isvLoaded,setIsLoaded]=useState(false)


    useEffect(()=>{

        const handleLoad=()=>{
            setIsLoaded(true)
            setIsVisible(true)
        }

        if(document.readyState === 'complete'){
            handleLoad()
        }else{
            window.addEventListener('load',handleLoad)
        }


        return () => {
            window.addEventListener('load',handleLoad)
        } 
    },[])

    useEffect(()=>{
        if(isvisible){
            const timer=setTimeout(()=>{
            setIsVisible(false)
        },5000)

        return () => clearTimeout(timer)

        }
   
    },[isvisible])

    if(!isvisible || !isvLoaded) return null;


  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      <div className="animate-fade-in-scale bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-6 rounded-2xl shadow-2xl pointer-events-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">
          🎉 Bonne année 2026 ! ✨
        </h2>
        <p className="text-center text-lg md:text-xl opacity-90">
          Prêt à créer des projets innovants ensemble 💼
        </p>
      </div>
    </div>
  )
}
