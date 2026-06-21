export type HighlightStyle = 'normal' | 'strong';

export interface NavItem {
  label: string;
  section: string;
}

export interface Highlight {
  text: string;
  style: HighlightStyle;
  url?: string;
}

export interface Job {
  workplace: string;
  workplaceBtn: string;
  position: string;
  duration: string[];
  description: string[];
  url: string;
}

export interface ProjectLink {
  label: string;
  icon: string;
  url: string;
}

export interface SubProject {
  projectName: string;
  links: ProjectLink[];
}

export interface Project {
  name: string;
  subtitle?: string;
  description: string;
  pic?: string;
  picDark?: string;
  tech: string[];
  links?: ProjectLink[];
  subProjects?: SubProject[];
}

export interface ExtraProject {
  name: string;
  type?: string;
  description: string;
  pic?: string;
  tech: string[];
  links: ProjectLink[];
}

export interface PortfolioContent {
  navbar: NavItem[];
  landing: {
    intro: string;
    name: string;
    job: string;
    more: string;
  };
  about: {
    header: string;
    headline: string;
    intro: string;
    education: { text: string; highlights: Highlight[] };
    skills: { text: string; highlights: Highlight[] };
    cta: string;
  };
  experienceHeader: string;
  jobs: Job[];
  projectsHeader: string;
  projects: Project[];
  moreProjectsHeader: string;
  extraProjects: ExtraProject[];
  contactHeader: string;
  contact: string;
  footer: string;
  extraProjectsBtn: { show: string; more: string; less: string };
  moreProjectsTable: {
    name: string;
    type: string;
    description: string;
    technologies: string;
    links: string;
  };
  cvLabel: string;
}
