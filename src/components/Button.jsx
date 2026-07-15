import styled, { css } from "styled-components";

const variants = {
  primary: css`
    color: white;
    background: ${({ theme }) => theme.colors.blue900};
    border-color: ${({ theme }) => theme.colors.blue900};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.green900};
    background: ${({ theme }) => theme.colors.green100};
    border-color: ${({ theme }) => theme.colors.green100};
  `,
  ghost: css`
    color: ${({ theme }) => theme.colors.green900};
    background: transparent;
    border-color: ${({ theme }) => theme.colors.border};
  `,
};

export const Button = styled.button`
  min-height: 42px;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.7rem 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease;

  ${({ variant = "primary" }) => variants[variant]}

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(8, 114, 79, 0.18);
  }
`;
