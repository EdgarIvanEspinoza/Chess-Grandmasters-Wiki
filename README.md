# ♟️ Chess Grandmasters Wiki

[![Next.js](https://img.shields.io/badge/Next.js-15-blue?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38b2ac?logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-styled%20components-8b5cf6?logo=radix-ui)](https://ui.shadcn.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Live-black?logo=vercel)](https://chess-grandmasters-wiki-lyart.vercel.app/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A sleek, searchable web app that displays all chess grandmasters from Chess.com's public API. Built with **Next.js 15**, **React 19**, and **TanStack Table**, it offers real-time search, persistent state, pagination, and dynamic online timers for each grandmaster.

---

## 🌍 Live Demo

🔗 **[View on Vercel →](https://chess-grandmasters-wiki-lyart.vercel.app/)**  
📂 **[View the GitHub Repo →](https://github.com/EdgarIvanEspinoza/Chess-Grandmasters-Wiki)**

---

## ✨ Features

- 🔍 Real-time search with state persistence
- ⏱️ Live clock showing time since last online (HH:MM:SS)
- 📄 Sortable, paginated table built with TanStack Table
- 💾 Pagination & filters synced with localStorage
- 🎯 Player profile pages with dynamic routing
- 🎨 Beautiful UI with **shadcn/ui**, **Tailwind CSS**, and **Radix Primitives**

---

## 🛠️ Tech Stack

| Category        | Technology                                                                |
| --------------- | ------------------------------------------------------------------------- |
| Framework       | [Next.js 15 (App Router + Turbopack)](https://nextjs.org)                 |
| UI Components   | [shadcn/ui](https://ui.shadcn.dev/) + [lucide-react](https://lucide.dev/) |
| Styling         | [Tailwind CSS](https://tailwindcss.com)                                   |
| Data Fetching   | [React Query](https://tanstack.com/query/latest)                          |
| Table Rendering | [TanStack Table v8](https://tanstack.com/table/v8)                        |
| HTTP Client     | [Axios](https://axios-http.com/)                                          |
| Language        | [TypeScript](https://www.typescriptlang.org/)                             |
| Runtime         | [React 19](https://react.dev)                                             |

---

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/EdgarIvanEspinoza/Chess-Grandmasters-Wiki.git
cd Chess-Grandmasters-Wiki
npm install
```

Start the development server:

```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) 🚀

---

## 📈 Possible Improvements

- Add filtering by country, title, or activity
- Infinite scroll alternative to pagination
- Dark mode toggle
- Player stats (rating, federation, title history)
- Global error/loading state UI

---

## 🧠 What I Learned

This project helped me explore:

- Using `@tanstack/react-table` for complex table state
- Managing persistent state across filters and pagination
- Creating responsive, modern UIs with **shadcn/ui** + Tailwind
- Leveraging `React Query` for fast and reliable API fetching

---

## 👤 Author

Crafted with ♟️ by [**Iván Espinoza**](https://www.linkedin.com/in/edgarivanespinoza)
_Venezuelan Frontend Engineer & Audio Producer passionate about tech, design, and chess._
