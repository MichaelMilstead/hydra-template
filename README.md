# Hydra-AI Template Project

This template project demonstrates how to use the `hydra-ai` npm package in a Next.js application for dynamic component generation using AI.

Get this app running and try adding/changing components to get ideas for how you can use Hydra.

## Table of Contents

- [About this Template](#about-this-template)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run the App](#run-the-app)

## About this Template

This template is a React NextJS chat-based social app. You can ask hydra about the other users

The home page is under `/src/app/page.tsx`, and this is where you'll see the `<HydraChat/>` component used.

The instance of HydraClient is created in `/src/hydra-client.ts`, and this is also where components are registered with Hydra. If you want to add your own components for Hydra to control, this is where you'll register them.

## Get Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.x or later)
- npm (version 6.x or later) or yarn (version 1.x or later)

### Installation

1. Clone the repository:
   ```bash
   https://github.com/MichaelMilstead/hydra-template.git
   cd hydra-ai-template
   ```

### Run the App

1. Install dependencies:

   ```bash
   npm i
   ```

2. Run the app locally:

   ```bash
   npm run dev
   ```

3. Go to localhost:3000 to see the running app:

![Screenshot](https://i.imgur.com/a0RW6v1.png)
