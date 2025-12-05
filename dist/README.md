# Podchemy Supreme - Production Build

This folder contains the production-ready build of **Podchemy Supreme**.

## 📦 Contents

- `.next/` - Next.js production build output
- `public/` - Static assets (images, fonts, etc.)
- `package.json` - Project dependencies
- `package-lock.json` - Locked dependency versions
- `next.config.ts` - Next.js configuration

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy from this directory:
   ```bash
   cd dist
   vercel
   ```

3. Follow the prompts to deploy

### Option 2: Node.js Server

1. Install dependencies:
   ```bash
   npm install --production
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. The site will be available at `http://localhost:3000`

### Option 3: Docker

1. Create a `Dockerfile` in this directory:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install --production
   COPY . .
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. Build and run:
   ```bash
   docker build -t podchemy-supreme .
   docker run -p 3000:3000 podchemy-supreme
   ```

### Option 4: Static Export (if configured)

If you've configured Next.js for static export, you can serve the `out` folder with any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Cloudflare Pages

## 🔧 Environment Variables

If your app requires environment variables, create a `.env.production` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

## 📊 Build Information

- **Framework**: Next.js 15
- **Build Date**: Generated on production build
- **Node Version**: 18+ recommended
- **Package Manager**: npm

## 🌐 Production Checklist

Before deploying to production:

- [ ] Set up environment variables
- [ ] Configure custom domain (if applicable)
- [ ] Set up SSL/TLS certificates
- [ ] Configure CDN for static assets
- [ ] Set up monitoring and analytics
- [ ] Test all routes and functionality
- [ ] Optimize images and assets
- [ ] Enable compression (gzip/brotli)

## 📝 Notes

- This is a **server-side rendered** Next.js application
- Requires Node.js runtime to serve dynamic routes
- For best performance, deploy to a platform that supports Next.js (Vercel, Netlify, etc.)
- The `.next` folder contains optimized production code

## 🆘 Support

For issues or questions:
1. Check the main project README
2. Review Next.js deployment documentation
3. Contact the development team

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
