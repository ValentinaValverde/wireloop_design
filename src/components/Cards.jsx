export default function Cards() {
  return (
    <>
      <p>event and group cards</p>
    </>
  );
}

export function PeopleCards() {
  return (
    <>
      <div className="w-1/4 h-auto m-5 p-5 flex flex-col bg-white text-center">
        <img
          className="rounded-md h-80 w-auto"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <p>person</p>
        <p>info / bio</p>
        <p>interest tags</p>
      </div>
    </>
  );
}
