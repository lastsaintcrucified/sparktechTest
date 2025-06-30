/* eslint-disable react/no-unescaped-entities */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function GuestReviews() {
	const reviews = [
		{
			title: "Breathtaking Views and Luxury Comfort!",
			content:
				"The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both business and leisure stays.",
			author: "Sofia B., France",
			date: "23.10.2024",
			rating: 5,
		},
		{
			title: "Exceptional Stay with Excellent Amenities",
			content:
				"The Executive Suite provided an exceptional experience. The room was spacious and equipped with everything you could need. The marble bathroom with its bathtub was pure luxury. The location is perfect for exploring the city, and the staff truly went above and beyond to ensure our comfort.",
			author: "Youssef R., Morocco",
			date: "",
			rating: 5,
		},
		{
			title: "Outstanding Service and Beautiful Location",
			content:
				"From check-in to check-out, the service was impeccable. The hotel's location offers stunning views and easy access to local attractions. The room was beautifully appointed with modern amenities and comfortable furnishings. I would definitely stay here again.",
			author: "Maria L., Spain",
			date: "15.09.2024",
			rating: 5,
		},
		{
			title: "Perfect for Business and Leisure",
			content:
				"This hotel exceeded my expectations in every way. The business facilities were excellent, and the leisure amenities were top-notch. The staff was professional and attentive throughout my stay. Highly recommended for both business and vacation travelers.",
			author: "Ahmed K., Tunisia",
			date: "02.11.2024",
			rating: 5,
		},
	];

	return (
		<div className='bg-white rounded-lg p-6 shadow-sm'>
			<div className='flex items-center justify-between mb-6'>
				<h3 className='text-xl font-semibold text-gray-900'>
					What Our Guests Say
				</h3>
				<Button
					variant='link'
					className='text-blue-600 hover:text-blue-700 p-0'
				>
					See All... →
				</Button>
			</div>

			<div className='relative'>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={24}
					slidesPerView={1}
					navigation={{
						nextEl: ".reviews-button-next",
						prevEl: ".reviews-button-prev",
					}}
					pagination={{
						clickable: true,
						el: ".reviews-pagination",
					}}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
					}}
					className='reviews-swiper'
				>
					{reviews.map((review, index) => (
						<SwiperSlide key={index}>
							<Card className='border border-gray-200 h-full'>
								<CardContent className='p-6'>
									<h4 className='font-semibold text-gray-900 mb-3'>
										"{review.title}"
									</h4>
									<p className='text-sm text-gray-600 leading-relaxed mb-4'>
										{review.content}
									</p>

									<div className='flex items-center mb-3'>
										<div className='flex text-yellow-400'>
											{[...Array(review.rating)].map((_, i) => (
												<Star
													key={i}
													className='w-4 h-4 fill-current'
												/>
											))}
										</div>
									</div>

									<div className='flex items-center justify-between'>
										<span className='text-sm font-medium text-gray-900'>
											— {review.author}
										</span>
										{review.date && (
											<span className='text-xs text-gray-500'>
												{review.date}
											</span>
										)}
									</div>
								</CardContent>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom Navigation */}
				<div className='flex justify-center items-center mt-6 space-x-4'>
					<button className='reviews-button-prev w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'>
						<ChevronLeft className='w-4 h-4' />
					</button>
					<div className='reviews-pagination'></div>
					<button className='reviews-button-next w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'>
						<ChevronRight className='w-4 h-4' />
					</button>
				</div>
			</div>
		</div>
	);
}
