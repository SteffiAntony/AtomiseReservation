import React, { useState } from "react";
import "./Reservations.css";
import EditButton from "../../images/EditButton";

const Reservations = ({ reservations }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const handleExpand = (rowId) => {
    setExpandedRow((prevExpandedRow) =>
      prevExpandedRow === rowId ? null : rowId
    );
  };
  return (
    <div className="table-border">
      <h1 className="Reservations-caption">Reservations</h1>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>From</th>
            <th>To</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reservations?.map((item) => {
            return (
              <>
                <tr className="border-bottom" key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.description}</td>
                  <td>{item.fromDate}</td>
                  <td>{item.toDate}</td>
                  <td>
                    <button className="edit-btn">
                      <EditButton />
                    </button>
                  </td>
                  <td>
                    <button
                      class="collapsible"
                      onClick={() => handleExpand(item.id)}
                    >
                      {expandedRow === item.id ? "View less" : "View more"}
                      {expandedRow === item.id ? (
                        <i className="bi bi-arrow-right-circle arrow-icon"></i>
                      ) : (
                        <i className="bi bi-arrow-right-circle arrow-icon"></i>
                      )}
                    </button>
                  </td>
                </tr>
                <tr className="expandaded-data">
                  {expandedRow === item.id && (
                    <div>
                      <table className="expandaded-table">
                        <tr>
                          <th className="expandaded-caption ">
                            Reservation Details
                          </th>
                        </tr>
                        <tr>
                          <td>Room type: {item.roomType}</td>
                          <td>Nr of adults:{item.nrAdults}</td>
                          <td>Price:{item.price}</td>
                        </tr>
                        <tr>
                          <td>Rate code:{item.rateCode}</td>
                          <td>Nr of children:{item.nrChildren}</td>
                          <td>Currency:{item.currency}</td>
                        </tr>
                      </table>
                    </div>
                  )}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Reservations;
