# AMEX Construction & Developments Website

A professional portfolio website for AMEX Construction, built with Next.js, React, and Tailwind CSS.

## 📋 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Photo

Before running the site, add your profile photo:

1. Save your photo as `ayman.jpg`
2. Place it in the `public/images/` folder
3. The site will automatically display it on the About page

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Main layout with navigation
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page with Ayman's bio
│   ├── portfolio/
│   │   └── page.tsx        # Project portfolio gallery
│   ├── contact/
│   │   └── page.tsx        # Contact form page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   ├── ProjectCard.tsx     # Project card component
│   └── ContactForm.tsx     # Contact form component
└── public/
    └── images/            # Place your images here

```

## 🎨 Pages

- **Home** - Hero section with services overview
- **About** - Ayman's profile and expertise
- **Portfolio** - Filterable project gallery
- **Contact** - Contact form and information

## 🚀 Customization

### Update Contact Information

Edit `src/components/Footer.tsx` and `src/app/contact/page.tsx` to update:
- Email address
- Phone number
- Location

### Add Project Images

Place your project images in `public/images/` and reference them in `src/app/portfolio/page.tsx`

### Change Colors

The site uses a blue/red color scheme. To customize:
- Edit `tailwind.config.ts` for custom colors
- Update color classes throughout the components

## 📱 Responsive Design

The site is fully responsive and mobile-friendly. All pages adapt beautifully to different screen sizes.

## 🔧 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/repo-name.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

### Step 3: Connect Custom Domain

1. In Vercel dashboard → Project → Settings → Domains
2. Enter your domain name
3. Update DNS records with Vercel's nameservers
4. Wait 24-48 hours for propagation

## 📝 Notes

- The contact form currently logs to console. To make it functional, integrate with an email service (EmailJS, SendGrid, etc.)
- Portfolio images are placeholders. Replace with your project photos
- Customize all text content to match your specific details

## 📧 Need Help?

Reach out if you need to:
- Add more pages
- Integrate email functionality
- Add animations
- Modify the design

---

**Built with Next.js, React, and Tailwind CSS**
