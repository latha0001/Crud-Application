# Full-Stack CRUD Application

A simple full-stack web application that allows users to sign up, log in, and manage posts with CRUD operations.

## Features

- **Authentication**
  - User registration and login
  - JWT-based authentication
  - Password hashing with bcrypt
  - Protected routes

- **Post Management**
  - Create, read, update, and delete posts
  - Posts associated with authenticated users
  - Authorization checks for post operations

- **UI/UX**
  - Responsive design with Tailwind CSS
  - Form validation
  - Toast notifications for user feedback
  - Loading states and skeletons

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB database (local or Atlas)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

