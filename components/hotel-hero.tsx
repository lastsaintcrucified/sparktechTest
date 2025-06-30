"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, Share2 } from "lucide-react";

interface HotelHeroProps {
	name: string;
	description: string;
}

export function HotelHero({ name, description }: HotelHeroProps) {
	return (
		<div className='flex justify-between items-start mb-6'>
			<div className='flex-1'>
				<h1 className='text-3xl font-bold text-gray-900 mb-2'>{name}</h1>
				<p className='text-gray-600 max-w-md'>{description}</p>
			</div>
			<div className='flex space-x-3 ml-6'>
				<Button
					variant='outline'
					size='sm'
					className='p-3 bg-transparent'
				>
					<Bookmark className='w-4 h-4' />
				</Button>
				<Button
					variant='outline'
					size='sm'
					className='flex items-center space-x-2 px-4 bg-transparent'
				>
					<Share2 className='w-4 h-4' />
					<span>Share</span>
				</Button>
				<Button className='bg-blue-600 hover:bg-blue-700 px-6'>
					Reserve →
				</Button>
			</div>
		</div>
	);
}
