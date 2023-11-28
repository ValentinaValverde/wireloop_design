export default function MainView() {
  return (
    <>
      <div className="flex justify-between ">
        <p>something goes here... </p>
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

// this is the checkbox component that can be used.
export function Checkbox() {
  return (
    <>
      <label>
        <input type="checkbox" id="VkvxHsg4bDQunS7b_Laravel" /> item
      </label>
      <br />
    </>
  );
}
