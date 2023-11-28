export default function SearchBar() {
  return (
    <>
      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          class="mx-5 p-3 border shadow-sm block pr-10 sm:text-sm border-gray-300 rounded-full"
        />
      </div>
    </>
  );
}

export function LocationBar() {
  return (
    <>
      <input
        type="text"
        placeholder="Location"
        className="mx-5 p-4 m-5 border shadow-sm block pr-10 sm:text-sm border-gray-300 rounded-full"
        name="location"
      />
    </>
  );
}
