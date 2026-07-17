import {
  Main,
  PageHeader,
  Input,
  Button,
  Navbar,
  StatCard,
  SpendingChart,
  Alert
} from "../components";
import { use, useState } from "react";
const blue500 = "#344d8b";

export function CreditScore() {
  const [score, setScore] = useState(800);
  const commentS = {
    background: "#d5dcef",
    padding: "20px",
    borderRadius: "20px",
  };
  function handleChange(e) {
    setScore(e.target.value);
  }
  return (
    <Main aria-label="Student workspace">
      <Navbar />
      <Input
        label="Enter Credit Score: "
        type="number"
        placeholder="0-850"
        onChange={handleChange}
        value={score}
      />
      <br />
      <br />
      <StatCard label="Credit Score: " value={`${score}/850`} elevated={true} />

      {score > 800 && score <= 850 && (
        <h2 style={commentS}>Your credit score is excellent💚</h2>
      )}
      {score > 740 && score <= 800 && (
        <h2 style={commentS}>Your credit score is very good🟢</h2>
      )}
      {score > 670 && score <= 740 && (
        <h2 style={commentS}>Your credit score is Good🟡</h2>
      )}
      {score > 580 && score <= 670 && (
        <h2 style={commentS}>Your credit score is Fair🟠</h2>
      )}
      {score > 300 && score <= 580 && (
        <h2 style={commentS}>Your credit score is poor🔴</h2>
      )}
      {score > -1 && score <= 300 && (
        <h2 style={commentS}>Your credit score is very poor 😡</h2>
      )}
       {(score < 0 || score > 850) && (
        <h2 style={commentS}>Invalid Credit Score</h2>
      )}
      <SpendingChart
        items={[
          {
            value: Math.round((score * 100) / 850),
            color: blue500,
            label: "Your credit score",
          },
        ]}
      />
      <br />
      <h3>Credit Info</h3>
      <Alert>
        Your credit score is based on information from your credit history and
        is updated regularly. A higher score may improve your chances of
        qualifying for loans, credit cards, and favorable interest rates.
      </Alert>
    </Main>
  );
}
