import { Main,Button,PageHeader  } from "../components";
export function TransferPage() {

  return <Main aria-label="Student workspace">
<Button onClick={()=>{window.location.href="/transfer2"}} children={"Transfer"}></Button>

<Button onClick={()=>{window.location.href="/history"}} children={"History"}></Button>

<PageHeader title={"Find out where your money goes"}/>
  </Main>;

} 