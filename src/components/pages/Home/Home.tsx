import React from "react";
import { memo } from "react";
import styled from "styled-components";
import { List } from "../../List/List";

export const Home: React.FC = memo(function Home() {
  return (
    <Container>
      <PageTitle>Home</PageTitle>
      <List></List>
    </Container>
  );
});

const Container = styled.div``;
const PageTitle = styled.h1``;
