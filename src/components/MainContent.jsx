import { PeopleCards } from "./Cards";
import Cards from "./Cards";

export default function MainContent() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
      </div>

      <button>Load More</button>
    </>
  );
}
