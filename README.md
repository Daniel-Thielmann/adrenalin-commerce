<div align="center">
  <br/>
  <img src="frontend/public/home/dash.png" alt="Adrenalin Ecommerce Dashboard" width="800" style="border-radius: 8px;"/>
  <br/><br/>
  <h1>Adrenalin Ecommerce</h1>
  <p><strong>Extreme Sports E-Commerce Platform</strong></p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js 14"/>
    <img src="https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express" alt="Express"/>
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
- [Architecture](#-architecture)
- [Features](#-features)
- [Database Schema](#-database-schema)
- [API Endpoints](#-api-endpoints)
- [Pages & Routes](#-pages--routes)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Administration Panel](#-administration-panel)
- [Environment Variables](#-environment-variables)

---

## About

**Adrenalin Ecommerce** is a full-featured extreme sports e-commerce platform built with a decoupled architecture. The frontend (Next.js 14) communicates with a REST API (Express + Prisma) over HTTP, replacing the previous Server Actions approach for better separation of concerns and scalability.

The platform showcases products across various extreme sports categories including mountain biking, motocross, surfing, camping, trekking, snow sports, skydiving, and water sports.

---

## Features

### Storefront

- **Dynamic Home Page** — Hero slider, category showcase, featured products, promotional banners, testimonials
- **Product Catalog** — Browse all products with pagination (8 per page)
- **Category Browsing** — Explore products by category with themed banners and descriptions
- **Product Details** — Individual product pages with full descriptions, pricing, and images
- **Search** — Case-insensitive product search with pagination
- **Team Members** — Browse team members with search
- **Shopping Cart** — Client-side cart with modal sidebar and quantity controls
- **Responsive Design** — Fully responsive from mobile (640px) to ultra-wide (2560px)

### Administration Panel

- **Dashboard** — Overview page with quick links to management sections
- **Product Management** — Full CRUD with image upload
- **Category Management** — Full CRUD for product categories
- **Member Management** — Full CRUD for team/organization members
- **JWT Authentication** — Secure login with token-based sessions

---

## Tech Stack

| Category          | Technology                                                               |
| ----------------- | ------------------------------------------------------------------------ |
| **Frontend**      | [Next.js 14](https://nextjs.org/) (App Router)                           |
| **Backend**       | [Express 4](https://expressjs.com/) + [Prisma 5](https://www.prisma.io/) |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)                            |
| **Styling**       | [Tailwind CSS 3](https://tailwindcss.com/)                               |
| **Database**      | [PostgreSQL](https://www.postgresql.org/)                                |
| **Auth**          | [JOSE](https://github.com/panva/jose) (JWT)                              |
| **File Upload**   | [Multer](https://github.com/expressjs/multer)                            |
| **Fonts**         | Bebas Neue, Inter, IBM Plex Sans                                         |
| **Icons**         | [Lucide React](https://lucide.dev/)                                      |
| **UI Components** | [React Select](https://react-select.com/)                                |
| **Loader**        | [nextjs-toploader](https://github.com/TheDanniCraft/nextjs-toploader)    |
| **Scrollbar**     | [tailwind-scrollbar](https://github.com/adoxography/tailwind-scrollbar)  |

---

## Architecture

```
┌──────────────┐      HTTP/JSON      ┌──────────────┐      ┌──────────┐
│   Frontend   │ ──────────────────→ │   Backend    │ ──→  │    DB    │
│  Next.js 14  │ ←────────────────── │  Express API │ ←──  │PostgreSQL│
│  :3001       │      JWT (auth)     │  :3333       │      └──────────┘
└──────────────┘                     └──────────────┘
```

The **frontend** (Next.js) handles SSR, UI rendering, and middleware auth. The **backend** (Express) handles all database operations, file uploads, and JWT authentication. Communication is done via REST API calls.

---

## Database Schema

```prisma
model User {
  id       Int      @id @default(autoincrement())
  email    String   @unique
  password String
  name     String
  role     String   @default("admin")
  createdAt DateTime @default(now())
}

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

---

## API Endpoints

| Method | Endpoint                             | Auth   | Description                    |
| ------ | ------------------------------------ | ------ | ------------------------------ |
| GET    | `/api/home/products`                 | ❌     | Featured products for homepage |
| GET    | `/api/products`                      | ❌     | Paginated published products   |
| GET    | `/api/products/admin`                | ✅ JWT | All products (admin)           |
| GET    | `/api/products/:id`                  | ❌     | Single product detail          |
| GET    | `/api/products/category/:categoryId` | ❌     | Products by category           |
| POST   | `/api/products`                      | ✅ JWT | Create product (multipart)     |
| PUT    | `/api/products/:id`                  | ✅ JWT | Update product (multipart)     |
| DELETE | `/api/products/:id`                  | ✅ JWT | Delete product                 |
| GET    | `/api/categories`                    | ❌     | Paginated categories           |
| GET    | `/api/categories/:id`                | ❌     | Single category with products  |
| POST   | `/api/categories`                    | ✅ JWT | Create category                |
| PUT    | `/api/categories/:id`                | ✅ JWT | Update category                |
| DELETE | `/api/categories/:id`                | ✅ JWT | Delete category                |
| GET    | `/api/members`                       | ❌     | Paginated members with search  |
| GET    | `/api/members/:id`                   | ✅ JWT | Single member                  |
| POST   | `/api/members`                       | ✅ JWT | Create member                  |
| PUT    | `/api/members/:id`                   | ✅ JWT | Update member                  |
| DELETE | `/api/members/:id`                   | ✅ JWT | Delete member                  |
| POST   | `/api/auth/login`                    | ❌     | Login (returns JWT)            |
| GET    | `/api/auth/me`                       | ✅ JWT | Get current user profile       |
| GET    | `/api/search`                        | ❌     | Search products by title       |
| GET    | `/api/health`                        | ❌     | Health check                   |

---

## Pages & Routes

| Route                       | Description                               |
| --------------------------- | ----------------------------------------- |
| `/`                         | Home page with slider, highlights, brands |
| `/allproducts`              | Full product catalog with pagination      |
| `/categories`               | Category listing page                     |
| `/categories/[id]`          | Products filtered by category             |
| `/product/[id]`             | Individual product detail page            |
| `/search`                   | Search results page                       |
| `/cart`                     | Shopping cart page                        |
| `/contact`                  | Contact page                              |
| `/login`                    | Admin login page                          |
| `/members`                  | Team members listing with search          |
| `/admin`                    | Admin dashboard                           |
| `/admin/manage/allproducts` | Manage products (table + CRUD)            |
| `/admin/manage/categories`  | Manage categories (table + CRUD)          |
| `/admin/manage/members`     | Manage members (table + CRUD)             |

---

## Project Structure

```
adrenalin-ecommerce/
├── frontend/                   # Next.js 14 Frontend
│   ├── app/                    # App Router pages
│   │   ├── (home)/             #   Home route group
│   │   ├── admin/              #   Admin panel
│   │   ├── allproducts/        #   All products page
│   │   ├── categories/         #   Categories pages
│   │   ├── contact/            #   Contact page
│   │   ├── login/              #   Login page
│   │   ├── members/            #   Members page
│   │   ├── layout.tsx          #   Root layout
│   │   └── globals.css         #   Global styles
│   ├── components/             # React components
│   ├── lib/                    # Utilities
│   │   ├── api/                #   REST API client
│   │   └── auth.ts             #   JWT helpers
│   ├── types/                  # TypeScript types
│   ├── public/                 # Static assets
│   ├── next.config.js
│   ├── tailwind.config.ts
│   └── package.json
│
├── backend/                    # Express REST API
│   ├── src/                    # Source code
│   │   ├── config/             #   App config + DB client
│   │   ├── middlewares/        #   Auth, error, upload
│   │   ├── repositories/       #   Data access layer
│   │   ├── services/           #   Business logic
│   │   ├── routes/             #   Route definitions
│   │   ├── utils/              #   Helpers
│   │   ├── app.ts              #   Express app setup
│   │   └── server.ts           #   Entry point
│   ├── prisma/                 # Database schema + seed
│   ├── uploads/                # Uploaded images
│   ├── Dockerfile
│   ├── tsconfig.json
│   └── package.json
│
├── docker-compose.yml          # 3 services (postgres, backend, frontend)
├── .env                        # Environment variables
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL (or Docker)
- npm

### Local Development (without Docker)

```bash
# 1. Start the backend
cd backend
cp .env.example .env        # Edit DATABASE_URL
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev                  # Backend at http://localhost:3333

# 2. Start the frontend (new terminal)
cd ..
cp .env.local.example .env.local  # Edit if needed
npm install
npm run dev                       # Frontend at http://localhost:3001
```

### Docker (recommended)

```bash
# Build and start all services
docker compose up --build

# Services:
#   - Frontend:  http://localhost:3001
#   - Backend:   http://localhost:3333
#   - Database:  localhost:5433 (host mapped)
```

Docker starts PostgreSQL, runs migrations and seed automatically, then launches both backend and frontend with health checks ensuring correct startup order.

### Available Scripts

#### Frontend

| Script          | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Start dev server        |
| `npm run build` | Build for production    |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint              |

#### Backend

| Script               | Description             |
| -------------------- | ----------------------- |
| `npm run dev`        | Start dev server (tsx)  |
| `npm run build`      | Compile TypeScript      |
| `npm run start`      | Start production server |
| `npx prisma db push` | Sync database schema    |
| `npx prisma db seed` | Seed the database       |

### Default Credentials

```
Email:    admin@adrenalin.com
Password: admin123
```

---

## Administration Panel

Access the admin panel at `/admin` (login required).

### Dashboard (`/admin`)

Overview page with quick links to management sections.

### Products (`/admin/manage/allproducts`)

- View all products in a table
- Create new products (title, content, price, categories, image upload)
- Edit existing products
- Delete products
- Images are uploaded to the backend via multer

### Categories (`/admin/manage/categories`)

- View all categories in a table
- Create new categories (name, image URL)
- Edit existing categories
- Delete categories

### Members (`/admin/manage/members`)

- View all team members in a table
- Create new members (name, role, email)
- Edit existing members
- Delete members

---

## Environment Variables

### Backend (`backend/.env`)

| Variable       | Description                  | Required |
| -------------- | ---------------------------- | -------- |
| `DATABASE_URL` | PostgreSQL connection string | ✅ Yes   |
| `JWT_SECRET`   | Secret key for JWT tokens    | ✅ Yes   |
| `FRONTEND_URL` | Frontend origin for CORS     | ❌       |
| `PORT`         | Backend port (default: 3333) | ❌       |

### Frontend (`.env.local`)

| Variable              | Description                            | Required |
| --------------------- | -------------------------------------- | -------- |
| `NEXT_PUBLIC_API_URL` | Public API URL for browser requests    | ✅ Yes   |
| `API_URL`             | Internal API URL for server requests   | ✅ Yes   |
| `JWT_SECRET`          | Secret for middleware JWT verification | ✅ Yes   |

---
