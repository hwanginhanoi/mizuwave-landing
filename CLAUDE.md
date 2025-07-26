# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Mizuwave landing page - an Astro-based static site featuring React components and Tailwind CSS styling. The project showcases "next generation wave technology" with a modern, responsive design.

Mizuwave is a software company focused on developing innovative solutions for customers. We've helped some of the world's coolest companies design, build, and ship products that are attractive, thoughtful, and enjoyable to use.

## Architecture

**Framework Stack:**
- **Astro 5.12.3** - Static site generator with component hydration
- **React 19.1.0** - Interactive components with client-side hydration
- **Tailwind CSS** - Utility-first styling with custom CSS variables
- **shadcn/ui** - Component library using Radix UI primitives

**Key Architectural Patterns:**
- **Island Architecture**: React components are hydrated individually using `client:load` directive
- **CSS Custom Properties**: Color theming through HSL-based CSS variables in `src/styles/globals.css`
- **Path Aliases**: `@/` alias maps to `src/` directory for cleaner imports
- **Component Structure**: UI components in `src/components/ui/`, page sections as top-level components

## Development Commands

```bash
npm run dev          # Start development server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally
npm run astro        # Run Astro CLI commands
```

## Color Scheme

The project uses a custom color palette:
- **Primary**: #b7daf0 (light blue)
- **Secondary**: #1b2638 (dark navy)
- **Background**: white

Colors are implemented as HSL values in CSS custom properties and support both light and dark themes.

## Component Patterns

**React Components**: Use TypeScript (.tsx), follow shadcn/ui patterns with variant-based styling using `class-variance-authority`

**Styling**: Components use the `cn()` utility function (`@/lib/utils`) to merge Tailwind classes with conditional logic

**Hydration**: Interactive components require `client:load` directive in .astro files for client-side JavaScript

## File Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── Header.tsx      # Navigation with mobile menu
│   ├── Hero.tsx        # Landing page hero section
│   └── Features.tsx    # Features showcase section
├── lib/
│   └── utils.ts        # Utility functions (cn helper)
├── pages/
│   └── index.astro     # Main landing page
└── styles/
    └── globals.css     # Global styles and CSS variables
```

## Integration Notes

- **shadcn/ui Configuration**: Located in `components.json` with New York style variant
- **Astro Config**: Includes React and Tailwind integrations with `@/` path alias
- **TypeScript**: Configured with strict mode and path mapping for `@/*` imports