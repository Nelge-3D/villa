'use client'

import { FC } from 'react'
import { CookingPot, Waves, Bath, Bed, Square } from 'lucide-react'

interface VillaInfoProps {
  surface: number
  bedrooms: number
  bathrooms: number
  hasPool: boolean
  hasKitchen: boolean
}

const VillaInfo: FC<VillaInfoProps> = ({
  surface,
  bedrooms,
  bathrooms,
  hasPool,
  hasKitchen,
}) => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 bg-gray-800 text-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Informations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hasPool && (
          <div className="flex items-center space-x-2 hover:text-blue-500">
            <Waves className="text-blue-500" />
            <span className="text-lg font-medium">Piscine</span>
          </div>
        )}

        {hasKitchen && (
          <div className="flex items-center space-x-2 hover:text-green-500">
            <CookingPot className="text-green-500" />
            <span className="text-lg font-medium">Cuisine aménagée</span>
          </div>
        )}

        <div className="flex items-center space-x-2 hover:text-purple-500">
          <Bath className="text-purple-500" />
          <span className="text-lg font-medium">{bathrooms} salle(s) de bain</span>
        </div>

        <div className="flex items-center space-x-2 hover:text-yellow-500">
          <Bed className="text-yellow-500" />
          <span className="text-lg font-medium">{bedrooms} chambre(s)</span>
        </div>

        <div className="flex items-center space-x-2 hover:text-gray-300">
          <Square className="text-gray-500" />
          <span className="text-lg font-medium">{surface} m²</span>
        </div>
      </div>
      <p className="mt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ab nostrum reiciendis dicta asperiores voluptatum possimus, et repellendus mollitia itaque, tempora numquam, blanditiis eligendi delectus voluptas cumque cupiditate. Quam nesciunt nemo quibusdam, esse animi numquam officiis. Dignissimos eveniet nobis laudantium sint debitis ut excepturi est iure, ipsam enim, vero a?
      </p>
    </div>
  )
}

export default VillaInfo
