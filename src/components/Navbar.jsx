import { Landmark } from "lucide-react";
import styled from "styled-components";
import { Button } from "./Button";

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

export function Navbar({ bankName, onDashboardClick }) {
  return (
    <Bar>
      <Brand>
        <Landmark onClick={()=>{window.location.href="/"}}size={24} />
        {bankName}
          <LinkText> Best Bank </LinkText>
      </Brand>
      <Links aria-label="Main navigation">
        <LinkText href="mortgagecalculator">Mortgage Calculator</LinkText>
        <LinkText href="spending">Spending</LinkText>
        <LinkText href="transfer">Transfer</LinkText>
        <LinkText href="credit-score">Credit Score</LinkText>
        <LinkText href="currency-conv-page">Converter</LinkText>
      </Links>
    </Bar>
  );
}
