# Hydra-AI Template Project

This template project demonstrates how to use the `hydra-ai` npm package in a Next.js application for dynamic component generation using AI.

Get this app running and try adding/changing components to get ideas for how you can use Hydra.

## Table of Contents

- [About this Template](#about-this-template)
  - [Template Components](#the-template-components)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run the App](#run-the-app)
  - [Customize](#customize)

## About this Template

This template is a React NextJS chat-based social app, where you can interact with other (fake) users through Hydra.

The home page is under `/src/app/page.tsx`, and this is where you'll see the `<HydraChat/>` component used.

The instance of HydraClient is created in `/src/hydra-client.ts`, and this is also where components are registered with Hydra. If you want to add your own components for Hydra to control, this is where you'll register them.

### The Template Components

When using `hydra-ai`, you register a set of components with Hydra that can then be used by Hydra when `generateComponent(context)` is called. In this template project, the components that are registered with Hydra can be found under `/src/components/hydra-components` and are:

1.  `ProfileCardList`

    ![ProfileCardList](https://i.imgur.com/fTkWQzo.png)

    The ProfileCardList component is used to display a list of profile cards. Each profile card represents an individual profile and contains an image, name, and a brief description.

    **Props:**

    **profiles**: Profile[] - An array of profile objects, where each profile contains the following fields:

    - **id** : string - Unique identifier for the profile.

    - **name**: string - Name of the profile owner.

    - **imageUrl**: string - URL of the profile image.

    - **about**: string - Brief description about the profile owner.

    This is an example of a component that Hydra needs additional data to use. In this case, Hydra needs to know about the list of Profiles in the system before it can choose which of them to fill the component with based on context.

    To enable that, we pass `getProfiles` to the `getComponentContext` parameter of `registerComponent`.

    #### Get Hydra to use this Component:

    Hydra will usually use this component when the user asks about the other "users" of this app.

    Try submitting:

    - "Show me users who use React"
    - "Does anybody on here like to hike?"

2.  `SendMessageFormList`

    ![SendMessageFormList](https://i.imgur.com/KVmHq3V.png)

    The SendMessageFormList component is used to display a list of message forms. Each form allows the user to send a direct message to a specific recipient.

    **Props:**

    **messages**: DirectMessage[] - An array of direct message objects, where each message contains the following fields:

    - **id** : string - Unique identifier for the message.
    - **to** : string - Recipient of the message.
    - **message** : string - Content of the message.

    #### Get Hydra to use this Component:

    Hydra will usually use this component when the user asks about sending messages.

    Try submitting:

    - "Send a message to all React users asking if they want to connect."
    - "Draft messages asking David and Alice if they want to meet up."

    You'll notice that these are both "list" components that each render some number of a "base" component. There's no need for us to also register the "base" component with Hydra, since it can generate a list of one if needed.

## Get Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.x or later)
- npm (version 6.x or later)

### Installation

1. Clone a copy of the repository:

   Get a copy of this repository by clicking the "Use this template" button:

   ![UseTemplateButton](https://i.imgur.com/eyUyEi2.png)

   Then, clone your new repo:

   ```bash
   https://github.com/<Your Username>/<Your repo name>.git

   cd your-repo-name
   ```

### Run the App

1. Add OpenAI Key:

   Rename `.env.example` to `.env.local` and add your openai-key.

   It should look like this:

   ```bash
   OPENAI_API_KEY=<your key>
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Run the app locally:

   ```bash
   npm run dev
   ```

4. Go to localhost:3000 to see the running app:

   ![no-message](https://i.imgur.com/a0RW6v1.png)

5. Try inputting messages that might prompt Hydra to use one of the registered components.

   - "Show me everybody who uses React" should get Hydra to use `ProfileCardList`:

   ![first-message](https://i.imgur.com/581YA9D.png)

   - "Draft a message to David and Frank, customized to them, asking to connect" should get Hydra to use `SendMessageFormList`:

   ![second-message](https://i.imgur.com/oxe5tCw.png)

### Customize

Try creating your own components and registering them with Hydra under `hydra-client.ts`!
