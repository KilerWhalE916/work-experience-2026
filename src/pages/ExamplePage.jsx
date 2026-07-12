import styled from "styled-components";
import {
  AccountCard,
  Alert,
  Button,
  Card,
  CardTitle,
  Dashboard,
  DashboardFeatureGrid,
  DashboardGrid,
  DashboardHeader,
  FeatureGrid,
  Footer,
  Hero,
  Main,
  Navbar,
  SavingsGoal,
  SpendingChart,
  TransactionList,
  TransferForm,
  VerticalFlex,
} from "../components";
import {
  accounts,
  features,
  savingsGoals,
  spending,
  transactions,
} from "../data/bankingData";

const Page = styled.div`
  min-height: 100vh;
`;

export function ExamplePage() {
  const bankName = "Example Bank";

  function jumpToDashboard() {
    document.getElementById("accounts")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Page>
      <Navbar bankName={bankName} onDashboardClick={jumpToDashboard} />
      <Hero bankName={bankName} onStart={jumpToDashboard} />
      <FeatureGrid features={features} />
      <Main>
        <Dashboard id="accounts">
          <DashboardHeader
            title="Good afternoon, Sam"
            action={<Button variant="ghost">Freeze Card</Button>}
          >
            <p>Here is your fictional money, looking surprisingly organised.</p>
          </DashboardHeader>

          <DashboardGrid>
            {accounts.map((account) => (
              <AccountCard key={account.number} {...account} />
            ))}
          </DashboardGrid>

          <Alert>
            Your savings pot is close to its goal. Add a custom student message
            here.
          </Alert>

          <DashboardFeatureGrid>
            <Card id="transfer">
              <CardTitle>Make a Transfer</CardTitle>
              <TransferForm />
            </Card>
            <Card id="spending">
              <CardTitle>Spending Summary</CardTitle>
              <SpendingChart items={spending} />
            </Card>
          </DashboardFeatureGrid>

          <Card>
            <CardTitle>Savings Goals</CardTitle>
            <VerticalFlex>
              {savingsGoals.map((goal) => (
                <SavingsGoal key={goal.name} {...goal} />
              ))}
            </VerticalFlex>
          </Card>

          <Card elevated>
            <CardTitle>Recent Transactions</CardTitle>
            <TransactionList transactions={transactions} />
          </Card>
        </Dashboard>
      </Main>
      <Footer bankName={bankName} />
    </Page>
  );
}
