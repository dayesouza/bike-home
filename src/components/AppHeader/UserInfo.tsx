import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { firebase } from "resources/firebase";
import styled from "styled-components";

interface UserInfoProps {
  user: firebase.User;
  logoff: () => void;
}

export const UserInfo: React.FC<UserInfoProps> = memo(function UserInfo({
  user,
  logoff,
}) {
  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id={`popover-positioned`}>
          <Popover.Body>
            <UserContainer>
              <Greetings>Hi, {user.displayName}!</Greetings>
              <Button onClick={logoff}>Logoff</Button>
            </UserContainer>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="dark">
        <FontAwesomeIcon icon="user" />
      </Button>
    </OverlayTrigger>
  );
});

const Greetings = styled.strong``;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
