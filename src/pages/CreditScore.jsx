import { Main, SpendingChart } from "../components";

export function CreditScore() {
  return (
    <Main aria-label="Student workspace">
      <SpendingChart 
        label="Other" 
        value={24} 
        color="#ec6253" 
      />
    </Main>
  );
}