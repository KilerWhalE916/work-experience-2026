import { AccountCard } from "./AccountCard";

export default {
  title: "Components/AccountCard",
  component: AccountCard,
  parameters: {
    docs: {
      description: {
        component:
          "Shows one fictional bank account. Students can change the text and pick a visual variant.",
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
      description: "The account name shown at the top of the card.",
    },
    number: {
      control: "text",
      description: "The final few digits of the fake account or card number.",
    },
    balance: {
      control: "text",
      description: "A display-only balance, including the currency symbol.",
    },
    change: {
      control: "text",
      description: "Small supporting text, such as a weekly change or goal.",
    },
    variant: {
      control: "select",
      options: ["primary", "sunny", "midnight"],
      description: "Changes the card colour style.",
    },
  },
};

export const Primary = {
  args: {
    name: "Everyday Account",
    number: "4921",
    balance: "£1,284.20",
    change: "+£240 this week",
    variant: "primary",
  },
};

export const Sunny = {
  args: {
    name: "Savings Pot",
    number: "1088",
    balance: "£3,950.00",
    change: "72% of goal",
    variant: "sunny",
  },
};

export const Midnight = {
  args: {
    name: "Weekend Card",
    number: "7730",
    balance: "£142.18",
    change: "Card active",
    variant: "midnight",
  },
};
