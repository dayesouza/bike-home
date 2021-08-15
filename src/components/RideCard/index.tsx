import React, { memo, useMemo } from "react";
import styled from "styled-components";
import { Ride } from "../../types";

interface RideCard {
  ride: Ride;
}

export const RideCard: React.FC<RideCard> = memo(function RideCard({ ride }) {
  const duration = useMemo((): string => {
    const timeInMins = ride.time;
    var hours = Math.floor(timeInMins / 60);
    var minutes = timeInMins % 60;
    return `${hours}:${minutes.toString().padStart(2, "0")}`;
  }, [ride]);

  const avgSpeed = useMemo((): string => {
    const durationInHours = ride.time / 60;
    return (ride.distance / +durationInHours.toFixed(2)).toFixed(2);
  }, [ride]);

  return (
    <Card>
      <CardDetails>
        <CardInfo>
          <DetailNumber>{ride.distance} Km</DetailNumber>
          <DetailText>Distance</DetailText>
        </CardInfo>
        <Divider></Divider>
        <CardInfo>
          <DetailNumber>{avgSpeed} Km/h</DetailNumber>
          <DetailText>Avg Speed</DetailText>
        </CardInfo>
        <Divider></Divider>

        <CardInfo>
          <DetailNumber>{duration}</DetailNumber>
          <DetailText>Duration</DetailText>
        </CardInfo>
      </CardDetails>
    </Card>
  );
});

const Card = styled.div`
  background-color: white;
  border-radius: 16px;
  color: black;
  padding: 8px;
`;

const Divider = styled.div`
  border-right: 1px solid #929292;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailNumber = styled.span`
  font-size: 20px;
`;
const DetailText = styled.span`
  font-size: 16px;
  color: #929292;
`;

const CardInfo = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
