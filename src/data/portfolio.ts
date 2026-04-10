export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  features: string[];
  tech: string[];
  impact?: string;
  link?: string;
  category: 'Enterprise' | 'Fintech' | 'Social' | 'Creative' | 'Utility';
}

export interface Experience {
  company: string;
  companyLink?: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'clippers',
    title: 'LA Clippers + Intuit Dome',
    role: 'Senior iOS Engineer',
    description: 'Official mobile app for LA Clippers & Intuit Dome arena experience. Supports large-scale live events in a $2B arena with 18,000 seating capacity.',
    features: ['Ticketing', 'Parking access', 'Seat selection', 'In-app payments'],
    tech: ['Swift', 'SwiftUI', 'Bluetooth (IoT)', 'Deep Linking', 'Notifications'],
    impact: '$2B arena scale, real-time fan experience',
    link: 'https://apps.apple.com/us/app/la-clippers-intuit-dome/id6476565235',
    category: 'Enterprise'
  },
  {
    id: 'red-sea',
    title: 'Visit Red Sea',
    role: 'Senior iOS Engineer',
    description: 'Luxury travel and tourism platform for Red Sea & AMAALA destinations, part of Saudi Arabia’s Vision 2030 initiative.',
    features: ['Resort booking', 'Itinerary planning', 'Activity discovery', 'Transport booking'],
    tech: ['Swift', 'SwiftUI', 'Apple Pay', 'Deep Linking', 'Notifications'],
    impact: 'Saudi Arabia’s Vision 2030 initiative',
    link: 'https://apps.apple.com/us/app/visit-red-sea/id6714457903',
    category: 'Creative'
  },
  {
    id: 'wizink',
    title: 'WiZink Bank',
    role: 'Senior iOS Engineer',
    description: 'Digital banking application for European customers operating across Spain and Portugal.',
    features: ['Money transfers', 'Payments', 'Card management', 'Transaction tracking'],
    tech: ['Swift', 'SwiftUI', 'Biometric Auth', 'Notifications'],
    impact: 'Secure and scalable fintech solution for EU',
    link: 'https://apps.apple.com/pt/app/wizink-o-teu-banco-f%C3%A1cil/id1465978006',
    category: 'Fintech'
  },
  {
    id: 'alinea',
    title: 'Alinea: Personalized Investing',
    role: 'iOS Engineer (Early Team Member)',
    description: 'YC-backed personalized investing platform ranked #6 on the finance charts, ahead of major players like Robinhood and Fidelity.',
    features: ['Portfolio tracking', 'Stock bundles (playlists)', 'Social investing', 'Fractional investing'],
    tech: ['Swift', 'SwiftUI', 'UIKit', 'Notifications', 'Plaid'],
    impact: '2M+ downloads | 160K+ funded accounts | #6 Finance App',
    link: 'https://apps.apple.com/us/app/alinea-personalized-investing/id1554623825',
    category: 'Fintech'
  },
  {
    id: 'glitty',
    title: 'Glitter Collages & Art :Glitty',
    role: 'Senior iOS Developer',
    description: 'Photo and video editing app that ranked #1 on the US App Store in the Photo & Video category.',
    features: ['Photo editing', 'Brush effects', 'Sparkle effects', 'Blend modes'],
    tech: ['Swift', 'Core Image', 'Core Graphics', 'AVFoundation'],
    impact: '#1 on US App Store (Photo & Video)',
    link: 'https://apps.apple.com/us/app/glitty-glitter-sparkle-fx/id1435607925',
    category: 'Creative'
  },
  {
    id: 'pixo',
    title: 'Vintage Film Camera: Pixo Cam',
    role: 'Senior iOS Developer',
    description: 'Vintage-style instant camera and photo editing application featured with Apple Editor’s Note.',
    features: ['Instant camera', 'Vintage filters', 'Photo lab', 'Media sharing'],
    tech: ['Swift', 'Core Image', 'Core Graphics'],
    impact: 'Featured with Apple Editor’s Note',
    link: 'https://apps.apple.com/us/app/pixo-instant-film-camera/id1476054229',
    category: 'Creative'
  },
  {
    id: 'winter-garden',
    title: 'Winter Garden',
    role: 'Tech Lead (iOS)',
    description: 'Community engagement app for discovering local events, deals, and businesses with AR experiences.',
    features: ['Events discovery', 'Promotions', 'AR experiences', 'Media interaction'],
    tech: ['Swift', 'UIKit', 'Unity (iOS Bridging)'],
    impact: 'Delivered interactive AR and multimedia features',
    link: 'https://apps.apple.com/us/app/winter-garden/id1460554968',
    category: 'Social'
  },
  {
    id: 'girl-scouts',
    title: 'All Things Girl Scouts',
    role: 'Tech Lead (iOS)',
    description: 'Community engagement app for Girl Scouts with events, deals, and interactive AR-based features.',
    features: ['Events', 'Scavenger hunts', 'AR experiences', 'Photo editing'],
    tech: ['Swift', 'UIKit', 'Unity (iOS Bridging)'],
    impact: 'Engaging interactive experience for community participation',
    link: 'https://apps.apple.com/us/app/all-things-girl-scouts/id1495932475',
    category: 'Social'
  },
  {
    id: 'sweeney',
    title: 'Sweeney Kincaid',
    role: 'iOS Developer',
    description: 'Enterprise catalogue and inventory management app for auction operations with large-scale media handling.',
    features: ['Inventory management', 'Media uploads', 'Offline storage', 'Real-time sync'],
    tech: ['Swift', 'Core Data', 'File Manager', 'Media Handling'],
    impact: 'Handled thousands of records and media files reliably',
    link: 'https://www.sweeneykincaid.com/SKLWebDoc/CatalogueApp/',
    category: 'Enterprise'
  },
  {
    id: 'i-witness',
    title: 'i-Witness',
    role: 'iOS Developer',
    description: 'Citizen engagement platform for reporting issues and communicating with local authorities.',
    features: ['Issue reporting', 'Location tagging', 'Media upload', 'Offline support'],
    tech: ['Objective-C', 'SQLite', 'Core Location'],
    impact: 'Improved communication between citizens and authorities',
    link: 'https://apps.apple.com/in/app/i-witness/id1131204543',
    category: 'Social'
  },
  {
    id: 'checkin',
    title: 'Checkin',
    role: 'iOS Developer',
    description: 'Enterprise event management platform for booking, operations, and customer management.',
    features: ['Booking management', 'Attendance tracking', 'RFID scanning', 'Notifications'],
    tech: ['Swift', 'UIKit', 'Core Location', 'Maps'],
    impact: 'Enabled efficient event operations with real-time tracking',
    link: 'https://www.checkin.no/',
    category: 'Enterprise'
  },
  {
    id: 'fun2',
    title: 'Fun2 - Short Video App',
    role: 'iOS Developer',
    description: 'Short-video creation and social media platform focused on sports and entertainment content.',
    features: ['Video recording', 'Editing', 'Music integration', 'Social feed'],
    tech: ['Swift', 'AVFoundation', 'Banuba SDK (AR)', 'DeepAR'],
    impact: 'Delivered engaging short-video experience with AR effects',
    category: 'Social'
  }
];

