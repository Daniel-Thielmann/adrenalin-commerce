<div align="center">
  <br/>
  <img src="frontend/public/home/dash.png" alt="Adrenalin Ecommerce Dashboard" width="800" style="border-radius: 8px;"/>
  <br/><br/>
  <h1>Adrenalin Ecommerce</h1>
  <p><strong>Extreme Sports E-Commerce Platform — A full-featured storefront and admin panel for extreme sports gear, built with Next.js 14 and Express.</strong></p>
  <p>
    <img src="https://img.shields.io/badge/status-active-success.svg" alt="Status"/>
    <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js 14"/>
    <img src="https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express" alt="Express"/>
    <img src="https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Prisma-5.7-2D3748?style=flat-square&logo=prisma" alt="Prisma"/>
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS"/>
    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql" alt="PostgreSQL"/>
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"/>
  </p>
  <br/>
</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
  - [Storefront Routes](#storefront-routes)
  - [Administration Panel](#administration-panel)
  - [API Endpoints](#api-endpoints)
  - [Database Schema](#database-schema)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## About

**Adrenalin Ecommerce** is a full-featured extreme sports e-commerce platform built with a decoupled architecture. The frontend (Next.js 14) communicates with a REST API (Express + Prisma) over HTTP, replacing the previous Server Actions approach for better separation of concerns and scalability.

The platform showcases products across various extreme sports categories including mountain biking, motocross, surfing, camping, trekking, snow sports, skydiving, and water sports. It includes a responsive storefront for customers and a complete JWT-authenticated administration panel for managing products, categories, and team members.

---

## Features

### Storefront

- **Dynamic Home Page** — Hero slider, category showcase, featured products, promotional banners, testimonials, newsletter signup
- **Product Catalog** — Browse all products with pagination (8 per page)
- **Category Browsing** — Explore products by category with themed banners and descriptions
- **Product Details** — Individual product pages with full descriptions, pricing, and images
- **Search** — Case-insensitive product search with pagination
- **Team Members** — Browse team members with search functionality
- **Shopping Cart** — Client-side cart persisted to localStorage with modal sidebar and quantity controls
- **Responsive Design** — Fully responsive from mobile (640px) to ultra-wide (2560px)
- **Animations** — Smooth page transitions and micro-interactions via Framer Motion

### Administration Panel

- **Dashboard** — Overview page with quick links to management sections
- **Product Management** — Full CRUD with image upload via Multer
- **Category Management** — Full CRUD for product categories
- **Member Management** — Full CRUD for team/organization members
- **JWT Authentication** — Secure login with token-based sessions (7-day expiry)
- **Google OAuth** — Optional Google login integration

---

## Tech Stack

| Category             | Technology                                                     |
| -------------------- | -------------------------------------------------------------- |
| **Frontend**         | Next.js 14 (App Router), React 18                              |
| **Backend**          | Express 4, Prisma 5 ORM                                        |
| **Language**         | TypeScript 5.3                                                 |
| **Styling**          | Tailwind CSS 3, PostCSS, Autoprefixer                          |
| **Database**         | PostgreSQL 16                                                  |
| **Authentication**   | JOSE (JWT), Passport.js (Google OAuth), bcryptjs               |
| **File Upload**      | Multer                                                         |
| **Animations**       | Framer Motion                                                  |
| **Icons**            | Lucide React                                                   |
| **UI Components**    | React Select, nextjs-toploader, clsx, class-variance-authority |
| **Scrollbar**        | tailwind-scrollbar                                             |
| **Fonts**            | Bebas Neue, Inter, IBM Plex Sans                               |
| **Containerization** | Docker, Docker Compose                                         |
| **Deployment**       | Vercel (frontend), Neon (PostgreSQL)                           |

---

## Architecture

The platform follows a **decoupled 3-tier architecture**:

```
┌──────────────┐      HTTP/JSON      ┌──────────────┐      ┌──────────┐
│   Frontend   │ ──────────────────→ │   Backend    │ ──→  │    DB    │
│  Next.js 14  │ ←────────────────── │  Express API │ ←──  │PostgreSQL│
│  :3001       │      JWT (auth)     │  :3333       │      └──────────┘
└──────────────┘                     └──────────────┘
```

The **frontend** (Next.js) handles SSR, UI rendering, and middleware auth. The **backend** (Express) handles all database operations, file uploads, and JWT authentication. Communication is done exclusively via REST API calls.

### Backend Design Pattern: Layered Architecture

The Express API follows a **Service Layer** pattern with clear separation of concerns:

- **Routes** — Define HTTP endpoints, parse request params, delegate to services, return responses. No business logic.
- **Services** — Business logic layer. Orchestrates operations, validates rules, throws custom `AppError` exceptions.
- **Repositories** — Data access layer. Raw Prisma queries. No business logic.
- **Middlewares** — Cross-cutting concerns: JWT auth, Multer file upload, global error handler.
- **Config** — Env variable loading and Prisma client singleton.

### Frontend Architecture

- **Next.js 14 App Router** with route groups (`(home)/` for public pages, `admin/` for protected pages)
- **Component Structure** — Feature-based folders under `components/`
- **State Management** — React Context for cart (persisted to localStorage)
- **API Client** — Custom fetch wrapper with automatic base URL resolution for server vs browser
- **Middleware** — Protects `/admin/*` routes by verifying JWT in cookies

---

## Project Structure

```
adrenalin-ecommerce/
├── frontend/                       # Next.js 14 Frontend
│   ├── app/                        # App Router pages
│   │   ├── (home)/                 #   Home route group (public)
│   │   │   ├── layout.tsx          #   Header + Footer layout
│   │   │   ├── page.tsx            #   Home page
│   │   │   ├── product/[id]/       #   Product detail
│   │   │   └── search/             #   Search results
│   │   ├── admin/                  #   Admin panel (protected)
│   │   │   ├── layout.tsx          #   Sidebar layout
│   │   │   ├── page.tsx            #   Dashboard
│   │   │   └── manage/             #   CRUD pages
│   │   │       ├── allproducts/    #     Products CRUD
│   │   │       ├── categories/     #     Categories CRUD
│   │   │       └── members/        #     Members CRUD
│   │   ├── allproducts/            # Product catalog
│   │   ├── cart/                   # Shopping cart
│   │   ├── categories/             # Category listing + filter
│   │   ├── contact/                # Contact page
│   │   ├── login/                  # Admin login
│   │   ├── members/                # Team members
│   │   ├── layout.tsx              # Root layout
│   │   └── globals.css             # Global styles
│   ├── components/                 # Feature-based React components
│   ├── contexts/                   # React Contexts (cart)
│   ├── lib/                        # Utilities
│   │   ├── api/                    #   REST API client
│   │   └── auth.ts                 #   JWT helpers
│   ├── types/                      # TypeScript interfaces
│   ├── public/                     # Static assets
│   ├── middleware.ts               # Route protection
│   ├── next.config.js
│   ├── tailwind.config.ts
│   └── package.json
│
├── backend/                        # Express REST API
│   ├── src/                        # Source code
│   │   ├── config/                 #   App config + DB client
│   │   ├── middlewares/            #   Auth, error, upload
│   │   ├── repositories/          #   Data access layer
│   │   ├── services/              #   Business logic
│   │   ├── routes/                 #   Route definitions
│   │   ├── utils/                  #   Helpers
│   │   ├── app.ts                  #   Express app setup
│   │   └── server.ts               #   Entry point
│   │── prisma/                     #   Database seed
│   ├── prisma/                     # Schema + migrations
│   ├── uploads/                    # Uploaded images
│   ├── Dockerfile
│   ├── entrypoint.sh
│   └── package.json
│
├── docker-compose.yml              # 3 services (postgres, backend, frontend)
├── LICENSE                         # MIT License
├── vercel.json                     # Root Vercel config
└── README.md
```

---

## Prerequisites

- **Node.js** 18+
- **npm** (comes with Node.js)
- **PostgreSQL** 16+ (or Docker as alternative)
- **Docker** & **Docker Compose** (optional — for containerized setup)

---

## Installation & Setup

### Local Development (without Docker)

```bash
# 1. Backend setup
cd backend
cp .env.example .env        # Edit DATABASE_URL, JWT_SECRET
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev                  # Backend at http://localhost:3333

# 2. Frontend setup (new terminal)
cd ..
cd frontend
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

---

## Usage

### Storefront Routes

| Route              | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `/`                | Home page with hero slider, category showcase, featured products, testimonials |
| `/allproducts`     | Full product catalog with pagination (8 per page)                              |
| `/product/[id]`    | Individual product detail page                                                 |
| `/categories`      | Category listing page                                                          |
| `/categories/[id]` | Products filtered by category                                                  |
| `/search`          | Search results page (case-insensitive by title)                                |
| `/cart`            | Shopping cart page (persisted to localStorage)                                 |
| `/contact`         | Contact page                                                                   |
| `/members`         | Team members listing with search                                               |
| `/login`           | Admin login page                                                               |

### Administration Panel

Access the admin panel at `/admin` (login required).

**Default Credentials:**

```
Email:    admin@adrenalin.com
Password: admin123
```

**Dashboard** (`/admin`) — Overview page with quick links to management sections.

**Products** (`/admin/manage/allproducts`)

- View all products in a table with CRUD actions
- Create new products (title, content, price, categories, image upload via Multer)
- Edit and delete existing products

**Categories** (`/admin/manage/categories`)

- View all categories in a table with CRUD actions
- Create, edit, and delete categories (name, image URL)

**Members** (`/admin/manage/members`)

- View all team members in a table with CRUD actions
- Create, edit, and delete members (name, role, email)

### API Endpoints

| Method | Endpoint                             | Auth   | Description                    |
| ------ | ------------------------------------ | ------ | ------------------------------ |
| GET    | `/api/health`                        | ❌     | Health check                   |
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
| POST   | `/api/auth/login`                    | ❌     | Login (returns JWT + user)     |
| GET    | `/api/auth/me`                       | ✅ JWT | Get current user profile       |
| GET    | `/api/auth/google`                   | ❌     | Google OAuth initiation        |
| GET    | `/api/auth/google/callback`          | ❌     | Google OAuth callback          |
| GET    | `/api/search`                        | ❌     | Search products by title       |

### Database Schema

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  name      String
  role      String   @default("admin")
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

Products and Categories have a **many-to-many** relationship via an implicit `_CategoryToProduct` join table.

### Environment Variables

**Backend** (`backend/.env`)

| Variable               | Description                      | Required |
| ---------------------- | -------------------------------- | -------- |
| `DATABASE_URL`         | PostgreSQL connection string     | ✅ Yes   |
| `JWT_SECRET`           | Secret key for JWT token signing | ✅ Yes   |
| `FRONTEND_URL`         | Frontend origin for CORS         | ❌       |
| `PORT`                 | Backend port (default: 3333)     | ❌       |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID           | ❌       |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret       | ❌       |

**Frontend** (`.env.local`)

| Variable              | Description                               | Required |
| --------------------- | ----------------------------------------- | -------- |
| `NEXT_PUBLIC_API_URL` | Public API URL for browser requests       | ✅ Yes   |
| `API_URL`             | Internal API URL for server-side requests | ✅ Yes   |
| `JWT_SECRET`          | Secret for middleware JWT verification    | ✅ Yes   |

### Available Scripts

**Frontend**

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start Next.js dev server (port 3001) |
| `npm run build` | Build for production                 |
| `npm run start` | Start production server              |
| `npm run lint`  | Run ESLint                           |

**Backend**

| Script                | Description                                     |
| --------------------- | ----------------------------------------------- |
| `npm run dev`         | Start dev server with tsx watch (hot reload)    |
| `npm run build`       | Compile TypeScript to `dist/`                   |
| `npm run start`       | Run migrations + seed + start production server |
| `npm run lint`        | TypeScript type-check (`tsc --noEmit`)          |
| `npx prisma generate` | Generate Prisma client                          |
| `npx prisma db push`  | Sync database schema                            |
| `npx prisma db seed`  | Seed database with sample data                  |

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure your code follows the existing patterns and conventions, and passes TypeScript type-checking before submitting.

---

## License

This project is licensed under the MIT License.

---

<p align="center">
Developed by Daniel Thielmann
</p>
