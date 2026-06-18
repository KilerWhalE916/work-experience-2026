import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "The main action component. Use variants to show primary, secondary, and quieter actions.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
      description: "Changes the button's visual importance.",
    },
    children: {
      control: "text",
      description: "The button label.",
    },
    type: {
      control: "select",
      options: ["button", "submit"],
      description: "Use submit when the button belongs to a form.",
    },
    onClick: {
      action: "clicked",
      description: "Function to run when the button is clicked.",
    },
  },
};

export const Primary = {
  args: {
    children: "Build the Dashboard",
    variant: "primary",
    type: "button",
  },
};

export const Secondary = {
  args: {
    children: "Dashboard",
    variant: "secondary",
    type: "button",
  },
};

export const Ghost = {
  args: {
    children: "Freeze Card",
    variant: "ghost",
    type: "button",
  },
};
