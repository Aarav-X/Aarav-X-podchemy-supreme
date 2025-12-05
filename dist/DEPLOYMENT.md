# 🚀 Podchemy Supreme - Deployment Guide

Complete guide for deploying your Podchemy Supreme application to production.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Deployment Platforms](#deployment-platforms)
3. [Environment Setup](#environment-setup)
4. [Performance Optimization](#performance-optimization)
5. [Monitoring & Analytics](#monitoring--analytics)

---

## Quick Start

### Local Production Test

To test the production build locally:

```bash
# On Windows
start.bat

# On Mac/Linux
npm install --production
npm start
```

The site will be available at `http://localhost:3000`

---

## Deployment Platforms

### 🟢 Vercel (Easiest - Recommended)

**Why Vercel?**
- Built specifically for Next.js
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Free tier available

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd dist
   vercel
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

**Alternative: GitHub Integration**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Deploy automatically on every push

---

### 🔵 Netlify

**Steps:**

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

**Configuration:**
Create `netlify.toml` in the dist folder:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### 🟠 AWS (Advanced)

**Using AWS Amplify:**

1. Install Amplify CLI:
   ```bash
   npm i -g @aws-amplify/cli
   ```

2. Initialize:
   ```bash
   amplify init
   ```

3. Add hosting:
   ```bash
   amplify add hosting
   ```

4. Deploy:
   ```bash
   amplify publish
   ```

**Using EC2 + PM2:**

1. SSH into your EC2 instance
2. Install Node.js and PM2:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm i -g pm2
   ```

3. Upload your dist folder
4. Install dependencies:
   ```bash
   npm install --production
   ```

5. Start with PM2:
   ```bash
   pm2 start npm --name "podchemy" -- start
   pm2 save
   pm2 startup
   ```

---

### 🟣 Digital Ocean

**Using App Platform:**

1. Create a new app on Digital Ocean
2. Connect your GitHub repository
3. Configure build settings:
   - Build Command: `npm run build`
   - Run Command: `npm start`
4. Deploy

**Using Droplet:**

1. Create a Ubuntu droplet
2. SSH into the droplet
3. Install Node.js:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. Upload your dist folder
5. Install dependencies and start:
   ```bash
   npm install --production
   npm start
   ```

6. Use PM2 for process management (see AWS section)

---

### 🐳 Docker Deployment

**Dockerfile:**

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --production

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=deps /app/node_modules ./node_modules
COPY .next ./.next
COPY public ./public
COPY package.json ./

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
```

**Build and Run:**

```bash
# Build
docker build -t podchemy-supreme .

# Run
docker run -p 3000:3000 podchemy-supreme

# With environment variables
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://api.example.com podchemy-supreme
```

**Docker Compose:**

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

---

## Environment Setup

### Required Environment Variables

Create a `.env.production` file:

```env
# API Configuration (if needed)
NEXT_PUBLIC_API_URL=https://api.yoursite.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags (optional)
NEXT_PUBLIC_ENABLE_NEWSLETTER=true
```

### Platform-Specific Setup

**Vercel:**
- Add environment variables in the Vercel dashboard
- Settings → Environment Variables

**Netlify:**
- Site settings → Build & deploy → Environment

**AWS/Digital Ocean:**
- Set environment variables in your hosting configuration
- Or use `.env.production` file

---

## Performance Optimization

### 1. Enable Compression

**Nginx Configuration:**
```nginx
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss;
```

### 2. CDN Setup

- Use Vercel's built-in CDN (automatic)
- Or configure CloudFlare for any hosting platform

### 3. Image Optimization

Next.js automatically optimizes images. Ensure your hosting platform supports Next.js Image Optimization:
- ✅ Vercel (automatic)
- ✅ Netlify (with plugin)
- ⚠️ Custom servers (requires configuration)

### 4. Caching Headers

Next.js handles caching automatically, but you can customize in `next.config.ts`:

```typescript
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

---

## Monitoring & Analytics

### Google Analytics

Add to your environment variables:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Error Tracking

**Sentry Integration:**

1. Install Sentry:
   ```bash
   npm install @sentry/nextjs
   ```

2. Initialize:
   ```bash
   npx @sentry/wizard -i nextjs
   ```

### Performance Monitoring

**Vercel Analytics:**
- Automatically available on Vercel
- No setup required

**Custom Analytics:**
- Use Next.js built-in Web Vitals reporting
- Send to your analytics service

---

## SSL/HTTPS Setup

### Automatic (Recommended)
- ✅ Vercel: Automatic HTTPS
- ✅ Netlify: Automatic HTTPS
- ✅ AWS Amplify: Automatic HTTPS

### Manual Setup

**Using Let's Encrypt + Nginx:**

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal
sudo certbot renew --dry-run
```

---

## Custom Domain Setup

### Vercel
1. Go to your project settings
2. Domains → Add Domain
3. Follow DNS configuration instructions

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records

### CloudFlare (for any platform)
1. Add your site to CloudFlare
2. Update nameservers
3. Configure DNS to point to your hosting platform
4. Enable SSL/TLS (Full or Full Strict)

---

## Troubleshooting

### Build Errors

**Issue:** Build fails with memory error
**Solution:**
```bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Runtime Errors

**Issue:** 404 on dynamic routes
**Solution:** Ensure your hosting platform supports Next.js dynamic routing

**Issue:** Images not loading
**Solution:** Check that the `public` folder is deployed correctly

### Performance Issues

**Issue:** Slow page loads
**Solutions:**
- Enable CDN
- Optimize images
- Enable compression
- Use lazy loading for components

---

## Production Checklist

Before going live:

- [ ] Test all routes and functionality
- [ ] Set up environment variables
- [ ] Configure custom domain
- [ ] Enable HTTPS/SSL
- [ ] Set up monitoring and error tracking
- [ ] Configure analytics
- [ ] Test mobile responsiveness
- [ ] Optimize images and assets
- [ ] Set up backup strategy
- [ ] Configure CDN
- [ ] Test performance (Lighthouse score)
- [ ] Set up automated deployments
- [ ] Document deployment process

---

## Support & Resources

- **Next.js Deployment Docs:** https://nextjs.org/docs/deployment
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **AWS Amplify Docs:** https://docs.amplify.aws

---

**Built with ❤️ by the Podchemy team**

For questions or issues, please refer to the main project documentation.
