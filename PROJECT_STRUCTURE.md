# Project Structure Documentation

This project follows a well-organized folder structure that separates the website and dashboard while sharing common components and utilities.

## 📁 Folder Structure

```
src/
├── components/                 # Reusable UI components
│   ├── shared/                # Components used by both website and dashboard
│   │   ├── Header.jsx         # Navigation header component
│   │   ├── Header.css         # Header styles
│   │   ├── Footer.jsx         # Footer component
│   │   └── Footer.css         # Footer styles
│   ├── website/               # Website-specific components
│   └── dashboard/             # Dashboard-specific components
│       ├── Sidebar.jsx        # Dashboard sidebar navigation
│       └── Sidebar.css        # Sidebar styles
├── layouts/                   # Layout components for different sections
│   ├── website/               # Website layout
│   │   ├── WebsiteLayout.jsx  # Main website layout wrapper
│   │   └── WebsiteLayout.css  # Website layout styles
│   └── dashboard/             # Dashboard layout
│       ├── DashboardLayout.jsx # Main dashboard layout wrapper
│       └── DashboardLayout.css # Dashboard layout styles
├── pages/                     # Page components
│   ├── website/               # Website pages
│   │   ├── HomePage.jsx       # Landing page
│   │   ├── HomePage.css       # Home page styles
│   │   ├── AboutPage.jsx      # About page
│   │   ├── AboutPage.css      # About page styles
│   │   ├── ContactPage.jsx    # Contact page
│   │   └── ContactPage.css    # Contact page styles
│   └── dashboard/             # Dashboard pages
│       ├── DashboardHome.jsx  # Dashboard overview
│       ├── DashboardHome.css  # Dashboard home styles
│       ├── DashboardAnalytics.jsx # Analytics page
│       ├── DashboardAnalytics.css # Analytics styles
│       ├── DashboardSettings.jsx  # Settings page
│       └── DashboardSettings.css  # Settings styles
├── hooks/                     # Custom React hooks
│   ├── useLocalStorage.js     # Local storage hook
│   └── useAuth.js             # Authentication hook
├── utils/                     # Utility functions and constants
│   └── constants.js           # Application constants
├── contexts/                  # React contexts (for state management)
├── assets/                    # Static assets
│   ├── images/                # Image files
│   └── icons/                 # Icon files
├── styles/                    # Global styles and themes
├── App.jsx                    # Main application component with routing
├── App.css                    # Global application styles
└── main.jsx                   # Application entry point
```

## 🚀 Features

### Website Section
- **Home Page**: Landing page with hero section and features
- **About Page**: Company information and statistics
- **Contact Page**: Contact form and information
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean and professional design

### Dashboard Section
- **Dashboard Home**: Overview with statistics and recent activity
- **Analytics**: Data visualization and performance metrics
- **Settings**: User preferences and configuration
- **Sidebar Navigation**: Collapsible sidebar for mobile
- **Dark Theme**: Professional dashboard appearance

### Shared Components
- **Header**: Responsive navigation with different variants
- **Footer**: Consistent footer across all pages
- **Reusable UI**: Common components for both sections

## 🛠️ Technologies Used

- **React 19**: Latest React version with modern features
- **React Router DOM**: Client-side routing
- **Vite**: Fast build tool and development server
- **CSS3**: Modern CSS with Grid and Flexbox
- **ES6+**: Modern JavaScript features

## 📱 Responsive Design

The project is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary**: #007bff (Blue)
- **Success**: #28a745 (Green)
- **Warning**: #ffc107 (Yellow)
- **Danger**: #dc3545 (Red)
- **Light**: #f8f9fa (Light Gray)
- **Dark**: #343a40 (Dark Gray)

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable font sizes and line heights
- **Responsive**: Scales appropriately on all devices

## 🔧 Development

### Getting Started
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

### Linting
```bash
npm run lint
```

## 📋 Best Practices Implemented

1. **Separation of Concerns**: Clear separation between website and dashboard
2. **Component Reusability**: Shared components for common UI elements
3. **Consistent Naming**: Clear and descriptive file and component names
4. **CSS Organization**: Component-specific stylesheets
5. **Responsive Design**: Mobile-first approach
6. **Accessibility**: Semantic HTML and proper ARIA labels
7. **Performance**: Optimized bundle size and lazy loading ready
8. **Maintainability**: Well-structured code and clear documentation

## 🔄 Routing Structure

### Website Routes
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page

### Dashboard Routes
- `/dashboard` - Dashboard home
- `/dashboard/analytics` - Analytics page
- `/dashboard/settings` - Settings page

## 🎯 Future Enhancements

- Authentication system integration
- State management with Redux or Context API
- API integration
- Testing setup (Jest, React Testing Library)
- PWA features
- Internationalization (i18n)
- Theme switching
- Advanced dashboard widgets
- Real-time data updates
