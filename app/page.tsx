"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HotelHero } from "@/components/hotel-hero";
import { ImageGallery } from "@/components/image-gallery";
import { PropertyInfo } from "@/components/property-info";
import { BookingSearch } from "@/components/booking-search";
import { RoomAvailability } from "@/components/room-availability";
import { GuestReviews } from "@/components/guest-reviews";
import { SimilarHotels } from "@/components/similar-hotels";
import { Footer } from "@/components/footer";
import { ExploreArea } from "@/components/explore-area";
import { Policies } from "@/components/policies";

interface SearchData {
	checkIn: Date | undefined;
	checkOut: Date | undefined;
	adults: number;
	children: number;
	rooms: number;
}

export default function HotelBooking() {
	const [searchData, setSearchData] = useState<SearchData>();

	const handleSearch = (data: SearchData) => {
		setSearchData(data);
	};

	return (
		<div className='min-h-screen bg-white'>
			<Header />

			<div className='max-w-7xl mx-auto px-11 py-6 space-y-8'>
				<HotelHero
					name='El Aurassi Hotel'
					description='Spacious, modern rooms with panoramic views of the Mediterranean Sea'
				/>

				<ImageGallery />

				<PropertyInfo searchData={searchData} />

				{/* Availability Section */}
				<div className='bg-white '>
					<h3 className='text-xl font-semibold mb-6 text-gray-900'>
						Availability
					</h3>
					<BookingSearch onSearch={handleSearch} />
					<RoomAvailability searchData={searchData} />
				</div>

				{/* About Property */}
				<div className='bg-white rounded-lg p-6 shadow-sm'>
					<h3 className='text-xl font-semibold mb-4 text-gray-900'>
						About this property
					</h3>
					<p className='text-gray-700 leading-relaxed'>
						Located in the heart of Algiers, El Aurassi offers a luxurious and
						welcoming experience tailored for both business and leisure
						travelers. With its stunning architecture, world-class amenities,
						and exceptional service, the hotel provides an unforgettable stay.
						Guests can enjoy spacious rooms with panoramic views, fine dining
						restaurants, and comprehensive business facilities.
					</p>
				</div>

				<ExploreArea />
				<GuestReviews />
				<Policies />
				<SimilarHotels />
			</div>

			<Footer />
		</div>
	);
}
