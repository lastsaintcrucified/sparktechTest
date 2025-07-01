/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PropertyInfoProps {
	searchData?: {
		checkIn: Date | undefined;
		checkOut: Date | undefined;
		adults: number;
		children: number;
		rooms: number;
	};
}

export function PropertyInfo({ searchData }: PropertyInfoProps) {
	const [activeTab, setActiveTab] = useState("overview");

	const amenities = [
		{
			icon: (
				<Image
					src='/images/icons/wifi-square.svg'
					alt='Wifi'
					width={24}
					height={24}
					className='w-4 h-4'
				/>
			),
			label: "Wifi",
		},
		{
			icon: (
				<Image
					src='/images/icons/restaurant.svg'
					alt='Resorts'
					width={24}
					height={24}
					className='w-4 h-4'
				/>
			),
			label: "Dining",
		},
		{
			icon: (
				<Image
					src='/images/icons/swimming.svg'
					alt='Swimming Pool'
					width={24}
					height={24}
					className='w-4 h-4'
				/>
			),
			label: "Swimming Pool",
		},
		{
			icon: (
				<Image
					src='/images/icons/air-conditioner.svg'
					alt='Air Conditioning'
					width={24}
					height={24}
					className='w-4 h-4'
				/>
			),
			label: "Air Conditioning",
		},
		{
			icon: (
				<Image
					src='/images/icons/dumbbell.svg'
					alt='Gym'
					width={24}
					height={24}
					className='w-4 h-4'
				/>
			),
			label: "Gym",
		},
	];

	const getBookingSummary = () => {
		if (!searchData?.checkIn || !searchData?.checkOut) {
			return {
				duration: "1 week",
				guests: "2 adults, 1 child",
				price: "$6,112",
			};
		}

		const nights = Math.ceil(
			(searchData.checkOut.getTime() - searchData.checkIn.getTime()) /
				(1000 * 60 * 60 * 24)
		);
		const duration =
			nights === 1 ? "1 night" : nights === 7 ? "1 week" : `${nights} nights`;
		const guests = `${searchData.adults} adult${
			searchData.adults > 1 ? "s" : ""
		}${
			searchData.children > 0
				? `, ${searchData.children} child${
						searchData.children > 1 ? "ren" : ""
				  }`
				: ""
		}`;
		const basePrice = 873; // Base price per night
		const totalPrice = basePrice * nights;

		return {
			duration,
			guests,
			price: `$${totalPrice.toLocaleString()}`,
		};
	};

	const bookingSummary = getBookingSummary();

	const renderTabContent = () => {
		switch (activeTab) {
			case "overview":
				return (
					<div className='space-y-8'>
						{/* Property Type Section */}
						<div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
							<div>
								<div className='inline-block mb-4'>
									<h3 className='font-semibold text-gray-900'>Property Type</h3>
								</div>
								<div className='flex items-center space-x-2'>
									<div className='flex items-center space-x-2'>
										<Image
											src='/images/icons/house-2.svg'
											alt='Resorts'
											width={24}
											height={24}
											className='w-4 h-4'
										/>
										<span className='text-gray-700'>Resorts</span>
									</div>
								</div>
							</div>
							<div>
								<div className=' inline-block mb-4'>
									<h3 className='font-semibold text-gray-900'>Property Type</h3>
								</div>
								<div className='flex items-center space-x-2'>
									<Image
										src='/images/icons/home.svg'
										alt='square footage'
										width={24}
										height={24}
										className='w-4 h-4'
									/>
									<span className='text-gray-700'>12000 sqft</span>
								</div>
							</div>
						</div>

						{/* Features Section */}
						<div className='w-1/2'>
							<h3 className='font-semibold mb-6 text-gray-900 text-lg'>
								Features
							</h3>
							<div className='flex flex-wrap gap-6'>
								{amenities.map((amenity, index) => (
									<div
										key={index}
										className='flex items-center space-x-3 text-gray-700'
									>
										<div className='text-gray-600'>{amenity.icon}</div>
										<span className='text-base'>{amenity.label}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				);
			case "features":
				return (
					<div className='space-y-6'>
						<h3 className='text-lg font-semibold text-gray-900'>
							Hotel Features & Amenities
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<h4 className='font-medium text-gray-900 mb-4'>
									Room Features
								</h4>
								<ul className='space-y-2 text-gray-700'>
									<li>• Air conditioning</li>
									<li>• Free WiFi</li>
									<li>• Flat-screen TV</li>
									<li>• Mini refrigerator</li>
									<li>• Private bathroom</li>
									<li>• Room service</li>
								</ul>
							</div>
							<div>
								<h4 className='font-medium text-gray-900 mb-4'>
									Hotel Facilities
								</h4>
								<ul className='space-y-2 text-gray-700'>
									<li>• Swimming pool</li>
									<li>• Fitness center</li>
									<li>• Restaurant & bar</li>
									<li>• 24-hour front desk</li>
									<li>• Business center</li>
									<li>• Parking available</li>
								</ul>
							</div>
						</div>
					</div>
				);
			case "reviews":
				return (
					<div className='space-y-6'>
						<h3 className='text-lg font-semibold text-gray-900'>
							Guest Reviews
						</h3>
						<div className='space-y-4'>
							<div className='border rounded-lg p-4'>
								<div className='flex items-center space-x-2 mb-2'>
									<div className='flex text-yellow-400'>★★★★★</div>
									<span className='font-medium'>Excellent stay!</span>
								</div>
								<p className='text-gray-700 text-sm'>
									"Amazing hotel with great amenities. The room was spacious and
									clean, and the staff was very helpful."
								</p>
								<p className='text-gray-500 text-xs mt-2'>
									- John D., 2 weeks ago
								</p>
							</div>
							<div className='border rounded-lg p-4'>
								<div className='flex items-center space-x-2 mb-2'>
									<div className='flex text-yellow-400'>★★★★☆</div>
									<span className='font-medium'>Great location</span>
								</div>
								<p className='text-gray-700 text-sm'>
									"Perfect location with beautiful views. The swimming pool was
									a highlight of our stay."
								</p>
								<p className='text-gray-500 text-xs mt-2'>
									- Sarah M., 1 month ago
								</p>
							</div>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
			{/* Main Content */}
			<div className='md:col-span-2 bg-white '>
				{/* Tab Navigation */}

				<div className='flex items-center justify-between md:justify-start md:space-x-8 md:gap-4 mb-8 '>
					<button
						onClick={() => setActiveTab("overview")}
						className={`pb-2 text-xs md:text-[16px] font-medium transition-colors ${
							activeTab === "overview"
								? "text-blue-600 relative after:content-[''] after:block after:border-b-2 after:border-blue-600 after:w-1/2 after:mt-1 after:mx-0 "
								: "text-gray-600 hover:text-blue-600"
						}`}
					>
						Over View
					</button>
					<button
						onClick={() => setActiveTab("features")}
						className={`pb-2 text-xs md:text-[16px] font-medium transition-colors ${
							activeTab === "features"
								? "text-blue-600 relative after:content-[''] after:block after:border-b-2 after:border-blue-600 after:w-1/2 after:mt-1 after:mx-0"
								: "text-gray-600 hover:text-blue-600"
						}`}
					>
						Features
					</button>
					<button
						onClick={() => setActiveTab("reviews")}
						className={`pb-2 text-xs md:text-[16px] font-medium transition-colors ${
							activeTab === "reviews"
								? "text-blue-600 relative after:content-[''] after:block after:border-b-2 after:border-blue-600 after:w-1/2 after:mt-1 after:mx-0"
								: "text-gray-600 hover:text-blue-600"
						}`}
					>
						Reviews
					</button>
					<Button className='bg-[#007DD0] hover:bg-blue-700 rounded-4xl text-sm px-3 py-2'>
						<Image
							src='/images/icons/notification-bubble.svg'
							alt='Notification'
							width={24}
							height={24}
						/>
						<span className='hidden md:block'>Message</span>
					</Button>
				</div>

				{/* Tab Content */}
				{renderTabContent()}
			</div>

			{/* Booking Summary Card */}
			<div className='md:col-span-1'>
				<div className='w-full md:w-3/4 lg:w-4/5 bg-white  border-1 border-[#007DD0] rounded-lg px-6 py-20 shadow-sm sticky top-6 '>
					<div className='text-center space-y-4'>
						<div className='text-gray-600 text-sm'>
							{bookingSummary.duration}, {bookingSummary.guests}
						</div>
						<div className='text-2xl font-bold text-gray-900'>
							USD {bookingSummary.price}
						</div>
						<Button className='w-full bg-blue-600 hover:bg-blue-700 py-3 text-base font-medium'>
							Reserve
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