export const EDUCATION = [
  {
    degree: 'Master of Engineering',
    field: 'Computer Engineering (IT Systems And Network Securities)',
    school: 'Gujarat Technological University',
    period: '2013 – 2015'
  },
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering',
    school: 'Gujarat Technological University',
    period: '2008 – 2013'
  }
];

export const EXPERTISE = [
  'iOS Architecture Design',
  'Swift / SwiftUI Development',
  'AI-Assisted Development',
  'Scalable Mobile App Development',
  'Fintech & Enterprise Mobile Solutions',
  'REST API Integration & Networking',
  'Payments & In-App Purchases',
  'App Performance Optimization'
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Globant',
    companyLink: 'https://www.globant.com/',
    role: 'Senior Software Engineer – iOS',
    period: 'Apr 2022 – Present',
    location: 'Remote (Pune/Ahmedabad, India)',
    highlights: [
      'Developed and maintained enterprise-scale iOS applications for global clients',
      'Contributed to applications including LA Clipper + Intuite Dome, Visit Red Sea, and Wizink Bank',
      'Worked on large-scale projects with 100–500 member teams, collaborating within focused sub-teams of 20–25 engineers and contributing from project inception to delivery.',
      'Led end-to-end feature delivery from requirement analysis to production releases',
      'Collaborated with cross‑functional teams including backend engineers, designers, and product managers',
      'Performed architecture discussions and code reviews to maintain code quality and scalability'
    ]
  },
  {
    company: 'Alinea Invest',
    companyLink: 'https://www.alinea-invest.com/',
    role: 'Software Engineer – iOS (Remote)',
    period: 'Jan 2021 – Nov 2021',
    location: 'New York, USA',
    highlights: [
      'Developed Alinea, a YC-backed fintech mobile application with 2M+ downloads and 160K+ funded accounts',
      'I was part of the team from the very beginning, starting development with a small team of 8–10 members',
      'Worked closely with early engineering team to scale mobile product features',
      'Implemented investment workflows, onboarding systems, and user experience improvements',
      'Collaborated with distributed engineering team across multiple time zones',
      'Closely worked with founders'
    ]
  },
  {
    company: 'Webloom Solutions',
    companyLink: 'https://www.webloominc.com/',
    role: 'Member of Technical Staff – iOS (Remote)',
    period: 'Aug 2020 – Jan 2021',
    location: 'Bengaluru, India',
    highlights: [
      'Designed and developed a short-video and social media sharing application',
      'Implemented core features for media upload & editing, feed display, and user interaction',
      'Managed feature development lifecycle from planning to deployment',
      'Worked with team size of 10 to 15 people and directly worked with the founder'
    ]
  },
  {
    company: 'Credencys Solutions',
    companyLink: 'https://www.credencys.com/',
    role: 'Software Developer – iOS',
    period: 'Apr 2019 – Jun 2020',
    location: 'Ahmedabad, India',
    highlights: [
      'Served as Tech Lead across multiple client projects',
      'Implemented iOS‑Unity bridging and Unity based AI models in iOS mobile applications (Winter Garden & All Things Girl Scouts)',
      'Managed sprint planning, architecture decisions, and delivery timelines',
      'Received multiple client recognitions for high‑quality delivery'
    ]
  },
  {
    company: 'CMARIX TechnoLabs',
    companyLink: 'https://www.cmarix.com/',
    role: 'Sr. iOS Developer',
    period: 'Mar 2017 – Mar 2019',
    location: 'Ahmedabad, India',
    highlights: [
      'Developed an application that ranked #1 on the US App Store (Photo & Video category) - Glitter Collages & Art: Glitty',
      'Built an application featured with Apple Editor’s Note award - Vintage Film Camera: Pixo Cam',
      'Implemented advanced features including photo editing(core graphics, core image etc), in‑app purchases, map integrations, core data, and media processing',
      'Maintained applications with large active user bases'
    ]
  },
  {
    company: 'SilverSky Technology',
    companyLink: 'https://silverskytechnology.com/',
    role: 'Jr. iOS Developer',
    period: 'Jul 2015 – Feb 2017',
    location: 'Ahmedabad, India',
    highlights: [
      'Developed small iOS applications and also developed modules across multiple different iOS applications',
      'Implemented two-way syncing, payment gateways, maps, audio & video editing',
      'Gained strong experience in Swift, Objective‑C, UIKit, Auto Layout, and SDK integrations'
    ]
  }
];

export const SKILLS = {
  languages: ['Swift', 'Objective-C', 'Dart (Flutter)', 'JavaScript', 'TypeScript'],
  frameworks: ['SwiftUI', 'UIKit', 'Combine', 'WatchKit', 'Flutter', 'React'],
  architecture: ['MVC', 'MVVM', 'MVVM-C', 'Clean Architecture'],
  databases: ['Core Data', 'SQLite', 'Firebase'],
  tools: ['Xcode', 'VS Code', 'Android Studio', 'Git', 'GitLab', 'CI/CD'],
  ai: ['GitHub Copilot', 'ChatGPT', 'Claude', 'Google Gemini', 'CoreML', 'Vision']
};
