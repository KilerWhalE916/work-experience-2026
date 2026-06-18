import { features } from "../data/bankingData";
import { FeatureGrid } from "./FeatureGrid";

export default {
  title: "Components/FeatureGrid",
  component: FeatureGrid,
  parameters: {
    docs: {
      description: {
        component:
          "Displays a list of feature cards from an array. Good for showing different banking ideas on the landing page.",
      },
    },
  },
  argTypes: {
    features: {
      control: "object",
      description:
        "Array of objects. Each item should include title and text strings.",
    },
  },
};

export const Default = {
  args: {
    features,
  },
};
