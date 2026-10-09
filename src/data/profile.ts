// Content transcribed from Jim William's CV. Wording is kept as written;
// only grammar and spelling were corrected.
// The phone number is deliberately NOT stored here so it can never be rendered.

export type Item = string | { label?: string; text: string; children?: Item[] }

export interface Role {
  title: string
  org: string
  location: string
  period: string
  sections: { heading: string; items: Item[] }[]
}

export interface Shot {
  src: string
  caption: string
  /** 'contain' for wide strips that would be cropped by the default cover fit. */
  fit?: 'contain'
}

export interface Project {
  name: string
  context: string
  period?: string
  points: string[]
  stack?: string[]
  links?: { label: string; href: string }[]
  shots?: Shot[]
  shotsNote?: string
}

export const profile = {
  name: 'Jim William',
  roles: ['Business System Auditor, Analyst, ', 'Developer'],
  location: 'Indonesia',
  linkedin: 'https://www.linkedin.com/in/jim-william',
  /** Path under /public, e.g. '/profile.jpg'. Leave null to show initials. */
  photo: null as string | null,
  statement:
    'I am confident that operations will run smoothly when supported by a well-designed system. A strong system is built on the wisdom that comes from both experience and knowledge.',
  summary:
    'Throughout my professional journey, I have developed a clear understanding of how to build effective working systems. With a background in Hotel Management (covering the fundamentals of HR, Marketing, Finance, and Business), experience up to the managerial level, and a strong personal interest in IT and data analysis, I am able to continuously improve workflows and systems. This also enables me to support leadership in making informed and well-structured decisions.',
  expertise: [
    'Designing and improving workflow systems',
    'Increasing efficiency, accuracy, and transparency',
    'Translating operational needs into structured, scalable systems',
    'Data Analysis & Decision Support',
    'Process & System Development',
    'Operational Leadership (Managerial Level)',
  ],
}

