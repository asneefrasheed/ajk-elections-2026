import { fetchConstituenciesByDistrict } from '@/lib/sheets';

export default async function DistrictPage({ params }: { params: Promise<{ slug: string }> }) {
  // Wait for params to resolve
  const { slug } = await params;

  let districtData = [];

  if (process.env.SHEET_ID) {
    districtData = await fetchConstituenciesByDistrict(process.env.SHEET_ID, 'Sheet1!A:K', slug);
  } else {
    // Fallback mock data when SHEET_ID is not provided (e.g., local development without credentials)
    const mockData = [
      {
        id: 'LA-24',
        name: 'Muzaffarabad-1',
        candidateLeading: 'TBD',
        votes: 0,
        status: 'Peaceful' as const,
        type: 'Local' as const,
        districtSlug: 'muzaffarabad',
        districtName: 'Muzaffarabad',
        areaName: 'Patika',
        currentMember: 'John Doe',
        party: 'PTI'
      },
      {
        id: 'LA-25',
        name: 'Muzaffarabad-2',
        candidateLeading: 'TBD',
        votes: 0,
        status: 'Sensitive' as const,
        type: 'Local' as const,
        districtSlug: 'muzaffarabad',
        districtName: 'Muzaffarabad',
        areaName: 'Lachrat',
        currentMember: 'Jane Smith',
        party: 'PMLN'
      },
      {
        id: 'LA-26',
        name: 'Muzaffarabad-3',
        candidateLeading: 'TBD',
        votes: 0,
        status: 'Results Pending' as const,
        type: 'Local' as const,
        districtSlug: 'muzaffarabad',
        districtName: 'Muzaffarabad',
        areaName: 'Muzaffarabad City',
        currentMember: 'Bob Johnson',
        party: 'PPP'
      }
    ];

    districtData = mockData.filter(d => d.districtSlug === slug);
  }

  if (!districtData || districtData.length === 0) {
    return <div className="p-8 text-center text-red-500">District not found.</div>;
  }

  const districtName = districtData[0].districtName || slug;
  const isFinalized = new Date() > new Date('2026-04-30');

  const getPartyColor = (party?: string) => {
    switch (party?.toUpperCase()) {
      case 'PTI': return 'bg-green-100 border-green-500 text-green-800';
      case 'PMLN': return 'bg-blue-100 border-blue-500 text-blue-800';
      case 'PPP': return 'bg-red-100 border-red-500 text-red-800';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="bg-navy-900 bg-blue-900 text-white p-6 shadow-md mb-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-wide">{districtName}</h1>
            <p className="text-lg mt-2 font-medium text-blue-100">Total Constituencies: {districtData.length}</p>
          </div>
          <div className="mt-4 md:mt-0">
             <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase ${isFinalized ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}>
               Voter Roll: {isFinalized ? 'Finalized' : 'Pending'}
             </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districtData.map((seat) => (
            <div key={seat.id} className={`border-l-4 rounded-r-lg shadow-sm bg-white overflow-hidden ${getPartyColor(seat.party)}`}>
              <div className="p-5 border border-l-0 border-gray-200 h-full flex flex-col bg-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{seat.id}</span>
                    <h2 className="text-2xl font-bold text-navy-900 text-gray-900">{seat.areaName}</h2>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full border border-gray-200">
                    {seat.status}
                  </span>
                </div>

                <div className="mt-auto bg-gray-50 p-3 rounded border border-gray-100">
                  <p className="text-xs text-gray-500 uppercase font-semibold">2021 Winner</p>
                  <p className="text-md font-bold text-gray-800">{seat.currentMember} <span className="text-gray-500 font-normal">({seat.party})</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
