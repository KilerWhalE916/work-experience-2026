import styled from "styled-components";
import { Button } from "./Button";
import { Badge } from "./Badge";

const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;
  padding: clamp(2rem, 7vw, 5rem) clamp(1rem, 4vw, 3rem);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Copy = styled.div`
  display: grid;
  gap: 1rem;
`;

const Title = styled.h1`
  max-width: 12ch;
  margin: 0;
  color: ${({ theme }) => theme.colors.blue900};
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 0.95;
`;

const Text = styled.p`
  max-width: 58ch;
  margin: 0;
  color: ${({ theme }) => theme.colors.blue900};
  font-size: 1.1rem;
  line-height: 1.7;
`;

const Preview = styled.div`
  display: grid;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1rem;
  background: ${({ theme }) => theme.colors.blue900};
  color: white;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const MiniCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1rem;
  background: rgba(255, 255, 255, 0.08);
`;

const Balance = styled.strong`
  display: block;
  margin-top: 0.5rem;
  font-size: 2rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export function Hero({ bankName, onStart }) {
  return (
    <Section style={{padding:0}}>
      <Copy>
        <Badge tone="blue" >Student-built banking </Badge>
        <Title>{bankName}</Title>
        <Text>
          A fictional bank website made from reusable React components. Select
          the various page options on the navbar to explore our website!
        </Text>
      </Copy>
      <Preview aria-label="Banking app preview">
        <MiniCard>
          Everyday Account
          <Balance>£1,284.20</Balance>
        </MiniCard>
        <MiniCard>Transfer ready: Sam's Savings</MiniCard>
        <MiniCard>Spending this month: Food, Travel, Fun</MiniCard>
      </Preview>
    </Section>
  );
}
