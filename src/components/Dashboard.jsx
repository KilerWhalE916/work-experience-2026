import styled from "styled-components";
import {
  accounts,
  savingsGoals,
  spending,
  transactions,
} from "../data/bankingData";
import { AccountCard } from "./AccountCard";
import { Alert } from "./Alert";
import { Button } from "./Button";
import { Card } from "./Card";
import { SpendingChart } from "./SpendingChart";
import { SavingsGoal } from "./SavingsGoal";
import { TransactionList } from "./TransactionList";
import { TransferForm } from "./TransferForm";

const Shell = styled.main`
  display: grid;
  gap: 1.5rem;
  padding: clamp(1rem, 4vw, 3rem);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.green900};
  font-size: clamp(2rem, 4vw, 3rem);
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem;
`;

export function Dashboard() {
  return (
    <Shell id="accounts">
      <Header>
        <div>
          <Title>Good afternoon, Sam</Title>
          <p>Here is your fictional money, looking surprisingly organised.</p>
        </div>
        <Button variant="ghost">Freeze Card</Button>
      </Header>

      <Grid>
        {accounts.map((account) => (
          <AccountCard key={account.number} {...account} />
        ))}
      </Grid>

      <Alert>
        Your savings pot is close to its goal. Add a custom student message here.
      </Alert>

      <FeatureGrid>
        <Card id="transfer">
          <CardTitle>Make a Transfer</CardTitle>
          <TransferForm />
        </Card>
        <Card id="spending">
          <CardTitle>Spending Summary</CardTitle>
          <SpendingChart items={spending} />
        </Card>
      </FeatureGrid>

      <Card>
        <CardTitle>Savings Goals</CardTitle>
        <FeatureGrid>
          {savingsGoals.map((goal) => (
            <SavingsGoal key={goal.name} {...goal} />
          ))}
        </FeatureGrid>
      </Card>

      <Card elevated>
        <CardTitle>Recent Transactions</CardTitle>
        <TransactionList transactions={transactions} />
      </Card>
    </Shell>
  );
}
