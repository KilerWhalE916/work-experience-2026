import styled from "styled-components";
import { Button, Dashboard, Main } from "../components";

const StudentPage = styled.main`
  min-height: 100vh;
`;

export function HomePage() {
  return (
    <Main aria-label="Student workspace">
      <Button>Hello</Button>
      <Dashboard />
    </Main>
  );
}
