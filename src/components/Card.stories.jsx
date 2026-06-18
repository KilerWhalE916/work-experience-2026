import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "A simple white panel for grouping related content, such as forms, summaries, or transactions.",
      },
    },
  },
  argTypes: {
    elevated: {
      control: "boolean",
      description: "Adds a shadow when the card needs more emphasis.",
    },
    children: {
      control: "text",
      description: "Any content placed inside the card.",
    },
  },
};

export const Basic = {
  args: {
    elevated: false,
    children: "Use cards to group banking content.",
  },
};

export const Elevated = {
  args: {
    elevated: true,
    children: "This card has a stronger shadow.",
  },
};
