import { LocationBar } from "./Input";

export default function SelectionSection() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-5 text-3xl">
        <span>find your next event in </span>
        <LocationBar />
      </div>
      <div className="flex justify-around">
        <p className="hover:cursor-pointer underline underline-offset-4 hover:underline-offset-2 active:underline">
          All
        </p>
        <p className="hover:cursor-pointer underline underline-offset-4 hover:underline-offset-2 active:underline">
          People
        </p>
        <p className="hover:cursor-pointer underline underline-offset-4 hover:underline-offset-2 active:underline">
          Groups
        </p>
        <p className="hover:cursor-pointer underline underline-offset-4 hover:underline-offset-2 active:underline">
          Events
        </p>
      </div>
    </>
  );
}

// divide-y-2 divide-black
