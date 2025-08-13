# Overview

This is a modern full-stack web application built with React, TypeScript, and Express.js, featuring a professional portfolio website for an AI/ML Engineer and Data Analyst. The application showcases a comprehensive personal portfolio with sections for about, experience, projects, skills, and contact functionality. It implements a contact form system that allows visitors to send messages, which are stored and can be retrieved for review.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React 18 with TypeScript and follows a component-based architecture. Key architectural decisions include:

- **React Router Alternative**: Uses Wouter for lightweight client-side routing instead of React Router, providing a minimal routing solution suitable for the single-page portfolio structure
- **UI Component Library**: Implements shadcn/ui components with Radix UI primitives, providing accessible and customizable UI components with consistent design patterns
- **Styling Strategy**: Utilizes Tailwind CSS with CSS custom properties for theming, enabling easy customization and dark mode support through CSS variables
- **Animation Framework**: Integrates Framer Motion for smooth animations and scroll-triggered effects, enhancing user experience with professional motion design
- **State Management**: Employs TanStack Query (React Query) for server state management, providing caching, background updates, and error handling for API calls

## Backend Architecture
The backend follows a RESTful API design pattern with Express.js:

- **Server Framework**: Uses Express.js with TypeScript for type safety and modern JavaScript features
- **Route Organization**: Implements modular route registration pattern, separating API endpoints from server configuration
- **Storage Abstraction**: Defines an IStorage interface with initial in-memory implementation, allowing for easy migration to database persistence
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes and JSON responses
- **Development Tools**: Integrates Vite development server in development mode for hot module replacement and fast refresh

## Data Storage Solutions
Currently implements a transitional storage approach:

- **In-Memory Storage**: Uses MemStorage class implementing IStorage interface for development and testing
- **Database Schema**: Defines PostgreSQL schemas using Drizzle ORM with tables for users and contact messages
- **Migration Ready**: Drizzle configuration prepared for PostgreSQL deployment with environment-based database URL
- **Type Safety**: Leverages Drizzle-Zod integration for runtime validation and type inference

## Authentication and Authorization
Basic user schema is defined but authentication is not yet implemented:

- **User Model**: Defines user table with username/password fields
- **Future Implementation**: Architecture supports adding session management and authentication middleware
- **Security Considerations**: Uses environment variables for sensitive configuration like database URLs

## External Dependencies

### Cloud Database
- **Neon Database**: Configured with @neondatabase/serverless for PostgreSQL hosting
- **Connection Management**: Uses connection pooling suitable for serverless environments

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Accessible component primitives for complex UI interactions
- **Lucide React**: Icon library providing consistent iconography
- **Framer Motion**: Animation library for smooth transitions and interactions

### Development Tools
- **Vite**: Build tool and development server with fast hot module replacement
- **TypeScript**: Type safety across frontend and backend
- **Drizzle Kit**: Database migration and schema management tools
- **ESBuild**: Fast JavaScript bundler for production builds

### Form Handling and Validation
- **React Hook Form**: Efficient form state management with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### State Management and Data Fetching
- **TanStack Query**: Server state management with caching and synchronization
- **React Query DevTools**: Development tools for debugging query states

The architecture is designed for scalability and maintainability, with clear separation of concerns and modern development practices. The storage layer is prepared for database integration while providing flexibility for different deployment scenarios.