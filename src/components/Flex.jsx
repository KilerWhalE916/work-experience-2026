import styled from "styled-components";

const flexGap = ({ $gap, theme }) => theme.space[$gap] ?? $gap;

const FlexBase = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  gap: ${flexGap};
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};
`;

export function HorizontalFlex({
  align = "center",
  children,
  gap = "md",
  justify = "flex-start",
  wrap = true,
  ...props
}) {
  return (
    <FlexBase
      $align={align}
      $direction="row"
      $gap={gap}
      $justify={justify}
      $wrap={wrap}
      {...props}
    >
      {children}
    </FlexBase>
  );
}

export function VerticalFlex({
  align = "stretch",
  children,
  gap = "md",
  justify = "flex-start",
  wrap = false,
  ...props
}) {
  return (
    <FlexBase
      $align={align}
      $direction="column"
      $gap={gap}
      $justify={justify}
      $wrap={wrap}
      {...props}
    >
      {children}
    </FlexBase>
  );
}
