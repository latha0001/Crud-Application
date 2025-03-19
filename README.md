# Full-Stack CRUD Application

A simple full-stack web application that allows users to sign up, log in, and manage posts with CRUD (Create, Read, Update, Delete) operations.
![Screenshot 2025-03-19 162715](https://github.com/user-attachments/assets/79241e30-f66a-4a52-ba74-6482a36e1147)
![Screenshot 2025-03-19 162726](https://github.com/user-attachments/assets/d3118565-bbf3-46fd-a6ab-2405a8e48aa9)
![Screenshot 2025-03-19 162742](https://github.com/user-attachments/assets/21aa1bc4-549a-49c4-a8cc-28860a8b3b17)
![Screenshot 2025-03-19 162755](https://github.com/user-attachments/assets/c04b7bc8-c307-4f8e-b069-817554334e6e)
![Screenshot 2025-03-19 163238](https://github.com/user-attachments/assets/3f6a9fb7-1b86-4eb5-8bc9-df0ae7dc25bf)


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

```env
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
NEXT_PUBLIC_API_URL=<your_api_url>
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/latha0001/Crud-Application.git
   cd Crud-Application
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

### Deployment

The application can be deployed on Vercel.

