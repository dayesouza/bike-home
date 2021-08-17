import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";
import styled from "styled-components";

export const Footer: React.FC = memo(function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      {year} - Dayenne Souza
      <Link
        aria-label="My Github"
        rel="noopener noreferrer"
        href="https://github.com/dayesouza"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "github"]} />
      </Link>
      <Link
        aria-label="My Website"
        rel="noopener noreferrer"
        href="http://dayesouza.github.io/"
        target="_blank"
      >
        <FontAwesomeIcon icon="globe" />
      </Link>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0px;
`;

const Link = styled.a`
  color: white;
  margin: 0px 8px;
`;
