import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${({ theme }) => theme.space.md};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const Text = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xs};
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.green900};
  font-size: 1.35rem;
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.5;
`;

const ActionArea = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  flex-wrap: wrap;
`;

export function SectionHeader({ title, description, action }) {
  return (
    <Wrapper>
      <Text>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Text>

      {action && <ActionArea>{action}</ActionArea>}
    </Wrapper>
  );
}
