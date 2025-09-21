<a id="readme-top"></a>

<p align="center">
  <a href="https://github.com/TP1202510030/backoffice_web_app">
    <img alt="Greenhouse Backoffice Web App" src="src/app/favicon.ico" width="100" />
  </a>
</p>

<h1 align="center">
Greenhouse Backoffice
</h1>

<p align="center">
An internal web application for system administrators to manage companies, grow rooms, users, and crops within the Greenhouse IoT ecosystem.
<br />

<details>
<summary>Table of Contents</summary>
<ol>
<li>
<a href="#about-the-project">About The Project</a>
<ul>
<li><a href="#technologies-used">Technologies Used</a></li>
</ul>
</li>
<li>
<a href="#getting-started">Getting Started</a>
<ul>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#installation">Installation</a></li>
</ul>
</li>
<li><a href="#maintaining-the-api-client">Maintaining the API Client</a></li>
<li><a href="#contact">Contact</a></li>
</ol>
</details>

## About The Project

This Next.js application serves as the administrative backoffice for the Greenhouse IoT System. It empowers system administrators with a secure interface to perform essential management tasks, including:

- Company Management: Onboarding new client companies and managing their details.

- User Management: Creating and assigning roles to company owners and employees.

- Grow Room Management: Provisioning the mushroom growing rooms.

## Technologies Used

This project is built with a modern, robust, and scalable tech stack:

- [Next.js](https://nextjs.org/): The React framework for production.
- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that builds on JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [Shadcn/UI](https://ui.shadcn.com/): A collection of re-usable UI components.
- [TanStack Query](https://tanstack.com/query): A powerful data-fetching and state management library.
- [Axios](https://axios-http.com): A promise-based HTTP client for the browser and
  Node.js.
- [Zod](https://zod.dev/): A TypeScript-first schema declaration and validation library.
- [React Hook Form](https://react-hook-form.com/): A performant, flexible, and extensible forms library for React.
- [OpenAPI Generator](https://openapi-generator.tech/): A tool for generating API client libraries from OpenAPI specifications.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/): JavaScript runtime environment.
- [npm](https://docs.npmjs.com/): (comes with Node.js) or a preferred package manager like pnpm or yarn.
- [Git](https://git-scm.com/downloads): Version control system.

### Installation

1. Open the command prompt and clone the repository:

```sh
git clone https://github.com/TP1202510030/backoffice_web_app.git
```

2. Run the following command to install all the necessary project dependencies:

```sh
npm install
```

3. Create a new file named .env.local in the root of the project. This file will hold your local environment variables. Copy the contents of .env.example.

4. Before running the application for the first time, you need to generate the TypeScript API client from the backend's OpenAPI specification.

- Important: Ensure your backend server is running and accessible at the URL specified in package.json before executing this command.

```sh
npm run generate-api
```

5. Start the Next.js development server:

```sh
npm run dev
```

6. Open your browser and navigate to [http://localhost:3001](http://localhost:3001) to see the application running.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Maintaining the API Client

The npm run generate-api command is essential for keeping the frontend synchronized with the backend. It executes the script defined in package.json:

```json
"scripts": {
"generate-api": "openapi-generator-cli generate -i http://localhost:3000/v3/api-docs -g typescript-axios -o src/lib/api/api-client"
}
```

Remember to run this command every time an API endpoint is added, removed, or modified in the backend to ensure type safety and prevent runtime errors.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

- GitHub: [https://github.com/alanegd](https://github.com/alanegd)
- LinkedIn: [https://www.linkedin.com/in/alan-galavis/](https://www.linkedin.com/in/alan-galavis/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
