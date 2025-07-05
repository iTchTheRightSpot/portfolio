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
        'Building <span class="text-[var(--p-primary-color)]">Speak</span>, a Browser extension that aids language learning by converting text to speech with synchronized word highlighting.',
        'Converted Figma designs into accessible, reusable, and responsive Angular components adhering to WCAG standards.',
        'Implemented secure, scalable OAuth-based authentication, enabling concurrent user access with real-time session management.',
        'Developed low-latency, type-safe communication between Go and Python microservices using <span class="text-[var(--p-primary-color)]">gRPC.</span>'
      ],
      links: [],
      tech_stack: ['Angular |', 'Go |', 'Python |', 'PostgreSQL |', 'AWS']
    },
    {
      title: 'Fardelins',
      position: 'Full Stack Developer (contract)',
      duration: 'June 2025 - Feb 2025',
      description: [
        'Led the upgraded of Courier Dashboard from Angular 15 – 18 and migrated state management from RxJS/NgRX to NgRX signal store.',
        'Translated Figma prototypes into reusable, responsive UI components, adhering to <span class="text-[var(--p-primary-color)]">WCAG</span> accessibility guidelines.',
        'Built a drag-and-drop feature for Corporate Affairs Commission (CAC) verification document upload.',
        'Enhanced Google Maps integration for real-time package tracking and intuitive address selection.',
        'Redesigned customer registration flow improving API performance and reduced costs.',
        'Collaborated with developers to enhance session management and integrate Google OAuth2 authentication, strengthening security.'
      ],
      links: [],
      tech_stack: ['Angular |', 'NestJS |', 'PostgreSQL']
    },
    {
      title: 'Lakehead University',
      position: 'Full Stack Developer Intern (Capstone Project)',
      duration: 'Sept 2023 - Apr 2024',
      description: [
        'We developed a production-ready e-commerce application with inventory management, multi-currency support, etc.',
        'Integrated AWS S3 (static files storage), Paystack (secured payments) and Discord (real-time alerts).',
        'Engineered inventory management using session cookies; improved API performance through caching and multithreading.',
        'Implemented OAuth-base authentication & role-based access control with Spring Security to support over <span class="text-[var(--p-primary-color)]">100</span> students.',
        'Applied Test-Driven Development (TDD) to achieved over <span class="text-[var(--p-primary-color)]">90%</span> test coverage using JUnit and Test Containers.',
        'Streamlined CI/CD by automating Docker-based deployments to EC2 with custom Bash scripts and GitHub Actions.',
        'Collaborated via Trello, documented using UML diagrams, and presented project outcomes through YouTube demos.'
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
        'Built a timezone-agnostic reservation application with multi-service booking, real-time notifications, and access controls.',
        'Implemented OAuth2 authentication with cookie-based session management, supporting role- & permission-based access control.',
        'Designed business logic for conflict-free scheduling, recurring availability, and soft deletion of linked data.',
        'Integrated Stripe for invoice generation and online payment processing; achieved <span class="text-[var(--p-primary-color)]">90%</span> test coverage using Test Driven Development.'
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
        'Managed and secured AWS EC2 instances using Docker, Nginx (as reverse proxy), and UFW firewalls.',
        'Implemented SSH key authentication and restricted port access to harden server security.',
        'Implemented an isolated Docker network to tightly control and limit inter-service communication to only necessary containers.',
        'Integrated Cloudflare to mask IP addresses and mitigate DDoS attacks.'
      ],
      links: [{ type: Link.GITHUB, link: `${environment.github}/vps` }],
      tech_stack: ['Cloudflare |', 'Docker |', 'NGINX |', 'AWS']
    },
    {
      title: 'Lakehead University Cloud Computing Coursework Final Project',
      duration: 'Sep - Dec 2021',
      description: [
        'Collaborated with coursemates to design and deploy a photography portfolio website for a hypothetical  client, using HTML, CSS, JavaScript, Apache HTTP Server, and AWS EC2.',
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
