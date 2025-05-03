import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Divider } from 'primeng/divider';
import { ExperienceSectionComponent } from '~pages/ui/experience-section.component';
import { Link } from '~pages/ui/model';
import { environment } from '~env/environment';

@Component({
  selector: 'app-experience',
  imports: [Divider, ExperienceSectionComponent],
  template: `
    <div class="w-full my-8 grid gap-2 grid-cols-1 md:grid-cols-2">
      <app-experience-section [title]="'experience'" [exp]="exs" />
      <div class="w-full flex">
        <p-divider layout="vertical" />
        <app-experience-section [title]="'projects'" [exp]="projs" />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  protected readonly exs = [
    {
      title: 'S.EJ.U Development',
      position: 'Founder/Full stack developer',
      duration: 'Jan 2025 - Present',
      description: [
        'Developed Speak a browser extension',
        'Reservation application'
      ],
      links: []
    },
    {
      title: 'Fardelins',
      position: 'Software developer (8 month contract)',
      duration: 'June 2025 - Feb 2025',
      description: [
        'Collaborated with the team members to upgrade and enhance the Courier Dashboard from Angular 15 to 18.',
        'Designed and implemented a streamlined company and customer registration process, reducing costs and enhancing UX',
        'Introduced in-memory caching for frequently requested database responses, resulting in faster API response times.',
        'Led the development of Internal Developer dashboard in Angular 18 for a brief period.',
        'Liaise with Product Development team to implement new features based on Figma prototypes.'
      ],
      links: []
    },
    {
      title: 'Lakehead University',
      position: 'Full Stack Developer Intern',
      duration: 'Sept 2023 - Apr 2024',
      description: [
        'Led the development of a production ready e-commerce application (production-store, production-crm) as part of my',
        'Capstone project, using Angular, Java 21, GraalVM, Spring Boot, and MySQL',
        'Engineered multi-currency functionality to process transactions and display prices based on user preferences.',
        'Implemented Role-Based Access Control, and JWT-based authorization for secure user authentication.',
        'Implemented advanced inventory management using session cookies to prevent inventory race-conditions.',
        'Improved API responses by 15% through multi-threaded data retrieval from AWS S3 and in-memory caching.',
        'Integrated Paystack for secure payment processing across multiple currencies and set up a Discord private channel for real time application logs and monitoring',
        'Automated testing and deployment pipelines using AssertJ, JUnit, Testcontainers, GitHub Actions, Docker, and AWS, ensuring a robust CI/CD.',
        'Mange project tasks via Trello, documented database schema with UML diagrams and provided regular application progress on YouTube.'
      ],
      links: [
        { type: Link.LINK, link: 'https://capstone.emmanueluluabuike.com' },
        { type: Link.GITHUB, link: `${environment.github}/capstone-api` },
        {
          type: Link.YOUTUBE,
          link: 'https://www.youtube.com/watch?v=omdPLZJvX54&t=25s'
        },
        {
          type: Link.UML,
          link: 'https://dbdiagram.io/d/capstone-database-schema-6483c4d5722eb77494b791a1'
        }
      ]
    }
  ];

  protected readonly projs = [
    {
      title: 'Speak',
      position: 'Founder/Full stack developer',
      duration: 'Jan 2025',
      description: [''],
      links: [{ type: Link.LINK, link: 'https://speak.emmanueluluabuike.com' }]
    },
    {
      title: 'Reservation Application',
      position: 'Founder/Full stack developer',
      duration: 'Dec 2024',
      description: [''],
      links: [
        { type: Link.LINK, link: 'https://capstone.emmanueluluabuike.com' },
        { type: Link.GITHUB, link: `${environment.github}/reservation` }
      ]
    },
    {
      title: 'Virtual Private Server',
      position: 'System Administrator',
      duration: 'Jan 2023 - Present',
      description: [''],
      links: [{ type: Link.GITHUB, link: `${environment.github}/vps` }]
    },
    {
      title: 'Cloud Computing Coursework Final Project',
      position: 'Student',
      duration: 'Sep - Dec 2021',
      description: [''],
      links: [
        {
          type: Link.GITHUB,
          link: `${environment.github}/Comp-2430-final-project`
        }
      ]
    }
  ];
}
