'use client'

import Link from "next/link"
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  useGLTF,
  Center,
  Bounds,
  ContactShadows,
} from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/Regab seul.glb')
  return (
    <Center>
      <primitive object={scene} scale={15} />
    </Center>
  )
}

export default function ThreeDModelViewer() {
  return (
    <div className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Canvas à gauche */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] bg-black rounded-2xl shadow-2xl p-2 border-4 border-red-600">
          <Canvas shadows camera={{ position: [0, 0.1, 2.5], fov: 38 }}>
            {/* Lumière ambiante augmentée pour illuminer globalement la scène */}
            <ambientLight intensity={1.2} />
            {/* Deux directional lights plus fortes pour apporter du contraste */}
            <directionalLight
              position={[2, 5, 2]}
              intensity={2.2}
              color={'#00bfff'} // lumière bleue
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <directionalLight
              position={[-2, 5, -2]}
              intensity={2.2}
              color={'#ff4d4d'} // lumière rouge
            />
            {/* Spotlight pour focaliser et faire ressortir le logo sur la canette */}
            <spotLight
              position={[0, 3, 2]}
              angle={0.4}
              intensity={3}
              penumbra={0.5}
              castShadow
            />

            {/* Nouvelle pointLight blanche douce */}
  <pointLight position={[0, 1, 1]} intensity={1.5} color="#ffffff" />

            {/* Ombres de contact sous la canette */}
            <ContactShadows
              position={[0, -0.8, 0]}
              opacity={0.35}
              scale={10}
              blur={1.5}
              far={4.5}
            />
            <OrbitControls enableZoom maxDistance={4} minDistance={1.5} />
            <Bounds fit clip observe margin={1.2}>
              <Model />
            </Bounds>
          </Canvas>
        </div>

        {/* Texte descriptif à droite */}
        <div className="w-full md:w-1/2 space-y-6 text-white">
          <h2 className="text-4xl font-extrabold leading-tight">
            Découvrez la <span className="text-red-500">fraîcheur Regab</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Une canette de qualité premium, magnifiée par des effets lumineux puissants qui
            révèlent sa texture glacée et son design emblématique. Idéale pour mettre en valeur
            chaque détail dans un environnement moderne.
          </p>
          <Link href="/art">
          <button className="mt-4 px-6 py-3 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition duration-300">
            Explorer plus
          </button>
        </Link>
        </div>
      </div>
    </div>
  )
}
