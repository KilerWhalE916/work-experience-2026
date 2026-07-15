import { Main, Button, HorizontalFlex, PageHeader } from "../components";

import { PiggyBank } from "lucide-react";


export function Intro() {



  return <Main aria-label="Student workspace">

   

    <HorizontalFlex>

      <PiggyBank size={60}/>

<p> Best Bank </p>

    <Button  children={"Sign in"}></Button>



    <Button variant="primary" children={"Sign up"}></Button>



</HorizontalFlex>

<PageHeader font="montenegrin-gothic-one-regular" title={"Welcome to Best Bank"}/>

  </Main>};