# Restaurant Website

A **responsive restaurant website** built using **React.js** and **Tailwind CSS**.  
The website showcases the restaurant's offerings, allows reservations, and provides a modern user experience on both desktop and mobile devices.

## 🛠 Technologies Used
- **Frontend:** React.js  
- **Styling:** Tailwind CSS  
- **Tools & Platforms:** VS Code, Git, GitHub  

##  Features
- Fully **responsive design** for all screen sizes  
- **About Section:** Information about the restaurant and its story  
- **Menu Section:** Categorized dishes with images  
- **Testimonials Section:** Customer feedback and reviews  
- **Gallery Section:** Showcase of restaurant interiors and dishes  
- **Reservation Section:** Form to book a table (static / placeholder)  
- Navigation bar with smooth scrolling  
- Clean and modern UI design  

##  Project Structure
restaurant-website/
├── public/
├── src/
│ ├── components/
      | **About.jsx**
      | **Banner.jsx**
      | **Footer.jsx**
      | **Gallery.jsx**
      | **Hero.jsx**
      | **Menu.jsx**
      | **Navbar.jsx**
      | **Quote.jsc**
      | **Reservation.jsx**
      | **Testimonials.jsx**


## Getting Started

### Prerequisites
- Node.js installed ([Download Node.js](https://nodejs.org/))
- npm (comes with Node.js) or yarn package manager
- Basic knowledge of React.js and Tailwind CSS 

### Installation
1. Clone the repository:
git clone https://github.com/yourusername/restaurant-website.git
cd restaurant-website

2. Install React.js (if starting from scratch)
   If you are creating a new React project:
   npx create-react-app restaurant-website
cd restaurant-website

3. Install Tailwind CSS
   Follow these commands to set up Tailwind in your React project:
   ## Install Tailwind via npm:
   npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
   ## Configure tailwind.config.js:
   /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
## Add Tailwind directives to src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
## Install project dependencies
npm install
# or
yarn install
## Start the development server
npm run dev (start development server (local, live reload))
npm start  (Start server (React CRA style))
# or
yarn start


## Deployment / Live Demo
This project can be deployed easily using Vercel or Netlify:
## Steps to Deploy
- Push your project to GitHub.
Go to Vercel
 or Netlify
- Connect your GitHub repository.
- Click Deploy.
- Your site will be live at a URL like:
 https://your-restaurant-website.vercel.app

**License**
This project is open-source and free to use.



      

