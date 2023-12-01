export default function SplashPage() {
  return (
    <>
      <div className="m-20 text-center">
        <p className="text-6xl">
          {" "}
          <i>stay in the loop with</i> <b>wireloop_</b>
        </p>
      </div>
      <div className="flex justify-around m-5">
        <div className="flex flex-col">
          <img
            src="https://i.pinimg.com/564x/70/85/c8/7085c876e04083d03decc311e2b1b75f.jpg"
            className="rounded-xl"
          />
        </div>
        <div className=" w-1/2 grid divide-y divide-black m-5">
          <button className="flex  justify-between items-end mb-5">
            <p className="text-5xl">Events</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              className="bi bi-arrow-up-right-circle w-12"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096"
              />
            </svg>{" "}
          </button>
          <button className="flex  justify-between items-end mb-5">
            <p className="text-5xl">Groups</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              className="bi bi-arrow-up-right-circle w-12"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096"
              />
            </svg>{" "}
          </button>
          <button className="flex  justify-between items-end mb-5">
            <p className="text-5xl">People</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              className="bi bi-arrow-up-right-circle w-12"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096"
              />
            </svg>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
