export interface JobInterface {
  id: number;
  title: string;
  organization: string;
  degree: string;
  jobType: string;
  locations: string[];
  minimumQualifications: string[];
  preferredQualifications: string[];
  description: string[];
  dateAdded: string;
}

export interface Degrees {
  id: number;
  degree: string;
}

export interface Team {
  id: number;
  img: string;
  title: string;
  description: string;
}
