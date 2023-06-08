export default function Filter({ selectedRegion, handleSelect }) {
  return (
    <div className="mb-4">
      <select
        className="px-6 py-4 flex text-sm dark:text-lightmode-bg  font-semibold rounded-lg dark:bg-dark-blue"
        value={selectedRegion}
        onChange={(e) => handleSelect(e)}
      >
        <option className="text-xs" value="">
          All Regions
        </option>
        <option className="text-xs" value="Europe">
          Europe
        </option>
        <option className="text-xs" value="Africa">
          Africa
        </option>
        <option className="text-xs" value="Americas">
          Americas
        </option>
        <option className="text-xs" value="Oceania">
          Oceania
        </option>
        <option className="text-xs" value="Asia">
          Asia
        </option>
      </select>
    </div>
  );
}
