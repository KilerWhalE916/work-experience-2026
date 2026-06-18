import { Button } from "./Button";
import { EmptyState } from "./EmptyState";

export default {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component:
          "A friendly placeholder for sections with no data yet, such as no transactions or no savings goals.",
      },
    },
  },
  argTypes: {
    icon: {
      control: "text",
      description: "A short icon-like character or text shown in the square.",
    },
    title: {
      control: "text",
      description: "The main empty-state message.",
    },
    description: {
      control: "text",
      description: "Extra detail explaining what the user can do next.",
    },
    action: {
      control: false,
      description: "Optional React content, usually a Button.",
    },
  },
};

export const Default = {
  args: {
    icon: "£",
    title: "No transactions yet",
    description: "When dummy spending appears, it will show up here.",
  },
};

export function WithAction(args) {
  return (
    <EmptyState
      {...args}
      action={<Button variant="secondary">Add Dummy Transaction</Button>}
    />
  );
}

WithAction.args = {
  icon: "+",
  title: "Start your savings pot",
  description: "Create a fictional goal so your dashboard feels personal.",
};
