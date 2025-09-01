# Project File Tree

```
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   │   ├── certificates/            # Certificate PDFs for download
│   │   │   ├── aws.pdf
│   │   │   ├── ccna.pdf
│   │   │   ├── ceh.pdf
│   │   │   └── google-analytics.pdf
│   │   └── cv.pdf                   # CV for download
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/              # Layout components
│   │   │   │   ├── footer.tsx       # Site footer with copyright
│   │   │   │   └── navigation.tsx   # Main navigation with theme/language toggle
│   │   │   ├── sections/            # Page sections
│   │   │   │   ├── about.tsx        # About section with personal info
│   │   │   │   ├── contact.tsx      # Contact form and social links
│   │   │   │   ├── education.tsx    # Education and certifications
│   │   │   │   ├── experience.tsx   # Professional experience timeline
│   │   │   │   ├── hero.tsx         # Hero section with profile image
│   │   │   │   ├── projects.tsx     # Featured projects gallery
│   │   │   │   └── skills.tsx       # Skills showcase cards
│   │   │   └── ui/                  # Reusable UI components (shadcn/ui)
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── use-language.tsx     # Language switching hook
│   │   │   ├── use-mobile.tsx       # Mobile detection hook
│   │   │   ├── use-theme.tsx        # Theme switching hook
│   │   │   └── use-toast.ts         # Toast notification hook
│   │   ├── lib/                     # Utility libraries
│   │   │   ├── i18n.ts              # Internationalization utilities
│   │   │   ├── queryClient.ts       # React Query client setup
│   │   │   ├── translations.ts      # Translation keys and content
│   │   │   └── utils.ts             # General utility functions
│   │   ├── pages/                   # Route pages
│   │   │   ├── home.tsx             # Main portfolio page
│   │   │   └── not-found.tsx        # 404 page
│   │   ├── App.tsx                  # Main app component with providers
│   │   ├── index.css                # Global styles and CSS variables
│   │   └── main.tsx                 # Application entry point
│   └── index.html                   # HTML template with SEO meta tags
├── server/                          # Backend Express.js server
│   ├── index.ts                     # Server entry point
│   ├── routes.ts                    # API routes definition
│   ├── storage.ts                   # Data storage interface and implementation
│   └── vite.ts                      # Vite development server setup
├── shared/                          # Shared types and schemas
│   └── schema.ts                    # Database schema and Zod validation
├── attached_assets/                 # Generated assets
│   └── generated_images/            # AI-generated project thumbnails and profile image
├── components.json                  # shadcn/ui component configuration
├── drizzle.config.ts               # Database migration configuration
├── package.json                     # Project dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite build configuration
```

## Key Architecture Decisions

- **Frontend**: React 18 with TypeScript, shadcn/ui components, Tailwind CSS
- **Backend**: Express.js with TypeScript, RESTful API design
- **State Management**: React Query for server state, React Context for UI state
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming
- **Internationalization**: Custom i18n with English/Arabic support and RTL
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds