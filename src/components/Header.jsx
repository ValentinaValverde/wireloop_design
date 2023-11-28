import SearchBar from "./Input";

export default function Header() {
  return (
    <>
      <div className="p-5 w-full max-w-full flex justify-between items-center ">
        <div className="flex items-center">
          <p>wireloop_</p>
          <SearchBar />
        </div>
        <div className="flex items-center ">
          <a href="_" className="m-5">
            log in
          </a>
          <button className="bg-flame hover:bg-jasper py-2 px-4 rounded-full">
            sign up
          </button>
        </div>
      </div>
    </>
  );
}
