export interface Constituency {
  id: string; // The LA-X identifier
  name: string; // E.g., Mirpur-1
  candidateLeading: string;
  votes: number;
  status: 'Pending' | 'Counting' | 'Declared' | 'Peaceful' | 'Sensitive' | 'Results Pending';
  type: 'Local' | 'Refugee';
  districtSlug?: string;
  districtName?: string;
  areaName?: string;
  currentMember?: string;
  party?: string;
}
