import { LocationBar } from "./Input";
import EventGroupSelection from "./Selections";
import { PeopleSelection } from "./Selections";

export default function MainContent() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-5 text-3xl">
        <span>find your next event in </span>
        <LocationBar />
      </div>
      <EventGroupSelection />
      <PeopleSelection />
    </>
  );
}
