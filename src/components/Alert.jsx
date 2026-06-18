import { AlertCircle, CheckCircle2 } from "lucide-react";
import styled from "styled-components";

const AlertBox = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 4px solid
    ${({ tone, theme }) =>
      tone === "warning" ? theme.colors.yellow500 : theme.colors.green500};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1rem;
  background: white;
`;

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
`;

export function Alert({ tone = "success", children }) {
  const Icon = tone === "warning" ? AlertCircle : CheckCircle2;

  return (
    <AlertBox tone={tone}>
      <Icon size={22} />
      <Text>{children}</Text>
    </AlertBox>
  );
}
