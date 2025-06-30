"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Bed, Users, Square } from "lucide-react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function SimilarHotels() {
	const hotels = [
		{
			id: 1,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/placeholder.svg?height=200&width=300",
			beds: 2,
			persons: 2,
			area: 1200,
		},
		{
			id: 2,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/placeholder.svg?height=200&width=300",
			beds: 2,
			persons: 2,
			area: 1200,
		},
		{
			id: 3,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/placeholder.svg?height=200&width=300",
			beds: 2,
			persons: 2,
			area: 1200,
		},
		{
			id: 4,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/placeholder.svg?height=200&width=300",
			beds: 2,
			persons: 2,
			area: 1200,
		},
		{
			id: 5,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/placeholder.svg?height=200&width=300",
			beds: 2,
			persons: 2,
			area: 1200,
		},
		{
			id: 6,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/placeholder.svg?height=200&width=300",
			beds: 2,
			persons: 2,
			area: 1200,
		},
	];

	const HotelCard = ({ hotel }: { hotel: (typeof hotels)[0] }) => (
		<Card className='w-full bg-white shadow-sm border border-gray-200'>
			<CardContent className='p-0'>
				<div className='relative'>
					<Image
						src={hotel.image || "/placeholder.svg"}
						alt={hotel.name}
						width={300}
						height={200}
						className='w-full h-48 object-cover rounded-t-lg'
					/>
					<Button
						variant='ghost'
						size='sm'
						className='absolute top-2 right-2 p-2 bg-white/80 hover:bg-white'
					>
						<Heart className='w-4 h-4' />
					</Button>
				</div>
				<div className='p-4'>
					<h4 className='font-semibold text-gray-900 mb-2'>{hotel.name}</h4>
					<p className='text-sm text-gray-600 mb-3 line-clamp-2'>
						{hotel.description}
					</p>

					<div className='flex items-center space-x-4 mb-3 text-sm text-gray-600'>
						<div className='flex items-center space-x-1'>
							<Bed className='w-4 h-4' />
							<span>{hotel.beds}</span>
						</div>
						<div className='flex items-center space-x-1'>
							<Users className='w-4 h-4' />
							<span>{hotel.persons} persons</span>
						</div>
						<div className='flex items-center space-x-1'>
							<Square className='w-4 h-4' />
							<span>{hotel.area} sq ft</span>
						</div>
					</div>

					<div className='flex items-center justify-between mb-3'>
						<div>
							<span className='text-lg font-bold text-gray-900'>
								{hotel.price}
							</span>
							<span className='text-sm text-gray-600 ml-1'>per night</span>
						</div>
					</div>

					<Button className='w-full bg-blue-600 hover:bg-blue-700'>
						Book Now
					</Button>
				</div>
			</CardContent>
		</Card>
	);

	return (
		<div className='bg-white rounded-lg p-6 shadow-sm'>
			<h3 className='text-xl font-semibold mb-6 text-gray-900'>
				You may also like
			</h3>

			{/* First Row */}
			<div className='mb-8'>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={16}
					slidesPerView={1}
					navigation={{
						nextEl: ".swiper-button-next-1",
						prevEl: ".swiper-button-prev-1",
					}}
					pagination={{
						clickable: true,
						el: ".swiper-pagination-1",
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
						1280: {
							slidesPerView: 4,
						},
					}}
					className='hotel-swiper-1'
				>
					{hotels.map((hotel, index) => (
						<SwiperSlide key={`row1-${hotel.id}-${index}`}>
							<HotelCard hotel={hotel} />
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom Navigation Buttons for Row 1 */}
				<div className='flex justify-center items-center mt-4 space-x-4'>
					<button className='swiper-button-prev-1 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'>
						←
					</button>
					<div className='swiper-pagination-1'></div>
					<button className='swiper-button-next-1 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'>
						→
					</button>
				</div>
			</div>

			{/* Second Row */}
			<div>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={16}
					slidesPerView={1}
					navigation={{
						nextEl: ".swiper-button-next-2",
						prevEl: ".swiper-button-prev-2",
					}}
					pagination={{
						clickable: true,
						el: ".swiper-pagination-2",
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
						1280: {
							slidesPerView: 4,
						},
					}}
					className='hotel-swiper-2'
				>
					{hotels.map((hotel, index) => (
						<SwiperSlide key={`row2-${hotel.id}-${index}`}>
							<HotelCard hotel={hotel} />
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom Navigation Buttons for Row 2 */}
				<div className='flex justify-center items-center mt-4 space-x-4'>
					<button className='swiper-button-prev-2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'>
						←
					</button>
					<div className='swiper-pagination-2'></div>
					<button className='swiper-button-next-2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'>
						→
					</button>
				</div>
			</div>
		</div>
	);
}
