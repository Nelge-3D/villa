"use client"
import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
]

export default function Galerie() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedImage = images[selectedIndex]

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    
    <div className="max-w-[1200px] mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-center relative">
        {/* Image principale avec transition */}
        <div className="relative w-full h-[300px] md:h-[600px] md:w-3/4 group overflow-hidden rounded-md">
          <img
            src={selectedImage}
            alt="Images villa"
            className="w-full h-full object-cover transition duration-500 ease-in-out"
          />

          {/* Flèche gauche */}
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>

          {/* Flèche droite */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Miniatures */}
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 mt-4 md:mt-0 md:ml-4 overflow-hidden md:overflow-x-visible">
          {images.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Image ${index + 1}`}
              onClick={() => setSelectedIndex(index)}
              className={`w-20 h-16 object-cover rounded-md cursor-pointer transition duration-300 transform hover:scale-105 ${
                selectedIndex === index ? "ring-2 ring-yellow-500" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    
  )
}
