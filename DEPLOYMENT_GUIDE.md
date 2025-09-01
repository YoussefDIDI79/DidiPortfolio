# Deployment Guide

## Replit Deployment

### Quick Deploy
1. Click the **Deploy** button in the Replit interface
2. Choose **Autoscale** deployment for production
3. The app will be available at `https://[repl-name].[username].replit.app`

### Environment Setup
- No additional environment variables needed for basic functionality
- All static assets (PDFs, images) are included in the build

### Build Process
- Frontend: Vite builds the React app to `dist/public`
- Backend: Express.js serves the API and static files
- Single deployment handles both frontend and backend

## Alternative Deployment Options

### Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run `npm run build` to build the frontend
3. Deploy with `vercel --prod`
4. Configure environment variables in Vercel dashboard

### Netlify Deployment
1. Build the frontend: `npm run build`
2. Upload `dist/public` folder to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `dist/public`

### Custom Server Deployment
1. Install dependencies: `npm install`
2. Build frontend: `npm run build`
3. Start production server: `npm start`
4. Server runs on port specified in `PORT` environment variable (default: 5000)

## Performance Optimizations

### Frontend
- ✅ Bundle splitting with Vite
- ✅ Image optimization
- ✅ CSS minification
- ✅ Tree shaking
- ✅ Font preloading

### Backend
- ✅ Static file caching
- ✅ Gzip compression
- ✅ Request logging
- ✅ Error handling

## Security Considerations

- ✅ Input validation with Zod schemas
- ✅ XSS protection through React
- ✅ CORS configuration
- ✅ File download security
- ✅ Basic spam protection on contact form

## SSL/HTTPS

Replit Deployments automatically provide SSL certificates. For custom domains:
1. Configure custom domain in Replit settings
2. Update DNS records as instructed
3. SSL certificate will be automatically provisioned