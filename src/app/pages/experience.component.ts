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
        'Developing a browser extension <span class="text-[var(--p-primary-color)]">Speak</span> to assist language learners',
        'Successfully migrated from a microservice architecture to a single monolith improving latency by <span class="text-[var(--p-primary-color)]">3s</span>',
        'Designed and implemented OAuth-based authentication and authorization mechanisms to enhance security across the application'
      ],
      links: [],
      tech_stack: ['Angular |', 'Go |', 'Python |', 'PostgreSQL |', 'AWS']
    },
    {
      title: 'Fardelins',
      position: 'Software developer (8 month contract)',
      duration: 'June 2025 - Feb 2025',
      description: [
        'Collaborated with the team members to upgrade and enhance the Courier Dashboard from Angular 15 to 18.',
        'Designed and implemented a streamlined company and customer registration process, reducing costs and enhancing UX',
        'Introduced in-memory caching for frequently requested database responses resulting in faster API response times.',
        'Led the development of Internal Developer dashboard in for a brief period.',
        'Liaise with Product Development team to implement new features based on <span class="text-[var(--p-primary-color)]">Figma</span> prototypes.'
      ],
      links: [],
      tech_stack: ['Angular |', 'NestJS |', 'PostgreSQL |', 'AWS']
    },
    {
      title: 'Lakehead University',
      position: 'Full Stack Developer Intern',
      duration: 'Sept 2023 - Apr 2024',
      description: [
        'Led the development of a production ready e-commerce application as part of my <span class="text-[var(--p-primary-color)]">Capstone project.</span>',
        'Engineered <span class="text-[var(--p-primary-color)]">multi-currency</span> functionality to process transactions and display prices based on user preferences.',
        'Implemented <span class="text-[var(--p-primary-color)]">Role-Based</span> Access Control, and <span class="text-[var(--p-primary-color)]">JWT-based</span> authorization for secure user authentication.',
        'Implemented advanced inventory management using session cookies to prevent inventory race-conditions.',
        'Improved API responses by <span class="text-[var(--p-primary-color)]">15%</span> through multithreaded data retrieval from AWS S3 and in-memory caching.',
        'Integrated <span class="text-[var(--p-primary-color)]">Paystack</span> for secure payment processing across multiple currencies and set up a <span class="text-[var(--p-primary-color)]">Discord</span> private channel for real time application logs and monitoring'
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
      duration: 'Dec 2024 - Present',
      description: [
        'Timezone taken into consideration',
        'Designed and implemented OAuth-based authentication and authorization mechanisms to enhance security whilst taking into consideration user roles & permissions.',
        'Reduced query times to database by indexing foreign keys.'
      ],
      links: [
        { type: Link.LINK, link: 'https://salon.emmanueluluabuike.com' },
        { type: Link.GITHUB, link: `${environment.github}/reservation` }
      ],
      tech_stack: ['Angular |', 'Go |', 'PostgreSQL |', 'Docker |', 'AWS']
    },
    {
      title: 'Virtual Private Server',
      duration: 'Jan 2023 - Present',
      description: [
        'Applied knowledge gained from Cloud Computing & Computer Networks & Distributed Systems coursework to manage the EC2 instance.',
        'Utilized Docker to streamline service management, running NGINX to proxy requests to appropriate services.',
        'Integrated Cloudflare for IP-address masking, and to prevent Denial of Service Attack (DDoS). Also implemented strict security protocols, by setting up firewalls via ufw only exposing required TCP/UDP, and SSH ports.'
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
