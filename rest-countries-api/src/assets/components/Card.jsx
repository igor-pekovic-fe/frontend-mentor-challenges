import { useState } from "react";
import CardDetails from "./CardDetails";

export default function Card({ country }) {
  const [isShowingDetails, setIsShowingDetails] = useState(false);

  const handleClick = () => {
    setIsShowingDetails((prevState) => !prevState);
  };

  return (
    <div className="px-14 lg:px-4">
      {isShowingDetails ? (
        <CardDetails country={country} handleClick={handleClick} />
      ) : (
        <div className=" shadow rounded mb-8 bg-white dark:bg-dark-blue dark:text-lightmode-bg">
          <img
            onClick={() => handleClick()}
            className="rounded max-w-m h-36"
            src={country.flags.png}
            alt=""
          />
          <div className="px-6 py-8 ">
            <h1 className="text-lg mb-4 font-bold ">{country.name.common}</h1>
            <p className="text-sm">
              <span className="font-semibold">Population: </span>
              {country.population.toLocaleString("en-US")}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Region: </span>
              {country.region}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Capital: </span>
              {country.capital}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
