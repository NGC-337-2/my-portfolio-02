# Portfolio

A modern, responsive portfolio website built with Next.js, showcasing skills, projects, and experience.


## Features

- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Dark/Light theme support
- SEO optimized
- Static site generation for fast loading
- Lighthouse performance testing

## Tech Stack

### Frontend
- **Next.js** - React framework for production
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Icons** - Additional icons

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Jest** - Testing framework
- **Testing Library** - Testing utilities

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting
- `npm run export` - Build and export static files
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lighthouse` - Run Lighthouse performance audit

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── config/          # Site configuration
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── out/                 # Static export output
└── package.json
```

## Deployment

The project is configured for static site generation and can be deployed to platforms like Vercel, Netlify, or GitHub Pages.

For Vercel deployment, see the deployment guide in README.md.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

