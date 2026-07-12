import styled from "styled-components";

const StyledMain = styled.main`
  width: min(100% - 2rem, ${({ $maxWidth }) => $maxWidth});
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.xl} 0;
`;

export function Main({ children, maxWidth = "1120px", ...props }) {
  return (
    <StyledMain $maxWidth={maxWidth} {...props}>
      {children}
    </StyledMain>
  );
}
