import {
  SearchByLocation,
  EventGroupSection,
  PeopleSection,
  FindByCategory,
} from "./Sections";

export default function MainContent() {
  return (
    <>
      <SearchByLocation />
      <EventGroupSection />
      <PeopleSection />
      <FindByCategory />
    </>
  );
}
