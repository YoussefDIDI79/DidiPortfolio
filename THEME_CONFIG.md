# Theme Configuration Guide

## Color Customization

All theme colors are defined in `client/src/index.css` using CSS variables. This allows for easy customization and automatic dark/light mode switching.

### Primary Brand Colors

```css
:root {
  --primary: hsl(217.2, 91.2%, 59.8%);           /* Main brand color (blue) */
  --primary-foreground: hsl(210, 40%, 98%);       /* Text on primary background */
  --accent: hsl(45.4, 93.4%, 47.5%);             /* Accent color (yellow/gold) */
  --accent-foreground: hsl(222.2, 84%, 4.9%);     /* Text on accent background */
}
```

### Background Colors

```css
:root {
  --background: hsl(210, 40%, 98%);               /* Main page background */
  --card: hsl(0, 0%, 100%);                       /* Card backgrounds */
  --muted: hsl(210, 40%, 96%);                    /* Subtle backgrounds */
}

.dark {
  --background: hsl(222.2, 84%, 4.9%);            /* Dark mode background */
  --card: hsl(222.2, 84%, 4.9%);                  /* Dark mode cards */
  --muted: hsl(217.2, 32.6%, 17.5%);             /* Dark mode subtle backgrounds */
}
```

### Text Colors

```css
:root {
  --foreground: hsl(222.2, 84%, 4.9%);            /* Main text color */
  --muted-foreground: hsl(215.4, 16.3%, 46.9%);   /* Secondary text */
}

.dark {
  --foreground: hsl(210, 40%, 98%);                /* Dark mode main text */
  --muted-foreground: hsl(215, 20.2%, 65.1%);     /* Dark mode secondary text */
}
```

## Typography

### Font Families

```css
--font-sans: 'Inter', sans-serif;      /* Main font */
--font-serif: Georgia, serif;          /* Serif font for headings */
--font-mono: Menlo, monospace;         /* Code/monospace font */
```

### Custom Fonts

To change fonts, update the Google Fonts import in `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then update the CSS variables:

```css
:root {
  --font-sans: 'YourFont', sans-serif;
}
```

## Border Radius

```css
:root {
  --radius: 8px;                      /* Base border radius */
}
```

Tailwind classes use this for consistency:
- `rounded-lg`: `var(--radius)`
- `rounded-md`: `calc(var(--radius) - 2px)`
- `rounded-sm`: `calc(var(--radius) - 4px)`

## Custom Animations

### Fade In Animation

```css
.animate-fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
```

### Gradient Background

```css
.gradient-bg {
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
}
```

## Tailwind Customization

Additional theme configuration in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // CSS variables are automatically mapped
      primary: "var(--primary)",
      background: "var(--background)",
      // ...
    },
    animation: {
      "fade-in": "fadeIn 0.6s ease-in-out",
    }
  }
}
```

## RTL Support

RTL styles are handled automatically through:

1. HTML dir attribute: Set by `LanguageProvider`
2. CSS RTL selectors:
   ```css
   [dir="rtl"] {
     text-align: right;
   }
   
   [dir="rtl"] .rtl\:text-left {
     text-align: left;
   }
   ```

## Creating New Color Schemes

To create a new color scheme:

1. Define new CSS variables in `:root` and `.dark`
2. Update the color values in HSL format
3. Test both light and dark modes
4. Ensure proper contrast ratios for accessibility

### Example: Blue/Green Theme

```css
:root {
  --primary: hsl(200, 80%, 50%);       /* Blue */
  --accent: hsl(150, 80%, 40%);        /* Green */
}
```