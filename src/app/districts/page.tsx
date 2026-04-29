import Link from 'next/link';

export default function DistrictsDirectory() {
  const districts = [
    { name: 'Muzaffarabad', slug: 'muzaffarabad' },
    { name: 'Mirpur', slug: 'mirpur' },
    { name: 'Poonch', slug: 'poonch' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="bg-blue-900 text-white p-6 shadow-md mb-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold uppercase tracking-wide">AJK Districts</h1>
          <p className="text-lg mt-2 font-medium text-blue-100">Select a district to view constituencies</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districts.map((district) => (
            <Link
              href={`/districts/${district.slug}`}
              key={district.slug}
              className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 transition-all group"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {district.name}
                </h2>
                <span className="text-blue-500 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
