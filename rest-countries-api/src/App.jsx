import { useEffect, useState, useMemo } from "react";
import Header from "./assets/components/Header";
import SearchBar from "./assets/components/SearchBar";
import Filter from "./assets/components/Filter";
import Card from "./assets/components/Card";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isDark, setIsDark] = useState(false);

  console.log(data);
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/${
        nameSearch ? "name/" + nameSearch : "all"
      }`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not 2xx response");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setFilteredData(
          data.filter((country) => country.region === selectedRegion)
        );
      })
      .catch((error) => console.log(error));
  }, [isSearch, selectedRegion, nameSearch]);

  console.log(filteredData, selectedRegion);

  const handleSelect = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleChange = (e) => {
    setNameSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearch((prevState) => !prevState);
    setSelectedRegion("");
  };

  const toggleDarkMode = () => {
    setIsDark((prevState) => !prevState);
  };

  const cardsArr = data.map((country, index) => {
    return <Card key={index} country={country} />;
  });

  const filteredCardsArr = useMemo(() => {
    return filteredData.map((country, index) => (
      <Card key={index} country={country} />
    ));
  }, [filteredData]);

  return (
    <div className="dark:bg-darkmode-bg">
      <Header toggleDarkMode={toggleDarkMode} />
      <SearchBar
        handleSubmit={handleSubmit}
        nameSearch={nameSearch}
        handleChange={handleChange}
      />
      <Filter handleSelect={handleSelect} selectedRegion={selectedRegion} />
      {selectedRegion ? (
        <div>{filteredCardsArr}</div>
      ) : (
        <div className="lg:grid lg:grid-rows-2 lg:grid-cols-4 lg:gap-2">
          {cardsArr}
        </div>
      )}
    </div>
  );
}

export default App;
