# Work Experience Component Library

A beginner-friendly React component library

You will build reusable components with `styled-components`, then assemble them into your own fictional banking landing page and dashboard.

## Getting Started

```bash
npm install
npm run dev
```

Open Storybook to explore components on their own:

```bash
npm run storybook
```

## Project Shape

- `src/components`: reusable components
- `src/components/Main.jsx` and `src/components/Flex.jsx`: layout helpers for centering and arranging sections
- `src/theme`: design tokens and global styles
- `src/data`: dummy banking data
- `src/components/*.stories.jsx`: Storybook examples and prop docs
- `src/routes.manifest.js`: route definitions
- `src/routes.js`: route lookup and page mapping
- `/`: intentionally blank home page for your own work
- `/example-page`: finished example that combines the components

## Teaching Goal

The components are intentionally simple to implement, but flexible enough for you to make choices:

- your own fictional bank name
- different button and card variants
- different dashboard sections
- different fake account and transaction data
- different landing page messages

## Stretch Goals

Once your main page is working, try designing and building your own custom components:

- a spending limit warning
- a monthly budget tracker
- a savings milestone timeline
- a card freeze or unfreeze control
- a bill reminder panel
- a quick actions toolbar
- a mini profile or account settings card
- a personalised welcome banner
