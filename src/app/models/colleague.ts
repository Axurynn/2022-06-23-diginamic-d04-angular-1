export interface Colleague {
  id: number;
  pseudo: string;
  score: number;
  photo: string;
}

export interface FullColleague extends Colleague {
  first: string;
  last: string;
}
