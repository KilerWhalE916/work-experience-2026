import { Button } from "./Button";
import { PageHeader } from "./PageHeader";

export default {
  title: "Components/PageHeader",
  component: PageHeader,
  parameters: {
    docs: {
      description: {
        component:
          "A large page heading with optional eyebrow text, description, and action buttons.",
      },
    },
  },
  argTypes: {
    eyebrow: {
      control: "text",
      description: "Small label shown above the title.",
    },
    title: {
      control: "text",
      description: "The main page heading.",
    },
    description: {
      control: "text",
      description: "Supporting copy under the heading.",
    },
    actions: {
      control: false,
      description: "Optional React content, usually one or two Buttons.",
    },
  },
};

export const Default = {
  args: {
    eyebrow: "Dashboard",
    title: "Good afternoon, Sam",
    description: "Here is your fictional money, looking surprisingly organised.",
  },
};

export function WithActions(args) {
  return (
    <PageHeader
      {...args}
      actions={
        <>
          <Button>Make Transfer</Button>
          <Button variant="ghost">Freeze Card</Button>
        </>
      }
    />
  );
}

WithActions.args = {
  eyebrow: "Overview",
  title: "Your money at a glance",
  description: "Use actions when the page has one or two obvious next steps.",
};
