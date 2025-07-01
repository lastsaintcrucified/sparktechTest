"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, Save, Share2 } from "lucide-react";

interface HotelHeroProps {
	name: string;
	description: string;
}

export function HotelHero({ name, description }: HotelHeroProps) {
	return (
		<div
			id='#home'
			className='flex flex-col-reverse   md:flex-row md:justify-between md:items-start mb-6'
		>
			<div className='flex-1'>
				<h1 className='text-3xl font-bold text-gray-900 mb-2'>{name}</h1>
				<p className='text-gray-600 max-w-md'>{description}</p>
			</div>
			<div className='flex space-x-3 mb-5 md:mb-0 md:ml-6'>
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
					<span className='hidden md:block'>Share</span>
				</Button>
				<Button className='bg-blue-600 hover:bg-blue-700 px-6'>
					<Save className='w-4 h-4 md:hidden' />
					<span className='hidden md:block'>Reserve →</span>
				</Button>
			</div>
		</div>
	);
}
