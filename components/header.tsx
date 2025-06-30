"use client";

import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ExternalLink, MessageCircle, User } from "lucide-react";
import Image from "next/image";

export function Header() {
	return (
		<header className='bg-[#E9F6FF] border-b border-gray-200 w-full px-11  py-3'>
			<div className=' mx-auto flex items-center justify-between'>
				{/* Logo and Navigation */}
				<div className='flex items-center space-x-8'>
					<Image
						src='/images/logoIcon.svg'
						alt='Logo'
						width={90}
						height={30}
						className='h-10 w-auto object-contain'
					/>

					<nav className='hidden md:flex space-x-6'>
						<a
							href='#'
							className='text-blue-600 font-medium hover:text-blue-700'
						>
							Home
						</a>
						<a
							href='#'
							className='text-gray-700 hover:text-blue-600'
						>
							Hotels
						</a>
						<a
							href='#'
							className='text-gray-700 hover:text-blue-600'
						>
							House
						</a>
						<a
							href='#'
							className='text-gray-700 hover:text-blue-600'
						>
							About Us
						</a>
						<a
							href='#'
							className='text-gray-700 hover:text-blue-600'
						>
							Contact Us
						</a>
					</nav>
				</div>

				{/* Right Side Controls */}
				<div className='flex items-center space-x-3'>
					{/* Currency Selector */}
					<Select defaultValue='eur'>
						<SelectTrigger className='w-16 h-9 bg-transparent rounded-2xl border-[#A5D3F1] border'>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='usd'>$</SelectItem>
							<SelectItem value='gbp'>£</SelectItem>
							<SelectItem value='eur'>€</SelectItem>
						</SelectContent>
					</Select>

					{/* Country/Language Selector */}
					<Select defaultValue='es'>
						<SelectTrigger className='w-18 h-9 bg-transparent rounded-2xl border-[#A5D3F1] border'>
							<div className='flex items-center'>
								<div className='w-5 h-5 bg-gradient-to-b from-red-500 via-yellow-400 to-red-500 rounded-full mr-1'></div>
							</div>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='es'>
								<div className='flex items-center'>
									<div className='w-5 h-5 bg-gradient-to-b from-red-500 via-yellow-400 to-red-500 rounded-full mr-2'></div>
									España
								</div>
							</SelectItem>
							<SelectItem value='us'>
								<div className='flex items-center'>
									<div className='w-5 h-5 bg-gradient-to-r from-blue-600 via-white to-red-500 rounded-full mr-2'></div>
									English
								</div>
							</SelectItem>
						</SelectContent>
					</Select>

					{/* List Property Link */}
					<a
						href='#'
						className='flex items-center text-sm text-gray-700 hover:text-blue-600 bg-transparent rounded-2xl border-[#A5D3F1] border px-4 py-2 transition-colors'
					>
						List your property
						<ExternalLink className='w-3 h-3 ml-1' />
					</a>

					{/* Refresh Button */}
					<Button
						variant='ghost'
						size='sm'
						className='p-2'
					>
						<MessageCircle className='w-6 h-6 text-[#A5D3F1]' />
					</Button>

					{/* User Profile */}
					<div className='flex items-center space-x-2 bg-gray-50 rounded-2xl border-[#A5D3F1] border px-3 py-2'>
						<User className='w-5 h-5 text-gray-600' />
						<span className='text-sm font-medium text-gray-900'>Sunan</span>
					</div>
				</div>
			</div>
		</header>
	);
}
