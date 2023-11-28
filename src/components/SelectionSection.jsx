import { LocationBar } from "./Input";

export default function SelectionSection() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-5 text-3xl">
        <span>find your next event in </span>
        <LocationBar />
      </div>
      <div className="flex justify-around">
        <p className="hover:cursor-pointer hover:underline active:underline">
          All
        </p>
        <p className="hover:cursor-pointer hover:underline active:underline">
          People
        </p>
        <p className="hover:cursor-pointer hover:underline active:underline">
          Groups
        </p>
        <p className="hover:cursor-pointer hover:underline active:underline">
          Events
        </p>
      </div>
    </>
  );
}
