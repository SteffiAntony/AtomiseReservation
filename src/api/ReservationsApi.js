import axios from "axios";

const reservationsUrl =
  "https://bhn4wl5c31.execute-api.eu-west-1.amazonaws.com/test/reservations";

export const getReservations = async () => {
  return axios.get(reservationsUrl);
};
