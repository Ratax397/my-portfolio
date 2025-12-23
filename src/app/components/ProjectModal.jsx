"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className="bg-[#181818] rounded-xl h-full flex flex-col border border-[#33353F]">
              {/* Header */}
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-[#33353F]">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Image Gallery */}
                  <div className="relative">
                    <div className="relative h-64 md:h-96 bg-[#121212] rounded-lg overflow-hidden">
                      <Image
                        src={images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />

                      {/* Navigation Arrows */}
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                          >
                            <ChevronLeftIcon className="h-6 w-6" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                          >
                            <ChevronRightIcon className="h-6 w-6" />
                          </button>

                          {/* Image Counter */}
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {images.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Thumbnail navigation */}
                    {images.length > 1 && (
                      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                        {images.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                              index === currentImageIndex
                                ? 'border-purple-500 scale-105'
                                : 'border-transparent hover:border-gray-500'
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Description
                      </h3>
                      <p className="text-[#ADB7BE] leading-relaxed">
                        {project.detailedDescription || project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    {project.technologies && (
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          Technologies utilisées
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-[#121212] border border-[#33353F] text-[#ADB7BE] px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    {project.features && (
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          Fonctionnalités principales
                        </h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-[#ADB7BE] flex items-start">
                              <span className="text-purple-500 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Links - Demo et GitHub */}
                    <div className="pt-4 space-y-3">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all"
                        >
                          Voir la démo en ligne
                        </Link>
                      )}
                      {project.gitUrl && (
                        <Link
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-[#121212] border border-[#33353F] hover:border-purple-500 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all"
                        >
                          Voir le code source
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;