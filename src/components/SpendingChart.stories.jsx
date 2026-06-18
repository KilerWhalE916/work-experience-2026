import { spending } from "../data/bankingData";
import { SpendingChart } from "./SpendingChart";

export default {
  title: "Components/SpendingChart",
  component: SpendingChart,
  parameters: {
    docs: {
      description: {
        component:
          "A beginner-friendly bar chart made from divs. It expects labels, percentages, and colours.",
      },
    },
  },
  argTypes: {
    items: {
      control: "object",
      description:
        "Array of objects. Each item should include label, value, and color.",
    },
  },
};

export const Default = {
  args: {
    items: spending,
  },
};
