import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Divider } from 'primeng/divider';
import { JobComponent } from '~pages/ui/job.component';
import { Link } from '~pages/ui/model';
import { environment } from '~env/environment';

@Component({
  selector: 'app-experience',
  imports: [Divider, JobComponent],
  template: `
    <div class="w-full my-8 grid gap-2 grid-cols-1 md:grid-cols-2">
      <app-experience-section [title]="'experiences'" [exp]="experiences" />
      <div class="w-full flex flex-col md:flex-row">
        <div class="block md:hidden">
          <p-divider />
        </div>
        <div class="hidden md:block">
          <p-divider layout="vertical" />
        </div>
        <app-experience-section [title]="'projects'" [exp]="projects" />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  protected readonly experiences = [
    {
      title: 'S.EJ.U Development',
      position: 'Founder/Full Stack Developer',
      duration: 'Jan 2025 - Present',
      description: [
        'Developing <span class="text-[var(--p-primary-color)]">Speak</span>,  a browser extension for language learning via text to speech with real-time word highlighting.',
        'Simplified architecture by consolidating microservices into monolith, enhancing API performance.'
      ],
      links: [],
      tech_stack: ['Angular |', 'Go |', 'Python |', 'PostgreSQL |', 'AWS']
    },
    {
      title: 'Fardelins',
      position: 'Full Stack Developer (contract)',
      duration: 'June 2025 - Feb 2025',
      description: [
        'Led the upgraded of Courier Dashboard from Angular 15 to 18; migrated state management to NgRX signal store.',
        'Converted Figma prototypes into responsive, reusable UI components following <span class="text-[var(--p-primary-color)]">WCAG</span> accessibility guidelines.',
        'Built drag-and-drop Corporate Affairs Commission (CAC) document upload.',
        'Enhanced Google Maps integration for real-time package tracking and intuitive address selection.',
        'Redesigned customer registration flow improving API performance and reduced costs.',
        'Enhanced session management with Google OAuth2 for better user experience.'
      ],
      links: [],
      tech_stack: ['Angular |', 'NestJS |', 'PostgresSQL']
    },
    {
      title: 'Lakehead University',
      position: 'Full Stack Developer Intern (Capstone Project)',
      duration: 'Sept 2023 - Apr 2024',
      description: [
        'Built a production-ready multicurrency e-commerce app with inventory management, race condition handling, and advanced filtering.',
        'Secured over <span class="text-[var(--p-primary-color)]">100+</span> students, and merchants data using role-based access with Spring Security.',
        'Integrated AWS S3, Paystack and Discord for file storage, payments, and real-time alerts.',
        'Achieved over <span class="text-[var(--p-primary-color)]">90%</span> test coverage using TDD with JUnit and Test Containers.',
        'Automated CI/CD pipelines using Docker, ECR, EC2 and GitHub Actions.'
      ],
      links: [
        { type: Link.LINK, link: 'https://capstone.emmanueluluabuike.com' },
        {
          type: Link.LINK,
          link: 'https://capstone.emmanueluluabuike.com/admin'
        },
        { type: Link.GITHUB, link: `${environment.github}/capstone-api` },
        {
          type: Link.YOUTUBE,
          link: 'https://www.youtube.com/watch?v=omdPLZJvX54&t=25s'
        },
        {
          type: Link.UML,
          link: 'https://dbdiagram.io/d/capstone-database-schema-6483c4d5722eb77494b791a1'
        }
      ],
      tech_stack: ['Angular |', 'Spring Boot |', 'GraalVM |', 'MySQL |', 'AWS']
    }
  ];

  protected readonly projects = [
    {
      title: 'Utility (open-source library)',
      duration: 'April 2025 - Present',
      description: [
        'Developing a modular Go library featuring reusable components for logging, request parsing, error handling, etc. '
      ],
      links: [{ type: Link.GITHUB, link: `${environment.github}/utility` }],
      tech_stack: ['Go']
    },
    {
      title: 'Revive Hair Studio',
      duration: 'Dec 2024 - Feb 2025',
      description: [
        'Built a timezone-agnostic reservation application for unisex hair and massage services.',
        'Implemented booking management, advanced search, recurring/conflict-free staff scheduling.',
        'Secured application data using role & permission-based access using JWT in cookie-based session.',
        'Integrated Stripe for invoice and payments, Discord for real-time alerts; achieved <span class="text-[var(--p-primary-color)]">95%</span> test coverage using Test Driven Development (TDD).'
      ],
      links: [
        { type: Link.LINK, link: 'https://salon.emmanueluluabuike.com' },
        { type: Link.GITHUB, link: `${environment.github}/reservation` }
      ],
      tech_stack: ['Angular |', 'Go |', 'PostgreSQL |', 'Docker |', 'AWS']
    },
    {
      title: 'System Administrator',
      duration: 'Jan 2023 - Present',
      description: [
        'Manage an AWS EC2 with Docker, Nginx, and UFW firewalls.',
        'Hardened server security using SSH key authentication and port restrictions.',
        'Set-up isolated Docker network to control inter-container communication.',
        'Integrated Cloudflare to mask IP addresses and defend against DDoS attacks.'
      ],
      links: [{ type: Link.GITHUB, link: `${environment.github}/vps` }],
      tech_stack: ['Cloudflare |', 'Docker |', 'NGINX |', 'AWS']
    },
    {
      title: 'Firestick',
      duration: 'Sep - Dec 2021',
      description: [
        'Collaborated with cloud computing coursemates to design and deploy a static webpage.',
        'Leveraged AWS EC2 for scalable compute capacity and minimal downtime, configuring the server via PuTTY for updates and management.'
      ],
      links: [
        {
          type: Link.GITHUB,
          link: `${environment.github}/comp-4312-cloud-computing-final-project`
        }
      ],
      tech_stack: ['HTML |', 'CSS |', 'JavaScript |', 'Putty |', 'AWS EC2']
    }
  ];
}
