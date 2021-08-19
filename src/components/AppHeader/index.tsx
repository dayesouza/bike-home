import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useCallback } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCurrentUser, logout } from "../../services/UserService";
import { UserInfo } from "./UserInfo";

export const AppHeader: React.FC = memo(function Appheader() {
  const user = getCurrentUser();

  const logoff = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <>
      {user && (
        <Nav bg="dark" variant="dark">
          <LinkHome to="/">Bike Home</LinkHome>
          <UserInfo logoff={logoff} user={user} />
        </Nav>
      )}
    </>
  );
});

const LinkHome = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Nav = styled(Navbar)`
  display: flex;
  justify-content: space-between;
`;
