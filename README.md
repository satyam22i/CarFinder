# 🚗 Car Finder Web App

**Car Finder** is a modern, responsive web application built with **Next.js** and **Tailwind CSS**. It lets users easily explore, filter, and wishlist cars based on real-time data from [MockAPI.io](https://mockapi.io).

This is a project designed to showcase my frontend development skills, including API integration, state management, dynamic routing, and responsive UI design.

---

## 🔥 Features

✅ **Search & Filter Cars** by brand, fuel type, and price range  
✅ **View Car Details** on a dedicated page  
✅ **Wishlist** support using **LocalStorage**  
✅ **Pagination** — 6 cars per page  
✅ **Real-time UI updates** without reloads  
✅ **Responsive Design** (Mobile + Desktop friendly)  
✅ **Attractive and clean UI** using TailwindCSS  
✅ **API Integration** using [MockAPI.io](https://mockapi.io)   
✅ **Error & Loading States**  


---

## 🧽 Folder Structure

```
car_finder/
├── app/
│   ├── car/[id]/page.tsx          # Car detail page
│   ├── wishlist/page.tsx          # Wishlist page
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Homepage with filters & listings
├── components/
│   ├── CarCard.tsx                # Displays individual car info
│   ├── Filters.tsx                # Brand, price, fuel type filters
│   ├── Navbar.tsx                 # App navbar
│   ├── Pagination.tsx            # Pagination logic
├── lib/
│   └── api.ts                     # API fetch utility
├── public/                        # Static files
├── styles/
│   └── globals.css                # Tailwind & global styles
├── .env.local                     # Environment variables (not committed)
├── next.config.js                 # Next.js config
├── postcss.config.js              # PostCSS config
├── tailwind.config.js             # Tailwind config
```

---

## 🔧 Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **UI Styling**: [TailwindCSS](https://tailwindcss.com/)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **APIs**: 
  - Car Data: [MockAPI.io](https://mockapi.io)
- **Storage**: LocalStorage for Wishlist

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/car-finder.git
cd car-finder
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Set up environment variables

Create a `.env.local` file and add any necessary environment variables if required by your MockAPI setup:

```env
# Not required unless you secure your endpoint
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.



## 📍 Live Demo

🔗 [**View Live on Vercel**](https://your-vercel-url.vercel.app)




> Made with ❤️ using Next.js + Tailwind

