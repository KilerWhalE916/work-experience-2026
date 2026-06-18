import styled from "styled-components";

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  color: ${({ tone, theme }) =>
    tone === "blue" ? theme.colors.blue900 : theme.colors.green900};
  background: ${({ tone, theme }) =>
    tone === "blue" ? theme.colors.blue100 : theme.colors.green100};
  font-size: 0.8rem;
  font-weight: 700;
`;
