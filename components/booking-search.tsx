"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Minus, Plus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BookingSearchProps {
	onSearch: (searchData: {
		checkIn: Date | undefined;
		checkOut: Date | undefined;
		adults: number;
		children: number;
		rooms: number;
	}) => void;
}

export function BookingSearch({ onSearch }: BookingSearchProps) {
	const [checkIn, setCheckIn] = useState<Date>();
	const [checkOut, setCheckOut] = useState<Date>();
	const [adults, setAdults] = useState(2);
	const [children, setChildren] = useState(0);
	const [rooms, setRooms] = useState(1);
	const [isGuestPopoverOpen, setIsGuestPopoverOpen] = useState(false);

	const handleSearch = () => {
		onSearch({
			checkIn,
			checkOut,
			adults,
			children,
			rooms,
		});
	};

	const incrementGuests = (type: "adults" | "children" | "rooms") => {
		switch (type) {
			case "adults":
				setAdults((prev) => Math.min(prev + 1, 10));
				break;
			case "children":
				setChildren((prev) => Math.min(prev + 1, 10));
				break;
			case "rooms":
				setRooms((prev) => Math.min(prev + 1, 5));
				break;
		}
	};

	const decrementGuests = (type: "adults" | "children" | "rooms") => {
		switch (type) {
			case "adults":
				setAdults((prev) => Math.max(prev - 1, 1));
				break;
			case "children":
				setChildren((prev) => Math.max(prev - 1, 0));
				break;
			case "rooms":
				setRooms((prev) => Math.max(prev - 1, 1));
				break;
		}
	};

	const getGuestSummary = () => {
		const parts = [];
		parts.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
		if (children > 0) {
			parts.push(`${children} Child${children > 1 ? "ren" : ""}`);
		}
		parts.push(`${rooms} Room${rooms > 1 ? "s" : ""}`);
		return parts.join(" - ");
	};

	return (
		<div className=' rounded-lg  mb-6'>
			<div className='grid grid-cols-1 md:grid-cols-7 gap-4 '>
				{/* Check-In Date */}
				<div className='grid grid-cols-4 col-span-5 gap-4  border-1 border-[#007DD0] px-5 py-2 rounded-lg'>
					<div>
						<label className='block text-sm  mb-2 text-[#626262]'>
							Check-In
						</label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant='outline'
									className={cn(
										"w-full justify-start text-left font-normal bg-[#F6F6F6] border-0 rounded-4xl ",
										!checkIn && "text-muted-foreground"
									)}
								>
									<Image
										src='/images/icons/calender.svg'
										alt='Calendar'
										width={24}
										height={24}
									/>
									{checkIn ? format(checkIn, "EEE dd MMM yyyy") : "Select date"}
								</Button>
							</PopoverTrigger>
							<PopoverContent
								className='w-auto p-0'
								align='start'
							>
								<Calendar
									mode='single'
									selected={checkIn}
									onSelect={setCheckIn}
									disabled={(date) => date < new Date()}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</div>

					{/* Check-Out Date */}
					<div>
						<label className='block text-sm  mb-2 text-[#626262]'>
							Check-Out
						</label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant='outline'
									className={cn(
										"w-full justify-start text-left font-normal bg-[#F6F6F6] border-0 rounded-4xl ",
										!checkOut && "text-muted-foreground"
									)}
								>
									<Image
										src='/images/icons/calender.svg'
										alt='Calendar'
										width={24}
										height={24}
									/>
									{checkOut
										? format(checkOut, "EEE dd MMM yyyy")
										: "Select date"}
								</Button>
							</PopoverTrigger>
							<PopoverContent
								className='w-auto p-0'
								align='start'
							>
								<Calendar
									mode='single'
									selected={checkOut}
									onSelect={setCheckOut}
									disabled={(date) =>
										date < new Date() || (checkIn ? date <= checkIn : false)
									}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</div>

					{/* Room & Guest Selector */}
					<div>
						<label className='block text-sm mb-2 text-[#626262]'>
							Room & Guest
						</label>
						<Popover
							open={isGuestPopoverOpen}
							onOpenChange={setIsGuestPopoverOpen}
						>
							<PopoverTrigger asChild>
								<Button
									variant='outline'
									className='w-full justify-start text-left font-normal bg-[#F6F6F6] border-0 rounded-4xl '
								>
									<Image
										src='/images/icons/homeBlue.svg'
										alt='Calendar'
										width={24}
										height={24}
									/>
									<span className='text-sm'>{getGuestSummary()}</span>
								</Button>
							</PopoverTrigger>
							<PopoverContent
								className='w-80 p-4'
								align='start'
							>
								<div className='space-y-4'>
									{/* Adults */}
									<div className='flex items-center justify-between'>
										<div>
											<div className='font-medium'>Adults</div>
											<div className='text-sm text-gray-500'>
												Ages 13 or above
											</div>
										</div>
										<div className='flex items-center space-x-2'>
											<Button
												variant='outline'
												size='sm'
												onClick={() => decrementGuests("adults")}
												disabled={adults <= 1}
												className='h-8 w-8 p-0'
											>
												<Minus className='h-3 w-3' />
											</Button>
											<span className='w-8 text-center'>{adults}</span>
											<Button
												variant='outline'
												size='sm'
												onClick={() => incrementGuests("adults")}
												disabled={adults >= 10}
												className='h-8 w-8 p-0'
											>
												<Plus className='h-3 w-3' />
											</Button>
										</div>
									</div>

									{/* Children */}
									<div className='flex items-center justify-between'>
										<div>
											<div className='font-medium'>Children</div>
											<div className='text-sm text-gray-500'>Ages 0-12</div>
										</div>
										<div className='flex items-center space-x-2'>
											<Button
												variant='outline'
												size='sm'
												onClick={() => decrementGuests("children")}
												disabled={children <= 0}
												className='h-8 w-8 p-0'
											>
												<Minus className='h-3 w-3' />
											</Button>
											<span className='w-8 text-center'>{children}</span>
											<Button
												variant='outline'
												size='sm'
												onClick={() => incrementGuests("children")}
												disabled={children >= 10}
												className='h-8 w-8 p-0'
											>
												<Plus className='h-3 w-3' />
											</Button>
										</div>
									</div>

									{/* Rooms */}
									<div className='flex items-center justify-between'>
										<div>
											<div className='font-medium'>Rooms</div>
											<div className='text-sm text-gray-500'>
												Number of rooms
											</div>
										</div>
										<div className='flex items-center space-x-2'>
											<Button
												variant='outline'
												size='sm'
												onClick={() => decrementGuests("rooms")}
												disabled={rooms <= 1}
												className='h-8 w-8 p-0'
											>
												<Minus className='h-3 w-3' />
											</Button>
											<span className='w-8 text-center'>{rooms}</span>
											<Button
												variant='outline'
												size='sm'
												onClick={() => incrementGuests("rooms")}
												disabled={rooms >= 5}
												className='h-8 w-8 p-0'
											>
												<Plus className='h-3 w-3' />
											</Button>
										</div>
									</div>

									<div className='pt-2'>
										<Button
											onClick={() => setIsGuestPopoverOpen(false)}
											className='w-full bg-blue-600 hover:bg-blue-700'
										>
											Done
										</Button>
									</div>
								</div>
							</PopoverContent>
						</Popover>
					</div>

					{/* Search Button */}
					<div className='flex items-end'>
						<Button
							onClick={handleSearch}
							className='w-2/3 bg-blue-600 hover:bg-blue-700 text-white rounded-full'
							disabled={!checkIn || !checkOut}
						>
							Search
						</Button>
					</div>
				</div>
				<div className='col-span-2 hidden md:block'></div>
			</div>
		</div>
	);
}
