# Overview

This is a full-stack portfolio website built with React frontend and Express.js backend. The application serves as a professional portfolio showcasing skills, experience, projects, and educational background. It features a multi-language interface (English and Arabic), contact form functionality, and file download capabilities for CVs and certificates. The portfolio is designed to highlight expertise in cybersecurity, full-stack development, networking, and data analysis.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with **React 18** using **TypeScript** and modern development practices:
- **Component Library**: Uses shadcn/ui components built on top of Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with CSS variables for theming, supporting both light and dark themes
- **State Management**: React Query (@tanstack/react-query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Internationalization**: Custom i18n implementation supporting English and Arabic (RTL) languages
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
The backend follows a **REST API** pattern using **Express.js**:
- **Server Framework**: Express.js with TypeScript for type safety
- **API Design**: RESTful endpoints for contact form submission and file downloads
- **Data Storage**: Currently uses in-memory storage (MemStorage class) with interface-based design for easy database integration
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **File Serving**: Static file serving for CV and certificate downloads
- **Development Setup**: Custom Vite integration for seamless full-stack development

## Data Storage Solutions
- **Current Implementation**: In-memory storage using Map data structures for development/demo purposes
- **Database Ready**: Drizzle ORM configured with PostgreSQL schema definitions, ready for production database integration
- **Schema Design**: Contacts table with fields for name, email, message, language preference, and timestamps
- **Migration Support**: Drizzle migrations configured for database schema management

## Authentication and Authorization
- **Current State**: No authentication implemented - designed as a public portfolio site
- **Contact Protection**: Basic form validation and robot checking to prevent spam
- **Admin Endpoints**: Basic admin endpoint exists for viewing contacts (would need authentication in production)

## External Dependencies
- **Database**: PostgreSQL with Neon serverless driver (@neondatabase/serverless) configured
- **UI Components**: Extensive use of Radix UI primitives for accessible components
- **Development Tools**: 
  - Replit-specific plugins for development environment integration
  - Custom error overlay and cartographer plugins for debugging
- **Fonts**: Google Fonts integration (Inter, DM Sans, Architects Daughter, Fira Code, Geist Mono)
- **File Downloads**: Server-side file serving for CV and certificate downloads
- **Form Handling**: React Hook Form with resolver integration for form validation
- **Styling System**: Tailwind CSS with custom color variables and theme system