import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import membersData from "./data/membersData";
import Filter from "./components/Filter";
import MemberList from "./components/MemberList";

function App() {
  const [filteredMembers, setFilteredMembers] = useState(membersData);

  const uniqueCities = [...new Set(membersData.map((member) => member.city))];

  const handleSearch = (searchParams) => {
    const { name, city, gender } = searchParams;
    const filtered = membersData.filter((member) => {
      return (
        (!name ||
          member.firstname.toLowerCase().includes(name.toLowerCase())) &&
        (!city || member.city.toLowerCase() === city.toLowerCase()) &&
        (!gender || member.gender === gender)
      );
    });
    setFilteredMembers(filtered);
  };
  return (
    <div style={styles.app}>
      <Filter onSearch={handleSearch} cities={uniqueCities} />
      <MemberList members={filteredMembers} />
    </div>
  );
}

export default App;

const styles = {
  app: {
    padding: "1rem",
    marginTop: "2rem",
  },
};
