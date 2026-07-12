import { Card } from "./Card";
import { Main } from "./Main";

export default {
  title: "Layout/Main",
  component: Main,
  parameters: {
    docs: {
      description: {
        component:
          "A centered page layout component. Put page sections inside Main when you want content to line up neatly.",
      },
    },
  },
};

export const Default = {
  render: () => (
    <Main>
      <Card>
        <h3>Centered content</h3>
        <p>Main keeps page content centered and gives it a readable width.</p>
      </Card>
    </Main>
  ),
};
