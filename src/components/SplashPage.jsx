export default function SplashPage() {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap h-96 bg-black h-auto text-white">
        <div className="p-10 w-1/2 max-w-full z-10">
          <p className="leading-10">stay in the loop with</p>
          <p className="text-7xl">wireloop_</p>
        </div>
        <div className="w-1/4 flex flex-end justify-center overflow-hidden">
          <img src="https://i.pinimg.com/564x/7c/f3/34/7cf334add4987e8496546351937a5975.jpg" />
        </div>
      </div>
    </>
  );
}