export const experience: Role[] = [
  {
    title: 'Business System Auditor',
    org: 'PT Heksatex Indah',
    location: 'Cimahi, West Java, Indonesia',
    period: 'June 2026 – Present',
    sections: [
      { heading: 'Responsibilities', items: ['Analyze and simplify the business systems at PT Heksatex Indah.'] },
      {
        heading: 'Improvements',
        items: [
          {
            text: 'Digitize manual work onto a digital platform by changing the UI and UX of the ERP system.',
            children: [
              {
                text: 'The IT Department developed a new interface for machine operators to input data through tablets.',
                children: [
                  'Pros: real-time data, no more daily paper usage, and better communication between PPC and operators.',
                  'Cons: a new investment in a tablet for each machine.',
                ],
              },
            ],
          },
          'Conduct CCTV audits for better workforce performance.',
          'Develop new support systems (besides the ERP): Guestbook, Bonus Calculator, Yarn Calculator (warping), Transportation System, and Inventory Management System.',
          'Simplify the IDs of operational assets.',
        ],
      },
    ],
  },
  {
    title: 'System Analyst & Developer',
    org: 'Cahaya Bangsa Classical School',
    location: 'Padalarang, West Java, Indonesia',
    period: 'July 2023 – March 2026',
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Analyzed and simplified the working systems in the Public Relations Department (receptionist, admissions, and college advisor).',
        ],
      },
      {
        heading: 'Improvements',
        items: [
          'Designed databases for student registration, admissions, finance, inventory, personal profiles, family information, employee data, and medical records.',
          'Synchronized all databases to ensure data integrity and minimize data redundancy.',
          {
            text: 'Developed (full-stack) cost-effective web and Android applications to streamline daily workflows and reduce human error:',
            children: [
              {
                label: 'Receptionist App',
                text: 'automatically emails parents regarding late arrivals or borrowed pass cards, updates teachers and secretaries with parental notes, generates recommendation letters, and provides quick database access during emergencies.',
              },
              {
                label: 'Admission App',
                text: 'manages the end-to-end student lifecycle, from form purchase and admission to acceptance or withdrawal. It automatically updates parents throughout the process and refreshes the student database within 5 minutes.',
              },
              {
                label: 'Finance App',
                text: 'tracks income from online/offline registration and extracurricular activities, automatically generates and emails offer letters with PDF attachments, and includes built-in scalability for expense tracking and reporting.',
              },
              {
                label: 'Inventory App',
                text: "streamlines uniform preparation based on stock availability, grade/gender standards, and parents' size requests, while automatically notifying parents when items are ready for pickup.",
              },
              {
                label: 'Extracurricular System',
                text: 'simplifies registration, payments, and vendor coordination. Features a unique family-based form that allows parents to register multiple children (up to 4 programs per child) simultaneously, making tracking effortless for administrators.',
              },
              {
                label: 'Guestbook System',
                text: 'enhances school security by tracking campus visitors and automatically sending welcome emails.',
              },
              {
                label: 'Realization Budget System',
                text: 'monitors monthly departmental budget usage and analyzes data to optimize future budgeting cycles.',
              },
            ],
          },
          'Redesigned the school newsletter using HTML, CSS, and JavaScript to improve visual appeal and engagement (newsletter portfolio).',
          'Built real-time analytics dashboards in Looker Studio to track visitor traffic, admission metrics, and student data.',
          'Implemented an automated music player in the Front Office with scheduled startup and shutdown configurations.',
        ],
      },
    ],
  },
  {
    title: 'General Affairs Supervisor',
    org: 'Cahaya Bangsa Classical School',
    location: 'Padalarang, West Java, Indonesia',
    period: 'July 2019 – July 2023',
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Supervised multi-functional teams, including General Services (cleaning), Transportation, Maintenance, Landscaping, and Security, ensuring operational targets were met consistently.',
          'Worked together with the Health & Nutrition Coordinator to ensure school safety.',
          'Responsible for school assets, including vehicles, event needs, and equipment used for teaching and learning.',
          'Coordinated with third-party vendors.',
        ],
      },
      {
        heading: 'Management improvements',
        items: [
          'Developed and managed budget planning and realization monitoring systems using spreadsheets, ensuring effective cost control across operations and asset expenditures.',
          'Built a comprehensive budgeting framework covering maintenance, utilities (electricity, water), and medical supplies, improving financial planning accuracy.',
          'Contributed to the Crisis Management Plan and implemented emergency SOPs for earthquakes, fires, bomb threats, armed threats, and civil unrest.',
          'Designed and enforced security SOPs aligned with national regulations, strengthening compliance and risk management.',
          'Supported the ACSI & WASC accreditation processes, ensuring alignment with international safety and facility standards.',
        ],
      },
      {
        heading: 'Operational improvements & achievements',
        items: [
          'Created an Equipment Asset Standard (purchasing guidelines for item brands, types, and installation), successfully reducing maintenance costs.',
          {
            text: 'Standardized fire safety regulations, 345 kVA electrical installations, and plumbing systems (MEP) to improve safety and efficiency:',
            children: [
              'Installed fire alarms and earthquake sensors.',
              'Optimized fire extinguisher placements, types, and quality in coordination with the local Fire Department.',
              'Designed and implemented a phased Public Address (PA) system, optimizing a limited budget to create a centralized communication system.',
              'Integrated the fire and earthquake alarm systems with the PA system, improving emergency response effectiveness.',
              'Stabilized 3-phase electrical installations by calculating and balancing load usage.',
              'Separated electrical circuits to enhance electronic safety.',
              'Standardized the installation of electrical cables and lightning rods (certified).',
              'Installed water filtration systems to improve hygiene.',
              'Implemented laboratory safety standards, including the installation of chemical vaults and eyewash stations.',
              'Improved facility signage (pedestrian pathways, parking, no-smoking zones, drop-off areas) to ensure safety and compliance with government regulations.',
            ],
          },
          'Developed and improved cleaning standards, creating comprehensive guidelines, checklists, and monitoring systems, while coordinating with third-party vendors for scenting and sanitization.',
          'Upgraded the CCTV infrastructure, shifting from DVR to NVR systems and transitioning from passive recording to active monitoring to enhance overall security.',
          'Coordinated with the local police and community security services to ensure a safe environment.',
          'Enhanced the campus landscape in collaboration with third-party vendors.',
          'Managed UKL-UPL registration to ensure environmental compliance (AMDAL certification).',
          'Designed and implemented a maintenance request system integrated with Telegram, significantly improving response times and service coordination.',
          'Enhanced event sound systems through equipment upgrades (mixer, speakers, subwoofers, microphones, and cabling), improving overall audio quality and reliability.',
          'Developed an Employee Medical Record system designed for easy annual updates.',
          {
            text: 'Managed COVID-19 outbreak procedures by:',
            children: [
              'Developing an EHAC (Electronic Health Alert Card) system for employees and students.',
              'Executing safe sanitation and disinfection protocols specifically designed to prevent damage to wooden and metal equipment.',
              'Establishing hybrid procedures in coordination with department heads, HR, and the school doctor.',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'General Affairs Staff',
    org: 'Cahaya Bangsa Classical School',
    location: 'Padalarang, West Java, Indonesia',
    period: 'March 2017 – July 2019',
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Maintained the cleanliness of the school area.',
          'Responsible for the availability of cleaning supplies.',
          'Helped prepare school events.',
          'Supervised the in-house cleaning crew (custodians).',
        ],
      },
      {
        heading: 'Operational improvements',
        items: [
          'Standardized custodian uniforms and initiated daily briefings to improve team alignment and professional appearance.',
          'Improved stock management for cleaning supplies by implementing a FIFO (First-In, First-Out) inventory system.',
          'Standardized cleaning equipment and optimized chemical usage for better efficiency and safety.',
          'Conducted random facility inspections to ensure consistent quality control and adherence to cleanliness standards.',
          'Mentored and trained the custodian team, focusing on skill development and teamwork, and provided personal financial guidance.',
          'Proposed and implemented hotel-grade cleaning standards (incorporating both daily and deep-cleaning routines) across the school facilities.',
          'Served as a sound technician for school events and supervised the custodian crew during audio system installations.',
          'Managed event logistics and equipment preparation, ensuring all operational requirements were fulfilled for smooth and successful event execution.',
        ],
      },
    ],
  },
  {
    title: 'Regional Manager',
    org: 'PT Cintaka Bumi Pertiwi (Dialogue Management Group)',
    location: 'North Jakarta, DKI Jakarta, Indonesia',
    period: 'January 2016 – December 2016',
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Prepared and presented regional reports directly to the President Director.',
          'Planned and evaluated operations to be cost-effective.',
          'Developed marketing and advertising plans.',
          'Oversaw office operations.',
          'Responsible for cash flow, sales, and availability of goods.',
          'Responsible for maximizing company profits.',
        ],
      },
      {
        heading: 'Management improvements',
        items: [
          'Restructured the employee wage system to ensure transparent, fair, and effective compensation management.',
          'Optimized warehouse stock management by implementing a FIFO (First-In, First-Out) inventory system.',
          'Developed a centralized sales tracking system in seamless coordination with headquarters.',
          'Developed company branding strategies to support and drive marketing initiatives.',
        ],
      },
      {
        heading: 'Operational improvements & achievements',
        items: [
          'Managed CCTV installations across the office and warehouse to enhance facility safety and security.',
          'Conducted Microsoft Excel training sessions for administrative staff to boost productivity and operational efficiency.',
          "Achieved the company's sales target within a 9-month timeframe.",
        ],
      },
    ],
  },
  {
    title: 'HRGA (Human Resources & General Affairs)',
    org: 'PT Cintaka Bumi Pertiwi (Dialogue Management Group)',
    location: 'North Jakarta, DKI Jakarta, Indonesia',
    period: 'August 2014 – December 2015',
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Managed HR, IT, and administrative operations, ensuring organizational stability and service quality.',
          'Supported recruitment and staff coordination with central management.',
          'Managed office supplies and inventory to ensure uninterrupted operations.',
        ],
      },
      {
        heading: 'Operational improvements',
        items: [
          'Upgraded and maintained administrative workstations through hardware replacements, routine cleaning, and the implementation of robust malware and virus prevention protocols.',
          'Conducted Microsoft Excel training sessions for administrative staff to enhance daily productivity and technical skills.',
        ],
      },
    ],
  },
  {
    title: 'Secretary of the Synod',
    org: 'Sinode Gereja Kristen Immanuel (GKIm)',
    location: 'Bandung, West Java, Indonesia',
    period: 'February 2014 – August 2014',
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Coordinated national-level pastoral assemblies, delivering high-standard hospitality and ensuring smooth event execution.',
          "Maintained the synod's website.",
          'Managed event documentation across multiple churches.',
          'Ensured the availability of catechism and teaching materials, supporting consistency in doctrinal education.',
          'Oversaw office administration and facility readiness, ensuring a clean, organized, and professional working environment.',
        ],
      },
      {
        heading: 'Operational improvements',
        items: [
          'Redesigned the synod website and communication approach, improving visibility, accessibility, and audience engagement (www.sinodegkim.com).',
        ],
      },
    ],
  },
  {
    title: 'Asset Management',
    org: 'Panghegar Group',
    location: 'Bandung, West Java, Indonesia',
    period: 'August 2012 – December 2013',
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Performed comprehensive asset inventory and depreciation analysis for five multi-story hotel properties, supporting accurate financial reporting and asset lifecycle management.',
          'Coordinated with the maintenance, procurement, and finance teams to manage warranty tracking, reporting, and asset disposal processes, including auctions, ensuring compliance and operational efficiency.',
        ],
      },
      {
        heading: 'Achievements',
        items: ['Successfully recorded hotel and office assets for four buildings with 20 floors in three and a half months.'],
      },
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'HI Support – Internal Operations Platform',
    context: 'PT Heksatex Indah',
    period: 'September 2026 – Present',
    points: [
      'Designed and delivered a full-stack internal web application (Python/Flask, React/TypeScript, PostgreSQL) used across Yarn Preparation, Transport & Logistics, and Security & Front Office.',
      'Automated operator bonus calculation from ERP production reports (CSV/XLSX import), replacing manual spreadsheet work with a dashboard and print-ready bonus reports.',
      'Built an executive dashboard with MTD/YTD KPIs, period-over-period comparison, and drill-down on every chart for management decision-making.',
      'Developed a Sales Contract-to-Manufacturing Order lead-time scorecard (monthly grading, backlog tracking, and follow-up lists by department).',
      'Implemented role-based access control per page, an audit log, JWT authentication, and a configurable time zone and shift plan.',
      'Built fleet management: vehicle booking and approval, fuel efficiency analytics, and maintenance and tax due-date tracking.',
      'Digitized security and front office operations: visitor registration with on-device OCR of ID cards, plus vendor vehicle and goods logs.',
      'Deployed to production on PostgreSQL (Supabase) with a LAN server and Vercel, using Alembic migrations, a preview environment, and a release checklist; added MySQL 8 support.',
      'Maintained 1,500+ automated tests (pytest, Vitest).',
    ],
    stack: [
      'Flask', 'SQLAlchemy', 'Alembic', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts',
      'PostgreSQL', 'MySQL', 'Supabase', 'Vercel', 'pytest', 'Vitest',
    ],
    shots: [
      {
        src: '/projects/hi-performance.webp',
        caption: 'Operator performance dashboard: daily trend against the upper and lower targets, output per operator, and progress toward each bonus tier.',
      },
      {
        src: '/projects/hi-racks.webp',
        caption: 'Ex-creel yarn stock: weight per rack and per yarn code, plus a rack map colored by how long each batch has been stored.',
      },
      {
        src: '/projects/hi-fleet.webp',
        caption: 'Fleet report: vehicle usage, distance, and cost, including requests rejected because the fleet was fully booked.',
      },
      {
        src: '/projects/hi-audit.webp',
        caption: 'Audit log: every change saved to the database, with the account that made it.',
      },
    ],
    shotsNote: 'Screenshots use demo data; operator names and figures are fictional.',
  },
  // Projects below that are not in the CV are described from their own repositories and READMEs.
  {
    name: 'RevoTech Storefront',
    context: 'RevoU Full-Stack Program',
    period: '2026',
    points: [
      'A Next.js storefront for RevoTech, the computer-parts shop whose API was built in RevoShop: current-generation PC parts priced in rupiah, with live search, a cart and checkout, and order tracking.',
      'An admin dashboard for products, categories, and orders, with revenue, stock, and order-status overviews.',
      'Three roles (superadmin, admin, customer), checked in the interface and on every write endpoint.',
      'A build planner that checks the parts fit together, a Ctrl/⌘ K command palette, and layouts from 390 px phones to 4K monitors.',
      '81 Playwright tests, run against both the in-memory store and PostgreSQL.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'Vercel', 'Playwright'],
    links: [
      { label: 'Live site', href: 'https://revou-module-3-revo-tech.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/jim1504/Revou-module_3-RevoTech' },
    ],
    shots: [
      { src: '/projects/revotech-home.webp', caption: 'Home page with the new-arrivals slider.' },
      { src: '/projects/revotech-product.webp', caption: 'Product page with an image gallery, stock meter, and specifications.' },
      { src: '/projects/revotech-build.webp', caption: 'Build planner that checks the selected parts are compatible.' },
      { src: '/projects/revotech-admin.webp', caption: 'Admin dashboard: revenue, orders by status, low stock, and the product table.' },
    ],
  },
  {
    name: 'RevoShop E-Commerce Backend',
    context: 'RevoU Full-Stack Program',
    period: '2026',
    points: [
      'Designed a PostgreSQL database (users, categories, products, orders, order items) with schema, seed, and query scripts, plus an ERD.',
      'Built the Flask + SQLAlchemy layer with Flask-Migrate migrations, user registration and product API routes, and tested endpoints with Postman.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/jim1504/Revou-revoshop-jim1504' }],
    shots: [
      { src: '/projects/revoshop-erd.webp', caption: 'Entity-relationship diagram of the store database.' },
      { src: '/projects/revoshop-api.webp', caption: 'Creating a product through the API in Postman (201 Created).' },
      { src: '/projects/revoshop-db.webp', caption: 'The production tables on Supabase PostgreSQL.' },
    ],
  },
  {
    name: 'Qookaa – Desktop Companion',
    context: 'Personal open-source project',
    period: '2026',
    points: [
      "A small quokka assistant that lives at the top of the screen (or in a Mac's notch): clock and timer, calendar and mail reminders, tasks, music with synced lyrics, and chat with Claude, ChatGPT, Gemini, or Grok.",
      'Shows AI coding agents (Claude Code, Codex, Gemini CLI, and others) working live, and lets you answer Claude Code permission requests from the notch.',
      'Runs on macOS (Swift 6, SwiftUI) and on Windows and Linux (Tauri 2). Keys stay in the system keychain; no account and no telemetry.',
      "Developed from an MIT-licensed open-source project by Louis Raillé.",
    ],
    stack: ['Swift', 'SwiftUI', 'Tauri', 'Rust', 'TypeScript'],
    shots: [
      { src: '/projects/qookaa-overview.webp', caption: 'The open island: upcoming events, reminders, and tasks, with the Mail and Music pills.', fit: 'contain' },
      { src: '/projects/qookaa-task.webp', caption: 'A task the chat AI has already done: a PDF summarized, ready to copy.', fit: 'contain' },
      { src: '/projects/qookaa-chat.webp', caption: 'Chatting with Qookaa.', fit: 'contain' },
      { src: '/projects/qookaa-alarm.webp', caption: "Time's up: Qookaa covers its ears until you click.", fit: 'contain' },
    ],
  },
  {
    name: 'School Newsletter',
    context: 'Cahaya Bangsa Classical School',
    period: 'March 2026 issue',
    points: [
      'Redesigned the school newsletter using HTML, CSS, and JavaScript to improve visual appeal and engagement.',
      'One page with a section for each school division (EC, GS, SOL, SOR), a schoolwide calendar, and an English/Indonesian language switch.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    shots: [
      { src: '/projects/newsletter-cover.webp', caption: "The cover: this month's highlights and what is coming soon." },
      { src: '/projects/newsletter-calendar.webp', caption: 'The schoolwide calendar and general information.' },
      { src: '/projects/newsletter-section.webp', caption: 'A division section: its own cover, calendar, and announcements.' },
    ],
    shotsNote: "Photos are blurred here to protect students' privacy.",
  },
  {
    name: 'Admission Confirmation Email',
    context: 'Cahaya Bangsa Classical School',
    points: [
      'An HTML email sent automatically when parents submit the admission form: a personal welcome, the registration number, the documents to send, and the steps of the admission process.',
      'Merge fields are filled in from the form response, and the markup is email-safe HTML with Outlook fallbacks.',
    ],
    stack: ['HTML', 'CSS'],
    shots: [
      { src: '/projects/email-welcome.webp', caption: 'The welcome letter, personalized from the form response.' },
      { src: '/projects/email-process.webp', caption: 'Registration number, required documents, and the admission process.' },
    ],
  },
  {
    name: 'Photo Gallery',
    context: 'Personal open-source project',
    points: [
      'A responsive photo gallery: a masonry layout with CSS columns that switches from two to three columns when there are five or more photos, and to one column on phones.',
      'Click a photo to open it in a lightbox; click again or press Escape to close it.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    shots: [
      { src: '/projects/gallery-grid.webp', caption: 'Six photos, so the gallery switches to three columns.' },
      { src: '/projects/gallery-lightbox.webp', caption: 'A photo opened in the lightbox.' },
    ],
    shotsNote: "Shown with stand-in images. The original displays school event photos, left out here to protect students' privacy.",
  },
  {
    name: 'Textile Production Data Projects',
    context: 'PT Heksatex Indah',
    period: '2026',
    points: [
      'Yarn waste analysis: reconciled warehouse receipts, warping receipts, and daily production reports (HPH) by yarn lot to estimate leftover yarn in kilograms, cones, and meters.',
      'Converted production spreadsheets (yarn BOM, warping beam master data) into PostgreSQL databases.',
      'Built a daily tricot machine-status report template and a production schedule export (CSV) from ERP data.',
    ],
  },
]

