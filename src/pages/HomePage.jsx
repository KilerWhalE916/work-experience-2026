import styled from "styled-components";

const StudentPage = styled.main`
  min-height: 100vh;
`;

export function HomePage() {
  return <StudentPage aria-label="Student workspace" />;
}
