# Editable Content Guide

## How to Update Portfolio Content

All content is centralized in `client/src/lib/translations.ts` for easy editing. The file contains both English and Arabic translations.

### Personal Information

```typescript
// Hero Section
"hero.name": "Youssef Didi",
"hero.title": "Full Stack Developer & Cybersecurity Specialist",
"hero.description": "Passionate about building secure, scalable applications...",

// About Section  
"about.location": "Morocco",
"about.availability": "Available Worldwide",
"about.hobby": "Coffee Enthusiast",
```

### Skills Section

Update skill descriptions in:
```typescript
"skills.networking.desc": "Network design, configuration, and troubleshooting...",
"skills.programming.desc": "Full-stack development with JavaScript, Python...",
"skills.dataAnalysis.desc": "Statistical analysis, data visualization...",
"skills.cybersecurity.desc": "Security assessment, penetration testing...",
```

### Education Content

```typescript
"education.masters": "Master's in Computer Science",
"education.masters.school": "Mohammed V University",
"education.masters.desc": "Specialized in cybersecurity, data science...",
```

### Experience Details

```typescript
"experience.analyst": "Cybersecurity Analyst",
"experience.analyst.company": "SecureTech Solutions",
"experience.analyst.desc": "Leading security assessments and implementing...",
```

### Projects Information

```typescript
"projects.ecommerce": "E-commerce Analytics Dashboard",
"projects.ecommerce.desc": "Real-time analytics dashboard for e-commerce...",
```

### Contact Information

Update contact details in `client/src/components/sections/contact.tsx`:

```typescript
const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/youssef-didi", // Update this URL
  },
  {
    name: "GitHub", 
    icon: Github,
    href: "https://github.com/youssef-didi", // Update this URL
  },
  {
    name: "WhatsApp",
    icon: MessageSquare,
    href: "https://wa.me/212123456789", // Update this phone number
  },
];
```

And the email address:
```typescript
<p className="text-muted-foreground" data-testid="text-contact-email">
  youssef.didi@example.com  // Update this email
</p>
```

## Adding New Languages

To add more languages, extend the `translations` object in `translations.ts`:

```typescript
export const translations = {
  en: { /* existing content */ },
  ar: { /* existing content */ },
  fr: { /* add French translations */ },
  es: { /* add Spanish translations */ },
};
```

## Project Links

Update project GitHub and demo links in `client/src/components/sections/projects.tsx`:

```typescript
const projects = [
  {
    // ...
    github: "https://github.com/youssef-didi/project-name", // Real GitHub URL
    demo: "https://project-demo.com", // Live demo URL
  },
];
```