# 🎨 PLP Task Manager - React.js, JSX, and Tailwind CSS

A modern, responsive React application built with Vite, Tailwind CSS, and React Router that demonstrates component architecture, state management, hooks usage, and API integration.

## 🚀 Features

- ✅ **Task Management**: Add, complete, delete, and filter tasks with local storage persistence
- ✅ **Dark Mode**: Toggle between light and dark themes with system preference detection
- ✅ **API Integration**: Fetch and display posts from JSONPlaceholder API
- ✅ **Search & Pagination**: Search API data and navigate through paginated results
- ✅ **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- ✅ **Reusable Components**: Modular component architecture with Button, Card, Navbar, and Footer
- ✅ **React Hooks**: Uses useState, useEffect, useContext, and custom hooks
- ✅ **Smooth Animations**: Tailwind CSS animations and transitions

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd react-js-jsx-and-css-mastering-front-end-development-mwangiucs
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
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button component with variants
│   ├── Card.jsx        # Card component for content display
│   ├── Footer.jsx      # Footer component with links
│   ├── Layout.jsx      # Layout wrapper (Navbar + Footer)
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   └── TaskManager.jsx # Task management component
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme (light/dark) context
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js # Hook for localStorage persistence
├── pages/              # Page components
│   ├── HomePage.jsx    # Home page with Task Manager
│   └── ApiDataPage.jsx # API data display page
├── App.jsx             # Main application component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles with Tailwind directives
```

## 🎯 Key Components

### Task Manager
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Active, Completed)
- Local storage persistence
- Task statistics

### API Data Page
- Fetches posts from JSONPlaceholder API
- Loading and error states
- Search functionality
- Pagination (10 items per page)
- Responsive grid layout

### Theme Switcher
- Light/Dark mode toggle
- System preference detection
- Persistent theme selection
- Smooth transitions

## 🎨 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **PropTypes** - Type checking for props

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository to [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Deploy to GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   },
   "homepage": "https://<username>.github.io/<repo-name>"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📸 Screenshots

### Light Mode

**Task Manager Interface**
![Task Manager Light Mode](./screenshots/task-manager-light.jpg)

**API Data Page**
![API Data Light Mode](./screenshots/api-data-light.png)

**Navigation**
![Navigation Light Mode](./screenshots/navigation-light.png)

### Dark Mode

**Task Manager Interface**
![Task Manager Dark Mode](./screenshots/task-manager-dark.png)

**API Data Page**
![API Data Dark Mode](./screenshots/api-data-dark.png)

**Navigation**
![Navigation Dark Mode](./screenshots/navigation-dark.png)

> **Note:** To add screenshots:
> 1. Create a `screenshots` folder in your project root
> 2. Save your screenshots as PNG or JPG files
> 3. Update the file paths above to match your screenshot filenames
> 4. Alternatively, you can use GitHub image URLs or other image hosting services

## 🔗 Live Demo

**Live Application:** [https://react-js-jsx-and-css-mastering-fron-peach.vercel.app/](https://react-js-jsx-and-css-mastering-fron-peach.vercel.app/)

[View detailed deployment guide](./DEPLOYMENT_GUIDE.md)

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## ✅ Assignment Completion Checklist

- [x] Project setup with Vite
- [x] Tailwind CSS configured
- [x] Project structure organized (components, pages, hooks, context)
- [x] React Router configured
- [x] Button component with variants (primary, secondary, danger)
- [x] Card component
- [x] Navbar component
- [x] Footer component
- [x] Layout component
- [x] TaskManager component with all features
- [x] useState hook usage
- [x] useEffect hook usage
- [x] useContext hook usage (Theme)
- [x] Custom hook (useLocalStorage)
- [x] API integration (JSONPlaceholder)
- [x] Loading states
- [x] Error states
- [x] Pagination
- [x] Search functionality
- [x] Responsive design
- [x] Dark mode theme switcher
- [x] Tailwind utility classes
- [x] Animations and transitions

## 👤 Author

Your Name
- GitHub: [@mwangiucs](https://github.com/mwangiucs)

## 📄 License

This project is part of a learning assignment.

---

**Note**: This project was created as part of the Week 3 assignment for React.js, JSX, and Tailwind CSS course. 