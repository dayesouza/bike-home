import { List } from "components/List/List";
import React, { memo } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Greetings } from "resources/greeting";
import styled from "styled-components";

export const Home: React.FC = memo(function Home() {
  return (
    <Container>
      <PageTitle>{Greetings()}, Day!</PageTitle>
      <Link to="/add">
        <Button className="w-100 mb-3">Add new</Button>
      </Link>
      <List></List>
    </Container>
  );
});

const Container = styled.div``;
const PageTitle = styled.h3``;
