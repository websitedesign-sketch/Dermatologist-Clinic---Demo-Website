# Deployment Guide

## Pre-Deployment Checklist

- [ ] All tests passing (`npm run lint`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] Build succeeds (`npm run build`)
- [ ] Environment variables configured
- [ ] SEO metadata verified
- [ ] Analytics configured
- [ ] Security headers set
- [ ] Performance optimized
- [ ] Accessibility reviewed

## Environment Variables

```
VITE_API_URL=https://api.dermatologyclinic.com
VITE_ENVIRONMENT=production
```

## Vercel Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

```bash
vercel deploy --prod
```

## Netlify Deployment

1. Push code to GitHub
2. Connect repository to Netlify
3. Set environment variables in Netlify UI
4. Configure build command: `npm run build`
5. Configure publish directory: `dist`

## Traditional Hosting

1. Build the project: `npm run build`
2. Upload `dist/` folder to hosting
3. Configure server for SPA routing
4. Set cache headers for static assets
5. Enable gzip compression
6. Configure SSL/TLS

## Post-Deployment

- [ ] Test all pages and features
- [ ] Verify SEO metadata
- [ ] Check analytics integration
- [ ] Monitor performance
- [ ] Review security headers
- [ ] Test on various devices