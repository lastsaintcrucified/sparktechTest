"use client"

export function Policies() {
  const policies = [
    {
      title: "Check-in",
      availability: "Available 24 hours",
      description:
        "Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
    },
    {
      title: "Check-out",
      availability: "Available 24 hours",
      description: "",
    },
    {
      title: "Cancellation/ prepayment",
      availability: "",
      description:
        "Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.",
    },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6 text-gray-900">Policies</h3>

      <div className="space-y-6">
        {policies.map((policy, index) => (
          <div key={index} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="font-medium text-gray-900">{policy.title}</div>
              <div className="md:col-span-2">
                {policy.availability && <div className="font-medium text-gray-900 mb-2">{policy.availability}</div>}
                {policy.description && <p className="text-sm text-gray-600 leading-relaxed">{policy.description}</p>}
              </div>
            </div>
          </div>
        ))}

        {/* Child policies section */}
        <div className="border-b border-gray-100 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="font-medium text-gray-900">Child policies</div>
            <div className="md:col-span-2 space-y-2">
              <p className="text-sm text-gray-600">Children of any age are welcome.</p>
              <p className="text-sm text-gray-600">
                Children 12 years and above will be charged as adults at this property.
              </p>
              <p className="text-sm text-gray-600">
                To see correct prices and occupancy information, please add the number of children in your group and
                their ages to your search.
              </p>
            </div>
          </div>
        </div>

        {/* Children and beds section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="font-medium text-gray-900">Children and beds</div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600">
                Additional bed policies and charges may vary depending on the room type. Please check the room details
                for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
