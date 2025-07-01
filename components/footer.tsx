"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
	return (
		<footer className='bg-blue-900 text-white'>
			<div className='max-w-7xl mx-auto px-6 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-[1fr_0.1fr_1fr] gap-8 '>
					{/* Company Info */}
					<div className='md:col-span-1 px-5 md:px-5 lg:px-17 pt-17 pb-0 '>
						<div className='flex items-center space-x-2 mb-4'>
							<Image
								src='/images/logoIconFooter.svg'
								alt='Logo'
								width={90}
								height={30}
								className=' object-cover'
							/>
						</div>
						<p className='text-sm text-blue-200 leading-relaxed'>
							Easy travel makes booking your next stay simple, affordable, and
							stress-free. From thousands of hotels to unique vacation rentals,
							we ensure every adventure is as easy to book as you find the
							perfect place to stay every time.
						</p>

						{/* Social Media Icons */}
						<div className='flex space-x-3 mt-4'>
							<Button
								variant='ghost'
								size='sm'
								className='p-2 text-blue-200 hover:text-white hover:bg-blue-800 '
							>
								<Twitter className='w-4 h-4 fill-white' />
							</Button>
							<Button
								variant='ghost'
								size='sm'
								className='p-2 text-blue-200 hover:text-white hover:bg-blue-800'
							>
								<Facebook className='w-4 h-4 fill-white' />
							</Button>
							<Button
								variant='ghost'
								size='sm'
								className='p-2 text-blue-200 hover:text-white hover:bg-blue-800'
							>
								<Instagram className='w-4 h-4' />
							</Button>
							<Button
								variant='ghost'
								size='sm'
								className='p-2 text-blue-200 hover:text-white hover:bg-blue-800'
							>
								<Image
									src='/images/git.svg'
									alt='Logo'
									width={17}
									height={17}
									className=' object-cover'
								/>
							</Button>
						</div>
					</div>
					<div className='hidden md:block w-[0.5px] h-1/2 bg-white self-end'></div>

					<div className='md:col-span-1 px-5 md:px-5 lg:px-17 pt-2 md:pt-17 pb-3 flex flex-col justify-start items-start gap-2   md:flex md:flex-row md:justify-between'>
						{/* Navigation Links */}

						<div className='space-y-3 flex flex-row gap-2 md:gap-0 justify-between  md:flex md:flex-col md:justify-start'>
							<a
								href='#'
								className='block text-blue-200 hover:text-white transition-colors'
							>
								Home
							</a>
							<a
								href='#'
								className='block text-blue-200 hover:text-white transition-colors'
							>
								Hotels
							</a>
							<a
								href='#'
								className='block text-blue-200 hover:text-white transition-colors'
							>
								House
							</a>
							<a
								href='#'
								className='block text-blue-200 hover:text-white transition-colors'
							>
								About Us
							</a>
							<a
								href='#'
								className='block text-blue-200 hover:text-white transition-colors'
							>
								Contact Us
							</a>
						</div>

						{/* Download App */}
						<div className=''>
							{/* Contact Information */}

							<div className='space-y-3 mt-4 md:mt-0'>
								<div className='flex items-center space-x-2 text-blue-200'>
									<Phone className='w-4 h-4' />
									<span className='text-sm'>+1 (555) 123-4567</span>
								</div>
								<div className='flex items-center space-x-2 text-blue-200'>
									<Mail className='w-4 h-4' />
									<span className='text-sm'>support@yourcompany.com</span>
								</div>
							</div>

							{/* App */}
							<div className='w-full flex flex-row justify-start md:justify-between items-center mt-4 md:mt-10'>
								<h4 className='font-normal text-lg mb-4 text-white'>
									Download Our App
								</h4>
								<div className='space-y-2 justify-around'>
									<Button
										variant='ghost'
										size='sm'
										className='p-2 text-blue-200 hover:text-white hover:bg-transparent  hover:cursor-pointer'
									>
										<Image
											src='/images/play-store.svg'
											alt='Logo'
											width={34}
											height={34}
											className=' object-cover'
										/>
									</Button>
									<Button
										variant='ghost'
										size='sm'
										className='p-2 text-blue-200 hover:text-white hover:bg-transparent hover:cursor-pointer'
									>
										<Image
											src='/images/apple.svg'
											alt='Logo'
											width={34}
											height={34}
											className=' object-cover'
										/>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='px-5 md:px-17 pt-5 pb-3'>
					<div className='flex flex-col justify-start md:flex-row  md:justify-between md:items-center'>
						<div className='text-sm text-blue-200 mb-4 md:mb-0 flex flex-row justify-start items-center'>
							<Image
								src='/images/Pin_alt_light.svg'
								alt='Logo'
								width={23}
								height={24}
								className=' object-cover'
							/>
							<span>123 Travel St, Suite 100, City, Country</span>
						</div>
						<div className='text-sm text-blue-200'>
							© 2023, All Rights Reserved
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
