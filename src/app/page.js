"use client"
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Snowfall from 'react-snowfall'
import NewYearPopup from "./components/NewYearPopup";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">  
        <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50">
          <Snowfall color='#82C3D9' snowflakeCount={200}/>
        </div>
        < NewYearPopup />
        <NavBar />
        <div className="container mt-15 mx-auto px-12 py-4">
          <HeroSection/>
          <AchievementsSection/>
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer/>        
      </main>
  );
}
