export default function SearchBar({ handleSubmit, nameSearch, handleChange }) {
  return (
    <form className="px-4 mt-4 mb-6  " onSubmit={handleSubmit}>
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-8">
          <svg
            className="w-6 h-6 fill-current text-dark-blue dark:text-lightmode-bg"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M338.29 338.29 448 448"
            />
          </svg>
        </span>
        <input
          className="w-full bg-white dark:bg-dark-blue dark:text-lightmode-bg rounded-lg py-4 pl-20 pr-4 focus:outline-none placeholder:text-dark-blue dark:placeholder:text-lightmode-bg"
          placeholder="Search for a country..."
          type="text"
          value={nameSearch}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
