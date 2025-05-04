export enum Link {
  GITHUB = 'pi pi-github',
  LINK = 'pi pi-external-link',
  YOUTUBE = 'pi pi-youtube',
  UML = 'pi pi-chart-bar'
}

export interface Model {
  title: string;
  position?: string;
  duration: string;
  description: string[];
  links: { type: Link; link: string }[];
  tech_stack?: string[];
}
