import {
  Main,
  PageHeader,
  Input,
  Button,
  StatCard,
  SpendingChart,
} from "../components";
import { use, useState } from "react";
const blue500 = "#344d8b";

export function CreditScore() {
  const [score, setScore] = useState(33);
  const commentS = {
    background: "#d5dcef",
    padding: "20px",
    borderRadius: "20px",
  };

  return (
    <Main aria-label="Student workspace">
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
      {score > 0 && score <= 300 && <h2 style={commentS}>Your credit score is very poor 😡</h2>}
      <SpendingChart
        items={[
          { value: Math.round((score * 100) / 850), color: blue500, label: "" },
        ]}
      />
    </Main>
  );
}
