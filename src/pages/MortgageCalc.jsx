import { useState } from "react";
import {
  Main,
  Navbar,
  TransferForm,
  TransactionList,
  Input,
  Button,
  Card,
  HorizontalFlex,
} from "../components";
export function MortgageCalc() {
  const blue900 = "#18233f";

  const [debt, setDebt] = useState();
  const [term, setTerm] = useState();
  const [interest, setInterest] = useState();
  const [fee, setFee] = useState();
  const [showResult, setResult] = useState(false);
  const [month, setMonth] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculate = (e) => {
    const r = parseFloat(interest) / 100 / 12;
    const n = parseFloat(term) * 12;
    const P = parseFloat(debt) + parseFloat(fee);
    const monthlyPayment =
      (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    setMonth(Math.round(monthlyPayment).toFixed(2));
    setTotalInterest((n * monthlyPayment - P).toFixed(2));
    setResult(true);
  };
  const inputstyle = { marginBottom: "15px" };
  return (
    <Main aria-label="Student workspace">
      <Navbar variant="primary" children={"Credit"}></Navbar>
      <h2>Mortgage Calculator</h2>
      {showResult && (
        <Card style={{ padding: "15px" }}>
          <HorizontalFlex style={{ margin: 0 }}>
            <b>
              <p style={{ color: blue900, margin: 0 }}>Per month you repay</p>
            </b>
            <h2>£{parseFloat(month).toFixed(2)}</h2>
          </HorizontalFlex>
          <p style={{ margin: 0 }}>
            assuming your interest rate stays the same
          </p>
        </Card>
      )}
      <br />
      {showResult && (
        <Card style={{ padding: "15px" }}>
          <HorizontalFlex style={{ margin: 0 }}>
            <b>
              <p style={{ color: blue900, margin: 0 }}>
                Total you'll repay over full term
              </p>
            </b>
            <h2>£{parseFloat(totalInterest + parseFloat(debt)).toFixed(2)}</h2>
          </HorizontalFlex>
          <p style={{ margin: 0 }}>
            (Includes mortgage debt, £{debt} + total interest £{totalInterest})
          </p>
        </Card>
      )}
      <br />
      <Input
        style={inputstyle}
        label="Mortgage Debt: "
        onChange={(e) => setDebt(e.target.value)}
        value={debt}
        placeholder="In GBP(£)"
        type="number"
      />
      <Input
        style={inputstyle}
        label="Mortgage Term: "
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        placeholder="Years"
        type="number"
      />
      <Input
        style={inputstyle}
        label="Interest Rate: "
        onChange={(e) => setInterest(e.target.value)}
        value={interest}
        placeholder="% per year"
        type="number"
      />
      <Input
        style={inputstyle}
        label="Mortgage Fee: "
        onChange={(e) => setFee(e.target.value)}
        value={fee}
        placeholder="(added to principle) £"
        type="number"
      />
      <Button children={"Calculate"} onClick={calculate} />
    </Main>
  );
}
