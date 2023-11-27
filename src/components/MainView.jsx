import Card from "./Cards";
import SideComponent from "./SideComponents";

export default function MainView() {
  return (
    <>
      <div className="flex justify-between ">
        <SideComponent />
        <Card />
      </div>
    </>
  );
}
