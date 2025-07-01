"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Bath, InfoIcon, ArrowLeft, ArrowRight } from "lucide-react";
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
			image: "/images/similar.jpg",
			beds: 2,
			persons: 2,
			area: 1200,
			star: 4.5,
		},
		{
			id: 2,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/images/similar.jpg",
			beds: 2,
			persons: 2,
			area: 1200,
			star: 4,
		},
		{
			id: 3,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/images/similar.jpg",
			beds: 2,
			persons: 2,
			area: 1200,
			star: 4.2,
		},
		{
			id: 4,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/images/similar.jpg",
			beds: 2,
			persons: 2,
			area: 1200,
			star: 4.5,
		},
		{
			id: 5,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/images/similar.jpg",
			beds: 2,
			persons: 2,
			area: 1200,
			star: 3.5,
		},
		{
			id: 6,
			name: "Sofitel Algiers Hamma Garden",
			description:
				"Sofitel Algiers Hamma Garden offers a luxurious accommodation overlooking the stunning botanical garden of Hamma.",
			price: 699,
			image: "/images/similar.jpg",
			beds: 2,
			persons: 2,
			area: 1200,
			star: 4.5,
		},
	];

	const HotelCard = ({ hotel }: { hotel: (typeof hotels)[0] }) => (
		<Card className='w-full bg-white border-0 shadow-none rounded-t-none'>
			<CardContent className='p-0 '>
				<div className='relative'>
					<Image
						src={hotel.image || "/placeholder.svg"}
						alt={hotel.name}
						width={300}
						height={200}
						className='w-full h-full object-cover rounded-t-lg'
					/>
					<Button
						variant='ghost'
						size='sm'
						className='absolute bottom-2 left-2 p-2'
					>
						<Star className='w-4 h-4 text-[#FFDA9E] fill-[#FFDA9E]' />{" "}
						<span className='text-white'>{hotel.star}</span>
					</Button>
				</div>
				<div className='p-4'>
					<h4 className='font-semibold text-gray-900 mb-2'>{hotel.name}</h4>
					<p className='text-xs text-gray-600 mb-3 line-clamp-2'>
						{hotel.description}
					</p>
					<div className='flex items-center justify-between mb-3'>
						<div>
							<span className='text-lg font-bold text-gray-900'>
								{hotel.price}
							</span>
							<span className='text-sm text-gray-600 ml-1'>per night</span>
						</div>
					</div>
					<div className='flex items-center space-x-4 mb-3 text-sm text-gray-600'>
						<div className='flex items-center space-x-1'>
							<Image
								src='/images/icons/door.svg'
								alt='bed'
								width={20}
								height={20}
								className='w-5 h-5 ml-1'
							/>
							<span className='text-xs'>{hotel.beds}</span>
						</div>
						<div className='flex items-center space-x-1'>
							<Bath className='w-5 h-5 ml-1 mr-1' />
							<span className='text-xs'>{hotel.persons} persons</span>
						</div>
						<div className='flex items-center space-x-1'>
							<Image
								src='/images/icons/Full_Screen_Corner_Light.svg'
								alt='size'
								width={20}
								height={20}
								className='w-5 h-5 mr-1'
							/>
							<span className='text-xs'>{hotel.area} sq ft</span>
						</div>
					</div>

					<div className='flex flex-row justify-between items-center w-full'>
						<Button className='w-3/4 bg-[#007DD0] hover:bg-blue-700 rounded-full text-md'>
							Book Now
						</Button>
						<Button className='w-10 h-10 bg-[#007DD01A] hover:bg-blue-200 rounded-full'>
							<InfoIcon className='w-7 h-7 text-blue-600 ' />
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);

	return (
		<div>
			<h3 className='text-xl font-semibold mb-6 text-gray-900'>
				You may also like
			</h3>
			{/* Custom Navigation Buttons for Row 1 */}
			<div className='md:hidden flex flex-row'>
				<button className='swiper-button-prev-1 w-10 h-10 bg-[#C8C8C81A]  rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'>
					<ArrowLeft className='w-6 h-6 text-blue-600' />
				</button>

				<button className='swiper-button-next-1 w-10 h-10 bg-[#C8C8C81A]  rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'>
					<ArrowRight className='w-6 h-6 text-blue-600' />
				</button>
			</div>

			{/* First Row */}
			<div className='mb-1'>
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
			</div>

			{/* Second Row */}
			<div>
				{/* Custom Navigation Buttons for Row 2 */}
				<div className='md:hidden flex flex-row'>
					<button className='swiper-button-prev-2 w-10 h-10 bg-[#C8C8C81A]  rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'>
						<ArrowLeft className='w-6 h-6 text-blue-600' />
					</button>

					<button className='swiper-button-next-2 w-10 h-10 bg-[#C8C8C81A]  rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'>
						<ArrowRight className='w-6 h-6 text-blue-600' />
					</button>
				</div>
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
			</div>
		</div>
	);
}
