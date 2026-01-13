<div align="center">

# 🦁 Toto Treks Kenya

### *Your Gateway to Unforgettable African Adventures*

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.18-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

*Experience the magic of Kenya with expertly curated safari adventures, cultural tours, and personalized travel experiences.*

[✨ Features](#-features) • [🚀 Quick Start](#-quick-start) • [📁 Project Structure](#-project-structure) • [🛠️ Tech Stack](#️-tech-stack) • [📞 Contact](#-contact)

---

</div>

## 📖 About

**Toto Treks Kenya** is a modern, responsive travel and tourism website designed to showcase Kenya's breathtaking landscapes, wildlife safaris, and rich cultural heritage. Built with cutting-edge web technologies, the platform offers seamless navigation, stunning visuals, and an intuitive booking experience for adventurers worldwide.

### 🎯 Mission
To connect travelers with authentic Kenyan experiences through personalized service, expert guidance, and unforgettable adventures.

---

## ✨ Features

### 🌟 Core Functionality
- **🏠 Interactive Home Page** - Stunning hero sections with dynamic backgrounds
- **🗺️ Adventure Packages** - Curated safari and tour packages with detailed itineraries
- **📸 Photo Gallery** - Showcase of Kenya's natural beauty and wildlife
- **💬 Testimonials** - Real experiences from satisfied travelers
- **📝 Travel Tips** - Comprehensive guides for planning your Kenya adventure
- **✈️ Ticketing & Visa Services** - Complete travel documentation assistance
- **📞 Contact Integration** - WhatsApp and email support for instant communication
- **🌓 Dark/Light Mode** - Theme switching with persistent preferences

### 🎨 Design Features
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - AOS (Animate On Scroll) for engaging user experience
- **Modern UI/UX** - Clean, intuitive interface with Tailwind CSS
- **Interactive Carousels** - Swiper.js for dynamic content showcasing
- **Back to Top Button** - Enhanced navigation for long pages
- **Loading States** - Smooth transitions and loading indicators

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tototrekskenya.git
   cd tototrekskenya
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint to check code quality
npm run lint
```

---

## 📁 Project Structure

```
tototrekskenya/
├── 📂 public/                  # Static assets
├── 📂 src/
│   ├── 📂 assets/              # Images, icons, and media
│   │   └── 📂 adventures/      # Adventure-specific images
│   ├── 📂 components/          # Reusable React components
│   │   ├── 📂 BackToTop/       # Scroll-to-top functionality
│   │   ├── 📂 FeaturedAdventures/  # Featured tour cards
│   │   ├── 📂 Footer/          # Site footer
│   │   ├── 📂 Hero/            # Hero section
│   │   ├── 📂 LoadingSpinner/  # Loading states
│   │   ├── 📂 Navbar/          # Navigation with responsive menu
│   │   └── 📂 TestimonialsPreview/  # Customer reviews
│   ├── 📂 pages/               # Route pages
│   │   ├── About.jsx           # About us page
│   │   ├── AdventuresRoute.jsx # Adventures listing
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Gallery.jsx         # Photo gallery
│   │   ├── Home.jsx            # Landing page
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   ├── Packages.jsx        # Tour packages
│   │   ├── Services.jsx        # Services offered
│   │   ├── Testimonials.jsx    # Customer testimonials
│   │   ├── TicketingAndVisa.jsx # Visa services
│   │   ├── TravelTips.jsx      # Travel guides
│   │   └── TravelTipsDetails.jsx # Detailed travel tips
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles
├── 📄 index.html               # HTML template
├── 📄 package.json             # Dependencies and scripts
├── 📄 vite.config.js           # Vite configuration
├── 📄 tailwind.config.js       # Tailwind CSS config
├── 📄 postcss.config.js        # PostCSS configuration
├── 📄 eslint.config.js         # ESLint rules
└── 📄 README.md                # You are here! 📍
```

---

## 🛠️ Tech Stack

### Frontend Framework
- **⚛️ React 19.2.0** - Latest React with improved performance and features
- **⚡ Vite 7.2.4** - Lightning-fast build tool and dev server

### Styling & UI
- **🎨 Tailwind CSS 3.4.18** - Utility-first CSS framework
- **🎭 AOS** - Animate On Scroll library for smooth animations
- **🎪 Swiper 12.0.3** - Modern touch slider for carousels
- **🎠 Slick Carousel** - Additional carousel functionality

### Routing & Navigation
- **🗺️ React Router DOM 7.9.6** - Declarative routing for React

### Icons & Assets
- **🎯 React Icons 5.5.0** - Popular icon library with Font Awesome, Material Design, and more

### Development Tools
- **🔍 ESLint 9.39.1** - Code linting for quality assurance
- **🔧 PostCSS & Autoprefixer** - CSS post-processing
- **📦 npm** - Package management

---

## 🎨 Key Pages

| Page | Route | Description |
|------|-------|-------------|
| 🏠 Home | `/` | Landing page with hero section and featured adventures |
| ℹ️ About | `/about` | Company information and mission |
| 🗺️ Adventures | `/adventures` | Browse all available tour packages |
| 📦 Packages | `/packages` | Detailed tour package information |
| 🛎️ Services | `/services` | Travel services offered |
| 📸 Gallery | `/gallery` | Photo gallery of Kenya's attractions |
| 💬 Testimonials | `/testimonials` | Customer reviews and experiences |
| 📝 Travel Tips | `/travel-tips` | Comprehensive travel guides |
| ✈️ Ticketing & Visa | `/ticketing-visa` | Visa and flight booking assistance |
| 📞 Contact | `/contact` | Get in touch with our team |

---

## 🌐 Features in Detail

### Theme Management
- Persistent dark/light mode using localStorage
- Smooth theme transitions across all pages
- Dynamic background images based on theme

### Responsive Navigation
- Mobile-friendly hamburger menu
- Smooth scroll to sections
- Sticky navigation bar

### WhatsApp Integration
- Direct messaging to booking team
- Pre-filled message templates
- Mobile-optimized contact options

### Performance Optimizations
- Code splitting with React Router
- Lazy loading of images and components
- Optimized build with Vite
- CSS purging with Tailwind

---

## 📞 Contact

**Toto Treks Kenya**
- 📱 WhatsApp: [+254112464170](https://wa.me/254112464170)
- 📧 Email: info@tototrekskenya.com
- 🌐 Website: [www.tototrekskenya.com](https://www.tototrekskenya.com)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/tototrekskenya/issues).

### Development Workflow
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Kenya Tourism Board** - For inspiration and resources
- **React Community** - For excellent documentation and support
- **Tailwind Labs** - For the amazing CSS framework
- **Vite Team** - For the blazing-fast build tool

---

<div align="center">

### Made with ❤️ in Kenya 🇰🇪

**[⬆ Back to Top](#-toto-treks-kenya)**

---

*Experience Kenya like never before. Your adventure begins with Toto Treks Kenya.* 🦁🌍✨

</div>
