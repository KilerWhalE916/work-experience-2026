import { StatCard } from "./StatCard";

export default {
  title: "Components/StatCard",
  component: StatCard,
  parameters: {
    docs: {
      description: {
        component:
          "A small summary card for dashboard numbers, like monthly spend, income, or goals completed.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Short label explaining the number.",
    },
    value: {
      control: "text",
      description: "The headline value to display.",
    },
    helperText: {
      control: "text",
      description: "Small supporting text below the value.",
    },
    tone: {
      control: "select",
      options: ["positive", "warning", "info"],
      description: "Changes the helper text colour.",
    },
    elevated: {
      control: "boolean",
      description: "Adds a shadow when the stat needs more emphasis.",
    },
  },
};

export const Positive = {
  args: {
    label: "Saved this month",
    value: "£240",
    helperText: "+£40 vs last month",
    tone: "positive",
    elevated: false,
  },
};

export const Warning = {
  args: {
    label: "Subscriptions",
    value: "£32",
    helperText: "Check before renewal",
    tone: "warning",
    elevated: true,
  },
};
