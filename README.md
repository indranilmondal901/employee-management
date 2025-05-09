# Employee Management Dashboard

A responsive and user-friendly Employee Management dashboard built using React, Clerk for authentication, and AG Grid for employee data display and filtering.

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
VITE_CLERK_PUBLISHABLE_KEY=pk_test_**********

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


![image](https://github.com/user-attachments/assets/66896775-38c5-4974-a56d-b065690865eb)









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
