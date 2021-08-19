import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { AppHeader } from "../AppHeader";
import { Footer } from "../Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <MinContainer fluid>
      <Main>
        <AppHeader></AppHeader>
        {children}
      </Main>
      <Footer />
    </MinContainer>
  );
};

const Main = styled.main`
  height: 90%;
`;

const MinContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-right: 15px;
  padding-left: 15px;
`;
