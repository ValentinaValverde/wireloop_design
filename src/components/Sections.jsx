// This file contains the sections that will be imported into MainContent.jsx
// Includes: SearchByLocation, EventGroupSelection, PeopleSelection, FindByCategory and InterestSection

import { Cards, PeopleCards } from "./Cards";
import { LocationBar } from "./Input";
import { SeeMoreButton, TopicButton, Tag } from "./Buttons";

export function SearchByLocation() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-5 text-3xl">
        <span>find your next event in </span>
        <LocationBar />
      </div>
    </>
  );
}

export function EventGroupSection() {
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

export function PeopleSection() {
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
      <div className="bg-grayish px-40 py-12">
        <p className="text-2xl m-5 text-center">Find By Interest</p>
        <div className="flex flex-wrap justify-center">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </>
  );
}

export function InterestSection() {
  return (
    <>
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
