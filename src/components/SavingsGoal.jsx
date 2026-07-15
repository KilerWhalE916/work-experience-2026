import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-weight: 800;
`;

const Track = styled.div`
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.border};
`;

const Fill = styled.div`
  width: ${({ percent }) => percent}%;
  height: 100%;
  background: ${({ bg }) => bg};
`;

const HelpText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
`;

export function SavingsGoal({ name, saved, target,background }) {
  const percent = Math.min(Math.round((saved / target) * 100), 100);

  return (
    <Wrapper>
      <TopLine>
        <span>{name}</span>
        <span>{percent}%</span>
      </TopLine>
      <Track aria-label={`${name} savings progress`}>
        <Fill percent={percent} bg={background}/>
      </Track>
      <HelpText>
        £{saved} saved of £{target}
      </HelpText>
    </Wrapper>
  );
}
