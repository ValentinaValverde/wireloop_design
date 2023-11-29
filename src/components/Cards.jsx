export default function Cards() {
  return (
    <>
      <div className="w-1/4 h-1/2 m-5 flex flex-col text-center bg-white rounded-md hover:scale-105 hover:cursor-pointer hover:shadow-lg duration-300">
        <img
          className="rounded-t-md w-auto"
          src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="p-5">
          <p>Group / Event Name</p>
          <p>info</p>
        </div>
      </div>
    </>
  );
}

export function PeopleCards() {
  return (
    <>
      <div className="bg-grayish w-1/5 h-auto m-5 flex flex-col text-center rounded-full rounded-b-md hover:scale-105 hover:cursor-pointer hover:shadow-lg duration-300">
        <img
          className="w-auto m-5 rounded-full rounded-b-md"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
        />
        <div className="p-5">
          <p className="text-xl">User Name</p>
          <p>bio</p>
        </div>
      </div>
    </>
  );
}
