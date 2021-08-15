import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AppHeader } from "../AppHeader";
import { Footer } from "../Footer";
import { Home } from "../pages/Home/Home";

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Main>
        <AppHeader></AppHeader>
        <Home />
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

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: white;
    background-color: #212529;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
