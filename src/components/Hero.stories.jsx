import { Hero } from "./Hero";

export default {
  title: "Compositions/Hero",
  component: Hero,
  parameters: {
    docs: {
      description: {
        component:
          "The landing page hero. It introduces the fictional bank and shows a small banking preview.",
      },
    },
  },
  argTypes: {
    bankName: {
      control: "text",
      description: "The fictional bank name used as the main heading.",
    },
    onStart: {
      action: "started",
      description: "Function to run when the main call-to-action is clicked.",
    },
  },
};

export const Default = {
  args: {
    bankName: "Example Bank",
  },
};
