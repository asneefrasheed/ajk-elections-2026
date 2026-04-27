export interface Constituency {
  id: string; // The LA-X identifier
  name: string; // E.g., Mirpur-1
  candidateLeading: string;
  votes: number;
  status: 'Pending' | 'Counting' | 'Declared';
  type: 'Local' | 'Refugee';
}
