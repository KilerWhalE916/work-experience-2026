import { transactions } from "../data/bankingData";
import { TransactionList } from "./TransactionList";

export default {
  title: "Components/TransactionList",
  component: TransactionList,
  parameters: {
    docs: {
      description: {
        component:
          "Renders a list of fictional transactions from an array of data.",
      },
    },
  },
  argTypes: {
    transactions: {
      control: "object",
      description:
        "Array of objects. Each transaction should include shop, amount, date, and type.",
    },
  },
};

export const Default = {
  args: {
    transactions,
  },
};