export const technicalSkills: [string, string][] = [
  ['Languages & Frameworks', 'Python (Flask, SQLAlchemy, Alembic/Flask-Migrate), JavaScript (vanilla), TypeScript, React, Vite, Next.js'],
  ['Databases & Modeling', 'SQL, PostgreSQL, MySQL, SQLite — database management, data modeling, and data structures'],
  ['Markup & Styling', 'HTML5, CSS, Tailwind CSS'],
  ['API & Security', 'REST APIs, JWT authentication, role-based access control (RBAC), AI APIs (LLMs using PyTorch)'],
  ['Data', 'Data Visualization (Recharts), ERP Integration, ETL/Data Import'],
  ['Testing & QA', 'pytest, Vitest, Postman, Locust — testing, debugging, and quality assurance'],
  ['Cloud & DevOps', 'Supabase, Vercel, VMs, Docker, Linux, systemd, Git, GitHub'],
  ['AI-Assisted Development', 'Claude, DeepSeek, ChatGPT, Gemini, Copilot, Kiro'],
]

export const otherSkills: [string, string][] = [
  ['Operations', 'Hospitality Management, Asset & Inventory Management, Facilities, Safety, & Crisis Management, Workflow & Process Optimization, Systems Development & Implementation, SOP Design & Implementation, Budgeting & Cost Control'],
  ['Safety & Compliance', 'First Aid & AED Response, Fire Safety & Emergency Procedures, Occupational Health & Safety (K3), Certified Child Safety by CSPN'],
  ['Data Analytics', 'Google Looker Studio, Tableau'],
  ['Platforms & Tools', 'Microsoft Office (Excel, Word, PowerPoint, Visio), Google Workspace (Sheets, Docs, Slides, Forms), AppSheet, Jotform, WordPress, VS Code, GitHub, DBeaver, Postman'],
  ['Design & Media', 'Adobe Photoshop, Adobe Audition, Adobe Express'],
  ['Broadcasting', 'OBS Studio, ProPresenter'],
  ['Other Technical', 'PC Building & Troubleshooting, Basic Networking & System Setup'],
]

