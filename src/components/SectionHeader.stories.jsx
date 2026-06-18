import { Button } from "./Button";
import { SectionHeader } from "./SectionHeader";

export default {
  title: "Components/SectionHeader",
  component: SectionHeader,
  parameters: {
    docs: {
      description: {
        component:
          "A compact heading for cards or dashboard sections, with an optional action on the right.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The section title.",
    },
    description: {
      control: "text",
      description: "Optional helper text under the title.",
    },
    action: {
      control: false,
      description: "Optional React content, usually a small Button.",
    },
  },
};

export const Default = {
  args: {
    title: "Recent Transactions",
    description: "A few example payments from the dummy data file.",
  },
};

export function WithAction(args) {
  return (
    <SectionHeader
      {...args}
      action={<Button variant="ghost">View All</Button>}
    />
  );
}

WithAction.args = {
  title: "Savings Goals",
  description: "Students can choose their own goals and amounts.",
};
