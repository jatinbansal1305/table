import React from "react";
import MemberRow from "./MemberRow";

function MemberList({ members }) {
  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHead}>Name</th>
            <th style={styles.tableHead}>Email</th>
            <th style={styles.tableHead}>Mobile</th>
            <th style={styles.tableHead}>Location</th>
            <th style={styles.tableHead}>Age</th>
            <th style={styles.tableHead}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <MemberRow index={index} member={member} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MemberList;

const styles = {
  tableContainer: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#fff",
    borderRadius: '0.5rem',
  },
  tableHead: {
    backgroundColor: "#f4f4f4",
    textAlign: "left",
    padding: "1rem",
    borderBottom: "1px solid #ccc",
    height: '2rem',
    borderRadius: '0.5rem',
    color: '#9C9C9C',
  },
};
