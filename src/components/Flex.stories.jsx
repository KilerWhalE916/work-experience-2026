import { Card } from "./Card";
import { HorizontalFlex, VerticalFlex } from "./Flex";

export default {
  title: "Layout/Flex",
  parameters: {
    docs: {
      description: {
        component:
          "Reusable horizontal and vertical flex boxes for arranging components without writing layout CSS first.",
      },
    },
  },
};

export const Horizontal = {
  render: () => (
    <HorizontalFlex align="stretch">
      <Card>First item</Card>
      <Card>Second item</Card>
      <Card>Third item</Card>
    </HorizontalFlex>
  ),
};

export const Vertical = {
  render: () => (
    <VerticalFlex>
      <Card>First item</Card>
      <Card>Second item</Card>
      <Card>Third item</Card>
    </VerticalFlex>
  ),
};
