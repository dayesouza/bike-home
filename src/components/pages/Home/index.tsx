import React, { useMemo } from "react";
import { memo } from "react";
import styled from "styled-components";
import { Greetings } from "../../../resources/greeting";
import { List } from "../../List/List";

export const Home: React.FC = memo(function Home() {
  return (
    <Container>
      <PageTitle>{Greetings()}, Day!</PageTitle>
      <List></List>
    </Container>
  );
});

const Container = styled.div``;
const PageTitle = styled.h3``;
