# Project Folder Structure

```
mosque-next/
├── public/                  # Static assets
│   ├── css/                 # CSS files (bootstrap, style.css)
│   ├── img/                 # Images
│   ├── js/                  # JavaScript files (main.js)
│   └── lib/                 # External libraries (wow, easing, etc.)
├── src/
│   ├── app/                 # App Router pages
│   │   ├── about/           # /about
│   │   │   └── page.tsx
│   │   ├── activity/        # /activity
│   │   │   └── page.tsx
│   │   ├── blog/            # /blog
│   │   │   └── page.tsx
│   │   ├── contact/         # /contact
│   │   │   └── page.tsx
│   │   ├── event/           # /event
│   │   │   └── page.tsx
│   │   ├── sermon/          # /sermon
│   │   │   └── page.tsx
│   │   ├── team/            # /team
│   │   │   └── page.tsx
│   │   ├── testimonial/     # /testimonial
│   │   │   └── page.tsx
│   │   ├── layout.tsx       # Root layout (Header, Footer, Scripts)
│   │   ├── page.tsx         # Home page
│   │   ├── not-found.tsx    # 404 page
│   │   └── globals.css      # Global styles
│   └── components/          # Reusable UI components
│       ├── Header.tsx       # Navigation & Topbar
│       ├── Footer.tsx       # Footer section
│       ├── Hero.tsx         # Home Hero section
│       ├── PageHeader.tsx   # Subpage Header (Breadcrumbs)
│       ├── About.tsx        # About section
│       ├── Activities.tsx   # Activities section
│       ├── Booking.tsx      # Booking form section
│       ├── Events.tsx       # Events section
│       ├── Sermon.tsx       # Sermon section
│       ├── Blog.tsx         # Blog section
│       ├── Team.tsx         # Team section
│       ├── Testimonial.tsx  # Testimonial section
│       ├── Contact.tsx      # Contact form section
│       └── Spinner.tsx      # Loading spinner
├── package.json             # Dependencies and scripts
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```
