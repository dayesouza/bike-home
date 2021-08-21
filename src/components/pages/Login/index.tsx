import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase";
import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../../assets/white.png";

export const Login = () => {
  const signInWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        //handle success
      })
      .catch((error) => {
        //handle errors
      });
  };

  return (
    <PageContainer>
      <LoginContainer>
        <Title>Bike Home</Title>
        <LogoImage
          className="d-sm-block d-md-none"
          src={logo}
          alt="this is bike logo image"
        />
        <Button onClick={signInWithGoogle}>
          <Icon icon={["fab", "google"]} />
          Sign In with Google
        </Button>
      </LoginContainer>
    </PageContainer>
  );
};

const PageContainer = styled(Container)`
  height: 100%;
`;

const LoginContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 24px;
  text-align: center;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

const LogoImage = styled(Image)`
  width: 50vw;
  height: 50vw;
  margin: auto;
`;
