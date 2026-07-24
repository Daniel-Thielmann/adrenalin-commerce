<div align="center">
  <br/>
  <h1 ADRENALIN ECOMMERCE</h1>
  <p><strong>Extreme Sports E-Commerce Platform</strong></p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js 14"/>
    <img src="https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Prisma-5.7-2D3748?style=flat-square&logo=prisma" alt="Prisma"/>
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS"/>
    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql" alt="PostgreSQL"/>
  </p>
  <br/>
</div>

---

## Table of Contents

- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Database Schema](#-database-schema)
- [Pages & Routes](#-pages--routes)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Administration Panel](#-administration-panel)
- [Environment Variables](#-environment-variables)

---

## About

**Adrenalin Ecommerce** is a full-featured extreme sports e-commerce platform built with cutting-edge web technologies. The platform showcases products across various extreme sports categories including mountain biking, skydiving, motocross, rock climbing, and more.

This project serves as a robust starting point for developers who want to build a modern e-commerce application with a complete administrative backend, product management system, and a polished user interface.

---

## Tech Stack

| Category          | Technology                                                              |
| ----------------- | ----------------------------------------------------------------------- |
| **Framework**     | [Next.js 14](https://nextjs.org/) (App Router)                          |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)                           |
| **Styling**       | [Tailwind CSS 3](https://tailwindcss.com/)                              |
| **Database ORM**  | [Prisma 5](https://www.prisma.io/)                                      |
| **Database**      | [PostgreSQL](https://www.postgresql.org/)                               |
| **Fonts**         | Koulen, Just Another Hand, IBM Plex Sans                                |
| **Icons**         | [Lucide React](https://lucide.dev/)                                     |
| **UI Components** | [React Select](https://react-select.com/)                               |
| **Loader**        | [nextjs-toploader](https://github.com/TheDanniCraft/nextjs-toploader)   |
| **Scrollbar**     | [tailwind-scrollbar](https://github.com/adoxography/tailwind-scrollbar) |

---

## Features

### Storefront

- **Dynamic Home Page** — Hero slider, "Know Adrenalin" brand section, and curated "Best Products" sections organized by category
- **Product Catalog** — Browse all products with search and pagination
- **Category Browsing** — Explore products by category with dedicated category pages
- **Product Details** — Individual product pages with full descriptions, pricing, and images
- **Search** — Multi-mode search system (primary, secondary, tertiary) for flexible product discovery
- **Responsive Design** — Fully responsive layout from mobile (640px) to ultra-wide (2560px)

### Administration Panel

- **Dashboard** — Overview page with administrative actions
- **Product Management** — Full CRUD: create, read, update, and delete products
- **Category Management** — Full CRUD for product categories
- **Member Management** — Full CRUD for team/organization members
- **Image Upload** — Local image upload system for product photos

### UI/UX

- **Custom Typography** — Three Google Fonts for distinct branding (Koulen headings, Just Another Hand accents, IBM Plex Sans body)
- **Smooth Transitions** — Page loading bar via NextTopLoader
- **Custom Scrollbar** — Branded scrollbar styling with yellow accent (`#E3FC02`)
- **Consistent Layout** — Reusable components: Header, Footer, Sidebar, Cards, Tables, Pagination

---

## Database Schema

```prisma
model Product {
  id         Int        @id @default(autoincrement())
  title      String     @unique
  content    String
  image      String
  published  Boolean    @default(false)
  categories Category[]
  price      Float
}

model Category {
  id       Int       @id @default(autoincrement())
  name     String    @unique
  image    String
  products Product[]
}

model Member {
  id    Int    @id @default(autoincrement())
  name  String
  role  String
  email String @unique
}
```

### Relationships

- **Product ⟷ Category** — Many-to-many relationship (a product can belong to multiple categories, a category can have multiple products)
- **Member** — Standalone model for team/organization member management

---

## Pages & Routes

| Route                       | Description                               |
| --------------------------- | ----------------------------------------- |
| `/`                         | Home page with slider, highlights, brands |
| `/allproducts`              | Full product catalog with search          |
| `/categories`               | Category listing page                     |
| `/categories/[id]`          | Products filtered by category             |
| `/product/[id]`             | Individual product detail page            |
| `/search`                   | Search results page                       |
| `/contact`                  | Contact page                              |
| `/login`                    | Login page                                |
| `/members`                  | Team members listing with search          |
| `/admin`                    | Admin dashboard                           |
| `/admin/manage/allproducts` | Manage products (table + CRUD)            |
| `/admin/manage/categories`  | Manage categories (table + CRUD)          |
| `/admin/manage/members`     | Manage members (table + CRUD)             |

---

## Project Structure

```
adrenalin-ecommerce/
├── actions/                    # Server Actions
│   ├── admin/                  # Admin CRUD operations
│   │   ├── allproducts/        #   Product server actions
│   │   ├── categories/         #   Category server actions
│   │   └── members/            #   Member server actions
│   ├── allproducts/            # Public product queries
│   ├── categories/             # Public category queries
│   ├── home/                   # Home page data fetching
│   ├── members/                # Public member queries
│   ├── product-individual/     # Individual product queries
│   ├── search/                 # Search functionality
│   └── utils/                  # Shared utilities
│
├── app/                        # Next.js App Router
│   ├── (home)/                 # Home route group
│   │   ├── page.tsx            #   Home page
│   │   ├── layout.tsx          #   Home layout (Header, Footer)
│   │   ├── product/[id]/       #   Product detail page
│   │   └── search/             #   Search results page
│   ├── admin/                  # Admin panel
│   │   ├── layout.tsx          #   Admin layout (Sidebar)
│   │   ├── page.tsx            #   Dashboard page
│   │   └── manage/             #   CRUD management
│   │       ├── allproducts/    #     Product management
│   │       ├── categories/     #     Category management
│   │       └── members/        #     Member management
│   ├── allproducts/            # All products page
│   ├── categories/             # Categories pages
│   ├── contact/                # Contact page
│   ├── login/                  # Login page
│   ├── members/                # Members page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
│
├── components/                 # React Components
│   ├── admin-sidebar/          # Admin navigation sidebar
│   ├── best-products-section/  # Homepage product highlights
│   │   ├── best-products(1)/
│   │   ├── best-products-reverse(2)/
│   │   └── best-products(3)/
│   ├── categories-card/        # Category card component
│   ├── categories-id-page/     # Category ID page component
│   ├── categories-page/        # Categories listing component
│   ├── crud/                   # CRUD form components
│   │   ├── allproducts/        #   Product create/edit forms
│   │   ├── categories/         #   Category create/edit forms
│   │   └── members/            #   Member create/edit forms
│   ├── dashboard/              # Admin dashboard components
│   ├── footer/                 # Site footer
│   ├── header/                 # Site header/navigation
│   ├── hero-section/           # Hero section component
│   ├── individual-product/     # Single product view
│   ├── know-adrenalin/         # Brand section on homepage
│   ├── members-page/           # Members listing components
│   ├── pagination/             # Pagination component
│   ├── product-card/           # Product card component
│   ├── product-page/           # Product page layout
│   ├── search/                 # Search bar component
│   ├── search-page/            # Search results components
│   ├── slider/                 # Homepage hero slider
│   ├── table/                  # Admin table components
│   ├── title/                  # Section title component
│   └── wallpaper-division/     # Visual section divider
│
├── lib/                        # Library/Utilities
│   └── db.ts                   # Prisma client singleton
│
├── types/                      # TypeScript type definitions
│   └── data.ts                 # Product, Category, Member types
│
├── prisma/                     # Database
│   ├── schema.prisma           # Database schema
│   ├── seed.ts                 # Database seed script
│   └── migrations/             # Migration files
│
├── public/                     # Static assets
│
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies & scripts
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm / yarn / pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/adrenalin-ecommerce.git
cd adrenalin-ecommerce

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env file with your database URL:
# DATABASE_URL="postgresql://user:password@host:port/database"

# 4. Run database migrations
npx prisma migrate dev

# 5. (Optional) Seed the database
npx prisma db seed

# 6. Start the development server
npm run dev
```

### Available Scripts

| Script               | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start development server |
| `npm run build`      | Build for production     |
| `npm run start`      | Start production server  |
| `npm run lint`       | Run ESLint               |
| `npx prisma db seed` | Seed the database        |

---

## Administration Panel

The admin panel is located at `/admin` and provides full management capabilities:

### Dashboard (`/admin`)

Overview page with quick links to management sections.

### Products (`/admin/manage/allproducts`)

- View all products in a table
- Create new products (title, content, price, categories, image upload)
- Edit existing products
- Delete products
- Images are uploaded locally to `/public/products/`

### Categories (`/admin/manage/categories`)

- View all categories in a table
- Create new categories (name, image)
- Edit existing categories
- Delete categories

### Members (`/admin/manage/members`)

- View all team members in a table
- Create new members (name, role, email)
- Edit existing members
- Delete members

---

## Environment Variables

| Variable       | Description             | Required |
| -------------- | ----------------------- | -------- |
| `DATABASE_URL` | PostgreSQL database URL | ✅ Yes   |

Example:

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/adrenalin"
```

---

## Design System

### Colors

- **Primary Accent:** `#E3FC02` (neon yellow) — used in scrollbar, highlights
- **Scrollbar Track:** `#1e293b` (slate-800)
- **Background:** Dark theme with Tailwind slate/neutral palette

### Typography

| Font                  | Usage                     | Weight |
| --------------------- | ------------------------- | ------ |
| **Koulen**            | Headings, titles, UI text | 400    |
| **Just Another Hand** | Accents, decorative text  | 400    |
| **IBM Plex Sans**     | Body text, descriptions   | 400    |

### Breakpoints

| Breakpoint | Width  |
| ---------- | ------ |
| `sm`       | 640px  |
| `md`       | 768px  |
| `lg`       | 1024px |
| `xl`       | 1280px |
| `2xl`      | 1536px |
| `3xl`      | 2560px |

---
