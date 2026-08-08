<div align="center">
  <img src="frontend/public/adrenalinn.gif" alt="Adrenalin storefront featuring its premium extreme sports shopping experience" width="800"/>
  <br/><br/>
  <h1>Adrenalin Ecommerce</h1>
  <p><strong>Premium commerce for extreme sports equipment.</strong></p>
  <p><strong>A responsive storefront, animated product storytelling and a complete administration panel.</strong></p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-14-black" alt="Next.js 14"/>
    <img src="https://img.shields.io/badge/React-18-61DAFB" alt="React 18"/>
    <img src="https://img.shields.io/badge/TypeScript-5.3-3178C6" alt="TypeScript 5.3"/>
    <img src="https://img.shields.io/badge/Express-4.18-000000" alt="Express 4.18"/>
    <img src="https://img.shields.io/badge/Prisma-5.7-2D3748" alt="Prisma 5.7"/>
    <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1" alt="PostgreSQL 16"/>
    <img src="https://img.shields.io/badge/Docker-Compose-2496ED" alt="Docker Compose"/>
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"/>
    <img src="https://img.shields.io/badge/status-active-success" alt="Active"/>
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
- [Environment Variables](#environment-variables)
- [API Overview](#api-overview)
- [Data Model](#data-model)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## About

**Adrenalin Ecommerce** is a full-stack shopping platform for mountain biking, motocross, surfing, camping, trekking, snow, skydiving and water sports. It combines a premium editorial storefront with product discovery, search, cart persistence and responsive product experiences.

The project uses a decoupled architecture: a Next.js application renders the customer and administration interfaces, while an Express REST API owns authentication, business rules, uploads and PostgreSQL persistence through Prisma.

---

## Features

### Storefront

- Editorial homepage with hero slider and responsive category composition
- Featured products and new-arrivals sections backed by live API data
- Scroll-driven Specialized Turbo Kenevo product experience with GSAP
- Product catalog with pagination and category filtering
- Individual product pages with pricing and descriptions
- Case-insensitive product search
- Persistent client-side shopping cart with quantity controls
- Team member directory and contact page
- Responsive layout for desktop, tablet and mobile
- Reduced-motion support for animated experiences

### Administration

- Protected dashboard for administrative users
- Product CRUD with multipart image uploads
- Category CRUD with image support
- Member CRUD and directory management
- JWT sessions stored in secure cookies
- Optional Google OAuth authentication

---

## Tech Stack

| Category | Technology |
| --- | --- |
| **Frontend** | Next.js 14 App Router, React 18, TypeScript 5.3 |
| **UI & Motion** | Tailwind CSS 3.3, GSAP 3, Framer Motion, Lucide React |
| **Backend** | Node.js, Express 4.18, TypeScript, Multer |
| **Authentication** | JWT with JOSE, Passport, Google OAuth 2.0, bcryptjs |
| **Data** | PostgreSQL 16, Prisma ORM 5.7 |
| **Infrastructure** | Docker, Docker Compose, Vercel-compatible frontend |

---

## Architecture

The applications communicate exclusively through the REST API:

```text
┌──────────────────┐       HTTP / JSON       ┌──────────────────┐
│     Frontend     │ ──────────────────────→ │     Backend      │
│ Next.js App      │ ←────────────────────── │ Express REST API │
│ :3001            │        JWT cookie       │ :3333            │
└──────────────────┘                         └────────┬─────────┘
                                                    │ Prisma
                                                    ↓
                                           ┌──────────────────┐
                                           │    PostgreSQL    │
                                           │ :5433 on host    │
                                           └──────────────────┘
```

### Backend layers

- **Routes** define HTTP endpoints and delegate operations
- **Services** implement business rules and application flows
- **Repositories** isolate Prisma data access
- **Middlewares** handle JWT authorization, uploads and errors
- **Config** provides environment settings and the Prisma singleton

### Frontend organization

- **App Router** separates public, catalog, account and admin routes
- **Feature components** keep storefront and administration UI modular
- **API client** resolves separate server-side and browser API origins
- **React Context** manages the cart and local persistence
- **Middleware** protects administrative routes using the JWT cookie

---

## Project Structure

```text
adrenalin-ecommerce/
├── frontend/                       # Next.js application
│   ├── app/                        # App Router pages and layouts
│   │   ├── (home)/                 # Homepage, search and product detail
│   │   ├── admin/                  # Protected dashboard and CRUD pages
│   │   ├── allproducts/            # Product catalog
│   │   ├── cart/                   # Shopping cart
│   │   └── categories/             # Category listing and filters
│   ├── components/                 # Feature-oriented React components
│   ├── contexts/                   # Cart state and persistence
│   ├── lib/api/                    # REST API client
│   ├── public/                     # Product, campaign and demo assets
│   ├── types/                      # Shared frontend types
│   └── middleware.ts               # Admin route protection
├── backend/                        # Express REST API
│   ├── prisma/                     # Schema and migrations
│   ├── src/
│   │   ├── config/                 # Environment and database setup
│   │   ├── middlewares/            # Auth, uploads and error handling
│   │   ├── repositories/           # Prisma queries
│   │   ├── routes/                 # HTTP endpoints
│   │   ├── services/               # Business logic
│   │   └── prisma/seed.ts           # Development seed data
│   └── uploads/                    # Uploaded product media
├── docker-compose.yml              # PostgreSQL, backend and frontend
├── vercel.json                     # Deployment configuration
├── LICENSE                         # MIT License
└── README.md
```

---

## Prerequisites

- **Node.js** 18 or newer
- **npm** for dependency management
- **PostgreSQL** for local development without containers
- **Docker Desktop** with Docker Compose for the recommended setup

---

## Installation & Setup

### Docker — recommended

From the repository root:

```bash
# Build images and start all services
docker compose up --build

# Run in the background instead
docker compose up --build -d

# Inspect service state
docker compose ps

# Stop the stack
docker compose down
```

| Service | Address |
| --- | --- |
| **Storefront** | `http://localhost:3001` |
| **REST API** | `http://localhost:3333/api` |
| **Health check** | `http://localhost:3333/api/health` |
| **PostgreSQL** | `localhost:5433` |

The Compose stack waits for PostgreSQL, applies migrations, seeds initial data and then starts the backend and frontend in dependency order.

> Google OAuth is optional. Compose may warn when `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are not configured; password authentication and the rest of the application continue to work.

### Local development

```bash
# Install and configure the backend
cd backend
npm install
copy .env.example .env
npm run prisma:generate
npx prisma db push
npm run prisma:seed
npm run dev

# In another terminal, install and start the frontend
cd frontend
npm install
npm run dev
```

For Linux or macOS, replace `copy .env.example .env` with `cp .env.example .env`. The backend runs at `http://localhost:3333`; the frontend runs at `http://localhost:3001`.

Create `frontend/.env.local` for local development:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:3333/api
API_URL=http://localhost:3333/api
```

---

## Usage

### Customer journey

1. Open `http://localhost:3001`.
2. Browse editorial categories or featured products.
3. Open a product page or use search to find an item.
4. Add products to the cart and adjust quantities from the cart interface.

Cart contents are stored in the browser through `localStorage`. The current project does not implement checkout or payment processing.

### Administration panel

1. Open `http://localhost:3001/login`.
2. Sign in with an administrative account.
3. Access `/admin` to manage products, categories and members.

The development seed creates this local administrator:

```text
Email: admin@adrenalin.com
Password: admin123
```

These credentials are for local development only and must be replaced in a production environment.

### Main storefront routes

| Route | Purpose |
| --- | --- |
| `/` | Editorial homepage and featured products |
| `/allproducts` | Paginated product catalog |
| `/product/[id]` | Product details |
| `/categories` | Category directory |
| `/categories/[id]` | Products filtered by category |
| `/search` | Product search results |
| `/cart` | Persistent shopping cart |
| `/contact` | Contact information |
| `/members` | Team directory |
| `/login` | Administration login |
| `/admin` | Protected administration dashboard |

---

## Environment Variables

### Backend — `backend/.env`

| Variable | Purpose |
| --- | --- |
| `PORT` | Express port; defaults to `3333` |
| `DATABASE_URL` | PostgreSQL connection string |
| `FRONTEND_URL` | Allowed frontend origin for CORS |
| `BACKEND_URL` | Public backend origin used by OAuth callbacks |
| `JWT_SECRET` | Secret used to sign and verify sessions |
| `GOOGLE_CLIENT_ID` | Optional Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Optional Google OAuth client secret |

Start from [`backend/.env.example`](backend/.env.example).

### Frontend — `frontend/.env.local`

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Public API origin used by browser requests |
| `API_URL` | Internal API origin used during server rendering |

Deployment values are illustrated in [`frontend/.env.vercel.example`](frontend/.env.vercel.example).

---

## API Overview

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| `GET` | `/api/health` | Public | Service health check |
| `POST` | `/api/auth/login` | Public | Password authentication |
| `GET` | `/api/auth/me` | JWT | Current user profile |
| `GET` | `/api/auth/google` | Public | Begin optional Google OAuth flow |
| `GET` | `/api/home/products` | Public | Homepage product collections |
| `GET` | `/api/products` | Public | Published product catalog |
| `GET` | `/api/products/:id` | Public | Product details |
| `GET` | `/api/products/category/:categoryId` | Public | Products by category |
| `POST / PUT / DELETE` | `/api/products` | JWT admin | Product management |
| `GET` | `/api/categories` | Public | Paginated categories |
| `GET` | `/api/categories/:id` | Public | Category details and products |
| `POST / PUT / DELETE` | `/api/categories` | JWT admin | Category management |
| `GET` | `/api/members` | Public | Paginated member directory |
| `POST / PUT / DELETE` | `/api/members` | JWT admin | Member management |
| `GET` | `/api/search` | Public | Case-insensitive product search |

Protected update and delete endpoints include the resource ID in the URL.

---

## Data Model

```text
User
├── password authentication or optional Google identity
└── role-based access to administration

Product ──────── many-to-many ──────── Category
│ id                                   │ id
│ title                                │ name
│ content                              │ image
│ image
│ price
└ published

Member
├── name
├── role
└── email
```

Products and categories use Prisma's implicit many-to-many relation. `User.password` is nullable to support accounts created through Google OAuth.

---

## Available Scripts

### Frontend

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Next.js development on port `3001` |
| `npm run build` | Create the production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run the Next.js ESLint configuration |

### Backend

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Express with TypeScript watch mode |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run start` | Apply migrations, seed and start production |
| `npm run lint` | Run TypeScript type checking |
| `npm run prisma:generate` | Generate the Prisma client |
| `npm run prisma:migrate` | Apply production migrations |
| `npm run prisma:seed` | Seed development data |

---

## Contributing

1. Fork the repository.
2. Create a focused branch for the change.
3. Follow the existing TypeScript and feature-folder conventions.
4. Run frontend lint/build and backend type checking.
5. Open a pull request describing the behavior and validation performed.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
Developed by Daniel Thielmann
</p>
