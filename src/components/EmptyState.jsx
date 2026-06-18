import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  gap: ${({ theme }) => theme.space.md};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.xl};
  color: ${({ theme }) => theme.colors.muted};
  background: ${({ theme }) => theme.colors.surface};
  text-align: center;
`;

const Icon = styled.div`
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.green900};
  background: ${({ theme }) => theme.colors.green100};
  font-size: 1.5rem;
  font-weight: 800;
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.green900};
  font-size: 1.4rem;
`;

const Description = styled.p`
  max-width: 520px;
  margin: 0;
  line-height: 1.6;
`;

const ActionArea = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
  flex-wrap: wrap;
`;

export function EmptyState({
  icon = "!",
  title,
  description,
  action,
}) {
  return (
    <Wrapper>
      <Icon aria-hidden="true">{icon}</Icon>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {action && <ActionArea>{action}</ActionArea>}
    </Wrapper>
  );
}
