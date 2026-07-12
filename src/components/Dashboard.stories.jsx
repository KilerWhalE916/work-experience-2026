import { Button } from "./Button";
import { Card } from "./Card";
import {
  CardTitle,
  Dashboard,
  DashboardGrid,
  DashboardHeader,
} from "./Dashboard";

export default {
  title: "Layout/Dashboard",
  component: Dashboard,
  parameters: {
    docs: {
      description: {
        component:
          "Lightweight dashboard layout pieces. Students choose which cards, forms, charts, and data to place inside.",
      },
    },
  },
};

export const Default = {
  render: () => (
    <Dashboard>
      <DashboardHeader
        title="Dashboard title"
        action={<Button variant="ghost">Action</Button>}
      >
        <p>Add a short dashboard introduction here.</p>
      </DashboardHeader>
      <DashboardGrid>
        <Card>
          <CardTitle>First block</CardTitle>
          <p>Place any component here.</p>
        </Card>
        <Card>
          <CardTitle>Second block</CardTitle>
          <p>Place any component here.</p>
        </Card>
        <Card>
          <CardTitle>Third block</CardTitle>
          <p>Place any component here.</p>
        </Card>
      </DashboardGrid>
    </Dashboard>
  ),
};
