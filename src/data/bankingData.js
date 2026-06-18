export const accounts = [
  {
    name: "Everyday Account",
    number: "4921",
    balance: "£1,284.20",
    change: "+£240 this week",
    variant: "primary",
  },
  {
    name: "Savings Pot",
    number: "1088",
    balance: "£3,950.00",
    change: "72% of goal",
    variant: "sunny",
  },
  {
    name: "Weekend Card",
    number: "7730",
    balance: "£142.18",
    change: "Card active",
    variant: "midnight",
  },
];

export const transactions = [
  { shop: "Trainline", amount: "-£18.40", date: "Today", type: "Travel" },
  { shop: "Local Cafe", amount: "-£4.80", date: "Today", type: "Food" },
  { shop: "Part-time Pay", amount: "+£120.00", date: "Yesterday", type: "Income" },
  { shop: "Cinema", amount: "-£11.99", date: "Tue", type: "Fun" },
];

export const features = [
  {
    title: "Savings Pots",
    text: "Split money into goals like travel, tech, or weekend plans.",
  },
  {
    title: "Spending Insights",
    text: "Turn dummy transaction data into simple categories and charts.",
  },
  {
    title: "Card Controls",
    text: "Add buttons for fake actions like freezing or replacing a card.",
  },
];

export const savingsGoals = [
  { name: "New Laptop", saved: 480, target: 700 },
  { name: "Festival Ticket", saved: 95, target: 180 },
  { name: "Driving Lessons", saved: 220, target: 500 },
];

export const spending = [
  { label: "Food", value: 42, color: "#13a36f" },
  { label: "Travel", value: 28, color: "#4d70d6" },
  { label: "Fun", value: 18, color: "#f3c64e" },
  { label: "Other", value: 12, color: "#d95040" },
];
