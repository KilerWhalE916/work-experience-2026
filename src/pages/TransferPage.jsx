import { Main,Navbar,TransferForm,TransactionList  } from "../components";
export function TransferPage() {
const data = [
  {"shop": "Bus","amount": "-£3.20","date": "Today","type": "Travel"},
  {"shop": "Takeaway","amount": "-£8.80","date": "Today","type": "Food"},
  {"shop": "Part-time Pay","amount": "+£120.00","date": "Yesterday","type": "Income"},
  {"shop": "Cinema","amount": "-9.99","date": "Tue","type": "Fun"}
];

 return (
 <Main aria-label="Student workspace">

<Navbar variant="primary" children={"Credit"}></Navbar>

<TransferForm variant="default" ></TransferForm>

<br />
      <TransactionList  transactions={data} />
    </Main>
  );
}

  