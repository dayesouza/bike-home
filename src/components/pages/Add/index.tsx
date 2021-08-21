import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Period } from "enums";
import RidesDataService from "services/RidesDataService";
import { Ride } from "types";

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

  const onCancel = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Container>
      <AddForm onSubmit={save}>
        <ButtonContainer className="d-flex">
          <ControlButton
            onClick={onCancel}
            className="w-100 mr-3"
            variant="secondary"
            type="button"
          >
            Cancel
          </ControlButton>
          <Button className="w-100" variant="primary" type="submit">
            Save
          </Button>
        </ButtonContainer>
        <FormContainer>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Distance (Km)</Form.Label>
            <Form.Control
              onChange={(event) => setDistance(+event.target.value)}
              type="number"
              placeholder="Enter the distance in km"
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Time (minutes)</Form.Label>
            <Form.Control
              onChange={(event) => setTime(+event.target.value)}
              type="text"
              autoComplete="off"
              placeholder="Enter the time in minutes (0:25)"
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
      </AddForm>
    </Container>
  );
});

const Container = styled.div`
  height: 100%;
`;

const FormContainer = styled.div``;

const ButtonContainer = styled.div`
  margin-bottom: 16px;
`;

const ControlButton = styled(Button)`
  margin-right: 8px;
`;

const AddForm = styled(Form)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
