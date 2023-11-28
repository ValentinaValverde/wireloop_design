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
        className="w-2/3 mx-5 p-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-full"
        name="location"
      />
    </>
  );
}
