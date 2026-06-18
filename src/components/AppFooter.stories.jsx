import { AppFooter } from "./AppFooter";

export default {
  title: "Components/AppFooter",
  component: AppFooter,
  parameters: {
    docs: {
      description: {
        component:
          "A fuller footer with brand text and optional links. Useful when students want more than the simple Footer component.",
      },
    },
  },
  argTypes: {
    bankName: {
      control: "text",
      description: "The fictional bank name shown in the footer.",
    },
    tagline: {
      control: "text",
      description: "Short supporting text under the bank name.",
    },
    links: {
      control: "object",
      description:
        "Array of link objects. Each item should include label and href.",
    },
  },
};

export const Default = {
  args: {
    bankName: "Example Bank",
    tagline: "Fictional banking project for work experience students.",
    links: [
      { label: "Security", href: "#security" },
      { label: "Help", href: "#help" },
      { label: "Careers", href: "#careers" },
    ],
  },
};
