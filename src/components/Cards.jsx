// this will be imported to MainView

export default function Card() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-auto h-auto m-5 p-5 flex flex-col bg-white rounded-md rounded-md text-center">
          <img
            className="rounded-md h-80"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <p>person</p>
          <p>info / bio</p>
          <p>interest tags</p>
        </div>
        <div className="w-auto h-auto m-5 p-5 flex flex-col bg-white rounded-md text-center">
          <img
            className="rounded-md h-80"
            src="https://images.pexels.com/photos/1164569/pexels-photo-1164569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <p>person</p>
          <p>info / bio</p>
          <p>interest tags</p>
        </div>
        <div className="w-auto h-auto m-5 p-5 flex flex-col bg-white rounded-md text-center">
          <img
            className="rounded-md h-80"
            src="https://images.pexels.com/photos/59884/pexels-photo-59884.jpeg"
          />
          <p>person</p>
          <p>info / bio</p>
          <p>interest tags</p>
        </div>
        <div className="w-auto h-auto m-5 p-5 flex flex-col bg-white rounded-md text-center">
          <img
            className="rounded-md h-80"
            src="https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <p>person</p>
          <p>info / bio</p>
          <p>interest tags</p>
        </div>
        <div className="w-auto h-auto m-5 p-5 flex flex-col bg-white rounded-md text-center">
          <img
            className="rounded-md h-80"
            src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg"
          />
          <p>person</p>
          <p>info / bio</p>
          <p>interest tags</p>
        </div>
      </div>
    </>
  );
}

export function SingleCard() {
  return (
    <>
      <div className="w-auto h-auto m-5 p-5 flex flex-col bg-white">
        <img
          className="rounded-md h-80"
          src="https://images.pexels.com/photos/59884/pexels-photo-59884.jpeg"
        />
        <p>person</p>
        <p>info / bio</p>
        <p>interest tags</p>
      </div>
    </>
  );
}
