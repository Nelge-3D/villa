'use client'
import React from 'react'

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Vidéo en arrière-plan */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="/video.mp4"  // remplace par le nom de ta vidéo
        autoPlay 
        muted 
        loop 
        playsInline
      />

      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Contenu par-dessus la vidéo */}
      <div className="relative text-center p-6 z-20 pointer-events-auto">
        <h1 className="text-4xl md:text-6xl mb-4 text-white">
          Villa LoveDream
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-white">
          Voyagez vers une destination de rêve.
        </p>
        <a href="#reservation" className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse">
          Réservez maintenant !
        </a>
      </div>
    </header>
  )
}
