export interface CvContact {
  phone: string;
  email: string;
  linkedin: string;
  portfolio: string;
}

export interface CvLanguage {
  name: string;
  level: string;
}

export interface CvExperience {
  company: string;
  title: string;
  duration: string;
  location?: string;
  bullets: string[];
  technologies?: string;
}

export interface CvEducation {
  school: string;
  degree: string;
  duration: string;
}

export interface CvContent {
  name: string;
  headline: string;
  location: string;
  contact: CvContact;
  summary: string;
  skills: string[];
  languages: CvLanguage[];
  certifications: string[];
  experience: CvExperience[];
  education: CvEducation[];
  /** Section labels (localized) */
  labels: {
    summary: string;
    experience: string;
    education: string;
    skills: string;
    languages: string;
    certifications: string;
    print: string;
  };
}
