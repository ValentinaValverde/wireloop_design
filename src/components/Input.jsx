export default function Input() {
  return (
    <>
      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          class=" w-1/3 mx-5 p-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-2/3 mx-5 p-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
          name="location"
        />
      </div>
    </>
  );
}
