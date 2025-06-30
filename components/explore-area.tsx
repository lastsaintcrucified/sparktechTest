"use client"

import { Button } from "@/components/ui/button"
import { Coffee, ShoppingBag, Waves, Bus } from "lucide-react"

export function ExploreArea() {
  const categories = [
    {
      title: "Restaurants & cafes",
      icon: <Coffee className="w-4 h-4" />,
      places: [
        { name: "Blue Cafe", distance: "1.4 km" },
        { name: "Blue Cafe", distance: "1.4 km" },
        { name: "Blue Cafe", distance: "1.4 km" },
      ],
    },
    {
      title: "Shops & Markets",
      icon: <ShoppingBag className="w-4 h-4" />,
      places: [
        { name: "Central Mall", distance: "1.4 km" },
        { name: "Central Mall", distance: "1.4 km" },
        { name: "Central Mall", distance: "1.4 km" },
      ],
    },
    {
      title: "Beaches",
      icon: <Waves className="w-4 h-4" />,
      places: [
        { name: "Les Dunes Beach", distance: "1.4 km" },
        { name: "Les Dunes Beach", distance: "1.4 km" },
        { name: "Les Dunes Beach", distance: "1.4 km" },
      ],
    },
    {
      title: "Public transport",
      icon: <Bus className="w-4 h-4" />,
      places: [
        { name: "Tram - Ruisseau Central Station", distance: "1.4 km" },
        { name: "Metro - Cité/Rue Metro Hub", distance: "1.4 km" },
        { name: "Metro - Cité/Rue Metro Hub", distance: "1.4 km" },
      ],
    },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6 text-gray-900">Explore the Area</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Categories */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center space-x-2 mb-3">
                {category.icon}
                <h4 className="font-medium text-gray-900">{category.title}</h4>
              </div>
              <div className="space-y-2 ml-6">
                {category.places.map((place, placeIndex) => (
                  <div key={placeIndex} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{place.name}</span>
                    <span className="text-sm text-gray-500">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Map */}
        <div className="relative">
          <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden relative">
            {/* Map background with locations */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-green-100 to-blue-100">
              {/* Hotel markers */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  Hotel Saint Eugene
                </div>
              </div>

              <div className="absolute top-20 right-8">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  CHU Lamine Debaghine
                </div>
              </div>

              {/* Area label */}
              <div className="absolute bottom-8 right-8">
                <div className="bg-white/90 px-3 py-1 rounded text-sm font-medium text-gray-800">Bab El Oued</div>
              </div>
            </div>
          </div>

          {/* Explore link */}
          <div className="mt-4 text-right">
            <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
              Explore the Area →
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
