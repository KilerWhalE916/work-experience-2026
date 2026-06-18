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
        <Landmark size={24} />
        {bankName}
      </Brand>
      <Links aria-label="Main navigation">
        <LinkText href="#accounts">Accounts</LinkText>
        <LinkText href="#spending">Spending</LinkText>
        <LinkText href="#transfer">Transfer</LinkText>
      </Links>
      <Button variant="secondary" onClick={onDashboardClick}>
        Dashboard
      </Button>
    </Bar>
  );
}
