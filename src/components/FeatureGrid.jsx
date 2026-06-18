import styled from "styled-components";
import { Card } from "./Card";

const Section = styled.section`
  display: grid;
  gap: 1rem;
  padding: 0 clamp(1rem, 4vw, 3rem) clamp(2rem, 5vw, 4rem);
`;

const Heading = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.green900};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`;

export function FeatureGrid({ features }) {
  return (
    <Section>
      <Heading>Pick the features your bank should offer</Heading>
      <Grid>
        {features.map((feature) => (
          <Card key={feature.title}>
            <h3>{feature.title}</h3>
            <Text>{feature.text}</Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
