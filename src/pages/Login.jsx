import { Main, PageHeader, Input, Button } from "../components";
const blue500 = "#344d8b";

export function Login() {
  return (
    <Main aria-label="Student workspace">
      <div
        style={{ background: "#d5dcef", padding: "20px", borderRadius: "20px" }}
      >
        <PageHeader
          eyebrow=""
          title="Login to Best Bank"
          description="Enter your details..."
        />

        <Input label="Name: " placeholder="Enter name" type="text" />
        <br />
        <Input
          label="Password: "
          placeholder="Enter password"
          type="password"
        />
        <br />
        <Button
          variant="primary"
          children="Submit"
          onClick={()=>{window.location.href="/"}}
          style={{ width: "100%", textAlign: "left", marginBottom: "50px" }}
        />
        <br />
      </div>
    </Main>
  );
}
