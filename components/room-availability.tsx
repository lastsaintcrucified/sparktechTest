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
import { Users, Bed, Wind, Bath, Tv, Wifi, Loader2 } from "lucide-react";
import { differenceInDays } from "date-fns";

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
			amenities: ["Air condition", "Bathroom", "TV", "WiFi"],
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
			amenities: ["Air condition", "Bathroom", "TV", "WiFi", "Mini Bar"],
			choices: ["Breakfast included", "Only 2 rooms left"],
			available: true,
		},
		{
			id: "family-suite",
			type: "Family Suite",
			beds: "1 king bed + 2 single beds",
			size: "1800 sq ft",
			maxGuests: 4,
			basePrice: 450,
			amenities: [
				"Air condition",
				"Bathroom",
				"TV",
				"WiFi",
				"Mini Bar",
				"Balcony",
			],
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
			amenities: [
				"Air condition",
				"Bathroom",
				"TV",
				"WiFi",
				"Mini Bar",
				"Balcony",
				"Work Desk",
			],
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

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		const totalGuests = searchData.adults + searchData.children;

		// Filter rooms based on guest capacity
		const availableRooms = allRoomTypes.filter((room) => {
			return room.maxGuests >= totalGuests || searchData.rooms > 1;
		});

		// Update availability based on search criteria
		const updatedRooms = availableRooms.map((room) => ({
			...room,
			available: Math.random() > 0.1, // 90% availability simulation
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
				return <Wind className='w-3 h-3' />;
			case "bathroom":
				return <Bath className='w-3 h-3' />;
			case "tv":
				return <Tv className='w-3 h-3' />;
			case "wifi":
				return <Wifi className='w-3 h-3' />;
			default:
				return <div className='w-3 h-3 bg-gray-400 rounded-full' />;
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
					<div className='grid grid-cols-6 gap-4 text-sm font-medium'>
						<span>Room type</span>
						<span>Number of guests</span>
						<span>Price for {getDuration()}</span>
						<span>Your choices</span>
						<span>Select rooms</span>
						<span>Your choices</span>
					</div>
				</div>
				<div className='p-8 text-center'>
					<Loader2 className='w-8 h-8 animate-spin mx-auto mb-4 text-blue-600' />
					<p className='text-gray-600'>Searching for available rooms...</p>
				</div>
			</div>
		);
	}

	return (
		<div className='border rounded-lg overflow-hidden bg-white shadow-sm'>
			{/* Table Header */}
			<div className='bg-blue-600 text-white p-4'>
				<div className='grid grid-cols-6 gap-4 text-sm font-medium'>
					<span>Room type</span>
					<span>Number of guests</span>
					<span>Price for {getDuration()}</span>
					<span>Your choices</span>
					<span>Select rooms</span>
					<span>Your choices</span>
				</div>
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
						className={`border-b last:border-b-0 ${
							!room.available ? "bg-gray-50 opacity-60" : ""
						}`}
					>
						<div className='grid grid-cols-6 gap-4 p-4 items-start'>
							{/* Room Type */}
							<div className='space-y-2'>
								<div
									className={`font-medium ${
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
									<Bed className='w-3 h-3 mr-1' />
									{room.beds}
								</div>
								<div className='text-xs text-gray-500 flex items-center'>
									<span className='mr-1'>📐</span>
									Room: {room.size}
								</div>

								{/* Amenities */}
								<div className='flex flex-wrap gap-2 mt-2'>
									{room.amenities.map((amenity: string, i: number) => (
										<div
											key={i}
											className='flex items-center text-xs text-gray-600'
										>
											{getAmenityIcon(amenity)}
											<span className='ml-1'>{amenity}</span>
										</div>
									))}
								</div>
							</div>

							{/* Number of Guests */}
							<div className='flex items-center justify-center'>
								{[...Array(Math.min(room.maxGuests, 4))].map((_, i) => (
									<Users
										key={i}
										className='w-4 h-4 text-gray-600 mr-1'
									/>
								))}
								{room.maxGuests > 4 && (
									<span className='text-sm text-gray-600'>
										+{room.maxGuests - 4}
									</span>
								)}
							</div>

							{/* Price */}
							<div className='text-center'>
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

							{/* Select Rooms */}
							<div className='flex justify-center'>
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

							{/* Reserve Button */}
							<div className='flex justify-center'>
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
					<div className='flex justify-between items-center'>
						<span className='font-medium'>
							Total rooms selected: {getTotalSelectedRooms()}
						</span>
						<Button className='bg-blue-600 hover:bg-blue-700'>
							Continue with Selection
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}
