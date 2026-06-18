import { Alert } from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          "A short feedback message. Use it for success messages, warnings, or dashboard tips.",
      },
    },
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["success", "warning"],
      description: "Changes the icon and accent colour.",
    },
    children: {
      control: "text",
      description: "The message displayed inside the alert.",
    },
  },
};

export const Success = {
  args: {
    tone: "success",
    children: "Your savings pot is close to its goal.",
  },
};

export const Warning = {
  args: {
    tone: "warning",
    children: "This is dummy data for a coding project.",
  },
};
