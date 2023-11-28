import { PeopleCards } from "./Cards";
import Cards from "./Cards";

export default function MainContent() {
  return (
    <>
      <div className="flex flex-wrap justify-center m-5">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <button>See More</button>
    </>
  );
}

export function PeopleSection() {
  return (
    <>
      <div className="flex flex-wrap justify-center m-5">
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
      </div>
      <button>See More</button>
    </>
  );
}
