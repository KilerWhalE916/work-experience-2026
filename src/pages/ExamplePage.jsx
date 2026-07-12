import styled from "styled-components";
import {
  Dashboard,
  FeatureGrid,
  Footer,
  Hero,
  Navbar,
} from "../components";
import { features } from "../data/bankingData";

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
      <Dashboard />
      <Footer bankName={bankName} />
    </Page>
  );
}
