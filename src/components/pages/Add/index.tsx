import React, { useCallback, useState } from "react";
import { memo } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { ButtonGroup, Form } from "react-bootstrap";
import RidesDataService from "../../../services/RidesDataService";
import { Ride } from "../../../types";
import { useHistory } from "react-router-dom";
import { Period } from "../../../enums";

const periodOptions = [
  { name: "Morning", value: Period.Morning },
  { name: "Afternoon", value: Period.Afternoon },
  { name: "Night", value: Period.Night },
];

export const Add: React.FC = memo(function Add() {
  const [distance, setDistance] = useState<number>();
  const [time, setTime] = useState<number>();
  const [date, setDate] = useState<Date>(new Date());
  const [period, setPeriod] = useState<Period>();
  const history = useHistory();

  const save = useCallback(
    (e) => {
      e.preventDefault();
      const ride = {
        time,
        distance,
        period,
        date: new Date(date),
      } as Ride;
      RidesDataService.create(ride).then(() => history.push("/"));
    },
    [time, distance, date, history, period]
  );

  return (
    <Container>
      <AddForm onSubmit={save}>
        <FormContainer>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Distance</Form.Label>
            <Form.Control
              onChange={(event) => setDistance(+event.target.value)}
              type="text"
              placeholder="Enter the distance in km"
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Time</Form.Label>
            <Form.Control
              onChange={(event) => setTime(+event.target.value)}
              type="text"
              autoComplete="off"
              placeholder="Enter the time in minutes"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date</Form.Label>
            <Form.Control
              onChange={(event) => setDate(new Date(event.target.value))}
              type="date"
              autoComplete="off"
              placeholder="Enter the date"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Period</Form.Label>
            <br />
            <ButtonGroup className="w-100">
              {periodOptions.map((p) => (
                <Button
                  key={p.value}
                  onClick={() => setPeriod(p.value)}
                  active={period === p.value}
                  variant="outline-primary"
                >
                  {p.name}
                </Button>
              ))}
            </ButtonGroup>
          </Form.Group>
        </FormContainer>
        <ButtonContainer className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Save
          </Button>
        </ButtonContainer>
      </AddForm>
    </Container>
  );
});

const Container = styled.div`
  height: 100%;
`;

const FormContainer = styled.div``;

const ButtonContainer = styled.div``;

const AddForm = styled(Form)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
