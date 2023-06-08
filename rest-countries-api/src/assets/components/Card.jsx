import { useState } from "react";
import CardDetails from "./CardDetails";

export default function Card({ country }) {
  const [isShowingDetails, setIsShowingDetails] = useState(false);

  const handleClick = () => {
    setIsShowingDetails((prevState) => !prevState);
  };
  return (
    <div className="px-14 max-w-m" onClick={() => handleClick()}>
      {isShowingDetails ? (
        <CardDetails country={country} />
      ) : (
        <div className=" shadow rounded mb-8 bg-white dark:bg-dark-blue dark:text-lightmode-bg">
          <img className="rounded w-full h-36" src={country.flags.png} alt="" />
          <div className="px-6 py-8 ">
            <h1 className="text-lg mb-4 font-bold ">{country.name.common}</h1>
            <p className="text-sm">
              <span className="font-semibold">Population:</span>{" "}
              {country.population}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
