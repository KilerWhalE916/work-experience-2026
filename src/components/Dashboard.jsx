import styled from "styled-components";
import { VerticalFlex } from "./Flex";

export const Dashboard = styled(VerticalFlex).attrs({
  as: "section",
  gap: "lg",
})``;

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

export function DashboardHeader({ action, children, title }) {
  return (
    <Header>
      <div>
        <Title>{title}</Title>
        {children}
      </div>
      {action}
    </Header>
  );
}

export { CardTitle, FeatureGrid as DashboardFeatureGrid, Grid as DashboardGrid };
