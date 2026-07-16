import { AccountCard, Main, SpendingChart,Navbar } from "../components";
import { spending } from "../data/bankingData";

export function SpendingPage() {

  const data = [
    { label: "Food", value: 45, color: "#13a36f" },
    { label: "Travel", value: 15, color: "#4d70d6" },
    { label: "Fun", value: 23, color: "#f3c64e" },
    { label: "Investments", value: 17, color: "#d95040" }
  ];

  return (
    <Main aria-label="Student workspace">
      <Navbar variant="primary" children={"Credit"}></Navbar>
<AccountCard name={"Total Balance"} number={4321} balance={"£70853"} change={"Active"} variant={"midnight"} />
<br />
      <SpendingChart items={data} />
    </Main>
  );
}