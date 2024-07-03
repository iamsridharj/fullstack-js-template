# Fullstack Template with React, Styled Components, Express, SQLite, and Joi

This repository serves as a template for a full-stack web application using the following technologies:

- Frontend: React, Styled Components
- Backend: Express, SQLite, Joi

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Documentation](#api-documentation)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- **React** for building the user interface.
- **Styled Components** for styling React components.
- **Express** for building the backend API.
- **SQLite** as the database.
- **Joi** for data validation.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fullstack-template.git
   docker-compose up --build

   ```

1. Folder Structure:

   ```fullstack-template/
   ├── backend/          # Express server and backend code
   │   ├── index.js      # Entry point for the backend
   │   ├── app.js        # Express Application
   │   ├── routes/       # API routes
   │   ├── models/       # Database models
   │   ├── controllers/  # Route handlers
   │   └── middleware/   # Custom middleware and validation
   │   └── validations/   # JOI validations for validating payload
   │   └── tests/        # Unit tests
   │   └── utils/        # Utilities function
   │   └── configs/        # Base Config, Database Config, Logger Config.....

   ├── frontend/          # Express server and backend code
   │   ├── public        # host static contents
   │   ├── src        # Express Application
   │     ├── design-system  #UI component and design principles for the website
            ├── assets  #Icons
            ├── components  #Small UI blocks
            ├── foundations
               ├── breakpoints  #Styled components definition of screen breakpoints
               ├── colors
               ├── typography
   │   ├── hooks        # reusable react logic
   │   ├── pages
   │   ├── utils
   │   ├── App.tsx
   │   ├── index.tsx
   ```
