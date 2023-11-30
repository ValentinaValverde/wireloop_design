import {
  SearchByLocation,
  EventGroupSection,
  PeopleSection,
  FindByCategory,
  InterestSection,
} from "./Sections";

export default function MainContent() {
  return (
    <>
      <SearchByLocation />
      <EventGroupSection />
      <PeopleSection />
      <FindByCategory />
      <InterestSection />
    </>
  );
}
