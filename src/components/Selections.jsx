// This file contains the sections that will be imported into MainContent.jsx
// Included: EventGroupSelection, PeopleSelection, and FindByCategory

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

      <div className="flex flex-wrap justify-center">
        {/* all of the cards are added here like this to fill space */}
        {/* in reality there should only be one card element here */}
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <SeeMoreButton />
    </>
  );
}

export function PeopleSelection() {
  return (
    <>
      <div className="bg-grayish p-5 m-40 rounded-lg">
        <p className="text-3xl m-10">People</p>
        <div className="flex flex-wrap justify-center">
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
        <SeeMoreButton />
      </div>
    </>
  );
}

export function FindByCategory() {
  return (
    <>
      <p>find by category</p>
      <div>
        <p>some stuff here hehe</p>
      </div>
    </>
  );
}

export function SeeMoreButton() {
  return (
    <>
      <div className="flex justify-center">
        <button className="border-solid border-black border-2 rounded-md p-2 m-5 w-6/12 bg-jasper">
          See More
        </button>
      </div>
    </>
  );
}
