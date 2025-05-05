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
      <app-experience-section [title]="'experience'" [exp]="exs" />
      <div class="w-full flex flex-col md:flex-row">
        <div class="block md:hidden">
          <p-divider />
        </div>
        <div class="hidden md:block">
          <p-divider layout="vertical" />
        </div>
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
      position: 'Lead Software Developer',
      duration: 'Jan 2025 - Present',
      description: [
        'Developed <span class="text-[var(--p-primary-color)]">Speak</span>, a Chrome extension that aids language learning by converting text to speech with synchronized word highlighting.',
        'Translated Figma prototypes into reusable, responsive, and accessible UI components.',
        'Implemented interservice communication between Go and Python microservice.',
        'Optimized API performance by applying aggressive timeouts and refining SQL queries with targeted indexing, reducing response times to under <span class="text-[var(--p-primary-color)]">50ms.</span>',
        'Implemented secure, scalable OAuth-based authentication and authorization, supporting real-time access for <span class="text-[var(--p-primary-color)]">20</span> active users.'
      ],
      links: [],
      tech_stack: ['Angular |', 'Go |', 'Python |', 'PostgreSQL |', 'AWS']
    },
    {
      title: 'Fardelins',
      position: 'Software developer (contract)',
      duration: 'June 2025 - Feb 2025',
      description: [
        'Upgraded the Courier Dashboard from Angular 15 – 18, migrated state management from RxJS/NGRX to Signals and NGRX signal store, implemented new UI features based on Figma prototypes, and built reusable components to improve development efficiency and scalability',
        'Integrated drag-and-drop document upload for Corporate Affairs Commission (CAC) verification, Google Maps API for real-time package tracking and address selection, significantly enhancing the customer experience.',
        'Improved application responsiveness by <span class="text-[var(--p-primary-color)]">90%</span> and reduced page load time by <span class="text-[var(--p-primary-color)]">20%</span> through lazy loading, and design pattern optimization whilst following WCAG accessibility guidelines.',
        'Led the development of Internal Developer dashboard in for a brief period.',
        'Redesigned customer registration flow and introduced in-memory caching for high-frequency queries, cutting backend API latency from over <span class="text-[var(--p-primary-color)]">500ms</span> to under <span class="text-[var(--p-primary-color)]">50ms</span> and reducing infrastructure costs.'
      ],
      links: [],
      tech_stack: ['Angular |', 'NestJS |', 'PostgreSQL |']
    },
    {
      title: 'Lakehead University',
      position: 'Full Stack Developer Intern (Capstone Project)',
      duration: 'Sept 2023 - Apr 2024',
      description: [
        'We developed a production-ready e-commerce application with features like inventory management, multi-currency support, authentication & authorization, and third-party integration.',
        'Engineered inventory management using session cookies; improved API performance by <span class="text-[var(--p-primary-color)]">25%</span> through caching, multithreading.',
        'Implemented OAuth-base authentication & role-based access control with Spring Security to support over <span class="text-[var(--p-primary-color)]">100</span> students.',
        'Integrated AWS S3 for static data storage, Paystack for secure payments and Discord for real-time monitoring; achieved <span class="text-[var(--p-primary-color)]">90%</span> test coverage with TDD using JUnit and Test Containers.',
        'Automated CI/CD pipelines via custom bash scripts, GitHub actions, and AWS (ECR, EC2), improving dev efficiency by <span class="text-[var(--p-primary-color)]">100%</span>.',
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

  protected readonly projs = [
    {
      title: 'Reservation Application for Salons',
      duration: 'Dec 2024 - Feb 2025',
      description: [
        'Built a timezone-independent reservation system with multi-service booking, real-time notifications, and access controls.',
        'Implemented role- & permission-based authentication with secure session management using cookies.',
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
        'Integrated Cloudflare to mask IP addresses and mitigate DDoS attacks.',
        'Designed an isolated Docker network architecture to tightly control inter-service communication.'
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
          link: `${environment.github}/Comp-2430-final-project`
        }
      ],
      tech_stack: ['HTML |', 'CSS |', 'JavaScript |', 'Putty |', 'AWS EC2']
    }
  ];
}
