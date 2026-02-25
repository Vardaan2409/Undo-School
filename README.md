# UndoSchool - Course Browse Page

A premium course browsing experience built with React, TailwindCSS, and Framer Motion.

## 🏁 Getting Started

To run this project locally, follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🚀 Enhancements & Creative Freedom

Beyond the core layout requirements, I have implemented several premium features to demonstrate front-end expertise:

### 1. Advanced Animations (Framer Motion)
- **Shared Layout Transitions**: The category filters use `layoutId` for smooth, spring-based transitions between selections.
- **Hero Section Dynamics**: Added floating background blobs with scale and position jitter to create a modern, "alive" feel.
- **Micro-interactions**: Course cards feature a "slide-and-fade" button transition on hover, rather than a simple opacity change.
- **Exit/Enter Animations**: Course filtering uses `AnimatePresence` to smoothly add/remove cards from the grid.

### 2. Premium UI/UX
- **Glassmorphism**: The Navbar uses a backdrop-blur effect with a subtle border to feel integrated with the page content as you scroll.
- **Functional Mobile Filter**: Implemented a full-screen slide-out filter drawer for mobile users to ensure a "native-app" feel.
- **Hover States**: Every interactive element (buttons, cards, links) has a carefully chosen hover state (background shifts, shadows, icon translations).

### 3. Clean & Maintainable Architecture
- **Reusable Component Library**: Atomic components like `Button`, `Card`, `Input`, and `Badge` built using `tailwind-merge` and `clsx` for maximum flexibility.
- **Centralized Data**: Dummy course data is isolated in `src/data` for easy updates.
- **Semantic HTML**: Proper use of `<nav>`, `<main>`, `<section>`, `<aside>`, and `<footer>` tags.

## 🛠️ Tech Stack
- **React**: Modern functional components with Hooks.
- **TailwindCSS**: Utility-first styling with custom design tokens.
- **Framer Motion**: Production-ready animation library.
- **Lucide React**: Clean and consistent icon set.

## 📱 Responsiveness
- Optimized for desktop (1440px+) and mobile (375px+).
- Grid layouts adjust dynamically (1 col on mobile, 2 on tablet, 3 on desktop).
- Mobile-specific navigation and filter interfaces.
