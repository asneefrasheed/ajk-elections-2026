export default function Home() {
  const localSeats = Array.from({ length: 33 }, (_, i) => `LA-${i + 1}`);
  const refugeeSeats = Array.from({ length: 12 }, (_, i) => `LA-${i + 34}`);

  const allConstituencies = [
    ...localSeats.map(id => ({ id, type: 'Local' })),
    ...refugeeSeats.map(id => ({ id, type: 'Refugee' }))
  ];

  return (
    <div className="flex flex-col gap-8 py-8">
      <h1 className="text-3xl font-bold text-center">AJK Constituencies (45 Seats)</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {allConstituencies.map((constituency) => (
          <div
            key={constituency.id}
            className={`p-4 rounded-lg border shadow-sm flex flex-col items-center justify-center text-center
              ${constituency.type === 'Local' ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200'}`}
          >
            <h2 className="text-xl font-bold text-gray-800">{constituency.id}</h2>
            <p className="text-sm text-gray-600 font-medium">{constituency.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