export const education = [
  { name: 'Full-Stack Software Engineering', school: 'RevoU', note: 'in progress', period: 'June 2026 – November 2026' },
  { name: 'Diploma in Hotel Management', school: 'LPT Panghegar Bandung', period: '2010 – 2012' },
]

export const certifications: [string, string, string][] = [
  ['Software Engineer', 'HackerRank', 'September 2026'],
  ['Basic Software Engineering Certification', 'RevoU', 'April 2026'],
  ['Digital Marketing Certification', 'RevoU', 'April 2026'],
  ['AED Training', 'Mindray', '2025'],
  ['Data Analytics Class', 'RevoU', '2023'],
  ['Basic Life Support (BLS) Certification', 'Cahaya Kawaluyan Hospital', '2022'],
  ['Child Protection Certificate', 'CSAWA (Child Safety & Wellbeing Association)', '2022'],
  ['Occupational Health & Safety Management (K3) Certification', 'SRZ Consultrain', '2022'],
  ['General Affairs in Human Resources Certification', 'HRIndo Society', '2022'],
  ['Leadership Certification', 'El Shaddai Creative Community', 'August 2010'],
]

export const languages: [string, string][] = [
  ['Indonesian', 'Native'],
  ['English', 'Professional Working Proficiency'],
]

export const personalDetails: [string, string][] = [
  ['Gender', 'Male'],
  ['Place & Date of Birth', 'Bandung, April 15, 1992'],
  ['Marital Status', 'Married'],
  ['Religion', 'Christian'],
  ['Nationality', 'Indonesian'],
]
