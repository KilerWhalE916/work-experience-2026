import styled from "styled-components";

const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.space.lg};
  align-items: center;
  padding: ${({ theme }) => theme.space.lg} clamp(1rem, 4vw, 3rem);
  color: ${({ theme }) => theme.colors.muted};
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xs};
`;

const BankName = styled.strong`
  color: ${({ theme }) => theme.colors.green900};
`;

const Tagline = styled.span`
  line-height: 1.5;
`;

const LinkList = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.md};
  flex-wrap: wrap;

  @media (max-width: 720px) {
    justify-content: flex-start;
  }
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.green700};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export function AppFooter({
  bankName,
  tagline = "Fictional banking project for work experience students.",
  links = [],
}) {
  return (
    <Wrapper>
      <Brand>
        <BankName>{bankName}</BankName>
        <Tagline>{tagline}</Tagline>
      </Brand>

      {links.length > 0 && (
        <LinkList aria-label="Footer links">
          {links.map((link) => (
            <FooterLink key={link.label} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </LinkList>
      )}
    </Wrapper>
  );
}
