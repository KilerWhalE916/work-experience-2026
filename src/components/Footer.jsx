import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.5rem clamp(1rem, 4vw, 3rem);
  color: ${({ theme }) => theme.colors.muted};
  background: white;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export function Footer({ bankName }) {
  return (
    <Wrapper>
      <span>{bankName}</span>
      <span>Fictional banking project for work experience students.</span>
    </Wrapper>
  );
}
