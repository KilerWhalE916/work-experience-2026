import { Navbar } from "./Navbar";

export default {
  title: "Compositions/Navbar",
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component:
          "The top navigation bar. It shows the fictional bank name, links, and a dashboard button.",
      },
    },
  },
  argTypes: {
    bankName: {
      control: "text",
      description: "The fictional bank name displayed in the nav.",
    },
    onDashboardClick: {
      action: "dashboard clicked",
      description: "Function to run when the Dashboard button is clicked.",
    },
  },
};

export const Default = {
  args: {
    bankName: "Example Bank",
  },
};
