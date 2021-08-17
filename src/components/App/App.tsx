import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Home } from "../pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Login } from "../pages/Login";
import { auth, firebase } from "../../resources/firebase";
import { createUserProfileInFirebase } from "../../services/UserService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const App = () => {
  const [user, setUser] = useState<firebase.User | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileInFirebase(user);
        userRef?.onSnapshot(async (snapshot) => {
          setUser(snapshot.data() as firebase.User);
          setLoading(false);
        });
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  return (
    <Router>
      <GlobalStyle />
      {loading ? (
        <Loading>
          <FontAwesomeIcon className="fa-spin" icon="circle-notch" />
        </Loading>
      ) : user ? (
        <Route path="/">
          <Layout>
            <Home></Home>
          </Layout>
        </Route>
      ) : (
        <Route path="/">
          <Layout>
            <Login></Login>
          </Layout>
        </Route>
      )}
    </Router>
  );
};

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  font-size: 15vh;
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
