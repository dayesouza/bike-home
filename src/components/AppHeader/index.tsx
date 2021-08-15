import React, { memo } from "react";
import styled from "styled-components";

export const AppHeader: React.FC = memo(function Appheader() {
  return (
    <Nav>
      <Title>Bike Home</Title>
    </Nav>
  );
});

const Nav = styled.nav``;
const Title = styled.h1``;
