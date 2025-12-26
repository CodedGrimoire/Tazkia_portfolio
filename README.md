# Tazkia Malik Portfolio

Personal portfolio built with **Next.js (App Router)** to showcase projects, skills, and a contact flow.

## Features
- Animated homepage with hero, floating tech icons, and skills grid
- Projects page with filtering by skill, animated cards, and detail modals
- Shared navbar across routes with active-link highlighting
- Contact page with Nodemailer-backed form (Gmail App Password) and toast feedback
- Responsive layouts across homepage, projects, bio, and contact
- Smooth animations (scroll/hover/modal) and modal portal rendering

## Tech Stack
- **Framework:** Next.js 15 (App Router), React 19
- **Styling:** CSS modules/page styles, animate.css
- **Animations:** animejs, animate.css
- **Email:** Nodemailer over Gmail SMTP (App Password)
- **Feedback:** react-hot-toast
- **Build/Tooling:** Next.js scripts, optional Tailwind deps (not used in UI)

## Key Packages
- `next`, `react`, `react-dom`
- `animejs` for motion
- `animate.css` for entry animations
- `nodemailer` for SMTP email delivery
- `react-hot-toast` for form feedback

## Environment
Create `.env.local` with:
```
EMAIL_USER=you@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=destination@example.com
```

## Run Locally
```bash
npm install
npm run dev
```

## Deployment
Deploy on Vercel/Netlify with the same env vars set; no other services required.
