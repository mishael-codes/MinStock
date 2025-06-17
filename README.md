# 📈 Frontend Assessment Test – Stock Price PWA

A **Progressive Web App (PWA)** that connects to a public API and provides **real-time stock price quotes**. The app uses **WebSockets** to keep stock prices updated every few seconds.

---

## ✅ Requirements Checklist

- [x] **Landing Page**  
  A welcoming screen introducing the app, its functionality and some frequently asked questions. It includes a button to navigate to the stock listing page.

- [x] **Stock Listing Page**  
  Displays a list of various stocks grouped into sections (e.g., Tech, Energy, Finance). Includes filter widgets such as:
  - Sector/category filter
  - Gainers/Losers

- [ ] **Stock Detail Page**  
  *(Not implemented)*  
  Intended to show:
  - Stock symbol and full company name
  - Key stats (price, volume, market cap)
  - Real-time chart of the stock price
  - Historical data and performance indicators

- [x] **Real-Time Stock Price Updates**  
  Implemented using WebSockets. Stock prices update every few seconds without the need to refresh the page.

- [ ] **Unit Tests**  
  *(Not implemented)*  
  Planned to be added using **Vitest** and **Testing Library** to test components and utility functions.

- [x] **CI/CD & Deployment**  
  Configured **GitHub Actions** to:
  - Installs dependencies
  - Build the app
  - Deploy to **Vercel** on every push to the main branch

---

## 🛠 Tech Stack

| Tech          | Purpose                         |
|---------------|----------------------------------|
| React + Vite  | Frontend Framework & Build Tool |
| Tailwind CSS  | Styling                         |
| FinnHub API   | Public API for real-time stock data | 
| WebSockets    | Real-time data updates          |
| Vercel        | Hosting & Deployment            |
| GitHub Actions| CI/CD Pipeline                  |

---

