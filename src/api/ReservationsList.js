import React, { useEffect, useState } from "react";
import { getReservations } from "./ReservationsApi";
import Reservations from "../components/Reservations/Reservations";

const ReservationsList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getReservations();
      return setReservations(response?.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Reservations reservations={reservations} />
    </div>
  );
};
export default ReservationsList;
