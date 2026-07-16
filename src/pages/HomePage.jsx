import { Main, Navbar, PageHeader,Hero } from "../components";
export function HomePage() {
  return (
    <Main aria-label="Student workspace">
      <Navbar variant="primary" children={"Credit"}></Navbar>
      <PageHeader title={"How are you doing today?"} description={"Best bank at your service"} />
      <br />
      <br />
      <br />
      <Hero  />  
    </Main>
  );
}
