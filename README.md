# Employee Management Dashboard

A responsive and user-friendly Employee Management dashboard built using React, Clerk for authentication, and AG Grid for employee data display and filtering.
![image](https://github.com/user-attachments/assets/66896775-38c5-4974-a56d-b065690865eb)

## Features

- Secure Sign In / Sign Out using Clerk
- Add new employees via a dynamic form
- Display employee data in a powerful AG Grid table
- Grid filtering and pagination
- Modular React component structure
- Styled with Tailwind CSS

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone 
cd employee-management
```
### 2. Install Dependencies
npm install
# or
yarn install

### 3. Configure Clerk
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_**********
```

#### 4. Configure EmailJS
```
VITE_EMAILJS_SERVICE_ID=service_**
VITE_EMAILJS_TEMPLATE_ID=template_**
VITE_EMAILJS_USER_ID=I**
```

### 🔐 Environment Setup Note

I’ve already included the necessary `.env` variables to help you run the project locally.  
However, for public repositories, environment keys may sometimes get invalidated automatically.  
If you encounter any issues with Clerk authentication:

- Follow the environment setup steps mentioned above to create new keys, **or**
- Reach out to me for assistance.


## How I Approached the Task

### Project Structure & Planning

I began by thoroughly reviewing the project requirements, tools, and library recommendations. Then, I mapped out a modular project structure to keep concerns separated and components reusable. Key directories like `components`, `hooks`, `pages`, and `utils` were set up early to streamline development.

### Step-by-Step Execution

1. **Clerk Authentication**  
   Integrated Clerk to ensure only authenticated users can access the dashboard. This was handled at the routing level using `<RedirectToSignIn />` for unauthorized access.

2. **Form Creation with Validation**  
   Built the employee form using **React Hook Form** combined with **Zod** for schema-based validation. The form includes fields for name, email, phone, role, and joining date, styled using **ShadCN UI** components.

3. **Displaying Data with AG Grid**  
   Once an employee is added via the form, their details are shown in an interactive table using **AG Grid**, complete with sorting and filtering features.

4. **Styling with ShadCN UI**  
   For a consistent, modern design, all UI elements like inputs, buttons, selects, and layout wrappers use ShadCN UI components. This greatly accelerated development while maintaining a professional look.

5. **Data Persistence Using localStorage**  
   Since the scope didn’t require a backend, I chose **localStorage** to persist employee data across page refreshes. A custom hook, `useEmployeeData.ts`, handles the logic for reading and writing employee data.

6. **Bonus: Email Trigger**  
   After successful form submission, an email is sent using `sendEmail.ts`. This provides real-time notification capability and showcases integration with third-party services.

---

## Data Persistence Strategy

I chose `localStorage` for data persistence as it:
- Is simple and fast to implement for a demo app.
- Requires no backend setup.
- Persists data across sessions.

Data is saved using:
```ts
localStorage.setItem('employees', JSON.stringify(data));
const data = JSON.parse(localStorage.getItem('employees') || '[]');
```

## 💡 Ideas for Extending Persistence

To scale the application beyond a simple demo and prepare it for production use, the following enhancements are recommended:

### 1. 🗄️ MongoDB with Express Backend
Build a RESTful API using **Node.js** and **Express**, and connect it to a **MongoDB** database. This approach will:
- Allow secure, centralized data storage.
- Enable CRUD operations via HTTP endpoints.
- Make integration with future services (e.g., admin dashboard, analytics) easier.

## 📁 Project Structure
```
employee-management-app/
│
├── public/
│ └── index.html # HTML entry point
│
├── src/
│ ├── assets
│ ├── components/ # Reusable UI components
│ │ ├── EmployeeForm.tsx # Form component to add new employees
│ │ ├── EmployeeGrid.tsx # Grid component to list employees using AG Grid
│ │ └── Header.tsx # Application header
│ │
│ ├── hooks/ # Custom React hooks
│ │ └── useEmployeeData.ts # Hook to handle localStorage logic for employees
│ │
│ ├── pages/ # Route-level pages
│ │ ├── Dashboard.tsx # Dashboard showing the form and grid
│ │ └── Login.tsx # Login screen using Clerk
│ │
│ ├── types/ # TypeScript type definitions
│ │ └── employee.d.ts # Employee data type
│ │
│ ├── utils
│ │ └── sendEmail.ts # Bonus feature: Email sending logic
│ │
│ ├── App.tsx # Main application routes
│ ├── main.tsx # React entry point
│ ├── index.css # Global styles
│
├── .env # Environment variables (Clerk keys, EMAILJS Keys)
├── package.json 
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation
```





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
