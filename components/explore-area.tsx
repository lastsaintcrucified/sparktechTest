"use client";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

// Lazy-load with SSR disabled
const LeafletMap = dynamic(() => import("./leafletMap"), { ssr: false });

export function ExploreArea() {
	const categories = [
		{
			title: "Restaurants & cafes",
			icon: (
				<Image
					src='/images/icons/dish-01.svg'
					alt='Dish'
					width={24}
					height={24}
					className='w-5 h-5'
				/>
			),
			places: [
				{ name: "Blue Cafe", distance: "1.4 km" },
				{ name: "Blue Cafe", distance: "1.4 km" },
				{ name: "Blue Cafe", distance: "1.4 km" },
			],
		},
		{
			title: "Shops & Markets",
			icon: (
				<Image
					src='/images/icons/Shop_light.svg'
					alt='Dish'
					width={24}
					height={24}
					className='w-5 h-5'
				/>
			),
			places: [
				{ name: "Central Mall", distance: "1.4 km" },
				{ name: "Central Mall", distance: "1.4 km" },
				{ name: "Central Mall", distance: "1.4 km" },
			],
		},
		{
			title: "Beaches",
			icon: (
				<Image
					src='/images/icons/beach.svg'
					alt='Dish'
					width={24}
					height={24}
					className='w-5 h-5'
				/>
			),
			places: [
				{ name: "Les Dunes Beach", distance: "1.4 km" },
				{ name: "Les Dunes Beach", distance: "1.4 km" },
				{ name: "Les Dunes Beach", distance: "1.4 km" },
			],
		},
		{
			title: "Public transport",
			icon: (
				<Image
					src='/images/icons/elements.svg'
					alt='Dish'
					width={24}
					height={24}
					className='w-5 h-5'
				/>
			),
			places: [
				{ name: "Tram - Ruisseau Central Station", distance: "1.4 km" },
				{ name: "Metro - Cité/Rue Metro Hub", distance: "1.4 km" },
				{ name: "Metro - Cité/Rue Metro Hub", distance: "1.4 km" },
			],
		},
	];

	return (
		<div>
			<h3 className='text-xl font-semibold mb-6 text-gray-900'>
				Explore the Area
			</h3>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				{/* Left side - Categories */}
				<div className='space-y-6 flex flex-wrap'>
					{categories.map((category, index) => (
						<div
							key={index}
							className='w-full md:w-1/2 p-4 md:p-0'
						>
							<div className='flex items-center space-x-2 mb-3'>
								{category.icon}
								<h4 className='font-medium text-gray-900'>{category.title}</h4>
							</div>
							<div className='space-y-2'>
								{category.places.map((place, placeIndex) => (
									<div
										key={placeIndex}
										className='flex justify-between md:items-center'
									>
										<span className='text-xs text-gray-600 mr-5 md:mr-0'>
											{place.name}
										</span>
										<span className='text-xs text-gray-500  md:mr-12'>
											{place.distance}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Right side - Map */}

				<div className='relative overflow-hidden border'>
					<LeafletMap />
					{/* Explore link */}
					<div className='mt-4 text-center pt-0 py-4'>
						<Button className='text-blue-600  text-lg hover:text-blue-700 p-0 bg-transparent border-0 shadow-none hover:bg-transparent hover:cursor-pointer'>
							Explore the Area
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
