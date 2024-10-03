import React, { useEffect, useState } from "react";

const Filter = ({ onSearch, cities }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch({ name, city, gender });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [name, city, gender, onSearch]);

  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        style={styles.input}
        placeholder="Search by name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select style={styles.select} value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select City</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select style={styles.select} value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default Filter;

const styles = {
  searchBar: {
    display: "flex",
    gap: "0.5rem",
    padding: "1rem",
    backgroundColor: "#f4f4f4",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
  },
  input: {
    padding: "0.5rem",
    borderRadius: "0.25rem",
    border: "1px solid #ccc",
    width: "12rem",
  },
  select: {
    padding: "0.5rem",
    borderRadius: "0.25rem",
    border: "1px solid #ccc",
    width: "12rem",
  },
};
