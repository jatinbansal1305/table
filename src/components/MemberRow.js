import React from "react";
import { calculateAge } from "../utils/ageCalculator";

function MemberRow({ index, member }) {
  const {
    firstname,
    lastname,
    email,
    mobile,
    city,
    state,
    pincode,
    dateOfBirth,
    gender,
  } = member;
  const fullName = `${firstname} ${lastname}`;
  const location = `${city}, ${state}, ${pincode}`;
  const age = calculateAge(dateOfBirth);

  return (
    <tr
      style={{
        ...styles.tableRow,
        ...(index % 2 === 0 ? styles.zebraStriped : {}),
      }}
    >
      <td style={{...styles.text, ...(index % 2 === 0 ? styles.bold : {}), }}>{fullName}</td>
      <td style={{...styles.text, ...(index % 2 === 0 ? styles.bold : {}), }}>{email}</td>
      <td style={{...styles.text, ...(index % 2 === 0 ? styles.bold : {}), }}>{mobile}</td>
      <td style={{...styles.text, ...(index % 2 === 0 ? styles.bold : {}), }}>{location}</td>
      <td style={{...styles.text, ...(index % 2 === 0 ? styles.bold : {}), }}>{age}</td>
      <td style={{...styles.text, ...(index % 2 === 0 ? styles.bold : {}), }}>{gender}</td>
    </tr>
  );
}

export default MemberRow;

const styles = {
  tableRow: {
    padding: "1rem",
    borderBottom: "1px solid #eee",
    height: '2rem',
    borderRadius: '0.5rem',
  },
  zebraStriped: {
    backgroundColor: "#F4F4F4",
  },
  text: {
    color: '#6C6C6C',
  },
  bold : {
    color :'#14213D',
    font : 'bold',
  }
};
