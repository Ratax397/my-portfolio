"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import ProjectModal from './ProjectModal';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Mada-Bank - Banque Digitale",
    description: "Banque digitale pour Madagascar avec Plaid & Dwolla",
    image: "/images/projects/mg1.png",
    images: [  
      "/images/projects/mg1.png",
      "/images/projects/mg2.png",
      "/images/projects/mg3.png",
      "/images/projects/mg4.png",
      "/images/projects/mg5.png",
      "/images/projects/mg6.png",
      "/images/projects/mg7.png",
    ],
    tag: ["Tout", "Web"],
    gitUrl: "https://github.com/Ratax397/MG-Bank",
    liveUrl: "https://mg-bank.vercel.app",
    detailedDescription: "Application bancaire digitale axée sur Madagascar permettant la liaison de comptes bancaires, consultation de soldes et transactions, et transferts d'argent incluant les virements transfrontaliers vers/depuis les USA (via Plaid et Dwolla en mode sandbox).",
    technologies: ["Next.js 15", "TypeScript", "Appwrite", "Plaid", "Dwolla", "Tailwind CSS", "shadcn/ui", "Sentry"],
    features: [
      "Authentification sécurisée avec sessions Appwrite",
      "Liaison de comptes bancaires via Plaid",
      "Transferts d'argent via Dwolla (support USA)",
      "Dashboard : comptes, soldes, institutions, transactions",
      "Historique des transactions et gestion de session"
    ]
  },
  {
    id: 2,
    title: "Varobabo - E-commerce App",
    description: "Application e-commerce moderne avec portail vendeur",
    image: "/images/projects/vb1.png",
    images: [
      "/images/projects/vb1.png",
      "/images/projects/vb2.png",
      "/images/projects/vb3.png",
      "/images/projects/vb4.png",
      "/images/projects/vb5.png",
      "/images/projects/vb6.png",
      "/images/projects/vb7.png",
    ],
    tag: ["Tout", "Web"],
    gitUrl: "https://github.com/Ratax397/Varobabo",
    liveUrl: "https://varobabo-oeob.vercel.app",
    detailedDescription: "Application e-commerce complète avec vitrine acheteur et portail vendeur simple. Construite avec Next.js App Router, authentification Clerk, MongoDB (Mongoose), Cloudinary pour les médias, et Inngest pour les workflows événementiels.",
    technologies: ["Next.js App Router", "React", "Tailwind CSS", "Clerk", "MongoDB", "Mongoose", "Cloudinary", "Inngest", "Axios"],
    features: [
      "Authentification et rôles via Clerk (acheteur/vendeur)",
      "Catalogue produits avec galerie d'images",
      "Portail vendeur : ajout produits multi-images, gestion commandes",
      "Panier et checkout : gestion articles, résumé commande",
      "Gestion adresses de livraison et historique commandes",
      "Traitement événementiel avec Inngest (sync users, batch orders)"
    ]
  },
  {
    id: 3,
    title: "Tahirin-tsary - Galerie d'Articles",
    description: "Galerie d'articles/images avec authentification Google",
    image: "/images/projects/th3.png",
    images: [
      "/images/projects/th3.png",
      "/images/projects/th4.png",
      "/images/projects/th2.png",
      "/images/projects/th1.png",
    ],
    tag: ["Tout", "Web"],
    gitUrl: "https://github.com/Ratax397/tahirin-tsary",
    liveUrl: "https://tahirin-tsary-z6y3.vercel.app",
    detailedDescription: "Mini-projet de galerie permettant la publication d'articles avec images, recherche par mots-clés, pages détaillées et tableau de bord utilisateur personnalisé.",
    technologies: ["Next.js App Router", "React", "Firebase Firestore", "NextAuth", "Cloudinary", "Tailwind CSS v4"],
    features: [
      "Authentification Google via NextAuth",
      "Liste d'articles avec recherche par mot-clé",
      "Publication d'articles avec upload d'images (Cloudinary)",
      "Page détail d'article avec image, description, lien externe",
      "Dashboard utilisateur personnalisé"
    ]
  },
  {
    id: 4,
    title: "SubManager - Gestion d'Abonnements",
    description: "API Node.js pour gérer et suivre les abonnements",
    image: "/images/projects/sb1.png",
    images: [
      "/images/projects/sb1.png",
      "/images/projects/sb2.png",
      "/images/projects/sb4.png",
    ],
    tag: ["Tout", "Web"],
    gitUrl: "https://github.com/Ratax397/SubManager",
    liveUrl: "https://github.com/Ratax397/SubManager",
    detailedDescription: "API REST Node.js pour la gestion et le suivi des abonnements avec rappels de renouvellement automatisés par email et orchestration des workflows via Upstash QStash.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Upstash Workflow", "Nodemailer", "Day.js"],
    features: [
      "Authentification JWT (sign-up/sign-in)",
      "CRUD complet des abonnements avec calcul auto des dates",
      "Rappels emails automatiques (J-7, J-5, J-2, J-1)",
      "Workflows Upstash pour orchestration des notifications",
      "Support fréquences : quotidienne, hebdomadaire, mensuelle, annuelle"
    ]
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Tout");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const handlePreviewClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }, 
  }

  return (
    <>
      <section id="projets" ref={ref} className="-mt-15 md:-mt-15"> 
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Mes projets
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
          <ProjectTag onClick={handleTagChange} name="Tout" isSelected={tag === "Tout"} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div>
        <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {
            filteredProjects.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.liveUrl}
                  onPreviewClick={() => handlePreviewClick(project)}
                />
              </motion.li>
            ))
          }
        </ul>
      </section>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default ProjectsSection