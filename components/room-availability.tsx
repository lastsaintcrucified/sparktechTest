/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Wind, Bath, Loader2 } from "lucide-react";
import { differenceInDays } from "date-fns";
import Image from "next/image";

interface SearchData {
	checkIn: Date | undefined;
	checkOut: Date | undefined;
	adults: number;
	children: number;
	rooms: number;
}

interface RoomAvailabilityProps {
	searchData?: SearchData;
}

export function RoomAvailability({ searchData }: RoomAvailabilityProps) {
	const [isLoading, setIsLoading] = useState(false);
	const [selectedRooms, setSelectedRooms] = useState<{ [key: string]: number }>(
		{}
	);
	const [filteredRooms, setFilteredRooms] = useState<any[]>([]);

	const allRoomTypes = [
		{
			id: "twin-room",
			type: "Twin Room",
			beds: "2 single beds",
			size: "1200 sq ft",
			maxGuests: 2,
			basePrice: 282,
			amenities: ["Air condition", "Bathroom", "TV", "WIFI"],
			choices: ["Breakfast included", "Only 4 rooms left"],
			available: true,
		},
		{
			id: "deluxe-double",
			type: "Deluxe Double Room",
			beds: "1 king bed",
			size: "1400 sq ft",
			maxGuests: 2,
			basePrice: 320,
			amenities: ["Air condition", "Bathroom", "TV", "WIFI"],
			choices: ["Breakfast included", "Only 2 rooms left"],
			available: true,
		},
		{
			id: "family-suite",
			type: "Family Suite",
			beds: "2 single beds",
			size: "1800 sq ft",
			maxGuests: 4,
			basePrice: 450,
			amenities: ["Air condition", "Bathroom", "TV", "WIFI"],
			choices: ["Breakfast included", "Perfect for families"],
			available: true,
		},
		{
			id: "executive-suite",
			type: "Executive Suite",
			beds: "1 king bed",
			size: "2000 sq ft",
			maxGuests: 2,
			basePrice: 580,
			amenities: ["Air condition", "Bathroom", "TV", "WIFI"],
			choices: ["Breakfast included", "Business facilities"],
			available: true,
		},
	];

	useEffect(() => {
		if (searchData) {
			performSearch();
		} else {
			setFilteredRooms(allRoomTypes);
		}
	}, [searchData]);

	const performSearch = async () => {
		if (!searchData) return;

		setIsLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 1500));

		const totalGuests = searchData.adults + searchData.children;
		const availableRooms = allRoomTypes.filter((room) => {
			return room.maxGuests >= totalGuests || searchData.rooms > 1;
		});

		const updatedRooms = availableRooms.map((room) => ({
			...room,
			available: Math.random() > 0.1,
			choices: [
				"Breakfast included",
				`Only ${Math.floor(Math.random() * 5) + 1} rooms left`,
			],
		}));

		setFilteredRooms(updatedRooms);
		setIsLoading(false);
	};

	const getAmenityIcon = (amenity: string) => {
		switch (amenity.toLowerCase()) {
			case "air condition":
				return <Wind className='w-5 h-5' />;
			case "bathroom":
				return <Bath className='w-5 h-5 ml-1 mr-0' />;
			case "tv":
				return (
					<Image
						src='/images/icons/presentation-01.svg'
						alt='TV'
						width={24}
						height={24}
						className='w-5 h-5'
					/>
				);
			case "wifi":
				return (
					<Image
						src='/images/icons/wifi-square-01.svg'
						alt='WiFi'
						width={24}
						height={24}
						className='w-5 h-5 lg:ml-20'
					/>
				);
			default:
				return <></>;
		}
	};

	const calculatePrice = (basePrice: number) => {
		if (!searchData?.checkIn || !searchData?.checkOut) return basePrice;
		const nights = differenceInDays(searchData.checkOut, searchData.checkIn);
		return basePrice * Math.max(nights, 1);
	};

	const getDuration = () => {
		if (!searchData?.checkIn || !searchData?.checkOut) return "1 week";
		const nights = differenceInDays(searchData.checkOut, searchData.checkIn);
		if (nights === 1) return "1 night";
		if (nights === 7) return "1 week";
		return `${nights} nights`;
	};

	const handleRoomSelection = (roomId: string, quantity: number) => {
		setSelectedRooms((prev) => ({
			...prev,
			[roomId]: quantity,
		}));
	};

	const getTotalSelectedRooms = () => {
		return Object.values(selectedRooms).reduce((sum, count) => sum + count, 0);
	};

	if (isLoading) {
		return (
			<div className='border rounded-lg overflow-hidden bg-white shadow-sm'>
				<div className='bg-blue-600 text-white p-4'>
					<div className='hidden md:grid md:grid-cols-6 gap-4 text-sm font-medium'>
						<span>Room type</span>
						<span>Number of guests</span>
						<span>Price for {getDuration()}</span>
						<span>Your choices</span>
						<span>Select rooms</span>
						<span>Your choices</span>
					</div>
					<div className='md:hidden text-sm font-medium'>Room Availability</div>
				</div>
				<div className='p-8 text-center'>
					<Loader2 className='w-8 h-8 animate-spin mx-auto mb-4 text-blue-600' />
					<p className='text-gray-600'>Searching for available rooms...</p>
				</div>
			</div>
		);
	}

	return (
		<div className='overflow-hidden bg-white '>
			{/* Desktop Table Header */}
			<div className='bg-blue-600 text-white pl-1 pr-4 py-4 justify-start'>
				<div className='hidden md:grid md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 text-md font-medium'>
					<span>Room type</span>
					<span>Number of guests</span>
					<span>Price for {getDuration()}</span>
					<span>Your choices</span>
					<span>Select rooms</span>
					<span>Your choices</span>
				</div>
				<div className='md:hidden text-sm font-medium'>Available Rooms</div>
			</div>

			{/* Table Rows */}
			{filteredRooms.length === 0 ? (
				<div className='p-8 text-center'>
					<p className='text-gray-600'>
						No rooms available for your search criteria. Please try different
						dates or guest numbers.
					</p>
				</div>
			) : (
				filteredRooms.map((room, index) => (
					<div
						key={room.id}
						className={`border-b-[#007DD05C] border-b-1 last:border-b-0 ${
							!room.available ? "bg-gray-50 opacity-60" : ""
						}`}
					>
						{/* Desktop Layout */}
						<div className='hidden md:grid md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 pl-1 pr-4 py-4 items-start '>
							{/* Room Type */}
							<div className=' space-y-3  border-r-[#007DD05C] border-r-1'>
								<div
									className={`font-bold text-sm ${
										room.available ? "text-blue-600" : "text-gray-500"
									}`}
								>
									{room.type}
									{!room.available && (
										<span className='text-red-500 text-xs ml-2'>
											(Unavailable)
										</span>
									)}
								</div>

								<div className='text-sm text-gray-600 flex items-center'>
									<span className='font-bold mr-1'>
										{room.beds.match(/^(\d+)(.*)/)?.[1]}
									</span>
									{room.beds.match(/^(\d+)(.*)/)?.[2]}
									<Image
										src='/images/icons/bed-single-01.svg'
										alt='bed'
										width={24}
										height={24}
										className='w-5 h-5 ml-1'
									/>
									<Image
										src='/images/icons/bed-single-01.svg'
										alt='bed'
										width={24}
										height={24}
										className='w-5 h-5 ml-1'
									/>
								</div>

								<div className='text-sm text-gray-500 flex items-center'>
									<Image
										src='/images/icons/door.svg'
										alt='room'
										width={24}
										height={24}
										className='w-5 h-5 mr-1'
									/>
									Room:
									<Image
										src='/images/icons/Full_Screen_Corner_Light.svg'
										alt='size'
										width={24}
										height={24}
										className='w-5 h-5 ml-6 mr-0'
									/>
									{room.size}
								</div>

								<div className='flex flex-wrap gap-3 mt-2'>
									{room.amenities.map((amenity: string, i: number) => (
										<div
											key={i}
											className='flex items-center text-sm text-gray-600'
										>
											{getAmenityIcon(amenity)}
											<span className='ml-1'>{amenity}</span>
										</div>
									))}
								</div>
							</div>

							{/* Number of Guests */}
							<div className='flex justify-start border-r-[#007DD05C] border-r-1 min-h-full items-start'>
								{[...Array(Math.min(room.maxGuests, 4))].map((_, i) => (
									<Image
										key={i}
										src='/images/icons/User.svg'
										alt='guest'
										width={24}
										height={24}
										className='w-6 h-6 mr-1'
									/>
								))}
								{room.maxGuests > 4 && (
									<span className='text-sm text-gray-600'>
										+{room.maxGuests - 4}
									</span>
								)}
							</div>

							{/* Price */}
							<div className='text-left  min-h-full items-start border-r-[#007DD05C] border-r-1'>
								<div className='text-xl font-bold'>
									${calculatePrice(room.basePrice)}
								</div>
								{searchData?.checkIn && searchData?.checkOut && (
									<div className='text-xs text-gray-500'>
										${room.basePrice}/night
									</div>
								)}
							</div>

							{/* Your Choices */}
							<div className='space-y-1  min-h-full items-start border-r-[#007DD05C] border-r-1'>
								{room.choices.map((choice: string, i: number) => (
									<div
										key={i}
										className={`text-sm ${
											i === 0 ? "text-green-600" : "text-red-600"
										}`}
									>
										{choice}
									</div>
								))}
							</div>

							{/* Select Rooms */}
							<div className='flex min-h-full items-start border-r-[#007DD05C] border-r-1'>
								<Select
									value={selectedRooms[room.id]?.toString() || "0"}
									onValueChange={(value) =>
										handleRoomSelection(room.id, Number.parseInt(value))
									}
									disabled={!room.available}
								>
									<SelectTrigger className='w-12 rounded-full px-1'>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='0'>0</SelectItem>
										<SelectItem value='1'>1</SelectItem>
										<SelectItem value='2'>2</SelectItem>
										<SelectItem value='3'>3</SelectItem>
									</SelectContent>
								</Select>
							</div>

							{/* Reserve Button */}
							<div className='flex justify-centeritems-start'>
								<Button
									className=' bg-[#007DD0] hover:bg-blue-700 text-sm px-6 rounded-full'
									disabled={
										!room.available || (selectedRooms[room.id] || 0) === 0
									}
								>
									Reserve
								</Button>
							</div>
						</div>

						{/* Mobile Layout */}
						<div className='md:hidden p-4 space-y-4'>
							<div className='flex justify-between items-start'>
								<div className='flex-1'>
									<div
										className={`font-bold text-base ${
											room.available ? "text-blue-600" : "text-gray-500"
										}`}
									>
										{room.type}
										{!room.available && (
											<span className='text-red-500 text-xs ml-2'>
												(Unavailable)
											</span>
										)}
									</div>

									<div className='text-sm text-gray-600 flex items-center mt-1'>
										<span className='font-bold mr-1'>
											{room.beds.match(/^(\d+)(.*)/)?.[1]}
										</span>
										{room.beds.match(/^(\d+)(.*)/)?.[2]}
										<Image
											src='/images/icons/bed-single-01.svg'
											alt='bed'
											width={16}
											height={16}
											className='w-4 h-4 ml-1'
										/>
									</div>

									<div className='text-sm text-gray-500 flex items-center mt-1'>
										<Image
											src='/images/icons/door.svg'
											alt='room'
											width={16}
											height={16}
											className='w-4 h-4 mr-1'
										/>
										Room: {room.size}
									</div>
								</div>

								<div className='text-right'>
									<div className='text-xl font-bold'>
										${calculatePrice(room.basePrice)}
									</div>
									{searchData?.checkIn && searchData?.checkOut && (
										<div className='text-xs text-gray-500'>
											${room.basePrice}/night
										</div>
									)}
								</div>
							</div>

							<div className='flex items-center justify-between'>
								<div className='flex items-center'>
									{[...Array(Math.min(room.maxGuests, 4))].map((_, i) => (
										<Image
											key={i}
											src='/images/icons/User.svg'
											alt='guest'
											width={20}
											height={20}
											className='w-5 h-5 mr-1'
										/>
									))}
									{room.maxGuests > 4 && (
										<span className='text-sm text-gray-600'>
											+{room.maxGuests - 4}
										</span>
									)}
								</div>
							</div>

							<div className='flex flex-wrap gap-2'>
								{room.amenities.map((amenity: string, i: number) => (
									<div
										key={i}
										className='flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded'
									>
										{getAmenityIcon(amenity)}
										<span className='ml-1'>{amenity}</span>
									</div>
								))}
							</div>

							<div className='space-y-1'>
								{room.choices.map((choice: string, i: number) => (
									<div
										key={i}
										className={`text-sm ${
											i === 0 ? "text-green-600" : "text-red-600"
										}`}
									>
										{choice}
									</div>
								))}
							</div>

							<div className='flex items-center justify-between pt-2 border-t'>
								<div className='flex items-center space-x-3'>
									<span className='text-sm text-gray-600'>Rooms:</span>
									<Select
										value={selectedRooms[room.id]?.toString() || "0"}
										onValueChange={(value) =>
											handleRoomSelection(room.id, Number.parseInt(value))
										}
										disabled={!room.available}
									>
										<SelectTrigger className='w-16'>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='0'>0</SelectItem>
											<SelectItem value='1'>1</SelectItem>
											<SelectItem value='2'>2</SelectItem>
											<SelectItem value='3'>3</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<Button
									className='bg-blue-600 hover:bg-blue-700 text-sm px-6'
									disabled={
										!room.available || (selectedRooms[room.id] || 0) === 0
									}
								>
									Reserve
								</Button>
							</div>
						</div>
					</div>
				))
			)}

			{/* Summary */}
			{getTotalSelectedRooms() > 0 && (
				<div className='bg-blue-50 p-4 border-t'>
					<div className='flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0'>
						<span className='font-medium'>
							Total rooms selected: {getTotalSelectedRooms()}
						</span>
						<Button className='bg-blue-600 hover:bg-blue-700 w-full sm:w-auto'>
							Continue with Selection
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}
