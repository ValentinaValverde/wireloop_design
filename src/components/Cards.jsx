export default function Cards() {
  return (
    <>
      <div className="w-1/4 h-1/2 m-5 flex flex-col text-center bg-white rounded-md hover:scale-105 hover:cursor-pointer duration-300">
        <img
          className="rounded-t-md w-auto"
          src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="p-5">
          <p>person</p>
          <p>info / bio</p>
          <p>interest tags</p>
        </div>
      </div>
    </>
  );
}

export function PeopleCards() {
  return (
    <>
      <div className="w-1/5 h-auto m-5 flex flex-col text-center bg-white rounded-md hover:scale-105 hover:cursor-pointer duration-300">
        <img
          className="rounded-t-md w-auto"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
        />
        <div className="p-5">
          <p>person</p>
          <p>info / bio</p>
        </div>
      </div>
    </>
  );
}
