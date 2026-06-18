import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "A small label for highlighting status, categories, or short tags.",
      },
    },
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["green", "blue"],
      description: "Optional colour tone. Use blue for secondary labels.",
    },
    children: {
      control: "text",
      description: "The short label text.",
    },
  },
};

export const Green = {
  args: {
    children: "Student-built banking",
  },
};

export const Blue = {
  args: {
    tone: "blue",
    children: "Dummy transactions",
  },
};
