import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Ride } from "../../types";
import RidesDataService from "../resources/RidesDataService";

export const List: React.FC = () => {
  var [ridesList, setRidesList] = useState<Ride[]>([]);

  const onDataChange = (items: any) => {
    let rides: Ride[] = [];
    console.log(items);

    items.forEach((item: any) => {
      let id = item.id;
      let data = item.data();
      rides.push({
        id: id,
        distance: data.distance,
        time: data.time,
        date: data.date,
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
    <Container className="card">
      <table className="table table-bordered heading-hvr">
        <thead>
          <tr>
            <th className="active">Distance</th>
            <th>Time</th>
            <th>Date</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {ridesList.map((ride: Ride) => (
            <tr key={ride.id}>
              <td>{ride.distance}</td>
              <td>{ride.time}</td>
              <td>{ride.date}</td>

              <td className="case-record">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    console.log(ride.id);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                {" "}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    onDelete(ride.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

const Container = styled.div``;
