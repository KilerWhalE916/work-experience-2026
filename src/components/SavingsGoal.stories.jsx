import { SavingsGoal } from "./SavingsGoal";

export default {
  title: "Components/SavingsGoal",
  component: SavingsGoal,
  parameters: {
    docs: {
      description: {
        component:
          "Shows progress towards a fictional savings target using a simple progress bar.",
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
      description: "The goal name, such as New Laptop or Festival Ticket.",
    },
    saved: {
      control: "number",
      description: "How much has been saved so far.",
    },
    target: {
      control: "number",
      description: "The total amount needed to complete the goal.",
    },
  },
};

export const Default = {
  args: {
    name: "New Laptop",
    saved: 480,
    target: 700,
  },
};
