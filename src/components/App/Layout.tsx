import React from "react";
import styled from "styled-components";
import { AppHeader } from "../AppHeader";
import { Footer } from "../Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Main>
        <AppHeader></AppHeader>
        {children}
      </Main>
      <Footer />
    </Container>
  );
};

const Main = styled.main``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-right: 15px;
  padding-left: 15px;
`;
