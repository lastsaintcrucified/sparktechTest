/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { useState } from "react";

export function ImageGallery() {
	const [selectedImage, setSelectedImage] = useState(0);

	const images = [
		{
			src: "/images/bigImg1.png",
			alt: "Hotel room main view with teal flooring and wooden furniture",
			isMain: true,
		},
		{
			src: "/images/sideImg1.png",
			alt: "Hotel balcony terrace view",
			isMain: false,
		},
		{
			src: "/images/sideImg2.png",
			alt: "Hotel interior room view",
			isMain: false,
		},
		{
			src: "/images/r1.png",
			alt: "Hotel lobby area",
			isMain: false,
		},
		{
			src: "/images/r2.png",
			alt: "Hotel lounge area",
			isMain: false,
		},
		{
			src: "/images/r3.png",
			alt: "Scenic mountain view",
			isMain: false,
		},
		{
			src: "/images/r4.png",
			alt: "Hotel room interior",
			isMain: false,
		},
		{
			src: "/images/r5.png",
			alt: "Hotel facilities",
			isMain: false,
		},
		{
			src: "/images/r6.png",
			alt: "Hotel amenities",
			isMain: false,
		},
	];

	return (
		<div className='grid grid-rows-[auto_1fr_auto] gap-0.5 '>
			{/* Main Gallery Grid */}
			<div className='grid grid-cols-3 gap-0.5 row-span-1 '>
				{/* Large Main Image - Left Side */}
				<div className='col-span-2 row-span-2'>
					<Image
						src={images[0].src || "/placeholder.svg"}
						alt={images[0].alt}
						width={768}
						height={306}
						className='w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity'
						onClick={() => setSelectedImage(0)}
					/>
				</div>

				{/* Top Right Image */}
				<div className='row-span-1'>
					<Image
						src={images[1].src || "/placeholder.svg"}
						alt={images[1].alt}
						width={336}
						height={151}
						className='w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity'
						onClick={() => setSelectedImage(1)}
					/>
				</div>

				{/* Bottom Right Image */}
				<div className='row-span-1'>
					<Image
						src={images[2].src || "/placeholder.svg"}
						alt={images[2].alt}
						width={336}
						height={151}
						className=' w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity'
						onClick={() => setSelectedImage(2)}
					/>
				</div>
			</div>

			{/* Bottom Thumbnail Row */}
			<div className='grid grid-cols-6 gap-0.5 '>
				{images.slice(3, 9).map((image, index) => (
					<div
						key={index + 3}
						className='relative '
					>
						<Image
							src={image.src || "/placeholder.svg"}
							alt={image.alt}
							width={181}
							height={151}
							className=' w-full rounded-none object-cover cursor-pointer hover:opacity-90 transition-opacity'
							onClick={() => setSelectedImage(index + 3)}
						/>
					</div>
				))}
			</div>

			{/* View All Photos Button - Optional */}
		</div>
	);
}
