"use client";

export function Policies() {
	const policies = [
		{
			title: "Check-in",
			availability: ["Available 24 hours"],
			description: [
				"Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
			],
		},
		{
			title: "Check-out",
			availability: ["Available 24 hours"],
			description: [],
		},
		{
			title: "Cancellation/ prepayment",
			availability: [],
			description: [
				"Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.",
			],
		},
		{
			title: "Children and beds",
			availability: ["Child policies", "Cot and extra bed policies"],
			description: [
				"Children of any age are welcome.Children 12 years and above will be charged as adults at this property.To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.",
				"The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more information.There are no cots available at this property.All extra beds are subject to availability.",
			],
		},
		{
			title: "No age restriction",
			availability: [],
			description: ["There is no age requirement for check-in"],
		},
		{
			title: "Pets",
			availability: [],
			description: ["Pets are not allowed"],
		},
		{
			title: "Cash only",
			availability: [],
			description: ["This property only accepts cash payments."],
		},
	];

	return (
		<div>
			<h3 className='text-xl font-semibold mb-6 text-gray-900'>Policies</h3>

			<div className='space-y-6 p-6 border-1 border-gray-200 rounded-sm'>
				{policies.map((policy, index) => (
					<div
						key={index}
						className='border-b border-gray-400 last:border-b-0 pb-6 last:pb-0'
					>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
							<div className='flex flex-row items-center font-normal text-lg text-gray-700'>
								{policy.title}
							</div>
							<div className='md:col-span-2'>
								<div>
									<div className='font-medium text-gray-900 mt-2'>
										{policy.availability[0]}
									</div>
									<p className='text-sm text-gray-600 leading-relaxed'>
										{policy.description[0]}
									</p>
									<div className='font-medium text-gray-900 mt-2'>
										{policy.availability[1]}
									</div>
									<p className='text-sm text-gray-600 leading-relaxed'>
										{policy.description[1]}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
