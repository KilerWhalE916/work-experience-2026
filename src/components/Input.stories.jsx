import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "A labelled text input. Use it inside forms so the label and input stay together.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "The label shown above the input.",
    },
    placeholder: {
      control: "text",
      description: "Example text shown before the student types.",
    },
    type: {
      control: "text",
      description: "The HTML input type, such as text, number, or email.",
    },
  },
};

export const Text = {
  args: {
    label: "Send to",
    placeholder: "Alex Green",
    type: "text",
  },
};

export const Amount = {
  args: {
    label: "Amount",
    placeholder: "£25.00",
    type: "text",
  },
};
