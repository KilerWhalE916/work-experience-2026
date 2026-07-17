import { Main, PageHeader, Input, Button, Navbar, Alert } from "../components";
import { Navforconv } from "./Navforconv";
import styled from "styled-components";

import { use, useState } from "react";
const blue500 = "#344d8b";
const Bar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem clamp(1rem, 4vw, 3rem);
  background: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
`;

const Links = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 680px) {
    display: none;
  }
`;

const LinkText = styled.a`
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 700;
  text-decoration: none;
`;

export function CurrencyConvPage() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("$");

    const conversionDict = {
    "$": 1.34,
    "€": 1.17,
    "¥": 218.29,
    "₹": 129.48,
    "AED": 4.95,
    "AUD$": 1.93,
  };
  function handleSwitch(e) {}

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

        <h2>
          Result: {currency}
          {(amount * conversionDict[currency]).toFixed(2)}
        </h2>
        <div>
          <Bar style={{ borderRadius: "20px", margin: 0, padding: 15 }}>
            <Links aria-label="Main navigation">
              <Button variant="ghost" onClick={()=>setCurrency("$")}>$</Button>
              <Button variant="ghost" onClick={()=>setCurrency("€")}>€</Button>
              <Button variant="ghost" onClick={()=>setCurrency("¥")}>¥</Button>
              <Button variant="ghost" onClick={()=>setCurrency("₹")}>₹</Button>
              <Button variant="ghost" onClick={()=>setCurrency("AED")}>AED</Button>
              <Button variant="ghost" onClick={()=>setCurrency("AUD$")}>AUD$</Button>

            </Links>
          </Bar>
        </div>
      </div>
      <br />
      <Alert tone="warning">
        <b>Exchange Rate Disclaimer</b>: Currency exchange rates fluctuate
        continuously and may vary throughout the day. Actual conversion rates
        may differ depending on your financial institution, service provider,
        fees, and the time the transaction is processed.
      </Alert>
    </Main>
  );
}
