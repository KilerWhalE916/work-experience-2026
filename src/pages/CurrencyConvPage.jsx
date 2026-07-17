import { Main, PageHeader, Input, Button,Navbar,Alert } from "../components";
import { Navforconv } from "./Navforconv";
import { use, useState } from "react";
const blue500 = "#344d8b";

export function CurrencyConvPage() {
  const [amount, setAmount] = useState(0);
  const [reverse, setReverse] = useState(false);
  function handleReverse(e) {
    if (reverse) {
      setAmount(Math.round(amount * 1.34 * 100) / 100);
    }
    if (!reverse) {
      setAmount(Math.round((amount / 1.34) * 100) / 100);
    }
    setReverse((prev) => !prev);
  }

  <br />
  function handleChange(e) {
    setAmount(e.target.value);
  }
  return (
    <Main aria-label="Student workspace">
      <Navbar />
      <div
        style={{ background:"white",borderStyle:"solid",borderWidth:"2px", padding: "20px", borderRadius: "20px" }}
      >
        {reverse && (
          <PageHeader
            eyebrow=""
            title="Convert your £&#8594;$"
            description="Enter your details..."
          />
        )}
        {!reverse && (
          <PageHeader
            eyebrow=""
            title="Convert your $&#8594;£"
            description="Enter your details..."
          />
        )}

        {reverse && (
          <Input
            label="Amount: "
            onChange={handleChange}
            value={amount}
            placeholder="In GBP(£)"
            type="number"
          />
        )}
        {!reverse && (
          <Input
            label="Amount: "
            onChange={handleChange}
            value={amount}
            placeholder="In USD($)"
            type="number"
          />
        )}
        <br />
        {reverse && <h2>Result: ${Math.round(amount * 1.34 * 100) / 100}</h2>}
        {!reverse && (
          <h2>Result: £{Math.round((amount / 1.34) * 100) / 100}</h2>
        )}

        <br />
        <Button children="Reverse" onClick={handleReverse} />
      </div>
      <br />
        <Alert tone="warning"><b>Exchange Rate Disclaimer</b>: Currency exchange rates fluctuate continuously and may vary throughout the day. Actual conversion rates may differ depending on your financial institution, service provider, fees, and the time the transaction is processed.</Alert>
    <Navforconv variant="primary" children={"Credit"}></Navforconv>
    </Main>
  );
}
