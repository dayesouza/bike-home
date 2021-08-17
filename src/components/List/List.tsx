import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Ride } from "../../types";
import RidesDataService from "../../services/RidesDataService";
import { RideCard } from "../RideCard";

export const List: React.FC = () => {
  var [ridesList, setRidesList] = useState<Ride[]>([]);

  const onDataChange = (items: any) => {
    let rides: Ride[] = [];
    items.forEach((item: any) => {
      let data = item.data();
      rides.push({
        id: item.id,
        distance: data.distance,
        time: data.time,
        date: data.date.toDate(),
        user: data.user,
      });
    });
    setRidesList(rides);
  };

  useEffect(() => {
    const unsubscribe = RidesDataService.getAll().onSnapshot(onDataChange);
    return () => unsubscribe();
  }, []);

  const onDelete = (id: string) => {
    if (window.confirm("Are you sure to delete this record?")) {
      RidesDataService.delete(id);
    }
  };

  return (
    <Container>
      {ridesList.map((ride: Ride) => (
        <RideCard key={ride.id} ride={ride}></RideCard>
      ))}
    </Container>
  );
};

const Container = styled.div``;
