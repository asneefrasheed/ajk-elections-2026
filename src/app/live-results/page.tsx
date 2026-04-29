export default function LiveResultsPage() {
  const currentDate = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="bg-red-700 text-white p-6 shadow-md mb-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-wide flex items-center gap-2">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
              </span>
              Live Election Results
            </h1>
          </div>
          <div className="mt-4 md:mt-0 text-right">
             <p className="text-sm text-red-100 font-medium uppercase tracking-wider">Data Last Updated</p>
             <p className="text-lg font-bold">{currentDate}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 tracking-tight">Dashboard Under Construction</h2>
          <p className="mt-2 text-gray-500 max-w-xl mx-auto">
            The live results dashboard is currently being prepared for the upcoming election.
            Once the voter rolls are finalized, real-time data integration will be enabled here.
          </p>
        </div>
      </div>
    </div>
  );
}
