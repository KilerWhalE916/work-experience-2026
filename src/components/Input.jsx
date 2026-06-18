import styled from "styled-components";

const Field = styled.label`
  display: grid;
  gap: 0.35rem;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
  font-weight: 700;
`;

const StyledInput = styled.input`
  width: 100%;
  min-height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.7rem 0.8rem;
  color: ${({ theme }) => theme.colors.ink};
  background: white;
`;

export function Input({ label, ...props }) {
  return (
    <Field>
      {label}
      <StyledInput {...props} />
    </Field>
  );
}
