export default function CardDetails({ country, handleClick }) {
  return (
    <div className="shadow rounded mb-8">
      <img
        onClick={() => handleClick()}
        className="rounded w-full h-36"
        src={country.flags.png}
        alt=""
      />
      <div className="px-6 py-8 dark:bg-dark-blue dark:text-lightmode-bg">
        <h1 className="text-lg my-4 font-bold">{country.name.common}</h1>
        <p className="text-sm">
          <span className="font-semibold">Official Name:</span>{" "}
          {country.name.official}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Population:</span>{" "}
          {country.population.toLocaleString("en-US")}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Region:</span> {country.region}
        </p>
        <p className="text-sm">
          <span className="font-semibold">SubRegion:</span> {country.subregion}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Capital:</span> {country.capital}
        </p>
        <br />
        <p className="text-sm">
          <span className="font-semibold">Top level domain:</span>{" "}
          {country.tld[0]}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Currencies:</span>{" "}
          {Object.values(country.currencies)[0].name}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Languages:</span>{" "}
          {Object.values(country.languages)[0]}
        </p>
        <br />
        <div className="flex gap-2">
          {country.borders
            ? country.borders.map((country) => <p>{country}</p>)
            : ""}
        </div>
      </div>
    </div>
  );
}
