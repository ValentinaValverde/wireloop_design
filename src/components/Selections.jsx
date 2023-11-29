import Cards from "./Cards";
import { PeopleCards } from "./Cards";

export default function EventGroupSelection() {
  return (
    <>
      <div className="ml-44 flex flex-row text-xl">
        <p className="p-5 hover:cursor-pointer hover:underline hover:underline-offset-4 active:underline">
          All
        </p>
        <p className="p-5 hover:cursor-pointer hover:underline hover:underline-offset-4 active:underline">
          Groups
        </p>
        <p className="p-5 hover:cursor-pointer hover:underline hover:underline-offset-4 active:underline">
          Events
        </p>
      </div>

      <div className="mb-20 flex flex-wrap justify-center">
        {/* all of the cards are added here like this to fill space */}
        {/* in reality there should only be one card element here */}
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}

export function PeopleSelection() {
  return (
    <>
      {/* <div className="bg-white p-5 m-40 "> */}
      <p className="text-xl ml-44">People</p>
      <div className="m-20 mt-10 flex flex-wrap justify-center">
        {/* all of the cards are added here like this to fill space */}
        {/* in reality there should only be one card element here */}
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
        <PeopleCards />
      </div>
      {/* </div> */}
    </>
  );
}
