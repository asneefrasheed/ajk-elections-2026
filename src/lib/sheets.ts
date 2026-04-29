import { google } from 'googleapis';
import { Constituency } from '../types/constituency';

export async function fetchConstituencyResults(spreadsheetId: string, range: string): Promise<Constituency[]> {
  try {
    const auth = new google.auth.GoogleAuth({
      // You can also use credentials explicitly if needed:
      // credentials: { client_email: process.env.GOOGLE_CLIENT_EMAIL, private_key: process.env.GOOGLE_PRIVATE_KEY }
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return [];
    }

    // Skip the header row (assuming row[0] is headers: ID, Name, Leading Candidate, Votes, Status, Type, DistrictSlug, DistrictName, AreaName, CurrentMember, Party)
    return rows.slice(1).map((row) => ({
      id: row[0] || '',
      name: row[1] || '',
      candidateLeading: row[2] || 'TBD',
      votes: parseInt(row[3]) || 0,
      status: (row[4] as any) || 'Pending',
      type: (row[5] as 'Local' | 'Refugee') || 'Local',
      districtSlug: row[6] || '',
      districtName: row[7] || '',
      areaName: row[8] || '',
      currentMember: row[9] || '',
      party: row[10] || '',
    }));
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error);
    return [];
  }
}

export async function fetchConstituenciesByDistrict(spreadsheetId: string, range: string, slug: string): Promise<Constituency[]> {
  const all = await fetchConstituencyResults(spreadsheetId, range);
  return all.filter(c => c.districtSlug === slug);
}
