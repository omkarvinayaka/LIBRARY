VEMU React Migration Package

Contents:
- frontend/: React/Vite wrapper app preserving original frontend pages
- server/: original Express + MongoDB backend

How to run:
1) Start backend
   cd server
   npm install
   npm run dev

2) Start frontend
   cd frontend
   npm install
   npm run dev

This package keeps CSS, original script.js logic, and backend flow unchanged.
It uses a React shell to route and host the legacy pages safely.
