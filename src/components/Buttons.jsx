export function SeeMoreButton() {
  return (
    <>
      <div className="flex justify-center">
        <button className="border-solid border-black border-2 rounded-md p-2 m-5 w-1/4 bg-jasper">
          See More
        </button>
      </div>
    </>
  );
}

export function TopicButton() {
  return (
    <>
      <div className="flex flex-col">
        <button className="bg-white p-5 m-5 rounded-full ">
          {/* The thought process is that the icon related to the */}
          {/* topic they like will appear in the button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            className="bi bi-braces w-20"
            viewBox="0 0 16 16"
          >
            <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
          </svg>
        </button>
        <p>interest</p>
      </div>
    </>
  );
}
