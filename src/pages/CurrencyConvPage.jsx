import { Main, PageHeader, Input, Button,Navbar,Alert } from "../components";
import { Navforconv } from "./Navforconv";
import { Main, PageHeader, Input, Button, Navbar, Alert } from "../components";
import { use, useState } from "react";
const blue500 = "#344d8b";

export function CurrencyConvPage() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("$");
  
  const conversionDict = {"$":1.34}
  function handleSwitch(e) {
    
  }

  <br />;
  function handleChange(e) {
    setAmount(e.target.value);
  }
  return (
    <Main aria-label="Student workspace">
      <Navbar />
      <div
        style={{
          background: "white",
          borderStyle: "solid",
          borderWidth: "2px",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <PageHeader
          eyebrow=""
          title={`Convert your £ to ${currency}`}
          description="Enter your details..."
        />

        <Input
          label="Amount: "
          onChange={handleChange}
          value={amount}
          type="number"
        />
        <br />

        <h2>Result: {currency}{(amount*conversionDict[currency]).toFixed(2)}</h2>
        <br />
        <Button children="Switch" onClick={handleSwitch} />
      </div>
      <br />
        <Alert tone="warning"><b>Exchange Rate Disclaimer</b>: Currency exchange rates fluctuate continuously and may vary throughout the day. Actual conversion rates may differ depending on your financial institution, service provider, fees, and the time the transaction is processed.</Alert>
    <Navforconv variant="primary" children={"Credit"}></Navforconv>
      <Alert tone="warning">
        <b>Exchange Rate Disclaimer</b>: Currency exchange rates fluctuate
        continuously and may vary throughout the day. Actual conversion rates
        may differ depending on your financial institution, service provider,
        fees, and the time the transaction is processed.
      </Alert>
    </Main>
  );
}
