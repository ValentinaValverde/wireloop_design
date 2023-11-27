// this will be imported to MainView

export default function SideComponent() {
  return (
    <>
      <div className="rounded-md bg-jasper p-5 m-5 w-1/5 h-1/2 shadow-sm">
        <p className="text-xl leading-10">kind</p>
        <ul>
          <label>
            <input type="checkbox" id="VkvxHsg4bDQunS7b_Laravel" /> people
          </label>
          <br />
          <label>
            <input type="checkbox" id="VkvxHsg4bDQunS7b_Laravel" /> groups
          </label>
          <br />
          <label>
            <input type="checkbox" id="VkvxHsg4bDQunS7b_Laravel" /> events
          </label>
        </ul>
        <br />
        <p className="text-xl leading-10">interests</p>
        <ul>
          <label>
            <input type="checkbox" id="VkvxHsg4bDQunS7b_Laravel" /> item
          </label>
          <br />
          <label>
            <input type="checkbox" id="VkvxHsg4bDQunS7b_Laravel" /> item
          </label>
          <br />
          <label>
            <input type="checkbox" id="VkvxHsg4bDQunS7b_Laravel" /> item
          </label>
          <br />
          <label>
            <input type="checkbox" id="VkvxHsg4bDQunS7b_Laravel" /> item
          </label>
          <br />
          <label>
            <input type="checkbox" id="VkvxHsg4bDQunS7b_Laravel" /> item
          </label>
        </ul>
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
