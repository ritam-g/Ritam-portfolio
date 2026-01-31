# Modern Portfolio

A dynamic and interactive portfolio built with **React 19**, **Vite**, and **Tailwind CSS 4**. This project features smooth animations powered by **GSAP** and provides a professional showcase of skills and projects.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices.
- **Interactive Animations**: Smooth transitions and scroll-triggered animations using GSAP and `@gsap/react`.
- **Modern Styling**: Styled with Tailwind CSS 4 for a sleek, modern look.
- **Project Showcase**: A dedicated section to display key projects with detailed information.
- **Contact Form**: Integrated contact form using EmailJS for direct communication.
- **Skill Highlights**: Interactive scrolling skills section.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📂 Project Structure

```text
src/
├── assets/             # Static assets like images
├── components/         # Reusable React components
│   ├── AboutS2.jsx     # About section implementation
│   ├── Contact.jsx     # Contact form section
│   ├── Nav.jsx         # Navigation bar
│   ├── Projects.jsx    # Projects display section
│   └── ...             # Other UI components
├── App.jsx             # Main application component
├── main.jsx            # Entry point
└── index.css           # Global styles and Tailwind imports
```

## 📦 Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd protfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 🏗️ Building for Production

To create a production build:
```bash
npm run build
```
The output will be in the `dist` directory.

---
Created with ❤️ by Swarup
