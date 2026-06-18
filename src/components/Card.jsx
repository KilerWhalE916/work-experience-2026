import styled from "styled-components";

export const Card = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ elevated, theme }) => (elevated ? theme.shadow : "none")};
`;
