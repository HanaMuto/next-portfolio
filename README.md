# 🧑‍💻 next-portfolio

This is a personal portfolio project built with [Next.js](https://nextjs.org/) and powered by [Turbopack](https://turbo.build/pack), the new Rust-based bundler from Vercel.
Package management is handled using [pnpm](https://pnpm.io/).

---

## 📦 Requirements

* [Node.js](https://nodejs.org/) (Recommended: v18 or later)
* [pnpm](https://pnpm.io/)

Install `pnpm` globally (if not installed):

```bash
npm install -g pnpm
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start the Development Server

This project uses **Turbopack** for fast development builds:

```bash
pnpm dev
```

> Runs: `next dev --turbopack`
> Visit: [http://localhost:3000](http://localhost:3000)

---

## 🛠 Build for Production

### 1. Generate a Production Build

```bash
pnpm build
```

### 2. Start the Production Server

```bash
pnpm start
```

> The app will be served at: [http://localhost:3000](http://localhost:3000)

---

## 🧹 Linting

To check for linting issues:

```bash
pnpm lint
```

---

## 📄 Scripts Overview

| Script       | Description                         |
| ------------ | ----------------------------------- |
| `pnpm dev`   | Start the dev server with Turbopack |
| `pnpm build` | Build the app for production        |
| `pnpm start` | Start the production server         |
| `pnpm lint`  | Run ESLint to check for issues      |

---
