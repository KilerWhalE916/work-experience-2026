import { Footer } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    docs: {
      description: {
        component:
          "A small page footer for the fictional bank name and project disclaimer.",
      },
    },
  },
  argTypes: {
    bankName: {
      control: "text",
      description: "The fictional bank name to display.",
    },
  },
};

export const Default = {
  args: {
    bankName: "Example Bank",
  },
};
