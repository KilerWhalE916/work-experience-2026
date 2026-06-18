import styled from "styled-components";
import { Button } from "./Button";
import { Input } from "./Input";

const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export function TransferForm() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Nice! In the real world this would need security checks.");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input label="Send to" placeholder="Alex Green" />
      <Split>
        <Input label="Amount" placeholder="£25.00" />
        <Input label="Reference" placeholder="Lunch" />
      </Split>
      <Button type="submit">Preview Transfer</Button>
    </Form>
  );
}
