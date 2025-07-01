"use client";

import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	ExternalLink,
	MessageCircle,
	User,
	Menu,
	X,
	Home,
	Hotel,
	DoorClosed,
	PersonStanding,
	Contact,
	DollarSign,
	Languages,
	List,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className='bg-[#E9F6FF] border-b border-gray-200 w-full px-11  py-3'>
			<div className='mx-auto flex items-center lg:justify-between'>
				{/* Logo and Navigation */}
				<div className='flex items-center space-x-8'>
					{!mobileMenuOpen && (
						<Image
							src='/images/logoIcon.svg'
							alt='Logo'
							width={90}
							height={30}
							className=' object-contain'
						/>
					)}

					<nav className='hidden lg:flex space-x-6'>
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
				<div className='hidden lg:flex lg:items-center lg:space-x-3'>
					{/* Currency Selector */}
					<Select defaultValue='eur'>
						<SelectTrigger className='w-18 h-9 bg-transparent rounded-2xl border-[#A5D3F1] border'>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='usd'>
								<span className='inline-block border-1 border-black rounded-full w-5 h-5 text-center'>
									$
								</span>
							</SelectItem>
							<SelectItem value='gbp'>
								<span className='inline-block border-1 border-black rounded-full w-5 h-5 text-center'>
									£
								</span>
							</SelectItem>
							<SelectItem value='eur'>
								<span className='inline-block border-1 border-black rounded-full w-5 h-5 text-center'>
									€
								</span>
							</SelectItem>
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
				<div className='lg:hidden  flex flex-row-reverse justify-between'>
					<div>
						<Button
							variant='ghost'
							size='icon'
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className='absolute top-2 right-6'
						>
							{mobileMenuOpen ? (
								<X className='h-10 w-10 text-red-700 ' />
							) : (
								<Menu className='h-6 w-6 ' />
							)}
						</Button>
					</div>
					{/* Mobile Navigation */}
					{mobileMenuOpen && (
						<div className='py-4 border-t border-gray-200'>
							<div className='flex flex-col space-y-4'>
								<Link
									href='#'
									className='border-b-blue-400 border-b-1 flex flex-row justify-start items-center text-blue-800 hover:text-blue-600 font-medium'
								>
									<Home className='w-4 h-4 mr-2' />
									Home
								</Link>
								<Link
									href='#'
									className='border-b-blue-400 border-b-1 flex flex-row justify-start items-center text-blue-800 hover:text-blue-600 font-medium'
								>
									<Hotel className='w-4 h-4 mr-2' />
									Hotels
								</Link>
								<Link
									href='#'
									className='border-b-blue-400 border-b-1 flex flex-row justify-start items-center text-blue-800 hover:text-blue-600 font-medium'
								>
									<DoorClosed className='w-4 h-4 mr-2' />
									House
								</Link>
								<Link
									href='#'
									className='border-b-blue-400 border-b-1 flex flex-row justify-start items-center text-blue-800 hover:text-blue-600 font-medium'
								>
									<PersonStanding className='w-4 h-4 mr-2' />
									About Us
								</Link>
								<Link
									href='#'
									className='border-b-blue-400 border-b-1 flex flex-row justify-start items-center text-blue-800 hover:text-blue-600 font-medium'
								>
									<Contact className='w-4 h-4 mr-2' />
									Contact Us
								</Link>
								{/* Currency Selector */}
								<div className='border-b-blue-400 border-b-1 flex flex-row justify-start'>
									<span className=' flex flex-row justify-start items-center text-blue-800 hover:text-blue-600 font-medium'>
										<DollarSign className='w-4 h-4 mr-2' />
										Currency:
									</span>
									<Select defaultValue='eur'>
										<SelectTrigger className='ml-2 w-16 h-9 bg-transparent rounded-2xl border-[#A5D3F1] border'>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='usd'>$</SelectItem>
											<SelectItem value='gbp'>£</SelectItem>
											<SelectItem value='eur'>€</SelectItem>
										</SelectContent>
									</Select>
								</div>

								{/* Country/Language Selector */}
								<div className='border-b-blue-400 border-b-1 flex flex-row justify-start'>
									<span className='flex flex-row justify-start items-center text-blue-800 hover:text-blue-600 font-medium'>
										<Languages className='w-4 h-4 mr-2' />
										Language:
									</span>
									<Select defaultValue='es'>
										<SelectTrigger className='ml-2 w-18 h-9 bg-transparent rounded-2xl border-[#A5D3F1] border'>
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
								</div>

								{/* List Property Link */}
								<a
									href='#'
									className='border-b-blue-400 border-b-1 flex flex-row justify-start items-center text-blue-800 hover:text-blue-600 font-medium'
								>
									<List className='w-4 h-4 mr-2' />
									List your property
								</a>

								{/* Refresh Button */}
								<Link
									href='#'
									className='border-b-blue-400 border-b-1 flex flex-row justify-start items-center text-blue-800 hover:text-blue-600 font-medium'
								>
									<MessageCircle className='w-4 h-4 mr-2' />
									Messages
								</Link>

								{/* User Profile */}
								<Link
									href='#'
									className='border-b-blue-400 border-b-1 flex flex-row justify-start items-center text-blue-800 hover:text-blue-600 font-medium'
								>
									<User className='mr-2 w-4 h-4' />
									Profile:
									<span className='text-lg ml-2 font-bold text-blue-900'>
										Sunan
									</span>
								</Link>
								<div className='flex items-center space-x-2'></div>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
