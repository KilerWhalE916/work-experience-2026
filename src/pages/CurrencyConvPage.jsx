import { Main, PageHeader, Input, Button } from "../components";
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
      <div
        style={{ background: "#d5dcef", padding: "20px", borderRadius: "20px" }}
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
            type="text"
          />
        )}
        {!reverse && (
          <Input
            label="Amount: "
            onChange={handleChange}
            value={amount}
            placeholder="In USD($)"
            type="text"
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
    </Main>
  );
}
